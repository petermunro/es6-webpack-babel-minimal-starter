import { hello } from './mod1';
import $ from 'jquery';

console.log(`A welcome greeting: ${hello}`);

$('body').append('<footer>Footer inserted with jQuery</footer>');
