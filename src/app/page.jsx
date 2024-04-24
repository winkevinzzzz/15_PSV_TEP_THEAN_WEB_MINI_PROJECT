// export default function Home() {
//   return <main></main>;
// }
"use client";

import { signIn } from "next-auth/react";
// import {log}
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  // define handle login
 async function handleLogin(userInfo) {
    console.log("userInfo", userInfo)
  // define structure object
  const newUserInfo = {
    email: userInfo.get("email"),
    password: userInfo.get("password"),
  };
  // calling next auth service and passing " newUseInfo "
  const res = await signIn("credentials", {
    redirect: false,
    ...newUserInfo,
  });  
  console.log("res",res)
  if(res.status==200){
    router.push("/todo-list");
   } 
}
  return (
<main>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="grid grid-cols-12 mt-[200px]">
          <div className="col-span-1"></div>
          <div className="col-span-1 ">
            <div >
              {" "}
              <img className=" " src="/assets/icons/logo.svg" alt="logo" />
              <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              ></a>
            </div>

          </div>
          <div className="col-span-5 w-[70%]  items-center px-6 py-8 mx-auto md:h-screen lg:py-0">


            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
                </h1>
                <form className="space-y-4 md:space-y-6" action={handleLogin}>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="/register"
                      className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                    >
                      Register
                    </a>
                  </p>
                </form>
                <div className="mt-6">

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-gray-100 text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>

         <div className="mt-6 grid grid-cols-3 gap-3">
                    <div>
                      <a href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                          alt="" />
                      </a>
                    </div>
                    <div>
                      <a href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                          alt="" />
                      </a>
                    </div>
                    <div>
                      <a href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                          alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className=" w-[50%] col-span-5">
            <img src="/assets/icons/login.svg" alt="" />
          </div>

        </div>
      </section>
    </main>         
  );
};

export default LoginPage;

