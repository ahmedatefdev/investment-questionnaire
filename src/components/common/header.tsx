import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import HouseIcon from "../../static/img/house-fill.svg";
interface Props {}

const Header = (props: Props) => {
  const { pathname } = useLocation();
  return (
    <nav className='navbar bg-dark navbar-dark py-1 fixed-top'>
      <div className='my-1 container'>
        {pathname !== "/" && (
          <Link to='/'>
            <button
              type='button'
              className='btn btn-primary'
              data-testid='homeBtn'>
              <img src={HouseIcon} alt='HouseIcon' />
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
