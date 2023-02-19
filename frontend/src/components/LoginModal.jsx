import React, { useState } from "react";

export default function LoginModal({ visible, onCLose }) {
  const [input, setInput] = useState({});
  if (!visible) return null;
  return (
    <div
      class="relative z-10 bg-white "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-md transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Login account
                  </h3>
                  <div class="mt-2">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      <div class="mb-4">
                        <label
                          class="block text-gray-700 text-sm font-bold mb-2"
                          for="username"
                        >
                          Email
                        </label>
                        <input
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                      <div class="mb-6">
                        <label
                          class="block text-gray-700 text-sm font-bold mb-2"
                          for="password"
                        >
                          Password
                        </label>
                        <input
                          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="******************"
                        />
                        <p class="text-red-500 text-xs ">
                          Please choose a password.
                        </p>
                      </div>
                      <div class="flex items-center justify-between">
                        <button
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Register
                        </button>
                        <a
                          onClick={onCLose}
                          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                          href="#"
                        >
                          Cancel
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
