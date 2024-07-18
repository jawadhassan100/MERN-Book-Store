import BackButton from "../components/BackButton"
import axios from "axios"
import { useNavigate ,useParams} from "react-router-dom"
import { useSnackbar } from "notistack"
const DeleteBook = () => {
  const { enqueueSnackbar } = useSnackbar();
   const navigate = useNavigate();
   const {id} = useParams()
   const handleDeleteBook = () =>{
    axios.delete(`https://mern-book-store-delta.vercel.app/${id}`)
    .then(()=>{
      enqueueSnackbar("Book Created Successfully" , {variant: "success" , autoHideDuration:1000} )
      navigate("/")
    })
    .catch((error)=>{
      console.log(error);
      enqueueSnackbar("Error" , {variant:"error"  , autoHideDuration:1000})
    })
   }
  return (
     <div className="p-4">
        <BackButton/>
        <h1 className="text-3xl my-4">Delete Book</h1>
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-[5px] w-[600px] p-4 mx-auto">
          <h3 className="text-2xl">Are You Sure You Want To Delete This</h3>
          <button
           className="p-4 bg-red-600 text-white m-8 w-full rounded-[7px] "
           onClick={handleDeleteBook}
          >
            Yes,Delete It
          </button>
        </div>
    </div>
  )
}

export default DeleteBook
