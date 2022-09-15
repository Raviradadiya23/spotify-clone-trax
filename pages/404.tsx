/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";

const PageNotFound = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 parent">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you are lost</h3>

                <p>the page you are looking for not avaible!</p>
              </div>
              <div className="link_404">
                <Link href="/">
                  <a>Go To Home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PageNotFound.notFound = true;

export default PageNotFound;
