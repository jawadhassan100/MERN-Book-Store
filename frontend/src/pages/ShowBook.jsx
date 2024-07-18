import { useEffect , useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton.jsx"
import Spinner from "../components/Spinner.jsx"

const ShowBook = () => {
  const [books , setBooks] = useState([]);
  const [loading , setLoadig] = useState(false);
  const { id } = useParams();

   useEffect(()=>{
      setLoadig(true);
      axios.get(`https://mern-book-store-delta.vercel.app/${id}`)
      .then((response)=>{
        setBooks(response.data)
        setLoadig(false)
      })
      .catch((error)=>{
        console.log(error);
        setLoadig(false)
      })
  }, [])
  return (
    <div className="p-4">
      <BackButton/>
     <div className="grid place-items-center">
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner/>
      ) : (    
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 grid place-items-center">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id :</span>
            <span>{books._id}</span>
          </div>
          <div className="my-4  sm:block md:hidden">
            <span className="text-xl mr-4 text-gray-500 ">Title :</span>
            <span>{books.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author :</span>
            <span>{books.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year :</span>
            <span>{books.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time :</span>
            <span>{new Date (books.createdAt).toLocaleDateString(navigator.language, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          })}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time :</span>
            <span>{new Date (books.updatedAt).toLocaleDateString(navigator.language, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          })}</span>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default ShowBook
