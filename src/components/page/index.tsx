import React from "react";
import Footer from "../common/footer";
import Header from "../common/header";

interface Props {}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div className='bg-dark'>
      <Header />
      <div className='min-wrapper-hight'>{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
