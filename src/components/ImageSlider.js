import ImageData from "./ImageData"
import '../App.css';
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";
const ImageSlider = () =>{
    return(
        <section className="slider">
            <BsFillArrowLeftCircleFill className="leftArrow"/>
            <BsFillArrowRightCircleFill className="rightArrow"/>
            {ImageData.map((data,index)=>{
                return(
                    <div className="slide" key={index}>
                        <div>
                            <img src={data.image} alt={data.title} className="image"></img>
                            <p>{data.title}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
export default ImageSlider