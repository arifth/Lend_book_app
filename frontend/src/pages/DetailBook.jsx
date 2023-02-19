import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

export default function DetailBook({
  idBook,
  title,
  author,
  status,
  cover,
  description,
}) {
  const { id } = useParams();
  const [isFetched, setFetched] = useState(false);
  return (
    <>
      <NavBar />
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:w-[80vw] md:h-[70vh] my-5 rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-[40%] rounded-t-lg md:rounded-none md:rounded-l-lg bg-slate-500"
            src="https://th.bing.com/th/id/OIP.ztAUYljdHqvc6XktUBA-agHaLG?pid=ImgDet&rs=1"
            alt=""
          />
          <div class="relative p-6 flex flex-col justify-start w-full">
            <h2 class="text-gray-900 text-6xl font-medium mb-2">
              Rich Dad Poor Dad
            </h2>
            <p class="text-gray-700 text-base mb-4">Robert Kiyosaki </p>
            <p class="text-gray-700 text-base mb-4">
              Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and
              Sharon Lechter. It advocates the importance of financial literacy
              (financial education), financial independence and building wealth
              through investing in assets, real estate investing, starting and
              owning businesses, as well as increasing one's financial
              intelligence (financial IQ). Rich Dad Poor Dad is written in the
              style of a set of parables, ostensibly based on Kiyosaki's
              life.[1] The titular "rich dad" is his friend's father who
              accumulated wealth due to entrepreneurship and savvy investing,
              while the "poor dad" is claimed to be Kiyosaki's own father who he
              says worked hard all his life but never obtained financial
              security. No one has ever proven that "Rich Dad", the man who
              supposedly gave Kiyosaki all his advice for wealthy living, ever
              existed. Nor has anyone ever docum
            </p>
            <button class="absolute bottom-4	 w-[80%] py-2 px-4 bg-transparent text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 w-100">
              Rent now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
