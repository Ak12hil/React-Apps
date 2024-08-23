import './App.css';
import { BooksProvider } from './BooksContext';
import BookDetail from './Components/BookDetail';
import Books from './Components/Books'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import NotFound from './Components/NotFound';
import SecretBooks from './Components/SecretBooks';
import { PrivateRoute } from './Components/PrivateRoute';

function App() {

  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books/>}></Route>
          {/* redirect to previous path */}
          <Route path="/books" element={<Navigate to="/"/>}></Route>
          {/* Dynamic route param  */}
          <Route path="/books/:bookId" element={<BookDetail/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/secret" element={<PrivateRoute Component={<SecretBooks/>}></PrivateRoute>}></Route>
        </Routes>
      </Router> 
    </BooksProvider>
  );
}

export default App;
