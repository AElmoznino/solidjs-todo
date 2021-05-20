import { createSignal } from "solid-js";

interface InputProps {
  handleSubmit: (value: string) => void;
};

const Input = (props:InputProps) => {
  const [value, setValue] = createSignal("");
  const handleChange = (e:any) => {
    if (e.key === "Enter") {
      props.handleSubmit(value());
    } else {
      setValue(e);
    }
  }
  return <input type="text" onChange={e => handleChange(e)} />;
}

export default Input