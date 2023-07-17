import axios from "axios";

export const sendEmail = async(data) => {
    try {
        return await axios.post(`${import.meta.env.VITE_API_BACK_URL}/send-email`,data)
    } catch (error) {
        throw error;
    }
}