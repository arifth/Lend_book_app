import React from "react";
import { FcApprove } from "react-icons/fc";

export default function TableLending() {
  return (
    <>
      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[60vw]">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Book name
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Start Time
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                End Time
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Status
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            <tr class="hover:bg-gray-50">
              <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div class="text-sm">
                  <div class="font-medium text-gray-700">Rich Dad Poor dad</div>
                </div>
              </th>
              <td class="px-6 py-4">22 jan 2022</td>
              <td class="px-6 py-4">22 feb 2022 </td>
              <td class="px-6 py-4"> waiting for approval</td>
              <td class="px-6 py-4">
                <div class="flex justify-end gap-4">
                  <button
                    type="button"
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Decline
                  </button>

                  <button
                    type="button"
                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Approve
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
