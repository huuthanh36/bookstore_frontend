import BookModel from "../models/BookModel";
import { my_request } from "./Request";

export async function getAllBooks(): Promise<BookModel[]> {
  const result: BookModel[] = [];
  // Xác định endpoint
  const endpoint: string = "http://localhost:8080/sach";
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
