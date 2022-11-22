import LanguageMenu from '../LanguageMenu';
import SearchBar from '../SearchBar';
import BrandMenu from '../UserMenu';
import './index.css';
export default ({brand}: {brand: IBrand}) => {
  return (
    <div className="top-menu-container">
      <SearchBar />
      <LanguageMenu />
      <BrandMenu imageURL={brand.pic} name={brand.displayName} />
    </div>
  );
};
