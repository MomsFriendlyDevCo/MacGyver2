import _ from 'lodash';
import {expect} from 'chai';

import macgyver from '@momsfriendlydevco/macgyver';

describe('Basic sanity checks', ()=> {

	it('should have common methods available', ()=> {
		expect(macgyver).to.have.property('widgets');
		expect(macgyver.widgets).to.be.an('object');

		[
			'utils.fetch', 
			'flatten', 'compileSpec', 
			'forms.setConfig', 'forms.setData', 'forms.validate', 'forms.getPrototype', 
		].forEach(p => {
			expect(macgyver).to.have.nested.property(p);
			expect(_.get(macgyver, p)).to.be.a('function');
		});
	});

});
