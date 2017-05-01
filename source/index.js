import 'assets/styles/main.scss';

import Backbone from 'backbone';

import 'components/router';
import MainView from 'app/main.view';


export const mainView = new MainView();

Backbone.history.start();

