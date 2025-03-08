import { useContext } from "react";
import { PriceContext } from "../../store/store";
import RadioInput from "../../components/RadioInput/RadioInput";

function Price() {
  const {price, setPrice} = useContext(PriceContext);

  return (
    <section className='price-filter'>
      <h3>Price</h3>
      <RadioInput textLabel={"All"} name="price" onChange={setPrice} checked={price === "All"}/> 
      <RadioInput textLabel={"$0 - $50"} name="price" onChange={setPrice} checked={price === "$0 - $50"} /> 
      <RadioInput textLabel={"$50 - $100"} name="price" onChange={setPrice} checked={price === "$50 - $100"} /> 
      <RadioInput textLabel={"$100 - $150"} name="price" onChange={setPrice} checked={price === "$100 - $150"} /> 
      <RadioInput textLabel={"Over $150"} name="price" onChange={setPrice} checked={price === "Over $150"} />
    </section>
  )
}

export default Price;