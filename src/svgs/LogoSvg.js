import React from "react";
import PropTypes from "prop-types";

const LogoSvg = (props) => {
    return (
        <svg
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 97.713 97.713'
            style={{ enableBackground: "new  0 0 97.713 97.713" }}
            width={props.size}
            height={props.size}
            fill={props.fill}
        >
            <g>
                <path
                    d='M48.855,0C29.021,0,12.883,16.138,12.883,35.974c0,5.174,1.059,10.114,3.146,14.684
           c8.994,19.681,26.238,40.46,31.31,46.359c0.38,0.441,0.934,0.695,1.517,0.695s1.137-0.254,1.517-0.695
           c5.07-5.898,22.314-26.676,31.311-46.359c2.088-4.57,3.146-9.51,3.146-14.684C84.828,16.138,68.69,0,48.855,0z M48.855,54.659
           c-10.303,0-18.686-8.383-18.686-18.686c0-10.304,8.383-18.687,18.686-18.687s18.686,8.383,18.686,18.687
           C67.542,46.276,59.159,54.659,48.855,54.659z'
                />
            </g>
        </svg>
    );
};

LogoSvg.propTypes = {};

export default LogoSvg;
