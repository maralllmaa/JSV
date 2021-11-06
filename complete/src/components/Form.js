const Form = props => {
    return <form className='w-96 flex w-full flex-col' onSubmit={props.onSubmit}>
        {
            props.children
        }
    </form>
}

export default Form;