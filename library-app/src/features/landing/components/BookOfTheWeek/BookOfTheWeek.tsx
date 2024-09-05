import React from 'react';
import './BookOfTheWeek.css';
import { BookInformation } from '../../../book';

export const BookOfTheWeek:React.FC = () => {
    return(
        <div className="book-of-the-week">
            <h1>Book of the Week:</h1>
            <BookInformation
                book={
                    {
                        _id: "1234",
                        barcode: "1501161938",
                        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664458703i/32620332.jpg",
                        title: "The Seven Husbands of Evelyn Hugo",
                        authors: ["Taylor Jenkins Reid"],
                        description: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now?",
                        subjects: ["romance", "novel"],
                        publicationDate: new Date("2017-01-13"),
                        publisher: "Center Point Large Print",
                        pages: 389,
                        genre: "Fiction",
                        records: []
                    }
                }
            />
        </div>
    )
}