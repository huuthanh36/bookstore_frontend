import { useEffect, useState } from "react";
import BookProps from "./components/BookProps";
import type BookModel from "../../models/BookModel";
import { getAllBooks } from "../../api/BookAPI";

const ListProduct: React.FC = () => {
  const [listProducts, setListProducts] = useState<BookModel[]>([]);
  const [loadData, setLoadData] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllBooks()
      .then((bookData) => {
        setListProducts(bookData);
        setLoadData(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoadData(false);
      });
  }, []);

  if (loadData) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="container ">
      <div className="row mt-4">
        {listProducts.map((book) => (
          <BookProps key={book.maSach} book={book} />
        ))}
      </div>
    </div>
  );
};
export default ListProduct;
