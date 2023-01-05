import { SearchBarCSS, SearchBarInputCSS } from "./styles";
import SVGSearch from "../../../resources/svg/Search.svg";

function SearchBar({onChange, onClick, placeholder, id, css}) {
    return (
        <SearchBarCSS css={css}>
            <input id="id" placeholder={placeholder} type={'text'} onChange={onChange} className={SearchBarInputCSS()} />
            <img alt="icon" src={SVGSearch} onClick={() => onClick(document.getElementById(id).value)} />
        </SearchBarCSS>
    );
}

export default SearchBar;