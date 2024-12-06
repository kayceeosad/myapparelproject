import "./Propscard.css";


function Propscard({backgroundimage, title, p}){
return (
  <div style={{backgroundImage: `url(${backgroundimage})`}} className="box1">
    <div className="textholder1">
      <h2>{title}</h2>
      <p>{p}</p>
      <button className="buttons">Shop Now</button>
    </div>
  </div>
);
}





export default Propscard;