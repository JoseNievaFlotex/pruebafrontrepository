import { useEffect, useState } from "react"
import { useQuery } from "react-query";
import {AuthService, LocalStorageService} from "../../../services"

const useLogin = () => {
    const [credentials, setCredentials]= useState(null);

    const {data, isLoading, refetch} = useQuery(
        ["login", credentials],
        () => AuthService.loginUser(credentials)
    );

    useEffect(() => {
        if(credentials) refetch();
    }, [credentials]);
    if(data){
        LocalStorageService.guardarAutorizacion(data);
    }
    console.log(data, 'sera cierto?');
    return {setCredentials};
};
export default useLogin;