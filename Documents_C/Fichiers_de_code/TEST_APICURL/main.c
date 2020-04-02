#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <curl/curl.h>

int main(/*int argc, char** argv*/){


	FILE* qrCode = fopen("recent.png" , "rt");
	if(qrCode == NULL){
		printf("failed to open qrCode");
		return 1;
	}
	FILE* result = fopen("result.html" , "w");
	if(result == NULL){
		printf("failed to create result.html");
		return 1;
	}
	curl_global_init(CURL_GLOBAL_ALL); //REQUIRED , w/out this NO request will be executed

	CURL* easyHandle = curl_easy_init(); // creating our curl requester Handler

	curl_easy_setopt(easyHandle, CURLOPT_URL, "http://localhost/curling?value=iloveitIdidit"); // setpopt takes (Handler , cURL DEFINE value , string matching the 2nd argument )  (by default http , but we can provide any other {DICT, FTP, IMAP, LDAP, POP3 or SMTP} )

	// ABOUT URL specifications : HTTP

	/*The path part of an HTTP request specifies the file to retrieve and from what directory. If the directory is not specified then the web server's root directory is used. If the file is omitted then the default document will be retrieved for either the directory specified or the root directory. The exact resource returned for each URL is entirely dependent on the server's configuration.

	http://www.example.com - This gets the main page from the web server.

	http://www.example.com/index.html - This returns the main page by explicitly requesting it.

	http://www.example.com/contactus/ - This returns the default document from the contactus directory. */




	/*
	** CURLOPT_WRITEDATA : precise where to write server's response (stdout by default) ; aka CURLOPT_FILE...
	** CURLOPT_WRITEFUNCTION : defining callback function for what to do with data
	** CURLOPT_ERRORBUFFER : define file where to write any error that occured during transfert

	"less important"
	** CURLOPT_VERBOSE , CURLOPT_HEADER : for debuging purposes
	** CURLOPT_DEBUGFUNCTION : speaks by itslef... don't think we'll get THAT far into completing our program

	*/

	// curl_easy_setopt(easyhandle, CURLOPT_WRITEFUNCTION, write_data);
	// curl_easy_setopt(easyhandle, CURLOPT_WRITEDATA, &internal_struct);

	// curl_easy_setopt(easyHandle, CURLOPT_UPLOAD, 1L);
	// curl_easy_setopt(easyHandle, CURLOPT_READDATA, file_to_send);
	fseek(qrCode , 0 , SEEK_END);
	long size = ftell(qrCode);
	fseek(qrCode , 0 , SEEK_SET);
	char* imgBuff = malloc(size * sizeof(char));
	fread(imgBuff, 1 , size , qrCode);  

	char* test = malloc(size * sizeof(char)+4);
	strcpy(test , "img=");
	strcat(test , imgBuff);

	curl_easy_setopt(easyHandle , CURLOPT_WRITEDATA , result);
	// curl_easy_setopt(easyHandle, CURLOPT_POSTFIELDSIZE, size * sizeof(char)+4);
	// // curl_easy_setopt(easyHandle , CURLOPT_POSTFIELDS , test);

	// curl_easy_setopt(easyHandle , CURLOPT_POSTFIELDS , test);
	curl_easy_setopt(easyHandle, CURLOPT_HTTPGET, 1L);

	free(imgBuff);
   
	CURLcode success = curl_easy_perform(easyHandle);  // execute current request

    /* According to https://curl.haxx.se/libcurl/c/libcurl-tutorial.html
    
    __curl_easy_perform__ will connect to the remote site, do the necessary 
    commands and receive the transfer. Whenever it receives data, it calls 
    the callback function we previously set. The function may get one 
    byte at a time, or it may get many kilobytes at once. libcurl delivers 
    as much as possible as often as possible. Your callback function 
    should return the number of bytes it "took care of". If that is not 
    the exact same amount of bytes that was passed to it, libcurl will 
    abort the operation and return with an error code.
    */
	curl_easy_cleanup(easyHandle);
	if(success != 0){
		printf("Error occured during request :/");
	}
	return 0;
}