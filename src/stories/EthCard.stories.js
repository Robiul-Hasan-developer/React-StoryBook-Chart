
import React from 'react';
import EthCard from './../card/EthCard';

export default {
    title: "Charts/EthCard",
    Component: EthCard
}

const Template = (args) => <EthCard {...args} />; 

export const Basic = Template.bind({});

Basic.args = {
    title: 'Colorful Heaven',
    designation: 'Mark Benjamin',
    ETHQty: '1.30',
    time: '30s'
}
