import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuCarTaxiFront } from "react-icons/lu";


function Hearder(){
    return (
      <header className="header">
        <div className="header_wrapper">
          <div className="logo">DebbyJacKsong</div>
          <div className="navbox">
            <a href="">Home</a>
            <a href="">Women’s</a>
            <a href="">Men’s</a>
            <a href="">Shop</a>
            <a href="">Pages</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>

          <div className="december">
            <div>Login/Register</div>
            <div className="iconp">
              <CiSearch />
              <div className="cihearts">
                <CiHeart />
                <div className="twoicon">2</div>
              </div>
              <div className="cihearts">
                <LuCarTaxiFront />
                <div className="twoicon">4</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );

}




export default Hearder;