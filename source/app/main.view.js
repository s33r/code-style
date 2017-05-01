import { View } from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import template from 'app/main.template';

const compiledTemplate = _.template(template);

class MainView extends View {
    get el (){
        return $('#main-container');
    }

    get template() {
        return compiledTemplate;
    }

    constructor() {
        super();

    }

    initialize() {

        this.render();
    }

    render() {

        this.$el.html(this.template());
    }
}

// const MainView = View.extend({
//     el: $('#main-container'),
//     template: _.template(template),
//
//     initialize: function() {
//         console.log('[initialize] MainView');
//         this.render();
//     },
//
//     render: function() {
//         console.log('[render] MainView');
//         this.$el.html(this.template());
//     }
// });

export default MainView;