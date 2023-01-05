import { FlexContainer } from "../../../containers/FlexContainer";
import { CategoriesCategoryCSS, CategoriesTotalCSS } from "./styles";

function CategoriesItem({ category, total, focus, action }) {
    var colorFocus = focus ? '$Magenta' : '';
    var fontWeight = focus ? 600 : 400;

    return (
        <FlexContainer css={{ justifyContent: 'space-between', marginTop: 5 }} onClick={() => action()}>
            <CategoriesCategoryCSS css={{ color: colorFocus, fontWeight: fontWeight }}> {category} </CategoriesCategoryCSS>
            <CategoriesTotalCSS css={{ color: colorFocus }}> {total} </CategoriesTotalCSS>
        </FlexContainer>
    );
}

export default CategoriesItem;