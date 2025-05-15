import { useMutation, useQueryClient } from "@tanstack/react-query";
import {InferResponseType} from 'hono';
import {client} from '@/lib/rpc';
import { useRouter } from "next/navigation";

type ResponseType=InferResponseType<typeof client.api.auth.logout['$post']>

export const useLogout =()=>{
    const queryClient = useQueryClient();
    const router = useRouter();
    const mutation = useMutation<
    ResponseType,
    Error
    >({
        mutationFn:async ()=>{
            const response = await client.api.auth.logout["$post"]();
            return response.json();
        },
        onSuccess: async ()=>{
            router.refresh();
            queryClient.invalidateQueries({queryKey:['current']});
            // window.location.reload();
            // queryClient.invalidateQueries({queryKey :['current']}); -->no need for this line if above line is used
        }
    })

    return mutation;
}