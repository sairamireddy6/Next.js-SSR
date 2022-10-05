import React from 'react'
import { useRouter } from 'next/router'
import { getBooks, getBooksfromId } from '../../utils/api-utils';

const Book = ({book}) => {
  // const { pid } = router.query
  console.log(book);


  return (
    <div className="container my-4">
        <div class="card my-3">
        <h5 class="card-header">{book.name}</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            {book.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Book


export async function getStaticProps({params}) {
  const book = await getBooksfromId(params.id)
  return {
    props: {
      book
    },
  };
}

export async function getStaticPaths() {
  const books = await getBooks();
  const paths = books.map(book =>({params : {id: book.id}}))
  return {
    paths: paths,
    fallback: false
  }
}