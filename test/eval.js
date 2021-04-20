import _ from 'lodash';
import {expect} from 'chai';
import sift from 'sift';

// TODO: If we instead directly import `./src/macgyver.js` then can be UMD module 
import macgyver from '@momsfriendlydevco/macgyver';

describe('$macgyver.eval', ()=> {

	it('should compile a simple expression', ()=> {
		expect(macgyver).to.have.nested.property('utils.evalCompile');

		// Already given a Sift function
		expect(macgyver.utils.evalCompile(sift({a: 1}))).to.be.a('function');
		expect(()=> macgyver.utils.evalCompile(sift({a: 1}), false)).to.throw; // Can't convert back from Sift => Object

		// Object => Sift
		expect(macgyver.utils.evalCompile({a: 1})).to.be.a('function');
		expect(macgyver.utils.evalCompile({a: 1}, false)).to.be.deep.equal({a: 1});

		// String => Sift
		expect(macgyver.utils.evalCompile('a = 1')).to.be.a('function');
		expect(macgyver.utils.evalCompile('a = 1', false)).to.deep.equal({a: 1});
		expect(macgyver.utils.evalCompile('foo = "hello"', false)).to.deep.equal({foo: 'hello'});
		expect(macgyver.utils.evalCompile('bar.baz = "quz"', false)).to.deep.equal({'bar.baz': 'quz'});
	});

	it('should eval a simple boolean expression', ()=> {
		expect(macgyver).to.have.nested.property('utils.evalMatch');

		expect(macgyver.utils.evalMatch('a = 1', {a: 1})).to.be.true;
		expect(macgyver.utils.evalMatch({a: 1}, {a: 1})).to.be.true;
		expect(macgyver.utils.evalMatch('a = 2', {a: 1})).to.be.false;
		expect(macgyver.utils.evalMatch({a: 2}, {a: 1})).to.be.false;
		expect(macgyver.utils.evalMatch('foo = "hello"', {foo: 'hello'})).to.be.true;
		expect(macgyver.utils.evalMatch({foo: "hello"}, {foo: 'hello'})).to.be.true;
		expect(macgyver.utils.evalMatch('foo = "helloX"', {foo: 'hello'})).to.be.false;
		expect(macgyver.utils.evalMatch({foo: "helloX"}, {foo: 'hello'})).to.be.false;
		expect(macgyver.utils.evalMatch('bar.baz = "quz"', {bar: {baz: 'quz'}})).to.be.true;
		expect(macgyver.utils.evalMatch({bar: {baz: "quz"}}, {bar: {baz: 'quz'}})).to.be.true;
		expect(macgyver.utils.evalMatch({'bar.baz': "quz"}, {bar: {baz: 'quz'}})).to.be.true;
		expect(macgyver.utils.evalMatch('bar.baz = "Quz"', {bar: {baz: 'quz'}})).to.be.false;
		expect(macgyver.utils.evalMatch({bar: {baz: "Quz"}}, {bar: {baz: 'quz'}})).to.be.false;
		expect(macgyver.utils.evalMatch({'bar.baz': "Quz"}, {bar: {baz: 'quz'}})).to.be.false;
	});

});
