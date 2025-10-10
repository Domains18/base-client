import { useQuery, useMutation } from "@tanstack/react-query";
import { apiService } from "@/services/api";
import { CreateUserDTO, User } from "@/types/user";



export const useUsers = () => {
    return useQuery<User[]>({
        queryKey: ['users'],
        queryFn: ()=> apiService.get('/users').then(res => res.data),
    })
}



export const useCreateUser = () => {
    return useMutation({
        mutationFn: (newuser: CreateUserDTO)=> apiService.post('/users', newuser).then(res => res.data),
    })
}