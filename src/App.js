import React from 'react'
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';


const App = () => {
    return (
        <div>
            <h1>Trip advisor</h1>
            <Header />
            <List />
            <Map />
            <PlaceDetails />
        </div>
    );
}

export default App;