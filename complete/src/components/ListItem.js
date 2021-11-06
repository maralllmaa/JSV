const ListItem = props => {
    return <li className="py-2 px-4 flex justify-between items-center rounded-md bg-gray-100">
        <p>
            {props.ner}
        </p>
        <div className="flex gap-4">
            {props.children}
        </div>
    </li>
}

export default ListItem