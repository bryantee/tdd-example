import React from 'react';
import './App.css';
import {BeerIcon} from "./components/BeerIcon";

function App() {
    const [beerCount, setBeerCount] = React.useState<number>(0)

    const upBeerCount = () => setBeerCount(prevCount => prevCount += 1)

    const beers = Array.from(new Array(beerCount)).map((_beer, index) => <ul key={index}> <BeerIcon speed={calculateSpin(index + 1)}/></ul>)

    return (
        <div className="App">
            <header className="App-header">
                <h1>Bartender™️</h1>
                <button onClick={upBeerCount}>Beer me</button>
                {
                    beerCount > 47 ?
                        <p>You have been 86'ed</p>
                        :
                <ul style={{margin: '16px', flexDirection: "row", display: 'flex', flexWrap: 'wrap'}}>
                    {beers}
                </ul>
                }
            </header>
        </div>
    );
}

export default App;


function calculateSpin(count: number): 'slow' | 'medium' | 'fast' | undefined {
    if (count > 1 && count < 5) {
        return 'slow';
    }

    if (count >= 5 && count < 8) {
        return 'medium'
    }

    if (count >= 8) {
        return 'fast'
    }

    return undefined;
}