const Card = props => {
    return <div className="p-4 w-max bg-white rounded-xl">
        {
            props.children
        }
    </div>
}

export default Card