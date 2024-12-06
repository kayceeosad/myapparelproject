import "./Productprops.css";
import { TbArrowsDiagonal2 } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";

function Productprops({ image, title, sign }) {
  return (
    <div className="product">
      <div className="product_image">
        <img src={image} />

        <div className="hover-icons">
          <TbArrowsDiagonal2 className="image_icons" />
          <IoIosHeart className="image_icons" />
          <BiShoppingBag className="image_icons" />
        </div>
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <div>⭐⭐⭐⭐⭐</div>
        <p>{sign}</p>
      </div>
    </div>
  );
}


export default Productprops;