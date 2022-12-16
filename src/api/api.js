import axios from "axios";
import { baseUrl } from "../.env/env";

// axios orqali baseUrl qiymati yuuklab oluvchi api functioni yaratib olindi
const api = axios.create({
    baseURL: "https://no23.lavina.tech/"
});

// export qilingani uchun istalgan filedan import qilib davom ettirib ishlatishimiz mumkin 
export default api;