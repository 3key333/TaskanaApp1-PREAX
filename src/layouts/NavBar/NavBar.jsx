import  './navBar.css'

function NavBar() {
  return (
    <>
      <section className='navbar'>
        <div className="navbar-inner">

          <nav>

            <button>
              <img src="/inbox-light.svg" alt="" />
              <p>Входящие</p>
            </button>
            
          </nav>
          
        </div>
      </section>
    </>
  )
}

export default NavBar
