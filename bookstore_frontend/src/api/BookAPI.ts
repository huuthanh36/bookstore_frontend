import BookModel from "../models/BookModel";
import { my_request } from "./Request";

export async function getBook(endpoint: string): Promise<BookModel[]> {
  const result: BookModel[] = [];
  // Gọi hàm my_request để lấy dữ liệu từ endpoint
  const response = await my_request(endpoint);
  const responseData = response._embedded.saches;
  console.log(responseData);

  for (const key in responseData) {
    result.push({
      maSach: responseData[key].maSach,
      tenSach: responseData[key].tenSach,
      giaBan: responseData[key].giaBan,
      giaNiemYet: responseData[key].giaNiemYet,
      moTa: responseData[key].moTa,
      soLuong: responseData[key].soLuong,
      tenTacGia: responseData[key].tenTacGia,
      trungBinhXepHang: responseData[key].trungBinhXepHang,
    });
  }
  return result;
}

export async function getAllBooks(): Promise<BookModel[]> {
  // Gọi hàm getBook với endpoint mặc định để lấy tất cả sách(hiển thị theo maSach giảm dần)
  const endpoint: string = "http://localhost:8080/sach?sort=maSach,desc";

  return getBook(endpoint);
}

export async function getThreeNewestBooks(): Promise<BookModel[]> {
  // Gọi hàm getBook với endpoint mặc định để lấy 3 sách mới nhất(hiển thị theo maSach giảm dần)
  const endpoint: string =
    "http://localhost:8080/sach?sort=maSach,desc&page=0&size=3";

  return getBook(endpoint);
}
