import "./Newproduct.css"
import Productprops from "./Productprops";


function Newproduct(){
    return (
      <div className="container">
        <div className="container_two">
          <div className="tileholder">
            <h1>New Product</h1>
            <div className="buttonholder">
              <button className="button_active">All</button>
              <button className="buttonss">Women's</button>
              <button className="buttonss">Men's</button>
              <button className="buttonss">Kids</button>
              <button className="buttonss">Accesories</button>
              <button className="buttonss">Cosmetics</button>
            </div>
          </div>
          <div className="cardholder">
            <Productprops
              image={
                "https://preview.colorlib.com/theme/ashion/img/product/product-1.jpg"
              }
              title={"Buttons tweed blazer"}
              sign={"$ 59.0"}
            />
            <Productprops
              image={
                "https://preview.colorlib.com/theme/ashion/img/product/product-2.jpg"
              }
              title={"Flowy striped skirt"}
              sign={"$ 49.0"}
            />
            <Productprops
              image={
                "https://preview.colorlib.com/theme/ashion/img/product/product-3.jpg"
              }
              title={"Cotton T-Shirt"}
              sign={"$ 59.0"}
            />
            <Productprops
              image={
                "https://preview.colorlib.com/theme/ashion/img/product/product-4.jpg"
              }
              title={"Slim striped pocket shirt"}
              sign={"$ 59.0"}
            />
            <Productprops
              image={
                "https://preview.colorlib.com/theme/ashion/img/product/product-5.jpg"
              }
              title={"Fit micro corduroy shirt"}
              sign={"$ 59.0"}
            />
            <Productprops
              image={
                "https://preview.colorlib.com/theme/ashion/img/product/product-3.jpg"
              }
              title={"Tropical Kimono"}
              sign={"$ 49.0"}
            />
            <Productprops
              image={
                "https://preview.colorlib.com/theme/ashion/img/product/product-7.jpg"
              }
              title={"Contrasting sunglasses"}
              sign={"$ 59.0"}
            />
            <Productprops
              image={
                "https://preview.colorlib.com/theme/ashion/img/product/product-8.jpg"
              }
              title={"Water resistant backpack"}
              sign={"$ 49.0"}
            />
          </div>
        </div>
      </div>
    );
}




export default Newproduct;