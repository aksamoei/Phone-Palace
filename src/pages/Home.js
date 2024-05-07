import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import ItemCard from '../components/ItemCard';
import './Home.css';
import NavBar from '../components/NavBar';

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
