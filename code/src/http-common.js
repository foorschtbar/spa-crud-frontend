import axios from "axios";

export default axios.create({
    baseURL: "https://spa-crud-backend.heckenspringen.de/api",
    headers: {
        "Content-type": "application/json"
    }
});
