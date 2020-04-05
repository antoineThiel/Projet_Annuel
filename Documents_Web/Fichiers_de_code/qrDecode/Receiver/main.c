#include <quirc.h>
#include <stdlib.h>
#include <stdio.h>

#include "tests/dbgutil.h"
#include "tests/inspect.h"

char* qrDecode(void);
int splitString(char **newUser , char *result);
void insertDB(char **newUser);
void destroyUser(char **user);

int main(void){
	//TODO: create connection to DB
	char* result;
	char **newUser = malloc(9 * sizeof(char*));
	if(newUser == NULL){
		printf("not enought space...");
		exit(EXIT_FAILURE);
	}
	for(int i = 0 ; i < 9 ; i++){
		newUser[i] = malloc(120 * sizeof(char));
		if(newUser[i] == NULL){
			printf("manque d'espace...");
			exit(EXIT_FAILURE);
		}
	}

	if(  (result = qrDecode() ) != NULL){
		printf("\n voila \n%s", result);
		// free(result);
	}

	if( splitString(newUser , result)  != 0 ){
		printf("Impossible de lire le fichier");
		free(result);
		exit(1);
	}
	
	for(int i = 0; i < 9 ; i++){
		printf("\n%s",newUser[i]);
	}

	free(result);

	// insertDB(newUser);
	destroyUser(newUser);
	
	return 0;
}
//TODO : implement  insertDB

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


int splitString(char **newUser , char *result){
	char* copy;
	char* nextBloc = result;

	char* fieldSeparator; 
	int fieldNbr = 0;

	while( 	
		copy = nextBloc+1 , // avoiding ';' itself 
		fieldSeparator = strchr(copy , ':')+2 , //avoiding ':' itself + extra space
		(nextBloc = strchr(copy , ';') ) != NULL)
		{
		
		*nextBloc = '\0';

		strcpy(newUser[fieldNbr] , fieldSeparator );
		fieldNbr++;
		

		
	}

	return 0;
}



void insertDB(char **newUser){
	printf("insertion");
}

void destroyUser(char** user){
	for(int i = 0 ; i < 9 ; i++){
		free(user[i]);
	}
	free(user);
	
}