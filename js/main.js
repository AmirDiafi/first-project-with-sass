/*global $, document, consol, log */

$(document).ready(function () {
    'use strict';
    $('.collapse-btn').click(function () {
        $(this).find('span').toggleClass('collapsed');
        $('.navbar').slideToggle();
    })
})