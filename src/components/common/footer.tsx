import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-dark text-white text-center p-md-5 p-3 '>
      <div className='container'>
        <p className='lead m-0'>
          By <span className="fw-bold">Ahmed Atef </span>
           © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
