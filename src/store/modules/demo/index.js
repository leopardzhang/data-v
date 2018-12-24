
const state = {
	num: 0
}

const CHANGE_NUM = 'CHANGE_NUM';

const mutations = {
	[CHANGE_NUM](state, mutation) {
		state.num = mutation.payload;
	}
}

const actions = {
	async increment ({
		state,
		dispatch,
		commit
	}) {
		const num = state.num;

		commit({
			type: CHANGE_NUM,
			payload: num + 1
		})
	},
	async decrement ({
		state,
		dispatch,
		commit
	}) {
		const num = state.num;

		commit({
			type: CHANGE_NUM,
			payload: num - 1
		})
	}
}

const getters = {
	num(state) {
		return state.num
	}
}

export default {
	state,
	mutations,
	actions,
	getters
};
