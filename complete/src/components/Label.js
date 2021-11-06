const Label = props => {
    return <label htmlFor={props.htmlFor} className="font-bold">
        {
            props.label
        }
    </label>
}

export default Label