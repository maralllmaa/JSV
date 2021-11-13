import Card from "./Card";
import ListItem from "./ListItem";
import Button from "./Button";
import {AiOutlineEdit} from 'react-icons/ai';
import {FaTimes} from 'react-icons/fa';

const UserList = props => {
    return <Card>
        <ul style={{width: '600px'}} className="flex flex-col gap-4">
            {
                props.data.map(el => (
                    <ListItem ner={el.username} key={`user--${el.id}`}>
                        <Button onClick={() => props.getEditData(el.id)} typ="circle" bg="green" val={<AiOutlineEdit />} />
                        <Button onClick={() => props.deleteUser(el.id)} typ="circle" bg="red" val={<FaTimes />} />
                    </ListItem>
                ))
            }
        </ul>
    </Card>
}
export default UserList;