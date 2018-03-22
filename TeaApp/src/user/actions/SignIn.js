import * as types from './ActionTypes';
//import Fetch from 'future/src/lib/Fetch';

//记录是否登录了
export function setLogined(data){
	return {
		type : types.USER_LOGINED,
		data
	}
}

export function setUserInfo(data){
	return {
		type : types.USER_INFO,
		data
	}
}
