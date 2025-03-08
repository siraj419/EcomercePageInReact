import './radioInput.css';

function RadioInput({textLabel, name, bgColor="", checked, onChange}) {
  return (
    <label className="container">
        <input className='input-radio'
               type="radio"
               checked={checked}
               onChange={()=>onChange(textLabel)}
               name={name}
        />
        <span className="checkmark" style={{background: bgColor}}></span>
        {textLabel}
    </label>
  )
}

export default RadioInput;