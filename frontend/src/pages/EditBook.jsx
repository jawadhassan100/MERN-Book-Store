import { useState ,useEffect } from "react"
import BackButton from "../components/BackButton"
import axios from "axios"
import { useNavigate ,useParams} from "react-router-dom"
import { useSnackbar } from "notistack"
const EditBook = () => {
  const[title , setTitle] = useState('');
  const[author , setAuthor] = useState('');
  const[publishYear , setPublishYear] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();
 
  useEffect(()=>{
    axios.get(`https://mern-book-store-delta.vercel.app/books/${id}`)
    .then((response)=>{
      setAuthor(response.data.author)
      setPublishYear(response.data.publishYear)
      setTitle(response.data.title)
    })
    .catch((error)=>{
      console.log(error)
    })
  } , [id])

   const hanldeEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    }
 
console.log(title);
   
     axios
      .put(`https://mern-book-store-delta.vercel.app/books/${id}`, data)
      .then(() => {
       enqueueSnackbar("Book Edited Successfully" , {variant: "success"  , autoHideDuration:1000})
        navigate('/');
      })
      .catch((error) => {
        enqueueSnackbar("Error" , {variant:"error"  , autoHideDuration:1000})
        console.log(error);
      });
  
  }
  return (
    <div className="p-4">
        <BackButton/>
        <h1 className="text-3xl my-4">Edit Book</h1>
       <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={hanldeEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook

