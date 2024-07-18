import { useEffect, useState } from "react";
import Spinner from '../components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox  } from "react-icons/md";
import axios from 'axios';
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books , setBooks] = useState([]);
  const [loading , setLoadig] = useState(false);
  const [showType , setShowType] = useState("table");
  useEffect(()=>{
      setLoadig(true);
      axios.get('http://localhost:5500/books')
      .then((response)=>{
        setBooks(response.data.data)
        console.log(response.data);
        setLoadig(false)
      })
      .catch((error)=>{
        console.log(error);
        setLoadig(false)
      })
  }, [])

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-400 px-5 py-1 rounded-[5px] font-semibold'
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-400 px-5 py-1 rounded-[5px] font-semibold'
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-0">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className='text-sky-800 text-4xl'/>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  )
}

export default Home
