import React from "react";
import { Link } from "react-router-dom";

export default function CardList({ cover, title, Author }) {
  const data = [
    {
      id: 1,
      cover: "cover1.png",
      title: "Atomic Habbit",
      Author: "arif ",
    },
    {
      id: 2,
      cover: "cover2.jpg",
      title: "Atomic Habbit",
      Author: "arif ",
    },
    {
      id: 3,
      cover: "cover2.jpg",
      title: "Atomic Habbit",
      Author: "arif ",
    },
    {
      id: 4,
      cover: "cover2.jpg",
      title: "Atomic Habbit",
      Author: "arif ",
    },
  ];

  return (
    <>
      <section class="bg-white">
        <div class="container px-6 py-10 mx-auto ">
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            {data.map((book) => {
              return (
                <>
                  <Link
                    key={book.id}
                    to={`/detailbook/${book.id}`}
                    target="_self"
                  >
                    <div class="w-full  bg-gray-100 overflow-hidden h-auto p-5 shadow-lg shadow-grey">
                      <div class="max-w-10 h-[350px] bg-red-600 rounded-lg dark:bg-gray-600 overflow-hidden">
                        <img
                          src={book.cover}
                          alt=""
                          // class="object-contain relative border border-gray-100 shadow-sm max-w-max w-100 h-full"
                        />
                      </div>
                      <a href="" class="">
                        <h1 class="w-56 h-2 mb-5 mt-5  font-extrabold text-2xl">
                          {book.title}
                        </h1>
                      </a>

                      <p class="w-24 h-2 mt-4 mb-5 text-lg">{book.Author}</p>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
