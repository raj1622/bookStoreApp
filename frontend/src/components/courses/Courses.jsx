
import Navbar from '../navbar'
import Footer from '../Footer'
import Course from '../Course'

function Courses() {
  return (
    <>
        <Navbar></Navbar>
        <div className='min-h-screen'>
          <Course/>
        </div>
        
        <Footer></Footer>
    </>
  )
}

export default Courses