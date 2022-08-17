import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDVkMzExZTRmMTBmMjYzMWMxNDJlMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTczMTIwMSwiZXhwIjoxNjU5OTkwNDAxfQ.3_vwiljqtbrrf78Fe6YDfn7TfnrfJTgavENgc-WkV3U";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `bearer ${TOKEN}` }
});