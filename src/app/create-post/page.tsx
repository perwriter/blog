import Form from "@/components/form";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Page() {
  return (
    <main className="text-center pt-16">
       
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
      
      <Form />
      
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center mt-8">
        <LoginLink className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign in
        </LoginLink>
        <RegisterLink className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign up
        </RegisterLink>
        <LogoutLink className="bg-red-500 hover:bg-red-700
        text-white font-bold py-2 px-4 
        rounded">
          Log out
        </LogoutLink>
       
      </div>
    </main>
  );
}
