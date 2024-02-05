import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/dist/js/adminlte.min.js';

const Header = () => {
  return (
    <nav className="main-header navbar navbar-expand header">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="pushmenu"
            href="/"
            role="button"
          >
            <i className="fas fa-bars"></i>
          </a>
        </li>
        {/* Add more left navbar links as needed */}
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Add right navbar links, user profile, etc. */}
        <li className="nav-item dropdown">
          <a
            className="nav-link"
            data-toggle="dropdown"
            href="/"
          >
            <i className="far fa-user"></i>
            <span className="d-none d-md-inline">John Doe</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">User Options</span>
            <div className="dropdown-divider"></div>
            <a href="/" className="dropdown-item">
              <i className="fas fa-sign-out-alt mr-2"></i> Logout
            </a>
          </div>
        </li>
        {/* Add more right navbar links as needed */}
      </ul>
    </nav>
  )

}
export default Header