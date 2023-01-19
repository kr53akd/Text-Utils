import React from 'react'

const Navbar = (props) => {
  return (
    <>
     <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <form className="ms-auto d-flex">
              <div className ={`form-check form-switch text-${props.mode==="light"?'dark':'light'}`}>
                <input className ="form-check-input" onClick={props.onClick} type="checkbox" id="flexSwitchCheckDefault"/>
                  <label className ="form-check-label" htmlFor="flexSwitchCheckDefault">Click to enable {props.mode === 'light'?'dark':'light'} mode</label>
              </div>
            </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
