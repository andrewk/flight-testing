'use strict';

describeComponent('component/tab-panel', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent(readFixtures('tab-panel.html'));
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  describe('activates a tab', function() {
    it('triggers uiTabSelectionChanged', function() {
        var tabSpy = spyOnEvent(document, 'uiTabSelectionChanged');
        this.component.activate('email');
        expect('uiTabSelectionChanged').toHaveBeenTriggeredOn(document);
        expect(tabSpy.mostRecentCall.data).toEqual({
            'active' : 'email'
        });
    });
  });

});

