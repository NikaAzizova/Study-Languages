import Button from "../Button/Button"

export default function Card(props){
    return(
        <div>
           <div className="block-card">
            <div className="clock-card__wrapper">
                <h3 className="block-card__word">{props.word}</h3>
                <p className="block-card__transcription">{props.transcription}</p>
                <Button name='Проверить'/>
                <p>Выучено в этот раз:</p>
            </div>
           </div>

        </div>
    )
}