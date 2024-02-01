import './sidebar.css'
import Logo from '../../img/logobarber.png'

const Sidebar = () => { 
    return (

        <aside className="main-sidebar">
            
            <div className='sidebar'>
                <a href="/Inicio">
                            <img src={Logo} alt="logo" className='img'/>
                </a>
                <nav className='mt-2'>

                    <ul className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false">
                        <li className="nav-item">
                            
                    <a className="nav-link " href="/"><i className="nav-icon fas fa-home"></i>Active</a>
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
                </nav>
            
         </div>
            </aside>
       
)
}

export default Sidebar