


export interface User {
    id: string;
    email: string;
    name: string;
    userName: string;
}



export interface CreateUserDTO {
    email: string;
    name: string;
    userName: string;
    password: string;
}