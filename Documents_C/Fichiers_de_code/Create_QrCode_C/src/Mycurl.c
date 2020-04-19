#include "../header/all.h"

int sendToServer(){
	FILE* result = fopen("result.log" , "wb");
	if(result == NULL){
		printf("failed to create result.log\
		Make sure there are no result.log folder ");
		return 1;
	}
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
	if(sendLogs(result , easyHandle) != CURLE_OK){
		printf("An error occured while sending logs to server");
	}


   fclose(fileToSend);
   fclose(result);
	curl_easy_cleanup(easyHandle);
	
	return 0;
}


CURLcode sendFile(FILE* qrCode , CURL* curlHandler){

	curl_easy_setopt(curlHandler, CURLOPT_UPLOAD, 1L);
	curl_easy_setopt(curlHandler, CURLOPT_URL, "ftp://curlReceiver:none@localhost/Fichiers_de_code/qrDecode/newFranchise.png");

	curl_easy_setopt(curlHandler, CURLOPT_READDATA, qrCode);

	//curl_easy_setopt(curlHandler, CURLOPT_VERBOSE, 1);
	
   	return curl_easy_perform(curlHandler);  
}

CURLcode sendLogs(FILE* logs , CURL* curlHandler){
	
	time_t t = time(NULL);
    struct tm *timer = localtime(&t);

	char text[100]; 
	strftime(text, sizeof(text), "%c", timer);
    printf("text : %s\n" , text);
	fwrite(text, sizeof(char) , sizeof(text) * sizeof(char) , logs);

	curl_easy_setopt(curlHandler, CURLOPT_UPLOAD, 1L);
	curl_easy_setopt(curlHandler, CURLOPT_URL, "ftp://curlReceiver:none@localhost/logs.log"); 


	curl_easy_setopt(curlHandler, CURLOPT_READDATA, logs);
	curl_easy_setopt(curlHandler , CURLOPT_WRITEDATA , NULL);
	
   
	curl_easy_setopt(curlHandler, CURLOPT_APPEND, 1L);
	return curl_easy_perform(curlHandler);  
}