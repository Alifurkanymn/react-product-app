import './App.scss'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/router.jsx'
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
