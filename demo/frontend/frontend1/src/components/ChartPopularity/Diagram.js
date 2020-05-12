import React from 'react';
import Chart from 'react-google-charts';

export default function Diagram() {
return(

<Chart
    width={'100%'}
    height={'100%'}
    chartType="GeoChart"
    data={[
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700],
        ['Spain', 1000],
        ['Portugal', 450],
        ['Australia', 700],
        ['Egypt', 600],
        ['Japan', 900],
        ['Dubai', 800],
        ['France', 360],
        ['Tanzania', 400],
        ['Turkey', 500],
        ['Italy', 500],
        ['Croatia', 300],
        ['Macedonia', 600],
        ['Iraq', 800],
    ]}
/>
);
}