import axios from "axios";

export default {
  getBook: () => {
    return axios.get("/api/book");
  },
  searchBook: (title) => {
    return axios.post("/search", {title: title});
  },
  addBook: (bookData) => {
    return axios.post("/api/book", bookData);
  },
  deleteBook: (id) => {
    return axios.delete(`/api/book/${id}`);
  },
};
