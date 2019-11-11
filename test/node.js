var _ = require('lodash');
var expect = require('chai').expect;
var macgyver = require('..');

describe('Basic sanity checks', ()=> {

	it('should have common methods available', ()=> {
		expect(macgyver).to.have.property('widgets');
		expect(macgyver.widgets).to.be.an('object');

		[
			'fetch', 'flatten', 'neatenSpec', 'register',
			'forms.setConfig', 'forms.setData', 'forms.validate', 'forms.getPrototype', 'forms.run'
		].forEach(p => {
			expect(macgyver).to.have.nested.property(p);
			expect(_.get(macgyver, p)).to.be.a('function');
		});
	});

});
