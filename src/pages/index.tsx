import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/page";
import HomeImg from "../static/img/homeimg.svg";
import AddIcon from "../static/img/plus-square-fill.svg";
interface Props {}

const Home = (props: Props) => {
  return (
    <Page>
      <div className='d-flex justify-content-center align-items-center flex-column  bg-dark min-wrapper-hight m-auto '>
        <img
          src={HomeImg}
          className='img-fluid mx-auto d-block px-4 p-md-1 mb-4'
          alt='desktop'
        />
        <div className='d-inline mx-auto'>
          <Link to='/questions'>
            <button className='btn btn-primary   px-4 px-md-3  '>
              <img src={AddIcon} alt='AddIcon' /> generate business plan
            </button>
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default Home;
