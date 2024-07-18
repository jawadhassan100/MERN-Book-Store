import { useState } from "react"
import BackButton from "../components/BackButton"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useSnackbar } from "notistack"

const CreateBooks = () => {
  const[title , setTitle] = useState();
  const[author , setAuthor] = useState();
  const[publishYear , setPublishYear] = useState();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const hanldeSaveBook = () =>{
    const data = {
      title,
      author,
      publishYear,
    }

   
    axios.post("https://mern-book-store-delta.vercel.app/", data)
   .then(()=>{
    enqueueSnackbar("Book Created Successfully" , {variant: "success"  , autoHideDuration:1000})
     navigate("/")
    
   })
   .catch((error) => {
    console.log(error);
   enqueueSnackbar("Error" , {variant:"error"  , autoHideDuration:1000})
   })
  }
  return (
    <div className="p-4">
        <BackButton/>
        <h1 className="text-3xl my-4">Create Book</h1>
        <div className="flex flex-col border-2 border-sky-400 rounded-[5px] w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-grey-500">Title :</label>
            <input
             type="text"
             value={title}
             onChange={(e)=> setTitle(e.target.value)}
             className="border-2 border-grey-500 px-4 py-2 w-full"
              />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-grey-500">Author :</label>
            <input
             type="text"
             value={author}
             onChange={(e)=> setAuthor(e.target.value)}
             className="border-2 border-grey-500 px-4 py-2 w-full"
              />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-grey-500">Publish Year :</label>
            <input
             type="text"
             value={publishYear}
             onChange={(e)=> setPublishYear(e.target.value)}
             className="border-2 border-grey-500 px-4 py-2 w-full"
              />
          </div>
          <button className="p-2 bg-sky-300 m-8 font-bold" onClick={hanldeSaveBook}>
            Save
          </button>
        </div>
    </div>
  )
}

export default CreateBooks
