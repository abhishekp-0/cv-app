import "../styles/Form.css";

function ListItem({item}){
    return(<div className="item">
        {item.title}
    </div>);
}

export default function WorkEduList({ItemsList}){
    console.log(ItemsList);

    return(<div className="itemList">
        {ItemsList.map((item)=><ListItem item={item} key={item.title}/>) }
    </div>);
}