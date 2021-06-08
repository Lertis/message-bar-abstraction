import { InjectionToken } from "@angular/core";

const mockCodesNames = "MOCK_CODES";
const MOCK_CODES = new InjectionToken<string>(mockCodesNames);

export {
	mockCodesNames,
	MOCK_CODES
};
