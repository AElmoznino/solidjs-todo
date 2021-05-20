interface InputProps {
  handleSubmit: (value: string) => void;
};

const Input = (props:InputProps) => {
  const handleChange = (e:any) => {
    console.log('E: ', e, 'VALUE: ', e.target.value)
    props.handleSubmit(e.target.value);
  }
  return <input type="text" onChange={e => handleChange(e)} />;
}

export default Input