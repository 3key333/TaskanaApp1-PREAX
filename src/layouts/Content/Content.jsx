import IncomingTasks from '../../pages/IncomingTasks/IncomingTasks'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import './content.module.css'

function Content({ children }) {
  return (
    <>
      <NavBar />
      <IncomingTasks />
      <SideBar />
    </>
  )
}

export default Content
