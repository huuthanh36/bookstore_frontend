import ImageModel from "../models/ImageModel";
import { my_request } from "./Request";

export async function getAllImages(bookId: number): Promise<ImageModel[]> {
  const result: ImageModel[] = [];
  // Xác định endpoint
  const endpoint: string = `http://localhost:8080/sach/${bookId}/danhSachHinhAnh`;
  // Gọi hàm my_request để lấy dữ liệu từ endpoint
  const response = await my_request(endpoint);
  const responseData = response._embedded.hinhAnhs;
  console.log(responseData);

  for (const key in responseData) {
    result.push({
      maHinhAnh: responseData[key].maHinhAnh,
      tenHinhAnh: responseData[key].tenHinhAnh,
      laIcon: responseData[key].laIcon,
      duongDan: responseData[key].duongDan,
      duLieuAnh: responseData[key].duLieuAnh,
    });
  }
  return result;
}
