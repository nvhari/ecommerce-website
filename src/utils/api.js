import axios from "axios";
// require("dotenv").config();

export const fetchdataFromApi = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:4000/" + url);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const postData = async (url, formData) => {
  try {
    const response = await fetch("http://localhost:4000" + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const res = await response.json();
    return res; // Return the parsed JSON data
  } catch (error) {
    console.error("Error in postData:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export const editData = async(url,updatedData)=>{
  const {res} = await axios.put(`http://localhost:4000${url}`,updatedData)
  return res
}

export const deleteData = async(url)=>{
  const {res}= await axios.delete(`http://localhost:4000${url}`)
  return res;
}