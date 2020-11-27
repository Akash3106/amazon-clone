import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Winterfurnishing/1500x600._CB416144849_.jpg"
          alt="bg-img"
        />
        {/* <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        > */}
        {/* <div class="carousel-inner">
            <div class="carousel-item active">
            <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser2/GW/3_Desktop-Hero_1x._CB403313252_.jpg"
          alt="bg-img"
        /> */}
        {/* </div>
            <div class="carousel-item">
            <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser2/GW/3_Desktop-Hero_1x._CB403313252_.jpg"
          alt="bg-img"
        />
            </div>
            <div class="carousel-item">
            <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser2/GW/3_Desktop-Hero_1x._CB403313252_.jpg"
          alt="bg-img"
        />
            </div>
          </div> */}
        {/* </div> */}
      </div>

      <div className="home_row">
        <Product
          id="96589"
          title="Just launched: Redmi Earbuds 2C "
          price={1999}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/October/Headset/Redmi/Sale/Desktop/V259217474_WLA-Redmi_Beat_Drop_Launch_Dashboard_Card_260x260._SY304_CB403697004_.jpg"
          rating={5}
        />
        <Product
          id="74563"
          title="Sanitizers, masks & more | Made for Amazon Brands"
          price={500}
          rating={2}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/379x304_new._SY304_CB407851790_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="8799"
          price={700}
          rating={4}
          title="Luxury ayurveda products"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/Luxury-Category-card-1x._SY304_CB448731790_.jpg"
        />
        <Product
          id="5244"
          title="For efficient home working"
          rating={4}
          price={300}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
        />
        <Product
          id="6595"
          title="Up to 50% off | Recliners"
          rating={5}
          price={10000}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/PC/Recliners_MSO_379x304._SY304_CB447481574_.jpg"
        />
        <Product
          id="52541"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser2/GW/Cashback-Dashboard-card-1X._SY304_CB403362277_.jpg"
          price={8000}
          rating={5}
          title="Get 5% cashback on your first order"
        />
      </div>
      <div className="home_row">
        <Product
          id="54548723"
          image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          title="Home Blankets"
          price={3000}
          rating={3}
        />
      </div>
    </div>
  );
}

export default Home;
