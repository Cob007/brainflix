const DateConverter = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US");
}

export const baseURLRemote  = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
export const apiKey = "c97c333b-eff5-455a-b47e-8aa77da0dce2";
export const baseURL  = "http://localhost:4040/";



export default DateConverter