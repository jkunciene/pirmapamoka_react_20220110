import React from 'react'
import Book from '../book/Book';
import './BooksList.css'

const BooksList = () => {
    return (
        <div className="bookslist">
            <Book title="BEVARDĖS MERGAITĖS."
             author="Serena Burdick" 
             price={10}
             image="https://thumb.knygos-static.lt/O5OgpkDvSLt8vN9Vgngb552H-o4=/fit-in/0x230/images/books/1022802/1462889931_itin-jautrus-asmuo-kaip-gyvuoti-kai-pasaulis-tave-stelbia-2-1.jpg"
             />
           
           
        </div>
    )
}

export default BooksList

