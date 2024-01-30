import './sidebar.css'
import Logo from '../../img/logobarber.png'

const Sidebar = () => { 
    return (
        <div className='container m-0 p-0 sidebar'>
            <div className="row"> 
        <div className='d-flex col-md-3'>
                    <ul class="nav nav-tabs flex-column">
                        <li className='nav-item'>
                            <a href="/Inicio">
                            <img src={Logo} alt="logo" className='img'/>
                            </a>
                        </li>
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            
         </div>
            </div>
              </div>
)
}

export default Sidebar