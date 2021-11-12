import Vue from 'vue'
// import _ from 'lodash'
import { isEmpty, map, get, filter, find, reverse, mapValues, words, pickBy, includes, forEach, findIndex, lowerCase, isString, slice, pad, cloneDeep } from 'lodash'
const _ = { isEmpty, map, get, filter, find, reverse, mapValues, words, pickBy, includes, forEach, findIndex, lowerCase, isString, slice, pad, cloneDeep }

Vue.prototype._ = _



export default ({ app }, inject) => {
	inject('lodash', _)
}
