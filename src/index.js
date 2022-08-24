// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import { getAPI } from './Modules/adds.js';
import form from './Modules/form.js';

document.querySelector('.add').addEventListener('click', form);
getAPI();
document.querySelector('#btn-refresh').addEventListener('click', getAPI);