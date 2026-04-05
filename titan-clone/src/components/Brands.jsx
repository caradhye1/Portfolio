import './Brands.css';
import mcdonaldsLogo from '../assets/MCdonalds.svg';
import disneyLogo from '../assets/Disney.svg';
import homeDepotLogo from '../assets/Home Depot.svg';
import krogerLogo from '../assets/Kroger.svg';
import starbucksLogo from '../assets/Starbucks.svg';
import adidasLogo from '../assets/Adidas.svg';
import mercedesLogo from '../assets/Mercedes benz.svg';
import upworkLogo from '../assets/Upwork.svg';

const brands = [
  { name: "McDonald's", logo: mcdonaldsLogo },
  { name: 'Disney', logo: disneyLogo },
  { name: 'The Home Depot', logo: homeDepotLogo },
  { name: 'Kroger', logo: krogerLogo },
  { name: 'Starbucks', logo: starbucksLogo },
  { name: 'Adidas', logo: adidasLogo },
  { name: 'Mercedes-Benz', logo: mercedesLogo },
  { name: 'Upwork', logo: upworkLogo },
];

export default function Brands() {
  // Duplicate the list for seamless looping
  const tickerItems = [...brands, ...brands];

  return (
    <section className="brands">
      <div className="brands-wrap">
        <p className="brands-eyebrow">Brands that have used my designs</p>
      </div>
      <div className="brands-ticker-container">
        <div className="brands-ticker">
          {tickerItems.map((brand, i) => (
            <div key={i} className="brand-ticker-item">
              <img src={brand.logo} alt={brand.name} className="brand-ticker-logo" />
              <span className="brand-ticker-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
