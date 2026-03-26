import IncomingTasks from '../../pages/IncomingTasks/IncomingTasks'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import './content.css'

function Content() {
  return (
    <>
      <section className='content'>
        <NavBar />
        <IncomingTasks />
        <SideBar />
      </section>
    </>
  )
}
export default Content