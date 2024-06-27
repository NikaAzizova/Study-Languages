import { useEffect, useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import styles from './Row.module.scss';



export default function Row({ wordDictionary, handleRemove, handleSave, index }) {
    const { id, english, transcription, russian } = wordDictionary;

    const indexOfWord = index;

    const [openEditing, setOpenEditing] = useState(false);
    const [wordSt, setWordSt] = useState("");
    const [transcriptionWord, setTranscription] = useState("");
    const [translationWord, setTranslationWord] = useState("");

    const [valid, setValid] = useState(false); //пока не получилось сделать кнопку заблокированной

    const [wordError, setWordError] = useState("");
    const [transcriptionError, setTranscriptionError] = useState("");
    const [translationError, setTranslationError] = useState('');

    const [wordRed, setWordRed] = useState(false);
    const [transcriptionRed, setTranscriptionRed] = useState(false);
    const [translationRed, setTranslationRed] = useState(false);

    //открываем редактирование
    const handleEditing = (id) => {
        setOpenEditing(id);
    }

    //при изменении слов они будут меняться в состояниях
    useEffect(() => {
        setWordSt(english);
        setTranscription(transcription);
        setTranslationWord(russian);
    }, [wordDictionary])

    //проверка чтобы сделать кнопку заблокированной в случае ошибок в введеных словах
    useEffect(() => {
        if (wordError || translationError || translationError) {
            setValid(false);

        } else {
            setValid(true);
        }
    }, [wordError, translationError, translationError])


    //Делаем проверку английского слова
    const wordHandler = (e) => {
        setWordSt(e.target.value);
        const reg = /(?:\s|^)[A-Za-z0-9\-\.\_]+(?:\s|$)/; //анл слово

        if (!reg.test(String(e.target.value))) {
            setWordError('Введите слово английскими буквами!');
            setWordRed(true)

        } else {
            setWordError('');
            setWordRed(false)
        }
    }

    //делаем проверку транскрипции
    const transcriptionHandler = (e) => {
        setTranscription(e.target.value);
        const regTranscript = /\[+[A-Za-zʌ:iɪʊueəɜɔæaɑɒʃθŋðʒɛˈ(r)ɡrɑːs]+\]/;

        if (!regTranscript.test(String(e.target.value))) {
            setTranscriptionError('Транскрипция слова некорректна!');
            setTranscriptionRed(true)

        } else {
            setTranscriptionError('');
            setTranscriptionRed(false)
        }
    }

    //Делаем проверку русского слова
    const translationHandler = (e) => {
        setTranslationWord(e.target.value);
        const regTranslation = /(?:\s|^)[а-яА-Я0-9\-\.\_]+(?:\s|$)/;//русское слово

        if (!regTranslation.test(String(e.target.value))) {
            setTranslationError('Перевод слова некорректен, используйте русские буквы!');
            setTranslationRed(true);

        } else {
            setTranslationError('');
            setTranslationRed(false);
        }
    }


    return (
        <>
            <tr className={styles.tr} >
                <td className={styles.td}>
                    <span className={styles.error}>{wordError}</span> {/*Здесь появится инф-я об ошибке*/}
                    {openEditing ? (
                        <input
                            // className={styles.inputWord}
                            className={wordRed ? styles.inputWordError : styles.inputWord}
                            type="text"
                            value={wordSt}
                            onChange={(e) => wordHandler(e)}
                        />
                    ) : (
                        english
                    )}
                </td>
                <td className={styles.td}>
                    <span className={styles.error}>{transcriptionError}</span> {/*Здесь появится инф-я об ошибке*/}
                    {openEditing ? (
                        <input
                            type="text"
                            className={transcriptionRed ? styles.inputWordError : styles.inputWord}
                            value={transcriptionWord}
                            onChange={(e) => transcriptionHandler(e)}
                        />
                    ) : (
                        transcription
                    )}
                </td>
                <td className={styles.td}>
                    <span className={styles.error}>{translationError}</span> {/*Здесь появится инф-я об ошибке*/}
                    {openEditing ? (
                        <input
                            type="text"
                            className={translationRed ? styles.inputWordError : styles.inputWord}
                            value={translationWord}
                            onChange={(e) => translationHandler(e)}
                        />
                    ) : (
                        russian
                    )}
                </td>
                <td className={styles.td}>
                    {openEditing ? (
                        <button
                            disabled={!valid}
                            className={valid ? styles.btnSave : styles.btnDisabled}
                            onClick={() => {
                                setOpenEditing(false),
                                handleSave({
                                        id,
                                        wordSt,
                                        transcriptionWord,
                                        translationWord,
                                        index
                                    })
                            }
                            }>
                            <IoCheckmarkDoneCircle
                                className={styles.doneImg}


                            />
                        </button>
                    ) : (
                        <BsFillPencilFill
                            onClick={() => handleEditing(id)}
                            className={styles.editingImg}
                        />
                    )}

                    <BsFillTrashFill
                        onClick={() => handleRemove(id, indexOfWord)}
                        className={styles.removeImg}
                    />
                </td>
            </tr>

        </>
    )
}
//))


/*
export default function Row({ wordDictionary, handleRemove, handleSave }) {
    //получаем пропсы
    const { id, word, transcription, translation } = wordDictionary;


    const [openEditing, setOpenEditing] = useState(false);
    const [wordSt, setWordSt] = useState("");
    const [transcriptionWord, setTranscription] = useState("");
    const [translationWord, setTranslationWord] = useState("");

    //открываем редактирование
    const handleEditing = (id) => {
        setOpenEditing(id);
    }

    //при изменении слов они будут меняться в состояниях
    useEffect(() => {
        setWordSt(word);
        setTranscription(transcription);
        setTranslationWord(translation);
    }, [wordDictionary])

    //Проверяем инпуты на наличие в них слов,и чтобы совпадали с регулярным выражением
    const regEng = /(?:\s|^)[A-Za-z0-9\-\.\_]+(?:\s|$)/;;
    const regTranslation = /(?:\s|^)[а-яА-Я0-9\-\.\_]+(?:\s|$)/;//русское слово

    const wordError = [];
    const translationError = [];

    if (!regEng.test(String(wordSt))) {
        wordError.push('Введите слово английскими буквами');

    }

    if (!translationWord.match(regTranslation)) {
        translationError.push('Введите слово русскими буквами');

    }




    return (
        <>
            <tr className={styles.tr} >
                <td className={styles.td}>
                    <span className={styles.error}>{wordError}</span> {/*Здесь появится инф-я об ошибке*//*}
{openEditing ? (
<input
className={styles.inputWord}
type="text"
value={wordSt}
onChange={(e) => setWordSt(e.target.value)}
/>
) : (
word
)}
</td>
<td className={styles.td}>
{openEditing ? (
<input
type="text"
className={styles.inputWord}
value={transcriptionWord}
onChange={(e) => setTranscription(e.target.value)}
/>
) : (
transcription
)}
</td>
<td className={styles.td}>
<span className={styles.error}>{translationError}</span> {/*Здесь появится инф-я об ошибке*//*}
{openEditing ? (
    <input
        type="text"
        className={styles.inputWord}
        value={translationWord}
        onChange={(e) => setTranslationWord(e.target.value)}
    />
) : (
    translation
)}
</td>
<td className={styles.td}>
{openEditing ? (
    <button className={styles.btnSave}
        onClick={() => {
            setOpenEditing(false),
                handleSave({
                    id,
                    wordSt,
                    transcriptionWord,
                    translationWord
                })
        }
        }>
        <IoCheckmarkDoneCircle
            className={styles.doneImg}
        />
    </button>
) : (
    <BsFillPencilFill
        onClick={() => handleEditing(id)}
        className={styles.editingImg} disabled
    />
)}

<BsFillTrashFill
    onClick={() => handleRemove(id)}
    className={styles.removeImg}
/>
</td>
</tr>






</>
)
}

*/