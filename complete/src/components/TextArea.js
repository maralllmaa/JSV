const TextArea = (props) => {
  return <textarea id={props.id} placeholder={props.placeholder} onChange={props.onChange} rows="3" className="w-full py-2 px-4 mb-4 rounded-md border border-gray-300"></textarea>;
};

export default TextArea;