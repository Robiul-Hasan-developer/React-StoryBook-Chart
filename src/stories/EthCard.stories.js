
import React from 'react';
import EthCard from './../card/EthCard';

export default {
    title: "Charts/EthCard",
    Component: EthCard
}

const Template = (args) => <EthCard {...args} />; 

export const Basic = Template.bind({});

Basic.args = {
    
}
