import "../components/FirstPartStyles.css";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

const FirstPart = () => {
  return (
    <div className="firstPart">
        <div className="logo">
            <img src="/artchick-photography-logo.webp" alt="logo"/>
        </div>
        <div className="searchBar">
          <div className="search">
            <SearchIcon />
            <input type="text" placeholder="Search here"/>
          </div>
          <div className="filter">
            <TuneIcon />
            <h3>Filters</h3>
          </div>
        </div>
        <div className="seller">
          <h3>Become a seller</h3>
        </div>
    </div>
  )
}

export default FirstPart