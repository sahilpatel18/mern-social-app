import axios from "axios";
const { REACT_APP_DEV_URL } = process.env;

export const fetchPost = () => axios.get(REACT_APP_DEV_URL);
export const createPost = (newPost) => axios.post(REACT_APP_DEV_URL, newPost);
export const updatePost = (id, updatedPost) => {
  axios.patch(`${REACT_APP_DEV_URL}/${id}`, updatedPost);
};
export const deletePost = (id) => {
  axios.delete(`${REACT_APP_DEV_URL}/${id}`);
};
