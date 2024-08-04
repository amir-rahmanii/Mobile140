import React from 'react';

// get svg and show by name and styles
const getSVG = (name, styles) => {
    switch (name) {
        case "mobileIcon": {
            return (
                <g>
                    <path opacity="0.15" fill="#12509A" enableBackground="new    " d="M18.1,27.1c-0.1,0.1-7.6-0.3-7.6-0.3s-3-1-3.1-1.4   C7.2,25,6.9,2.1,6.9,2.1L13,0.7l7.4,0.9l0.3,21.7l-0.3,2.9L18.1,27.1z" /><path fill="#12509A" d="M20.2,0.2H7.8C7.2,0.2,6.7,1,6.7,1.9v24.2c0,0.9,0.5,1.6,1.1,1.6h12.4c0.6,0,1.1-0.7,1.1-1.6V1.9   C21.3,1,20.8,0.2,20.2,0.2z M20.2,24.7H7.9V3.3h12.3L20.2,24.7z M12.7,1.6h2.7c0.1,0,0.2,0.1,0.2,0.2s-0.1,0.2-0.2,0.2h-2.7   c-0.1,0-0.2-0.1-0.2-0.2S12.6,1.6,12.7,1.6z M15.3,26.5c0,0.2-0.1,0.3-0.2,0.3H13c-0.1,0-0.2-0.1-0.2-0.3V26c0-0.2,0.1-0.3,0.2-0.3   h2.1c0.1,0,0.2,0.1,0.2,0.3L15.3,26.5z" />
                </g>
            )
        }
    }
}


// svg props
const SvgItem = ({
    name = '',
    style = {},
    fill = '#000000',
    viewBox = '',
    className = '',
    stroke = ''
}) => (
    <svg
        style={style}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={viewBox}
    >
        {/* call getSVG */}
        {getSVG(name, { fill, stroke })}
    </svg>
);


export default SvgItem;
