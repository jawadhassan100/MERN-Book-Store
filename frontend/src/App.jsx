import { Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateBooks from "./pages/CreateBooks.jsx"
import EditBook from "./pages/EditBook.jsx"
import DeleteBook from "./pages/DeleteBook.jsx"
import ShowBook from "./pages/ShowBook.jsx"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBooks/>} />
      <Route path="/books/edit/:id" element={<EditBook/>} />
      <Route path="/books/delete/:id" element={<DeleteBook/>} />
      <Route path="/books/details/:id" element={<ShowBook/>} />
    </Routes>
  )
}

export default App
