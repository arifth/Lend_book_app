import React from "react";
import Search from "./Search";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { useState } from "react";

export default function NavBar() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleRegister, setToggleRegister] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const handleOpenLogin = () => {
    setToggleLogin(true);
  };
  const handleCloseLogin = () => {
    setToggleLogin(false);
  };

  const handleOpenRegister = () => {
    setToggleRegister(true);
  };
  const handleCloseRegister = () => {
    setToggleRegister(false);
  };

  return (
    <>
      <LoginModal visible={toggleLogin} onCLose={handleCloseLogin} />
      <RegisterModal visible={toggleRegister} onCLose={handleCloseRegister} />
      <div class="relative bg-white">
        <div class="mx-auto max-w-9xl px-6">
          <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            {/* <div class="flex justify-start lg:w-0 lg:flex-1">
            
          </div> */}
            <a href="/">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>

            <h1 class="font-bold text-lg"> Book Lending App</h1>

            {/* search components */}
            <Search />
            <div class="-my-2 -mr-2 md:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span class="sr-only">Open menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              {isLoggedIn ? (
                <>
                  {/*  */}
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="">
                      <div class="relative">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://th.bing.com/th/id/OIP.Iw_QLshTpykxbM56j168_wHaFV?pid=ImgDet&rs=1"
                          alt=""
                        />
                        <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Log out</a>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <a
                    onClick={handleOpenLogin}
                    class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 hover:cursor-pointer"
                  >
                    Sign in
                  </a>
                  <a
                    class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md hover:cursor-pointer border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    onClick={handleOpenRegister}
                  >
                    Sign up
                  </a>
                </>
              )}
            </div>
          </div>
        </div>

        <div class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
