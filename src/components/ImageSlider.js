import ImageData from "./ImageData"
import '../App.css';
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
const ImageSlider = () =>{
    const[current,setCurrent] = useState(0)
    const prevSlide=()=>{
        // setCurrent(current-1)
        if(current<=0){
            setCurrent(ImageData.length-1)
        }
        else{
            setCurrent(current-1)
        }
    }
    const nextSlide=()=>{
        if(current>=ImageData.length-1){
            setCurrent(0)
        }
        else{
            setCurrent(current+1)
        }
    }

    return(
        <section className="slider">
            <BsFillArrowLeftCircleFill className="leftArrow"onClick={prevSlide}/>
            <BsFillArrowRightCircleFill className="rightArrow"onClick={nextSlide}/>
            {ImageData.map((data,index)=>{
                return(
                    <div className={index === current ? "slide active": "slide"} key={index}>
                        {index === current &&
                        (
                            <div>
                                <img src={data.image} alt={data.title} className="image"></img>
                                <p>{data.title}</p>
                            </div>
                        )}
                    </div>
                )
            })}
        </section>
    )
}
export default ImageSlider