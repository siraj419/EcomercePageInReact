import './nav.css';
import SearchBar from '../components/SearchBar/SearchBar';
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CiUser } from "react-icons/ci";

function Nav() {
    return (
        <nav>
            <div className='container'>
                <SearchBar />
                <div className='icons'>
                    <CiHeart className='icon'/>
                    <LuShoppingCart className='icon' />
                    <CiUser className='icon' />
                </div>
            </div>
        </nav>
    )
}

export default Nav;