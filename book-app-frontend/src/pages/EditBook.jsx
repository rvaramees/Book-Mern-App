import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";


const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ publishYear, setPublishYear] = useState('');
  const [ loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
      setAuthor(response.data.book.author);
      setTitle(response.data.book.title);
      setPublishYear(response.data.book.publishYear);
      setLoading(false);
    }).catch((error) =>{
      alert('An error happened');
      console.log(error);
    })
  }, [])
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book updated successfully', { variant: 'success' });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An Error happened. Please check console.');
        enqueueSnackbar('Error', {variant: 'error'});
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <div className="flex"><BackButton />
      <h1 className="text-3xl my-4 mx-4 font-bold">Edit Book</h1></div>
      { loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input 
            type = 'text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input 
            type = 'text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input 
            type = 'text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 rounded-md px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-400 hover:bg-sky-600 m-8" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
