// </span> | $${book.salePrice}
function getBooks() {
  return [
    {
      id: 1,
      title: "A million to One",
      url: "assets/garry's books/a-million.jpeg",
      originalPrice: 63.99,
      salePrice: 30.99,
      rating: 4.5,
    },
    {
      id: 2,
      title: "The Black Universe",
      url: "assets/garry's books/the-black.webp",
      originalPrice: 44.99,
      salePrice: 19.99,
      rating: 5,
    },
    {
      id: 3,
      title: "The Pen and The Sword",
      url: "assets/garry's books/the-pen.jpeg",
      originalPrice: 29,
      salePrice: 12,
      rating: 5,
    },
    {
      id: 4,
      title: "Flame and Shadow",
      url: "assets/garry's books/the-flame.webp",
      originalPrice: 33.99,
      salePrice: 19.99,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Brightest Star",
      url: "assets/garry's books/emma.jpeg",
      originalPrice: 28.99,
      salePrice: 19.99,
      rating: 4,
    },
    {
      id: 6,
      title: "No Place Like Here",
      url: "assets/garry's books/noplace.jpeg",
      originalPrice: 43.99,
      salePrice: 30.99,
      rating: 5,
    },
    {
      id: 7,
      title: "Animal Science",
      url: "assets/garry's books/animal.webp",
      originalPrice: 28.99,
      salePrice: 14.99,
      rating: 4,
    },
    {
      id: 8,
      title: "The Three Month Rule",
      url: "assets/garry's books/thethree.webp",
      originalPrice: 13.99,
      salePrice: 9.99,
      rating: 4.5,
    },
    {
      id: 9,
      title: "Becoming Me",
      url: "assets/garry's books/becoming.jpeg",
      originalPrice: 53.99,
      salePrice: 27.99,
      rating: 4,
    },
    {
      id: 10,
      title: "The Covenant of Water",
      url: "assets/garry's books/covenant.jpeg",
      originalPrice: 29.99,
      salePrice: 19.99,
      rating: 4,
    },
    {
      id: 11,
      title: "The Last Man Out",
      url: "assets/garry's books/last.jpeg",
      originalPrice: 59.99,
      salePrice: 29.99,
      rating: 4.5,
    },
    {
      id: 12,
      title: "The Silence Patient",
      url: "assets/garry's books/silence.jpeg",
      originalPrice: 17.99,
      salePrice: 11.99,
      rating: 4.5,
    },
    {
      id: 13,
      title: "Lunar Storm",
      url: "assets/garry's books/lunar.jpeg",
      originalPrice: 23.99,
      salePrice: null,
      rating: 4.5,
    },
    {
      id: 14,
      title: "Our Last Summer",
      url: "assets/garry's books/last-summer.webp",
      originalPrice: 44.99,
      salePrice: 19.99,
      rating: 4.5,
    },
    {
      id: 15,
      title: "The Berlin Girl",
      url: "assets/garry's books/berlin.jpeg",
      originalPrice: 53.99,
      salePrice: 35.99,
      rating: 4.5,
    },
    {
      id: 16,
      title: "Harry Potter",
      url: "assets/garry's books/harry.jpeg",
      originalPrice: 63.99,
      salePrice: 30.99,
      rating: 4.5,
    },
  ];
}

const renderBooks = () => {
  const booksList = getBooks();
  const booksWrapper = document.querySelector(".books");
  //   console.log(booksList);
  //   booksList.map((book) => {
  //     return (booksWrapper.innerHTML += `<div class="book">
  //                   <figure class="book__img--wrapper">
  //                     <img
  //                       class="book__img"
  //                       src="${book.url}"
  //                       alt=""
  //                     />
  //                   </figure>
  //                   <div class="book__title">${book.title}</div>
  //                   <div class="book__rating">
  //                     <i class="fa-solid fa-star"></i>
  //                     <i class="fa-solid fa-star"></i>
  //                     <i class="fa-solid fa-star"></i>
  //                     <i class="fa-solid fa-star"></i>
  //                     <i class="fa-regular fa-star-half-stroke"></i>
  //                   </div>
  //                   <div class="book__price">
  //                     <span class="book__price--normal">$${book.originalPrice}</span> | $${book.salePrice}
  //                   </div>
  //                 </div>`);
  //   });
  booksHTML = booksList
    .map((book) => {
      return `<div class="book">
                       <figure class="book__img--wrapper">
                         <img
                           class="book__img"
                           src="${book.url}"
                           alt=""
                         />
                       </figure>
                       <div class="book__title">${book.title}</div>
                       <div class="book__rating">
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-regular fa-star-half-stroke"></i>
                       </div>
                       <div class="book__price">
                         <span >$${book.originalPrice.toFixed(2)}
                       </div>
                     </div>`;
    })
    .join("");
  booksWrapper.innerHTML = booksHTML;
  //   console.log(booksHTML);
};

setTimeout(() => {
  renderBooks();
}, 1000);

const filterBooks = (e) => {
  console.log(e.target.value);
};
