const Button = props => {
    return <button onClick={props.onClick} className={`${props.typ === 'circle' ? 'w-8 h-8 rounded-full' : 'rounded-xl py-2 px-4'} border-2 border-${props.bg}-400 bg-${props.bg}-400 transition duration-300 hover:bg-opacity-100 hover:text-white font-bold bg-opacity-30 text-${props.bg}-400 flex justify-center items-center`}>
        {
            props.val
        }
    </button>
}

export default Button