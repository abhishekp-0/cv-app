import "../styles/Form.css";

function ListItem({item, index, onEdit}){
    return(
        <div className="item" onClick={() => onEdit(index)}>
            {item.title}
        </div>
    );
}

export default function WorkEduList({ItemsList, handleEdit,}) {
    console.log(ItemsList);    
    return(<div className="itemList">
        {ItemsList.map((item, index)=>
            <ListItem 
                item={item} 
                key={index}
                index={index}
                onEdit={handleEdit}
            />
        )}
    </div>);
}