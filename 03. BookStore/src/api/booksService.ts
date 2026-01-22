import axios from "axios";

const BASE_URL = "https://697124ee78fec16a63002672.mockapi.io/books";

export const getAllBooks = async () => {
    try {
        const response = await axios.get(BASE_URL);
        const data = await response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};

export const getBook = async (id: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        const data = await response.data;
        console.log(data);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};

export const addBook = async () => {
    try {
        const response = await axios.post(BASE_URL, {
            name_of_author: "New Author",
            cover: "https://example.com/cover.jpg",
            price_of_book: "10.99",
            email_of_seller: "seller@example.com"
        });
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};

export const editBook = async (id: string) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, {
            name_of_author: "Updated Author",
            cover: "https://example.com/updated_cover.jpg",
            price_of_book: "12.99",
            email_of_seller: "seller@example.com"
        });
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};

export const deleteBook = async (id: string) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};