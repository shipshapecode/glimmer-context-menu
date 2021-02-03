import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | context-menu', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:context-menu');
    assert.ok(service);
  });
});

