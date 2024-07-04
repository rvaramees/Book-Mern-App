import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const {id} = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then((response) => {
      setLoading(false);
      enqueueSnackbar('Book Deleted Successfully', {variant: 'success'});
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      enqueueSnackbar(error.response.data.message, {variant: 'error'});
      // alert('Error has happened.');
      console.log(error);
    })
  }
  return (
    <div className='p-4'>
      <div className='flex justify-items-start'> <BackButton/>
      <h1 className='text-3xl my-4 ml-7 font-bold'>Delete Book</h1></div>
      { loading  ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h1 className='text-2xl'>Are you sure you want to delete this book?</h1>
        <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold mt-4 py-2 px-4 rounded"
      type="button" onClick={handleDeleteBook}
    >
      Delete
    </button>
      </div>
    </div>
  )
}

export default DeleteBook