import { useEffect, useState } from "react";
import type BookModel from "../../../models/BookModel";
import ImageModel from "../../../models/ImageModel";
import { getImageOfTheBook } from "../../../api/ImageAPI";

interface CarouselItemInterface {
  book: BookModel;
  onAddToCart?: (book: BookModel) => void;
  onToggleWishlist?: (book: BookModel) => void;
  onQuickView?: (book: BookModel) => void;
}

const CarouselItem: React.FC<CarouselItemInterface> = (props) => {
  const maSach: number = props.book.maSach;

  const [listImage, setListImage] = useState<ImageModel[]>([]);
  const [loadData, setLoadData] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getImageOfTheBook(maSach)
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

  let duLieuAnh: string = "";
  if (listImage[0] && listImage[0].duLieuAnh) {
    duLieuAnh = listImage[0].duLieuAnh;
  }

  return (
    <div className="row align-items-center">
      <div className="col-5 text-center ">
        <img src={duLieuAnh} style={{ width: "150px" }} />
      </div>
      <div className="col-7">
        <h5>{props.book.tenSach}</h5>
        <p>{props.book.moTa}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
