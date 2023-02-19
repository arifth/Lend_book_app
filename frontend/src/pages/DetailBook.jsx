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
            src={cover}
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h2 class="text-gray-900 text-6xl font-medium mb-2">
              {title} title
            </h2>
            <p class="text-gray-700 text-base mb-4">{author} author </p>
            <p class="text-gray-700 text-base mb-4">
              {description} description
            </p>
            <button class="py-2 px-4 bg-transparent text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 w-100">
              Rent now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
