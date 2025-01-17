import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBooks from './pages/CreateBooks.jsx'
import EditBook from './pages/EditBook.jsx'
import DeleteBook from './pages/DeleteBooks.jsx'
import ShowBooks from './pages/ShowBooks.jsx'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/details/:id' element={<ShowBooks/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />


    </Routes>
  )
}
export default App