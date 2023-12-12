import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  image1  from './Rectangle 10.jpg';
import  image2  from './Rectangle 8.jpg';
import  image3  from './Rectangle 9.jpg';
import './content.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Content() {
    return (
        <>
        <div className="content">
            <div className="image">
                <img className="image1" src={ image1 } alt="" />
                <img className="image2" src={ image2 } alt="" />
                <img className="image3" src={ image3 } alt="" />
            </div>
            <div className="about-text">
                <p className="header">about</p>
                <p className="word">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled
                      it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            
            </div>
            <button className="about-btn">read more <span><FontAwesomeIcon icon={ faArrowRight } /></span></button>
        
        </div>
        </>
    )
}

export default Content;