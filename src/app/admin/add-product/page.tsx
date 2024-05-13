"use client"

import FormAddProduct from "@/components/FormAddProduct/FormAddProduct";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AddProductPage = () => {
  const router = useRouter();

  const { data: session, status } : {data : any, status: string} = useSession();

  console.log(status);

  useEffect(() => {
    if (status === "unauthenticated" && session?.user.role !== 'admin') {
      router.push("/");
    }
  }, [router, status]);

  return (
    <div className="flex h-auto">
      <FormAddProduct />
    </div>
  );
};

export default AddProductPage;
