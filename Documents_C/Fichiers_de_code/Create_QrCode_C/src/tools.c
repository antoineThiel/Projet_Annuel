#include "../header/header.h"

bool getCRinstring(const char* wrongInputs){
	u_int32_t length = strlen(wrongInputs);
	int counter = 0;
	for(int pos = 0 ; pos < length ; pos++){
		if(wrongInputs[pos] == '\n'){
			counter++;
		}
	}
	return counter >= 2;
}