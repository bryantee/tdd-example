import React from 'react';

type Props = {
    speed?: 'slow' | 'medium' | 'fast'
}

export const BeerIcon: React.FC<Props> = (props) => {
    return (
        <p className={`Icon ${props.speed ?? ''}`.trim()} data-testid="beer" >🍺</p>
    );
}

