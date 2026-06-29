import type { Book } from "../../models/Book";
import BookProps from "./components/BookProps";
import book1 from "./../../assets/books/1.jpg";
import book2 from "./../../assets/books/2.jpg";
import book3 from "./../../assets/books/3.jpg";

const List: React.FC = () => {
  const books: Book[] = [
    {
      id: 1,
      title: "Book 1",
      description: "Description of Book 1",
      originalPrice: 20,
      price: 15,
      imageUrl: book1,
    },
    {
      id: 2,
      title: "Book 2",
      description: "Description of Book 2",
      originalPrice: 25,
      price: 20,
      imageUrl: book2,
    },
    {
      id: 3,
      title: "Book 3",
      description: "Description of Book 3",
      originalPrice: 30,
      price: 25,
      imageUrl: book3,
    },
  ];
  return (
    <div className="container ">
      <div className="row mt-4">
        {books.map((book) => (
          <BookProps book={book} />
        ))}
      </div>
    </div>
  );
};
export default List;
