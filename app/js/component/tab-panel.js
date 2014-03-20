/**
 * Tabbed panel, paired navigation and panels
 */
define(function (require) {
    'use strict';

    var $ = require('bower/jquery/dist/jquery')
      , defineComponent = require('flight/lib/component')

    return defineComponent(TabPanel);

    function TabPanel() {
        this.defaultAttrs({
            'panelSelector': '[data-tab-panel]',
            'navSelector': '[data-tab-nav]'
        });

        this.after('initialize', function() {
            this.on('click', {
                'navSelector': this.activateTab
            });
        });

        this.activateTab = function(e, data) {
            e.preventDefault();
            this.activate($(data.el).data('tab-nav'));
        };

        this.activate = function(tabName) {
            this.trigger(document, 'uiTabSelectionChanged', { 'active' : tabName });

            // deactivate previously activated tab
            this.select('panelSelector').not('[data-tab-panel="'+ tabName +'"]').removeAttr('data-active');
            this.select('navSelector').not('[data-tab-nav="'+ tabName +'"]').removeAttr('data-active');

            // activate new tab

            this.$node.find('[data-tab-panel="'+ tabName +'"]').attr('data-active', '');
            this.$node.find('[data-tab-nav="'+ tabName +'"]').attr('data-active', '');

            return this;
        };
    }

});
