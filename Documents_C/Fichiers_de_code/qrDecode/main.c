#include <quirc.h>
#include <stdlib.h>
#include <stdio.h>

#include "tests/dbgutil.h"
#include "tests/inspect.h"
char* qrDecode(void);

int main(void){
	char* result = qrDecode();

	if(result != NULL){
		printf("\n voila \n%s", result);
		free(result);
	}
	
	
	return 0;
}


char* qrDecode(){
	int num_codes;
	int i;
	struct quirc *qr;

	char *foundText = NULL;

	qr = quirc_new();
	if (!qr) {
		printf("Failed to allocate memory");
		abort();
	}
	quirc_begin(qr, NULL , NULL);

	int status = load_png(qr, "recent.png");


	quirc_end(qr);
	struct quirc_code code;
	struct quirc_data data;
	quirc_decode_error_t err;

	quirc_extract(qr, i, &code);
	err = quirc_decode(&code, &data);
	if (err) {
		printf("  Decoding FAILED: %s\n", quirc_strerror(err));
		quirc_destroy(qr);
		return NULL;
	} else {
		printf("  Decoding successful:\n");
		printf("    Payload: %s\n", data.payload);

		foundText = malloc(sizeof(char) * data.payload_len);
		strcpy(foundText,data.payload);
		return foundText;
	}
	
	printf("end\n");
}