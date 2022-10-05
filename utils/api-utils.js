export async function getBooks(){
    const res = await fetch("https://next-js-a6feb-default-rtdb.firebaseio.com/books.json")
    const data = await res.json()
    return data
}

export async function getBooksfromId(id) {
    const books = await getBooks()
    let filterData = books.find((ele)=>ele.id == id)
    return filterData
}