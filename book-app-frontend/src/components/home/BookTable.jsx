import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';

const BookTable = ({ books }) => {
  return (
    <div><table className='w-full border-separate border-spacing-2'>
    <thead>
      <tr>
        <th className='border border-slate-600 rounded-md '>
          No</th>
        <th className='border border-slate-600 rounded-md '>
          Title</th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>
          Author
        </th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
        <th className='border border-slate-600 rounded-md '>Operations</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
        <tr key={book._id} className='h-8'>
          <td className='border border-slate-700 rounded-md text-center'>
            {index + 1}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            {book.title}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {book.author}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {book.publishYear}
          </td>
          <td className='border border-slate-700 rounded-md text-center '>
            <div className='flex justify-evenly gap-x-4 p-2'>
              <Link to = {`/books/details/${book._id}`}>
                <BsInfoCircle className='text-3xl text- text-green-600 hover:text-green-800 pl-1' />
              </Link>
              <Link to = {`/books/edit/${book._id}`} >
                <AiOutlineEdit className='text-3xl text-yellow-600 hover:text-yellow-800' />
              </Link>
              <Link to = {`/books/delete/${book._id}`}>
                <MdOutlineDelete className='text-3xl text-red-600 hover:text-red-800'/>
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table></div>
  )
}

export default BookTable