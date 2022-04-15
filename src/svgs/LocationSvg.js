import React from "react";

const LocationSvg = (props) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='27'
            height='27'
            viewBox='0 0 27 27'
            fill={props.fill}
            stroke={props.fill}
            height={props.size}
        >
            <g id='Group_56' data-name='Group 56' transform='translate(-158.5 -536)'>
                <g id='Ellipse_14' transform='translate(162 539)' fill='none' strokeWidth='1'>
                    <circle cx='10' cy='10' r='10' stroke='none' />
                    <circle cx='10' cy='10' r='9.5' fill='none' />
                </g>
                <g id='Ellipse_15' transform='translate(168 545)' strokeWidth='1'>
                    <circle cx='4' cy='4' r='4' stroke='none' />
                    <circle cx='4' cy='4' r='3.5' fill='none' />
                </g>
                <line id='Line_17' x2='27' transform='translate(158.5 549.5)' fill='none' strokeWidth='1' />
                <line id='Line_18' x2='27' transform='translate(172 536) rotate(90)' fill='none' strokeWidth='1' />
            </g>
        </svg>
    );
};

export default LocationSvg;
