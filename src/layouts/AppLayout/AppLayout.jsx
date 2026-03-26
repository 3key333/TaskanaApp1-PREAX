import Header from '../../components/Header/Header'
import Content from '../Content/Content'
import './appLayout.module.css'

function AppLayout({ children }) {
  return (
    <>
      <Header/>
      <Content/>
    </>
  )
}

export default AppLayout
