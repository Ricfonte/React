import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListPage } from './pages/listPage/listPage';
import { CreatePage } from './pages/createPage/createPage';
import { UpdatePage } from './pages/updatePage/updatePage';
import { ListBooksPage } from './pages/listBooksPage/listBooksPage';
import { CreateBookPage } from './pages/createBookPage/createBookPage';
import { CredentialsPage } from './pages/credentialsPage/credentialsPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListPage></ListPage>}></Route>
          <Route path='/new' element={<CreatePage></CreatePage>}></Route>
          <Route path='/edit/:id' element={<UpdatePage></UpdatePage>}></Route>

          <Route path='/books/:idAuthor' element={<ListBooksPage></ListBooksPage>}></Route>
          <Route path='/newBook/:idAuthor' element={<CreateBookPage></CreateBookPage>}></Route>

          <Route path='/credentials' element={<CredentialsPage></CredentialsPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
