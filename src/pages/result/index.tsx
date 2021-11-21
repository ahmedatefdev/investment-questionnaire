import { useEffect, useRef } from "react";
import Page from "../../components/page";
import { useAppContext } from "../../contexts";
import { Link } from "react-router-dom";
import * as bootstrap from "bootstrap";
import Results from "../../components/result";
const { Toast } = bootstrap;

interface Props {}

const Result = (props: Props) => {
  const { answers } = useAppContext();
  const toastRef: any = useRef();

  useEffect(() => {
    if (!toastRef.current) return;

    let myToast = toastRef.current;
    let bsToast = bootstrap.Toast.getInstance(myToast);

    if (!bsToast) {
      bsToast = new Toast(myToast, { autohide: true, delay: 3000 });
    }
    answers?.length && bsToast.show();
  }, [toastRef.current]);

  return (
    <>
      <Page>
        <div className='d-flex justify-content-center align-items-center flex-column bg-dark min-wrapper-hight m-auto '>
          <h1 className='text-center text-white'>{"Result"}</h1>
          <div className='mt-5 d-flex justify-content-around align-items-center container flex-column'>
            <Results />
            <Link to={"/"}>
              <button type='button' className='btn btn-primary'>
                {"Return To Home"}
              </button>
            </Link>
          </div>
        </div>
      </Page>

      <div
        className='position-fixed top-0 end-0 mt-3 pt-5 p-3 '
        style={{ zIndex: 100 }}>
        <div
          className='toast align-items-center text-white bg-success'
          role='alert'
          ref={toastRef}
          aria-live='assertive'
          aria-atomic='true'
          data-testid='toast-test'>
          <div className='d-flex'>
            <div className='toast-body'>
              Your answers are submitted successfully.
            </div>
            <button
              type='button'
              className='btn-close btn-close-white me-2 m-auto'
              data-bs-dismiss='toast'
              aria-label='Close'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
