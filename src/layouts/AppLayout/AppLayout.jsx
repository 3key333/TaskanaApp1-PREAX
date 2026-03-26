
import Content from '../Content/Content'
import Header from '../Header/Header'
import './appLayout.module.css'

function AppLayout() {
  return (
    <>
      <section className='app-layout'>
        <Header />
        <Content />
      </section>
    </>
  )
}

export default AppLayout
