import React from "react";

const ExitFullSvg = (props) => {
    return (
        <svg
            version='1.1'
            id='Capa_1'
            x='0px'
            y='0px'
            fill={props.fill}
            width={props.size}
            height={props.size}
            style={{ enableBackground: "new 0 0 357 357" }}
            viewBox='0 0 357 357'
        >
            <g>
                <g id='fullscreen-exit'>
                    <path
                        d='M0,280.5h76.5V357h51V229.5H0V280.5z M76.5,76.5H0v51h127.5V0h-51V76.5z M229.5,357h51v-76.5H357v-51H229.5V357z
                M280.5,76.5V0h-51v127.5H357v-51H280.5z'
                    />
                </g>
            </g>
        </svg>
    );
};

export default ExitFullSvg;
