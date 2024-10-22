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
        case "instaIcon": {
            return (
                <>
                    <defs>
                        <linearGradient id="linear-gradient" x1="0.5" y1="0.008" x2="0.5" y2="0.998" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#e09b3d"></stop>
                            <stop offset="0.3" stopColor="#c74c4d"></stop>
                            <stop offset="0.6" stopColor="#c21975"></stop>
                            <stop offset="1" stopColor="#7024c4"></stop>
                        </linearGradient>
                        <linearGradient id="linear-gradient-2" y1="-0.451" y2="1.462" xlinkHref="#linear-gradient"></linearGradient>
                        <linearGradient id="linear-gradient-3" y1="-1.396" y2="6.586" xlinkHref="#linear-gradient"></linearGradient>
                    </defs>
                    <path id="Path_236" data-name="Path 236" d="M14.042,0H5.958A5.965,5.965,0,0,0,0,5.958v8.084A5.965,5.965,0,0,0,5.958,20h8.084A5.965,5.965,0,0,0,20,14.042V5.958A5.965,5.965,0,0,0,14.042,0Zm3.946,14.042a3.946,3.946,0,0,1-3.946,3.946H5.958a3.946,3.946,0,0,1-3.946-3.946V5.958A3.946,3.946,0,0,1,5.958,2.012h8.084a3.946,3.946,0,0,1,3.946,3.946v8.084Z" fill="url(#linear-gradient)"></path>
                    <path id="Path_237" data-name="Path 237" d="M138.173,133a5.173,5.173,0,1,0,5.173,5.173A5.179,5.179,0,0,0,138.173,133Zm0,8.333a3.161,3.161,0,1,1,3.161-3.161A3.161,3.161,0,0,1,138.173,141.333Z" transform="translate(-128.173 -128.173)" fill="url(#linear-gradient-2)"></path>
                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="1.239" cy="1.239" r="1.239" transform="translate(13.943 3.627)" fill="url(#linear-gradient-3)"></circle>
                </>
            )
        }
        case "aparatIcon": {
            return (
                <>
                    <path id="Path_7518" data-name="Path 7518" d="M13.18,19.954,1.972,16.529A2.685,2.685,0,0,1,.19,13.176L3.61,1.972A2.685,2.685,0,0,1,6.964.19L18.172,3.61a2.685,2.685,0,0,1,1.782,3.353L16.529,18.172A2.683,2.683,0,0,1,13.18,19.954Z" transform="translate(-0.072 -0.072)"></path>
                    <circle id="Ellipse_7" data-name="Ellipse 7" cx="8.545" cy="8.545" r="8.545" transform="translate(1.455 1.455)" fill="#ef3087" stroke="#fff" strokeMiterlimit="10" strokeWidth="1"></circle>
                    <circle id="Ellipse_8" data-name="Ellipse 8" cx="1.07" cy="1.07" r="1.07" transform="translate(8.93 8.93)" fill="#fcfcfc"></circle>
                    <path id="Path_7519" data-name="Path 7519" d="M94.125,95.51a2.4,2.4,0,1,1,2.893-1.782A2.406,2.406,0,0,1,94.125,95.51Zm6.755,1.6a2.4,2.4,0,1,1,2.893-1.782A2.406,2.406,0,0,1,100.881,97.115Zm-8.364,5.146a2.4,2.4,0,1,1,2.893-1.782A2.406,2.406,0,0,1,92.517,102.262Zm6.755,1.609a2.4,2.4,0,1,1,2.893-1.782A2.406,2.406,0,0,1,99.272,103.87Z" transform="translate(-87.256 -87.352)" fill="#fcfcfc"></path>
                </>
            )
        }
        case "priceIcon": {
            return (
                <>
                    <path data-name="Path 251" d="M1.292 15h28.781l1.619 1.7v7.361l-9.6.5-1.9 3.629 1.9 3.459 9.821.614-.949 6.863h-28.4l-1.507-1.4z" fill="#e63939"></path>
                    <path data-name="Rectangle 77" d="M24.292 24h12v5a3 3 0 01-3 3h-9a4 4 0 01-4-4 4 4 0 014-4z" fill="#bfbfbf"></path>
                    <circle data-name="Ellipse 7" cx="3" cy="3" r="3" transform="translate(12.292 1)" fill="#bfbfbf"></circle>
                    <g data-name="Group 56">
                        <g data-name="Group 55">
                            <path data-name="Path 223" d="M33.594 9.219h-4.57a.781.781 0 000 1.563h4.57a1.721 1.721 0 011.719 1.719v8.918a1.854 1.854 0 01-1.852 1.852h-.8v-5.767a3.285 3.285 0 00-3.286-3.285H17.852v-2.383a.781.781 0 00-1.562 0v2.383H3.281a1.719 1.719 0 110-3.437h5.17a.781.781 0 000-1.563h-5.17A3.285 3.285 0 000 12.5V36.719A3.285 3.285 0 003.281 40h30.313a3.285 3.285 0 003.281-3.281V12.5a3.285 3.285 0 00-3.281-3.281zm-2.5 27.5a1.72 1.72 0 01-1.683 1.718H3.281a1.721 1.721 0 01-1.719-1.719V15.294a3.262 3.262 0 001.719.488h26.094a1.721 1.721 0 011.719 1.719v5.767h-7.032a4.844 4.844 0 000 9.688h7.031zm4.219 0a1.721 1.721 0 01-1.719 1.719h-1.425a3.261 3.261 0 00.487-1.718v-3.764h.469a3.729 3.729 0 002.187-.707zm0-7.513a2.19 2.19 0 01-2.187 2.188h-9.064a3.281 3.281 0 010-6.562h9.4a3.393 3.393 0 001.852-.548z"></path>
                        </g>
                    </g>
                    <g data-name="Group 58">
                        <g data-name="Group 57">
                            <path data-name="Path 224" d="M22.578 5.091a3.671 3.671 0 103.671 3.671 3.675 3.675 0 00-3.671-3.671zm0 5.779a2.108 2.108 0 112.108-2.108 2.111 2.111 0 01-2.108 2.108z"></path>
                        </g>
                    </g>
                    <g data-name="Group 60">
                        <g data-name="Group 59">
                            <path data-name="Path 225" d="M15 0a3.671 3.671 0 103.671 3.671A3.675 3.675 0 0015 0zm0 5.779a2.108 2.108 0 112.108-2.108A2.111 2.111 0 0115 5.779z"></path>
                        </g>
                    </g>
                    <g data-name="Group 62">
                        <g data-name="Group 61">
                            <path data-name="Path 226" d="M28.334 1.302h-.443V.858a.781.781 0 00-1.562 0v.444h-.443a.781.781 0 000 1.562h.443v.443a.781.781 0 001.563 0v-.443h.443a.781.781 0 100-1.562z"></path>
                        </g>
                    </g>
                    <g data-name="Group 64">
                        <g data-name="Group 63">
                            <path data-name="Path 227" d="M12.474 7.637a.781.781 0 00-.781.781v3.169a.781.781 0 001.563 0V8.418a.781.781 0 00-.782-.781z"></path>
                        </g>
                    </g>
                    <g data-name="Group 66">
                        <g data-name="Group 65">
                            <path data-name="Path 228" d="M25.09 27.657a.781.781 0 10.229.552.789.789 0 00-.229-.552z"></path>
                        </g>
                    </g>
                    <g data-name="Group 68">
                        <g data-name="Group 67">
                            <path data-name="Path 229" d="M5.182 20.312a.781.781 0 00-.781.781v6.432a.781.781 0 101.563 0v-6.432a.781.781 0 00-.782-.781z"></path>
                        </g>
                    </g>
                    <g data-name="Group 70">
                        <g data-name="Group 69">
                            <path data-name="Path 230" d="M5.735 29.67a.781.781 0 10.229.552.786.786 0 00-.229-.552z"></path>
                        </g>
                    </g>

                </>
            )
        }
        case "originalIcon": {
            return (
                <>
                    <path data-name="Path 246" d="M7.18 24.784l4.351 2.591h2.661L7.54 39.179l-1.76-4.851-5.022 1.116z" fill="#e63939"></path>
                    <circle data-name="Ellipse 4" cx="9" cy="9" r="9" transform="translate(6.18 4.784)" fill="#bfbfbf"></circle>
                    <g data-name="Group 46">
                        <g data-name="Group 45">
                            <path data-name="Path 218" d="M29.724 35.089L26.437 29.4a.781.781 0 10-1.353.781l2.347 4.065-3.309-.878a.781.781 0 00-.955.552l-.886 3.28-5.088-8.813a2.53 2.53 0 002.538-.933l.912-1.2a.949.949 0 01.71-.374l1.5-.074a2.5 2.5 0 002.349-2.091l.257-1.509a.949.949 0 01.452-.658l1.307-.776a2.5 2.5 0 001.11-2.93l-.472-1.467a.949.949 0 01.1-.789l.806-1.311a2.5 2.5 0 00-.377-3.107l-1.091-1.074a.949.949 0 01-.281-.745l.109-1.535a2.5 2.5 0 00-1.781-2.585l-1.444-.435a.949.949 0 01-.6-.532l-.6-1.394A2.527 2.527 0 0019.902 1.4l-1.465.288a.948.948 0 01-.78-.193L16.489.554a2.527 2.527 0 00-3.158 0l-1.166.946a.949.949 0 01-.78.193L9.92 1.4a2.528 2.528 0 00-2.79 1.466l-.6 1.4a.949.949 0 01-.6.532l-1.444.435a2.5 2.5 0 00-1.784 2.581l.109 1.535a.949.949 0 01-.281.745l-1.091 1.074a2.5 2.5 0 00-.377 3.107l.806 1.311a.949.949 0 01.1.789l-.472 1.467a2.5 2.5 0 001.11 2.93l1.307.776a.949.949 0 01.452.658l.257 1.509a2.5 2.5 0 001.08 1.675l-5.6 9.7a.781.781 0 00.877 1.146l4.374-1.16 1.174 4.347a.781.781 0 001.431.187l5.114-8.858a.781.781 0 10-1.353-.781L7.548 37.2l-.887-3.282a.781.781 0 00-.955-.552l-3.309.878 4.865-8.426 1.206.06a.949.949 0 01.71.374l.913 1.2a2.526 2.526 0 002.009.99 2.49 2.49 0 001.055-.233l1.353-.632a.949.949 0 01.362-.087l7 12.12a.781.781 0 001.431-.187l1.174-4.347 4.374 1.16a.781.781 0 00.877-1.146zm-15.877-8.928l-1.353.632a.956.956 0 01-1.159-.286l-.913-1.2a2.507 2.507 0 00-1.876-.989l-1.5-.075a.945.945 0 01-.89-.79l-.254-1.51A2.509 2.509 0 004.707 20.2l-1.305-.771a.946.946 0 01-.42-1.108l.472-1.467a2.51 2.51 0 00-.252-2.086l-.806-1.311a.946.946 0 01.143-1.175l1.091-1.074a2.509 2.509 0 00.743-1.969L4.261 7.7a.945.945 0 01.674-.978l1.444-.435a2.508 2.508 0 001.58-1.406l.6-1.4a.957.957 0 01.875-.572.937.937 0 01.18.017l1.465.288a2.508 2.508 0 002.063-.511l1.166-.942a.956.956 0 011.194 0l1.166.942a2.507 2.507 0 002.063.511l1.471-.28a.957.957 0 011.055.555l.6 1.394a2.508 2.508 0 001.585 1.407l1.444.435a.945.945 0 01.674.978l-.109 1.535a2.509 2.509 0 00.743 1.969l1.091 1.074a.946.946 0 01.142 1.175l-.806 1.31a2.51 2.51 0 00-.252 2.086l.472 1.467a.946.946 0 01-.42 1.108l-1.307.776a2.509 2.509 0 00-1.194 1.739l-.257 1.509a.945.945 0 01-.89.79l-1.5.074a2.507 2.507 0 00-1.876.989l-.912 1.2a.956.956 0 01-1.159.286l-1.353-.632a2.508 2.508 0 00-2.126.003z" ></path>
                        </g>
                    </g>
                    <g data-name="Group 48">
                        <g data-name="Group 47">
                            <path data-name="Path 219" d="M14.812 4.784a9.631 9.631 0 109.631 9.631 9.642 9.642 0 00-9.631-9.631zm0 17.7a8.069 8.069 0 118.069-8.069 8.078 8.078 0 01-8.069 8.069z"></path>
                        </g>
                    </g>

                </>
            )
        }
        case "experesIcon": {
            return (
                <>
                    <path data-name="Rectangle 66" fill="#e63939" d="M5.542.649h18v20h-18z" ></path>
                    <path data-name="Path 261" d="M29.542 15.649l3.416.2.528 7.891 8.188 1.119-.132 5.79h-12z" fill="#bfbfbf" ></path>
                    <circle data-name="Ellipse 3" cx="3" cy="3" r="3" transform="translate(29.542 33.649)" fill="#e63939" ></circle>
                    <circle data-name="Ellipse 2" cx="3" cy="3" r="3" transform="translate(5.542 33.649)" fill="#e63939" ></circle>
                    <g data-name="Group 72">
                        <g data-name="Group 71">
                            <path data-name="Path 231" d="M42.077 22.479l-3.372-3.372-3.984-3.983a.826.826 0 00-.584-.242h-4.381v-4.288a2.964 2.964 0 00-2.961-2.961h-1.833V.827A.827.827 0 0024.135 0H5.621a.827.827 0 00-.827.827v6.807H2.961A2.964 2.964 0 000 10.594v24.612a.827.827 0 00.827.827h3.664v.165a3.779 3.779 0 00.668 2.149H.827a.827.827 0 000 1.653H13.8a.827.827 0 000-1.653h-2.38a3.8 3.8 0 10-6.47-3.968h-3.3v-2.81h39.016v2.81h-4.927a3.8 3.8 0 00-6.682.011.831.831 0 00-.127-.011H15.346a.827.827 0 100 1.653H28.6v.165a3.78 3.78 0 00.668 2.149h-5.282a.827.827 0 000 1.653h13.953a.827.827 0 000-1.653h-2.4a3.78 3.78 0 00.668-2.149v-.165h5.294a.827.827 0 00.827-.827V23.063a.827.827 0 00-.251-.584zM8.288 34.049a2.149 2.149 0 11-2.149 2.149 2.152 2.152 0 012.149-2.149zm-1.841-32.4h16.862v16.866a1.82 1.82 0 01-1.818 1.818H8.266a1.82 1.82 0 01-1.818-1.818zM28.1 29.85H1.653V10.594a1.309 1.309 0 011.308-1.308h1.833v9.228a3.475 3.475 0 003.472 3.472H21.49a3.475 3.475 0 003.472-3.472V9.287h1.833a1.309 1.309 0 011.305 1.308zm4.3 8.5a2.149 2.149 0 112.151-2.149 2.151 2.151 0 01-2.151 2.146zm1.364-21.812h.027l3.157 3.157-3.086 3.086a1.561 1.561 0 01-.1-.542zm6.9 13.315H29.756V16.535h2.358v5.7a3.229 3.229 0 003.226 3.226h5.327zm0-6.042h-5.325c-.053 0-.106 0-.158-.008l2.94-2.94 2.546 2.545z" ></path>
                        </g>
                    </g>
                    <g data-name="Group 74">
                        <g data-name="Group 73">
                            <path data-name="Path 232" d="M21.18 38.347h-.011a.827.827 0 100 1.653h.011a.827.827 0 100-1.653z"></path>
                        </g>
                    </g>
                    <g data-name="Group 76">
                        <g data-name="Group 75">
                            <path data-name="Path 233" d="M18.845 4.017a.827.827 0 00-.827.827v2.761a3.141 3.141 0 11-6.282 0V4.844a.827.827 0 00-1.653 0v2.761a4.794 4.794 0 109.588 0V4.844a.827.827 0 00-.826-.827z" ></path>
                        </g>
                    </g>
                    <g data-name="Group 78">
                        <g data-name="Group 77">
                            <path data-name="Path 234" d="M20.227 24.298h-9.812a.827.827 0 000 1.653h9.813a.827.827 0 000-1.653z" ></path>
                        </g>
                    </g>
                    <g data-name="Group 80">
                        <g data-name="Group 79">
                            <path data-name="Path 235" d="M7.842 24.54a.826.826 0 10.242.584.833.833 0 00-.242-.584z"></path>
                        </g>
                    </g>
                </>
            )
        }
        case "telephonIcon": {
            return (
                <>
                    <path data-name="Path 250" d="M6.951 28.532h6.095l1.116 3.262 2.79 1.03 2.962-1.03 1.073-3.262h5.451l4.807 2.447 1.969 4.163v3.642h-32v-4.2l1.745-3.391z" fill="#e63939" ></path>
                    <path data-name="Path 260" d="M9.788 8.666l3.606-3.276 3.53-.914 4.648 1.32 3 3.606.686 4.241-4.9-2.286-4.17 2.033-6.974.394z" fill="#bfbfbf"></path>
                    <path data-name="Rectangle 67" fill="#bfbfbf" d="M16.214 20.784h4v2h-4z"></path>
                    <path data-name="Rectangle 68" fill="#bfbfbf" d="M25.214 10.784h3v9h-3z"></path>
                    <path data-name="Rectangle 69" fill="#bfbfbf" d="M6.214 10.784h3v9h-3z"></path>
                    <g data-name="Group 24">
                        <g data-name="Group 23">
                            <path data-name="Path 207" d="M20.614 16.103a.894.894 0 10.895.894.9.9 0 00-.895-.894z"></path>
                        </g>
                    </g>
                    <g data-name="Group 26">
                        <g data-name="Group 25">
                            <path data-name="Path 208" d="M13.599 16.103a.895.895 0 10.895.894.9.9 0 00-.895-.894z"></path>
                        </g>
                    </g>
                    <g data-name="Group 28">
                        <g data-name="Group 27">
                            <path data-name="Path 209" d="M25.768 27.573a2.856 2.856 0 00.327-1.329v-5.572H27.826a1.626 1.626 0 001.184-.513 4.692 4.692 0 000-9.383 1.625 1.625 0 00-1.084-.508A10.831 10.831 0 0017.12 0h-.026a10.831 10.831 0 00-10.8 10.271 1.625 1.625 0 00-1.084.507 4.692 4.692 0 000 9.383 1.626 1.626 0 001.184.513H8.12v5.572a2.856 2.856 0 00.327 1.33 9.007 9.007 0 00-8.445 8.979v2.666a.781.781 0 00.781.781h32.658a.781.781 0 00.781-.781v-2.669a9.007 9.007 0 00-8.454-8.979zm3.69-15.188a3.13 3.13 0 010 6.169v-6.169zm-24.7 6.168a3.13 3.13 0 010-6.168zm23.063.557h-1.7a.068.068 0 01-.042-.016.781.781 0 00-.027-.113V11.9a.069.069 0 01.069-.069h1.7zM8.165 12.646v6.4a.069.069 0 01-.069.069h-1.7a.069.069 0 01-.069-.069V11.9a.069.069 0 01.069-.069h1.7a.069.069 0 01.069.069zm-.069-2.38H7.86a9.266 9.266 0 019.238-8.7h.022a9.266 9.266 0 019.238 8.7h-.235a1.628 1.628 0 00-.379.046 8.947 8.947 0 00-17.273 0 1.624 1.624 0 00-.376-.046zm9.015 14.661a7.386 7.386 0 01-7.384-7.371v-3.283h4.467a8.972 8.972 0 005.9-2.194 5.232 5.232 0 004.251 2.194h.145v3.284a7.318 7.318 0 01-.656 3.037 1.689 1.689 0 01-1 .329h-2.16a2.347 2.347 0 00-2.209-1.562h-.625a2.344 2.344 0 000 4.687h.625a2.347 2.347 0 002.209-1.562h1.921a7.372 7.372 0 01-5.484 2.441zm2.835 1.1v3.455a2.835 2.835 0 11-5.67 0v-3.453a8.967 8.967 0 005.67 0zm-7.232-.7v2.223h-1.722a1.314 1.314 0 01-1.312-1.312v-3.72a9.008 9.008 0 003.034 2.815zM21.83 9.272a.781.781 0 00-1.1 0l-1.237 1.24a7.427 7.427 0 01-5.294 2.2H9.727v-.064a7.384 7.384 0 1114.767 0v.064h-.144a3.662 3.662 0 01-3.11-1.74l.592-.593a.781.781 0 00-.002-1.107zM19.247 21.7a.782.782 0 01-.781.781h-.625a.781.781 0 110-1.562h.625a.782.782 0 01.781.781zm2.261 3.63a9.009 9.009 0 003.025-2.795v3.706a1.314 1.314 0 01-1.313 1.315h-1.712zm7.27 13.1V34.6a.781.781 0 10-1.562 0v3.841H7.006v-1.53a.781.781 0 10-1.562 0v1.53H1.562v-1.889a7.442 7.442 0 017.434-7.434h3.717v.365a4.4 4.4 0 108.795 0v-.365h3.717a7.442 7.442 0 017.434 7.434v1.885z" ></path>
                        </g>
                    </g>
                    <g data-name="Group 30">
                        <g data-name="Group 29">
                            <path data-name="Path 210" d="M6.777 33.353a.781.781 0 10.229.552.786.786 0 00-.229-.552z"></path>
                        </g>
                    </g>
                </>
            )
        }
        case "7daysIcon": {
            return (
                <>
                            <path data-name="Path 247" d="M7.906 13.784l12.018 6.511v13.389l-12.319-7z" fill="#e63939" ></path>
                            <path data-name="Path 248" d="M9.98 18.784l4.4 1.807-.4 3.193-4.288-2.157z" fill="#fff"></path>
                            <path data-name="Path 249" d="M19.88 19.994l12.4-6.352.3 12.919-12.7 6.823z" fill="#bfbfbf" ></path>
                            <g data-name="Group 32">
                                <g data-name="Group 31">
                                    <path data-name="Path 211" d="M32.293 12.07l-11.372-6.3a1.9 1.9 0 00-1.848 0l-11.372 6.3a1.908 1.908 0 00-.983 1.668v12.518a1.908 1.908 0 00.983 1.668l11.372 6.3a1.9 1.9 0 001.848 0l11.372-6.3a1.908 1.908 0 00.983-1.668V13.738a1.908 1.908 0 00-.983-1.668zM19.83 7.136a.342.342 0 01.334 0l4.541 2.516-10.952 6.068-4.647-2.642zm-.614 25.387L8.458 26.562a.345.345 0 01-.178-.3V14.405l5.076 2.886 5.857 3.33zm-3.872-15.9l10.973-6.08 4.719 2.614-11.034 6.116zm16.37 9.636a.345.345 0 01-.178.3L20.778 32.52V20.629l10.936-6.059z"></path>
                                </g>
                            </g>
                            <g data-name="Group 34">
                                <g data-name="Group 33">
                                    <path data-name="Path 212" d="M14.514 19.881l-4.139-2.28a.781.781 0 00-1.158.684v3.3a.781.781 0 00.4.684l4.139 2.28a.781.781 0 001.158-.684v-3.3a.781.781 0 00-.4-.684zm-1.158 2.665l-2.577-1.419v-1.519l2.577 1.419z"></path>
                                </g>
                            </g>
                            <g data-name="Group 36">
                                <g data-name="Group 35">
                                    <path data-name="Path 213" d="M17.772 28.14L15.702 27a.781.781 0 00-.754 1.369l2.07 1.14a.781.781 0 10.754-1.369z"></path>
                                </g>
                            </g>
                            <g data-name="Group 38">
                                <g data-name="Group 37">
                                    <path data-name="Path 214" d="M36.345 8.479l1.441-1.441a.781.781 0 00-.552-1.333h-3.88a.781.781 0 00-.781.781v3.88a.781.781 0 001.333.552l1.316-1.316a18.44 18.44 0 01-22.54 27.325.781.781 0 00-.619 1.434 19.942 19.942 0 007.916 1.638 20.19 20.19 0 003.621-.328A20 20 0 0036.345 8.479zm-2.21 0V7.267h1.213z"></path>
                                </g>
                            </g>
                            <g data-name="Group 40">
                                <g data-name="Group 39">
                                    <path data-name="Path 215" d="M10.435 35.767l-.03-.019a.781.781 0 10-.812 1.334l.03.019a.781.781 0 10.813-1.334z"></path>
                                </g>
                            </g>
                            <g data-name="Group 42">
                                <g data-name="Group 41">
                                    <path data-name="Path 216" d="M30.509 2.983l-.044-.024a.781.781 0 10-.819 1.331l.039.024a.781.781 0 00.819-1.331z"></path>
                                </g>
                            </g>
                            <g data-name="Group 44">
                                <g data-name="Group 43">
                                    <path data-name="Path 217" d="M27.886 1.619A20 20 0 003.649 31.52l-1.442 1.441a.781.781 0 00.556 1.333h3.88a.781.781 0 00.781-.781v-3.88a.781.781 0 00-1.333-.552L4.771 30.4a18.44 18.44 0 0122.5-27.343.781.781 0 10.616-1.436zM5.863 31.52v1.213H4.646z" ></path>
                                </g>
                            </g>
                </>
            )
        }

        case "whatsappIcon": {
            return (
                <>
                    <g>
                        <path fill='rgb(122, 208, 109)' d="M198.929,0.242C88.5,5.5,1.356,97.466,1.691,208.02c0.102,33.672,8.231,65.454,22.571,93.536   L2.245,408.429c-1.191,5.781,4.023,10.843,9.766,9.483l104.723-24.811c26.905,13.402,57.125,21.143,89.108,21.631   c112.869,1.724,206.982-87.897,210.5-200.724C420.113,93.065,320.295-5.538,198.929,0.242z M323.886,322.197   c-30.669,30.669-71.446,47.559-114.818,47.559c-25.396,0-49.71-5.698-72.269-16.935l-14.584-7.265l-64.206,15.212l13.515-65.607   l-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713c0-43.373,16.89-84.149,47.559-114.819   c30.395-30.395,71.837-47.56,114.822-47.56C252.443,45,293.218,61.89,323.887,92.558c30.669,30.669,47.559,71.445,47.56,114.817   C371.446,250.361,354.281,291.803,323.886,322.197z">
                        </path>
                        <path fill='rgb(122, 208, 109)' d="M309.712,252.351l-40.169-11.534c-5.281-1.516-10.968-0.018-14.816,3.903l-9.823,10.008   c-4.142,4.22-10.427,5.576-15.909,3.358c-19.002-7.69-58.974-43.23-69.182-61.007c-2.945-5.128-2.458-11.539,1.158-16.218   l8.576-11.095c3.36-4.347,4.069-10.185,1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356   c-11.211,9.482-24.513,23.891-26.13,39.854c-2.851,28.144,9.219,63.622,54.862,106.222c52.73,49.215,94.956,55.717,122.449,49.057   c15.594-3.777,28.056-18.919,35.921-31.317C323.568,266.34,319.334,255.114,309.712,252.351z">
                        </path>
                    </g>
                </>
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
