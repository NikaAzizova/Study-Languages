import Table from "../../Components/Table/Table";

export default function TablePage(props){
    const wordDictionary = props.wordDictionary;
    const setWordDictionary = props.setWordDictionary;
    return(
        <div>
            <Table wordDictionary={wordDictionary} setWordDictionary={setWordDictionary}/>
        </div>
    )
}