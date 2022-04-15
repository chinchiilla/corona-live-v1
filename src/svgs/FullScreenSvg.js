import React from "react";

const FullScreenSvg = (props) => {
    return (
        <svg
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 469.333 469.333'
            style={{ enableBackground: "new 0 0 469.333 469.333" }}
            fill={props.fill}
            width={props.size}
            height={props.size}
        >
            <g>
                <g>
                    <g>
                        <path
                            d='M160,0H10.667C4.771,0,0,4.771,0,10.667V160c0,5.896,4.771,10.667,10.667,10.667H32c5.896,0,10.667-4.771,10.667-10.667
                   V42.667H160c5.896,0,10.667-4.771,10.667-10.667V10.667C170.667,4.771,165.896,0,160,0z'
                        />
                        <path
                            d='M458.667,0H309.333c-5.896,0-10.667,4.771-10.667,10.667V32c0,5.896,4.771,10.667,10.667,10.667h117.333V160
                   c0,5.896,4.771,10.667,10.667,10.667h21.333c5.896,0,10.667-4.771,10.667-10.667V10.667C469.333,4.771,464.563,0,458.667,0z'
                        />
                        <path
                            d='M458.667,298.667h-21.333c-5.896,0-10.667,4.771-10.667,10.667v117.333H309.333c-5.896,0-10.667,4.771-10.667,10.667
                   v21.333c0,5.896,4.771,10.667,10.667,10.667h149.333c5.896,0,10.667-4.771,10.667-10.667V309.333
                   C469.333,303.437,464.563,298.667,458.667,298.667z'
                        />
                        <path
                            d='M160,426.667H42.667V309.333c0-5.896-4.771-10.667-10.667-10.667H10.667C4.771,298.667,0,303.437,0,309.333v149.333
                   c0,5.896,4.771,10.667,10.667,10.667H160c5.896,0,10.667-4.771,10.667-10.667v-21.333
                   C170.667,431.438,165.896,426.667,160,426.667z'
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default FullScreenSvg;
