import { useEffect, useState } from "react";
import type BookModel from "../../../models/BookModel";
import ImageModel from "../../../models/ImageModel";
import { getAllImages } from "../../../api/ImageAPI";

interface BookPropsInterface {
  book: BookModel;
  onAddToCart?: (book: BookModel) => void;
  onToggleWishlist?: (book: BookModel) => void;
  onQuickView?: (book: BookModel) => void;
}

const BookProps: React.FC<BookPropsInterface> = (props) => {
  const maSach: number = props.book.maSach;

  const [listImage, setListImage] = useState<ImageModel[]>([]);
  const [loadData, setLoadData] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllImages(maSach)
      .then((imageData) => {
        setListImage(imageData);
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
    <div className="col-md-3 mt-2">
      <div className="card">
        <img
          src={listImage.length > 0 ? listImage[0].duLieuAnh : ""}
          className="card-img-top"
          alt={props.book.tenSach}
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.book.tenSach}</h5>
          <p className="card-text">{props.book.moTa}</p>
          <div className="price">
            <span className="original-price">
              <del>{props.book.giaNiemYet?.toFixed(2)}</del>
            </span>
            <span className="discounted-price">
              <strong>{props.book.giaBan?.toFixed(2)}</strong>
            </span>
          </div>
          <div className="row mt-2" role="group">
            <div className="col-6">
              <a href="#" className="btn btn-secondary btn-block">
                <i className="fas fa-heart"></i>
              </a>
            </div>
            <div className="col-6">
              <button className="btn btn-danger btn-block">
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookProps;
