import Slider from '../../Components/Slider/Slider.jsx';


export default function Game(props){
    const stateWords = props.stateWords;
    
    return(
        <div>
             <Slider stateWords={stateWords} />
        </div>
    )
}