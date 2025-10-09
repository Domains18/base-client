import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Types for better type safety
export interface ApiError {
    message: string;
    statusCode?: number;
    errors?: Record<string, string[]>;
}

export interface ApiResponse<T = any> {
    data: T;
    message?: string;
    success: boolean;
}

class ApiService {
    private axiosInstance: AxiosInstance;
    private token: string | null = null;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.setupInterceptors();
    }

    /**
     * Setup request and response interceptors
     */
    private setupInterceptors(): void {
        // Request interceptor
        this.axiosInstance.interceptors.request.use(
            config => {
                // Add auth token if available
                const token = this.getToken();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                // Add any custom headers here
                config.headers['X-App-Version'] = '1.0.0';

                return config;
            },
            error => {
                return Promise.reject(error);
            },
        );

        // Response interceptor
        this.axiosInstance.interceptors.response.use(
            response => {
                return response;
            },
            async (error: AxiosError) => {
                const originalRequest = error.config as AxiosRequestConfig & {
                    _retry?: boolean;
                };

                // Handle 401 errors (unauthorized)
                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;

                    try {
                        // Attempt to refresh token
                        const newToken = await this.refreshToken();
                        if (newToken && originalRequest.headers) {
                            originalRequest.headers.Authorization = `Bearer ${newToken}`;
                            return this.axiosInstance(originalRequest);
                        }
                    } catch (refreshError) {
                        // Redirect to login or handle refresh failure
                        this.handleAuthFailure();
                        return Promise.reject(refreshError);
                    }
                }

                return Promise.reject(this.normalizeError(error));
            },
        );
    }

    /**
     * Normalize error responses
     */
    private normalizeError(error: AxiosError): ApiError {
        if (error.response) {
            const data = error.response.data as any;
            return {
                message: data?.message || 'An error occurred',
                statusCode: error.response.status,
                errors: data?.errors,
            };
        }

        if (error.request) {
            return {
                message: 'No response from server. Please check your connection.',
            };
        }

        return {
            message: error.message || 'An unexpected error occurred',
        };
    }

    /**
     * Set authentication token
     */
    public setToken(token: string): void {
        this.token = token;
        localStorage.setItem('auth_token', token);
    }

    /**
     * Get authentication token
     */
    public getToken(): string | null {
        if (this.token) return this.token;

        const storedToken = localStorage.getItem('auth_token');
        if (storedToken) {
            this.token = storedToken;
        }
        return this.token;
    }

    /**
     * Clear authentication token
     */
    public clearToken(): void {
        this.token = null;
        localStorage.removeItem('auth_token');
    }

    /**
     * Refresh authentication token
     */
    private async refreshToken(): Promise<string | null> {
        try {
            const refreshToken = localStorage.getItem('refresh_token');
            if (!refreshToken) return null;

            const response = await this.axiosInstance.post('/auth/refresh', {
                refreshToken,
            });

            const newToken = response.data.data.accessToken;
            this.setToken(newToken);
            return newToken;
        } catch (error) {
            return null;
        }
    }

    /**
     * Handle authentication failure
     */
    private handleAuthFailure(): void {
        this.clearToken();
        localStorage.removeItem('refresh_token');
        // Redirect to login page
        window.location.href = '/login';
    }

    /**
     * GET request
     */
    public async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<ApiResponse<T>> = await this.axiosInstance.get(url, config);
        return response.data.data;
    }

    /**
     * POST request
     */
    public async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<ApiResponse<T>> = await this.axiosInstance.post(
            url,
            data,
            config,
        );
        return response.data.data;
    }

    /**
     * PUT request
     */
    public async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<ApiResponse<T>> = await this.axiosInstance.put(
            url,
            data,
            config,
        );
        return response.data.data;
    }

    /**
     * PATCH request
     */
    public async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<ApiResponse<T>> = await this.axiosInstance.patch(
            url,
            data,
            config,
        );
        return response.data.data;
    }

    /**
     * DELETE request
     */
    public async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<ApiResponse<T>> = await this.axiosInstance.delete(
            url,
            config,
        );
        return response.data.data;
    }

    /**
     * Upload file(s)
     */
    public async upload<T = any>(
        url: string,
        files: File | File[],
        onUploadProgress?: (progressEvent: any) => void,
    ): Promise<T> {
        const formData = new FormData();

        if (Array.isArray(files)) {
            files.forEach(file => {
                formData.append('files', file);
            });
        } else {
            formData.append('file', files);
        }

        const response: AxiosResponse<ApiResponse<T>> = await this.axiosInstance.post(
            url,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress,
            },
        );
        return response.data.data;
    }

    /**
     * Download file
     */
    public async download(
        url: string,
        filename: string,
        config?: AxiosRequestConfig,
    ): Promise<void> {
        const response = await this.axiosInstance.get(url, {
            ...config,
            responseType: 'blob',
        });

        const blob = new Blob([response.data]);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        window.URL.revokeObjectURL(link.href);
    }
}

// Export singleton instance
export const apiService = new ApiService();

// Export class for testing or creating new instances
export default ApiService;
