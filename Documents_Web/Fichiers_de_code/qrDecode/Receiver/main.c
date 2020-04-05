#include <quirc.h>
#include <stdlib.h>
#include <stdio.h>

#include "tests/dbgutil.h"
#include "tests/inspect.h"
typedef struct franchise{
	char last_name[30];
	char first_name[40];
	char email[40];
	char city[30];
	char postal_code[5];
	char address[255];
	char licence[12];
	char phone[10];

}franchise;

char* qrDecode(void);

int main(void){
	//TODO: create connection to DB
	char* result;
	franchise newUser;

	if(  (result = qrDecode() ) != NULL){
		printf("\n voila \n%s", result);
		free(result);
	}

	if( (splitString(&newUser , result) ) == NULL ){
		printf("Impossible de lire le fichier");
		free(result);
		exit(1);
	}
	
	free(result);

	insertDB(&newUser);

	
	return 0;
}
//TODO : implement splitString and insertDB

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

	int status = load_png(qr, "newFranchise.png");


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
		// printf("    Payload: %s\n", data.payload);

		foundText = malloc(sizeof(char) * data.payload_len);
		if(foundText == NULL){
			printf("Manque d'espace memoire, arrêt");
			exit(1);
		}
		strcpy(foundText,(char*)(data.payload));
		return foundText;
	}
	
	printf("end\n");
}