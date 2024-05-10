import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import ItemCard from '../components/ItemCard';
import './Home.css';
import NavBar from '../components/NavBar';

function Home({ phones}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterBrand, setFilterBrand] = useState("Select Brand");


    function handleBrandFilter(event){
      setFilterBrand(event.target.value);
    }
    

   
    const filteredPhones = phones.filter(phone =>
      phone.phoneName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterBrand === "Select Brand" || phone.brand === filterBrand)
    );
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
    

    useEffect(() => {
        const description = document.querySelector('.description');
        const text = description.textContent;
        description.textContent = '';
    
        // Create a span for each letter and apply animation delay
        for (let i = 0; i < text.length; i++) {
          const span = document.createElement('span');
          span.textContent = text[i];
          span.style.animationDelay = `${i * 0.1}s`; // Adjust delay for desired speed
          description.appendChild(span);
        }
      }, []);
  
  return (
    <div>

      <div className='header'>
      <p className="description">
        PhonePalace is your one-stop destination for buying the latest smartphones online. Whether you're an Android
        enthusiast, an iPhone aficionado, or a tech-savvy individual, we have the perfect device for you. 
      </p>
      <h1>Start Shopping at PhonesPalace</h1>
      </div>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Phones..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <FaSearch className="search-icon" /> {/* Search icon */}
        <select id="brandSelect" value={filterBrand} onChange={handleBrandFilter}>
                    <option value="Select Brand">Select Brand</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Google">Google</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="Sony">Sony</option>
                    <option value="Huawei">Huawei</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Realme">Realme</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Asus">Asus</option>
                    <option value="Nokia">Nokia</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="BlackBerry">BlackBerry</option>
                </select>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredPhones.map(phone => (
          <ItemCard key={phone.id} item={phone}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
