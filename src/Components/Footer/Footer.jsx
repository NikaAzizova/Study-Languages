import Button from "../Button/Button"

export default function Footer(){
    return(
        <div>
            <footer className="block-footer">
                <div className="block-footer__container">
                <Button name='Выученные'/>
                <Button name='Карточки слов'/>
                <Button name='Список слов'/>
                </div>

            </footer>
        </div>
    )
}