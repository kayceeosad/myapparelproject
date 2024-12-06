import "./Hero.css";
import Propscard from "./Propscard";

function Hero() {
  return (
    <div className="Hero">
      <div className="women_fashion">
        <div className="textholder">
          <h2>Women's Fashion</h2>
          <p>Slow Fashion.</p>
          <p>Timeless and Understated pieces for the Curious Dreamer.</p>
          <p>Debby's Craft.</p>
          <button className="buttons">Shop Now</button>
        </div>
      </div>
      <div className="four_boxes">
        <Propscard
          backgroundimage="https://preview.colorlib.com/theme/ashion/img/categories/category-2.jpg"
          title="Men's Wear"
          p="358 items"
        />

        <Propscard
          backgroundimage="https://preview.colorlib.com/theme/ashion/img/categories/category-3.jpg"
          title="Kid's Wear"
          p="567 items"
        />
        <Propscard
          backgroundimage="https://preview.colorlib.com/theme/ashion/img/categories/category-4.jpg"
          title="Costmetics"
          p="159 items"
        />

        <Propscard
          backgroundimage="https://preview.colorlib.com/theme/ashion/img/categories/category-5.jpg"
          title="Accessories"
          p="792 items"
        />
      </div>
    </div>
  );
}

export default Hero;
