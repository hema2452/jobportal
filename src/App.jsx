import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import JobListing from './Pages/JobListing'
import MyJobs from './Pages/MyJobs'
import PostJob from './Pages/PostJob'
import SavedJob from './Pages/SavedJob'
import JobPage from './Pages/JobPage'
import { ThemeProvider } from './components/ThemeProvider'
import { SignIn } from '@clerk/clerk-react'
// import { SignIn, SignInButton } from '@clerk/clerk-react'


function App() {
  const router = createBrowserRouter([
    {
        
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
            {
          path:"/job/:id",
          element:<JobPage/>
        },
            {
          path:"/jobs",
          element:<JobListing/>
        },
            {
          path:"/myjobs",
          element:<MyJobs/>
        },
            {
          path:"/postjob",
          element:<PostJob/>
        },
            {
          path:"/savedjobs",
          element:<SavedJob/>
        },
        { path: "/signin", element: <SignIn/> },
     
      ]
    }
  ])
  return (
    <ThemeProvider  defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router = {router}/>
    </ThemeProvider>
  )
}

export default App
