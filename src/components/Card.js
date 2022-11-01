import Wrapper from "../assets/wrappers/Card";
import { useAppContext } from "../context/appContext";
const Card = () => {
  return (
    <article className='review'>
      <div className='img-container'>
        {/* <img src={image} alt={name} className='person-img' /> */}
        <span className='quote-icon'></span>
      </div>
      <h4 className='author'>Vladimir</h4>
      <p className='job'>Developer</p>
      <p className='info'>
        {" "}
        orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
      </p>
      <div className='button-container'>
        <button className='btn'>More Info</button>
      </div>
    </article>
  );
};

export default Card;
