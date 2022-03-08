type Coin = 'krona'|'klave';
type userError = ["error", Error];
type userSuccess = ["success", {userName: string, id: number}];
type getUserDataResult = userError | userSuccess;

export {Coin,  getUserDataResult};