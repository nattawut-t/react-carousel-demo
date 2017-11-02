import React from 'react'

const Carousel = () =>
  <div className="container main-container">

    <h1>Bootstrap Carousel with Animate.css</h1>
    <div id="carousel-example-generic" className="carousel slide">

      <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" className="active" />
        <li data-target="#carousel-example-generic" data-slide-to="1" />
        <li data-target="#carousel-example-generic" data-slide-to="2" />
      </ol>

      <div className="carousel-inner" role="listbox">

        <div className="item active deepskyblue">

          <div className="carousel-caption">
            <h3 data-animation="animated bounceInLeft">
              This is the caption for slide 1
            </h3>
            <h3 data-animation="animated bounceInRight">
              This is the caption for slide 1
            </h3>
            <button className="btn btn-primary btn-lg" data-animation="animated zoomInUp">Button</button>
          </div>
        </div>

        <div className="item skyblue">
          <div className="carousel-caption">
            <h3 className="icon-container" data-animation="animated bounceInDown">
              <span className="glyphicon glyphicon-heart" />
            </h3>
            <h3 data-animation="animated bounceInUp">
              This is the caption for slide 2
            </h3>
            <button className="btn btn-primary btn-lg" data-animation="animated zoomInRight">Button</button>
          </div>
        </div>

        <div className="item darkerskyblue">
          <div className="carousel-caption">
            <h3 className="icon-container" data-animation="animated zoomInLeft">
              <span className="glyphicon glyphicon-glass" />
            </h3>
            <h3 data-animation="animated flipInX">
              This is the caption for slide 3
            </h3>
            <button className="btn btn-primary btn-lg" data-animation="animated lightSpeedIn">Button</button>
          </div>
        </div>

      </div>

      <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>

  </div>

export default Carousel
