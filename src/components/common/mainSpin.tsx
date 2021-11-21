import React from "react";

interface Props {}

const MainSpin = (props: Props) => {
  return (
    <div className='spinner-border text-primary' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  );
};

export default MainSpin;
