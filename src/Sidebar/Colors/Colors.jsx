import { useContext } from "react";
import { ColorsContext } from "../../store/store";
import RadioInput from "../../components/RadioInput/RadioInput";

function Colors() {

  const {color, setColor} = useContext(ColorsContext);
  
  return (
    <section className='colors-filter'>
      <h3>Colors</h3>
      <RadioInput textLabel={"All"} name="colors" bgColor="#e5e5e5" onChange={setColor} checked={color === "All"}/> 
      <RadioInput textLabel={"Black"} name="colors" bgColor="black" onChange={setColor} checked={color === "Black"} /> 
      <RadioInput textLabel={"Blue"} name="colors" bgColor="blue" onChange={setColor} checked={color === "Blue"} /> 
      <RadioInput textLabel={"Red"} name="colors" bgColor="red" onChange={setColor} checked={color === "Red"} /> 
      <RadioInput textLabel={"Green"} name="colors" bgColor="green" onChange={setColor} checked={color === "Green"} />
      <RadioInput textLabel={"White"} name="colors" bgColor="white" onChange={setColor} checked={color === "White"} />
    </section>
  )
}

export default Colors;