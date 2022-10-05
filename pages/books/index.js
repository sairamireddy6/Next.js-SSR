import Link from "next/link";
import { useEffect } from "react";
import { getBooks } from "../../utils/api-utils";

const Books = ({ books }) => {
  useEffect(() => {
    console.log(books);
  });
  return (
    <>
    <div className="container my-4">
    {books.map((ele)=>{
        return(
        <div class="card my-3" key={Math.random()}>
        <h5 class="card-header">{ele.name}</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            {ele.description}
          </p>
          <Link href={`/books/${ele.id}`}>
          <a class="btn btn-primary">
            Go to Book
          </a>
          </Link>
        </div>
      </div>
        )
    }) }
    </div>
    </>
  );
};

export default Books;

export async function getStaticProps() {
  const books = await getBooks();
  return {
    props: {
      books: books,
    },
    revalidate:10
  };
}
