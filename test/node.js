const _ = require('lodash');
const expect = require('chai').expect;

const macgyver = require('../dist/macgyver').MacGyver;

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
