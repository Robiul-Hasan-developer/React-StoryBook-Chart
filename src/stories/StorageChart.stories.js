    import React from 'react';
    import StorageChart from './../charts/StorageChart';

    export default {
        title: 'Charts/StorageChart',
        component: StorageChart,
    };

    const Template = (args) => <StorageChart {...args} />;

    export const Basic = Template.bind({});

    Basic.args = {
        StorageChartoptions: {
            series: [60],
            chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#d4e0fb",
                    strokeWidth: '100%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        color: '#ddd',
                        opacity: 1,
                        blur: 0
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
                }
            },
            grid: {
                padding: {
                    top: -10
                }
            },
            labels: ['Average Results'],
        },
        height: "242",
        width: "214",
        usedStorage: 15.2,
        totalStorage: 50,
    };
