import './filterbutton.css';

function FilterButton({text, clicked=false, onClick}) {
  const styles = clicked ? {color: 'black'} : {};
  return (
    <button 
      className='filter-button'
      onClick={() => onClick(text)}
      style={styles}
    >
        {text}
    </button>
  )
}

export default FilterButton;