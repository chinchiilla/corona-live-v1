import React from "react";

const ListSvg = (props) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' height={props.size} viewBox='0 0 23.385 19'>
            <path
                id='Icon_awesome-list'
                d='M3.654,17.99H.731A.731.731,0,0,0,0,18.721v2.923a.731.731,0,0,0,.731.731H3.654a.731.731,0,0,0,.731-.731V18.721A.731.731,0,0,0,3.654,17.99Zm0-14.615H.731A.731.731,0,0,0,0,4.106V7.029a.731.731,0,0,0,.731.731H3.654a.731.731,0,0,0,.731-.731V4.106A.731.731,0,0,0,3.654,3.375Zm0,7.308H.731A.731.731,0,0,0,0,11.413v2.923a.731.731,0,0,0,.731.731H3.654a.731.731,0,0,0,.731-.731V11.413A.731.731,0,0,0,3.654,10.683Zm19,8.038H8.038a.731.731,0,0,0-.731.731v1.462a.731.731,0,0,0,.731.731H22.654a.731.731,0,0,0,.731-.731V19.452A.731.731,0,0,0,22.654,18.721Zm0-14.615H8.038a.731.731,0,0,0-.731.731V6.3a.731.731,0,0,0,.731.731H22.654a.731.731,0,0,0,.731-.731V4.837A.731.731,0,0,0,22.654,4.106Zm0,7.308H8.038a.731.731,0,0,0-.731.731v1.462a.731.731,0,0,0,.731.731H22.654a.731.731,0,0,0,.731-.731V12.144A.731.731,0,0,0,22.654,11.413Z'
                transform='translate(0 -3.375)'
                fill={props.fill}
            />
        </svg>
    );
};

export default ListSvg;