/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { createContext } from "react";
import { UserType } from "../types/User";

interface UserContextType {
    user: UserType | undefined;
    setUser: Function;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);