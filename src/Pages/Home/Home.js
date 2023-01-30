import React from 'react';
import PopularAreas from './PopularAreas';
import PopularTabs from './PopularTabs';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <PopularAreas />
            <PopularTabs />
        </div>
    );
};

export default Home;