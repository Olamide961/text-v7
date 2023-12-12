import './our-project.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image15 from './image 15.jpg';
import image16 from './image 16.jpg';
import image17 from './image 17.jpg';
import image18 from './image 18.jpg';
import image19 from './olamide1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Project() {
    return (
        <>
        <div className="row">
            <p className="text">our project</p>
            <div className="column1">
                    <img className="image19" src={ image19 } alt =""  />
                    <div className="image-text">
                        <p className="image-word">Sample<br />Project</p>
                            <button className="image-btn">view more
                            <span><FontAwesomeIcon icon={ faArrowRight } /></span>
                            </button>
                    </div>
               
            </div>
            <div className="column2">
                <img className="image15" src={ image15 } alt="" />
            </div>

            <div className="column3">
                <img className="image16" src={ image16 } alt="" />
            </div>
            <div className="column3">
                <img className="image17" src={ image17 } alt="" />
            </div>
            <div className="column3">
                <img className="image18" src={ image18 } alt="" />
            </div>
            <div>
               {/*} <button className="btn7">All Project<span><FontAwesomeIcon icon={ faArrowRight } /></span>
                </button> */}
            </div>
        </div>
        </>
    )
}

export default Project;