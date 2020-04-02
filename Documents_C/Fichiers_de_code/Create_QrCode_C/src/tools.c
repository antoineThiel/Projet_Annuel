#include "../header/all.h"

extern const char fieldsNames[][20];

bool getCRinstring(const char* wrongInputs){
	u_int32_t length = strlen(wrongInputs);
	int counter = 0;
	for(u_int32_t pos = 0 ; pos < length ; pos++){
		if(wrongInputs[pos] == '\n'){
			counter++;
		}
	}
	return counter >= 2;
}

void prepareTextForQrCode(GtkWidget **inputsArray){
	char line[1000] = "";
	for(int i = 0 ; i < FIELDS_QTY ; i++){
		sprintf(line , "%s%s : %s ; " , line , fieldsNames[i] , gtk_entry_get_text(GTK_ENTRY(inputsArray[i])) );
	}
	g_print("\n%s\n" , line);
	free(inputsArray);

	qrEncode(line);

	gtk_main_quit();
	printf("qrCode envoyé");

}
