#include "../header/all.h"

int sendToServer(){

	FILE* fileToSend = fopen("recent.png", "rb");
	if(!fileToSend){
		printf("failed to read file");
		return -1;
	}
	curl_global_init(CURL_GLOBAL_ALL); 

	CURL* easyHandle = curl_easy_init(); 

	if(sendFile(fileToSend , easyHandle) != CURLE_OK){
		printf("an error occured while sending qrCode to server");
	}



   fclose(fileToSend);
	curl_easy_cleanup(easyHandle);
	curl_global_cleanup();
	return 0;
}


CURLcode sendFile(FILE* qrCode , CURL* curlHandler){

	curl_easy_setopt(curlHandler, CURLOPT_UPLOAD, 1L);
	curl_easy_setopt(curlHandler, CURLOPT_URL, "ftp://curlReceiver:none@localhost/Fichiers_de_code/qrDecode/newFranchise.png");

	curl_easy_setopt(curlHandler, CURLOPT_READDATA, qrCode);


   	return curl_easy_perform(curlHandler);  
}

