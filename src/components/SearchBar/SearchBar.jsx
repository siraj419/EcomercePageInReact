import './searchbar.css';
import { useContext } from 'react';
import { SearchContext } from '../../store/store';


function SearchBar() {
    const {search, setSearch} = useContext(SearchContext);
    return (
        <div>
            <input 
                className='input-search'
                type="text" 
                placeholder='Search Your Shoes...'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar