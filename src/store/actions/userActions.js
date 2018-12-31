const test= (userInfo) => {
	return {
		type : 'FETCH_INFO',
		userInfo
	}
}

export const soloTest= () => dispatch => {
		console.log('ACTION')
		dispatch(test('test de reducer'))
}