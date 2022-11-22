import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.css";
export default () => {
    return (<div className='searchbar-container' >
        <FontAwesomeIcon icon={faSearch} />
        <input className='searchbar-input' placeholder='Search' />


    </div>)
}