import React from 'react';
import ReactDOM from 'react-dom';

import 'react-app-polyfill/ie9'; //문법을 변환해주는 라이브러리
import 'react-app-polyfill/stable'; //package.json의 browserslist에 해당하는 브라우저에 대해 안정적인 코드를 사용


import Root from './client/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <Root /> , document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();