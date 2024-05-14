import { useSession } from "next-auth/react";

let isLogin : boolean

export const getAuth = () => {
    const { data: session, status }: { data: any; status: string } = useSession();
    if (status === "unauthenticated" && session?.user.role !== "admin") {
      isLogin = false;
    }
    isLogin = true
}


const stateAuth = () => {
  return isLogin;
};

export default stateAuth;