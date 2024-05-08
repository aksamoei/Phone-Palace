import React from "react";

function FilterBrand({handleBrandFilter, filterBrand}){
    return(
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
    );
}

export default FilterBrand;