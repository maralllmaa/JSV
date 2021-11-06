const Input = props => {
    return <input id={props.id} className="w-full mb-4 py-2 px-4 rounded-md border border-gray-300" placeholder={props.placeholder} onChange={props.onChange} type={props.type} value={props.value} />
}

export default Input;