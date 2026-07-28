export async function my_request(endpoint: string) {
  // Truy vấn đến endpoint và trả về dữ liệu JSON
  const response = await fetch(endpoint);
  // Kiểm tra xem phản hồi có thành công hay không
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Trả về dữ liệu JSON
  return response.json();
}
