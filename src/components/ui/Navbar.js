import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: types.logout });

    navigate('/login', { replace: true });
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <Link className='navbar-brand ms-3' to='/'>
        My Hero App
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink className='nav-item nav-link' to='/marvel'>
            Marvel
          </NavLink>

          <NavLink className='nav-item nav-link' to='/dc'>
            DC
          </NavLink>

          <NavLink className='nav-item nav-link' to='/search'>
            Search
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-info'>{user.name}</span>
          <button className='nav-item nav-link btn me-3' onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
