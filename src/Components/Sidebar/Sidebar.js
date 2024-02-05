import './sidebar.css'
import Logo from '../../img/logobarber.png'

const Sidebar = () => {
    return (

        <aside className="main-sidebar elevation-4">


            <a href="/Inicio" className='brand-link'>
                <img src={Logo} alt="logo" className='img' />
            </a>

            <div className='sidebar'>
                <nav className='mt-2'>
                    <ul className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false">
                        <li className="nav-item">
                            <a className="nav-link" href="/"><i className="nav-icon fas fa-home"></i> <p>Active</p> </a>
                        </li>
                        <li className="nav-item">

                            <a className="nav-link" href="/"><i className="nav-icon fas fa-home"></i> <p>Active</p> </a>
                        </li>
                        <li className="nav-item">

                            <a className="nav-link" href="/"><i className="nav-icon fas fa-home"></i> <p>Active</p> </a>
                        </li>
                        <li className="nav-item">

                            <a className="nav-link" href="/"><i className="nav-icon fas fa-home"></i> <p>Active</p> </a>
                        </li>

                    </ul>
                </nav>
            </div>

        </aside>

    )
}

export default Sidebar