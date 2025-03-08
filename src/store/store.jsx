import { createContext, useEffect, useState} from "react";
import data from "../db/data";


const BrandContext = createContext(
{
    brand: 'All Products',
    setBrand: () => {}
});
const CategoryContext = createContext({
    category: 'All',
    setCategory: () => {}
});
const PriceContext = createContext({
    price: 'All',
    setCategory: () => {}
});
const ColorsContext = createContext({
    color: 'All',
    setColor: () => {}
});
const SearchContext = createContext({
    search: '',
    setSearch: () => {}
});
const DataContext = createContext([]);


function ContextProvider({children}) {
    const [brand, setBrand] = useState('All Products');
    const [category, setCategory] = useState('All');
    const [price, setPrice] = useState('All');
    const [color, setColor] = useState('All');
    const [search, setSearch] = useState('');
    const [newData, setNewData] = useState(data);

    useEffect(()=>{

        setNewData(data.filter((product)=>{

            let lowerPrice = 0, upperPrice = 0;
            switch(price){
                case '$0 - $50':
                    lowerPrice = 0;
                    upperPrice = 50;
                    break;
                case '$50 - $100':
                    lowerPrice = 50;
                    upperPrice = 100;
                    break;
                case '$100 - $150':
                    lowerPrice = 100;
                    upperPrice = 150;
                    break;
                case 'Over $150':
                    lowerPrice = 151;
                    upperPrice = 10000000;
                    break;
            }

            return (category === "All" || category.toLowerCase() === product.category) &&
                   (color    === "All" || color.toLowerCase()    === product.color)    &&
                   (brand === "All Products" || brand === product.company) &&
                   (price    === "All" || (lowerPrice <= parseInt(product.newPrice) && parseInt(product.newPrice) <= upperPrice)) &&
                   (product.title.toLowerCase().startsWith(search.toLowerCase()))
        }))
    }, [category, color, price, brand, search]);

    return <BrandContext.Provider value={{brand, setBrand}}>
                <CategoryContext.Provider value={{category, setCategory}}>
                    <PriceContext.Provider value={{price, setPrice}}>
                        <ColorsContext.Provider value={{color, setColor}}>
                            <SearchContext.Provider value={{search, setSearch}}>
                                <DataContext.Provider value={newData}>
                                    {children}
                                </DataContext.Provider>
                            </SearchContext.Provider>      
                        </ColorsContext.Provider>
                    </PriceContext.Provider>
                </CategoryContext.Provider>
            </BrandContext.Provider>
}

export {
    DataContext,
    BrandContext,
    CategoryContext,
    PriceContext,
    ColorsContext,
    SearchContext,
    ContextProvider
};
