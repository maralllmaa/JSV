const Form = props => {
    return <form className='w-96' onSubmit={props.onSubmit}>
        {
            props.children
        }
    </form>
}

export default Form;