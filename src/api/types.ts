export type ApiReturns<T> =
	| { isValid: true; data: T; error: undefined }
	| { isValid: false; data: undefined; error: unknown };
