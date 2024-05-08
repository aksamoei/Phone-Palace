import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import ItemCard from '../components/ItemCard';
import './Home.css';
import FilterBrand from '../components/FilterBrand';

function Home({ phones }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterBrand, setFilterBrand] = useState("Select Brand");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleBrandFilter = (event) => {
        const selectedBrand = event.target.value;
        setFilterBrand(selectedBrand);
    };

    const filteredPhones = phones.filter(phone =>
        (searchQuery === '' || phone.phoneName.toLowerCase().includes(searchQuery)) &&
        (filterBrand === "Select Brand" || phone.brand === filterBrand)
    );

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
            <p className="description">
                PhonePalace is your one-stop destination for buying the latest smartphones online. Whether you're an Android
                enthusiast, an iPhone aficionado, or a tech-savvy individual, we have the perfect device for you. Browse our
                extensive collection of smartphones, explore the latest models from top brands, and experience the convenience
                of shopping for your next phone from the comfort of your home.
            </p>
            <h1>Start Shopping at PhonesPalace</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search Phones..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <FaSearch className="search-icon" /> {/* Search icon */}
            </div>
            <div className='filter-container'>
                <FilterBrand handleBrandFilter={handleBrandFilter} filterBrand={filterBrand}/>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredPhones.length > 0 ? (
                    filteredPhones.map(phone => (
                        <ItemCard key={phone.id} item={phone}/>
                    ))
                ) : (
                    <p>No phones match the selected criteria.</p>
                )}
            </div>
        </div>
    );
}

export default Home;
