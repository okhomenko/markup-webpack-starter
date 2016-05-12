import AppMenuComponent from './app-menu/app-menu.component.html';
import './app-menu/app-menu.component.scss';

import $ from 'jquery';

$(document.body)
    .html(`

        <div class="container">
        
            ${AppMenuComponent}

        </div>

    `)