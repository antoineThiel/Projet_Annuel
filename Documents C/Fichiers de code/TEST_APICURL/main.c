#include <stdio.h>
#include <curl/curl.h>
#include <stdlib.h>

size_t write_data(void *buffer, size_t size, size_t nmemb, void *userp);

int main(int argc, char** argv){
    
    curl_global_init(CURL_GLOBAL_ALL); //REQUIRED , w/out this NO request will be executed

    CURL* easyHandle = curl_easy_init(); // creating our curl requester Handler

    curl_easy_setopt(easyHandle, CURLOPT_URL, "http://localhost/Projet_Annuel/Documents%20Web/test.php"); // setpopt takes (Handler , cURL DEFINE value , string matching the 2nd argument )
    /*
    ** CURLOPT_WRITEDATA : precise where to write server's response (stdout by default) ; aka CURLOPT_FILE...
    ** CURLOPT_WRITEFUNCTION : defining callback function from where the data should come
    ** CURLOPT_ERRORBUFFER : define file where to write any error that occured during transfert

    "less important"
    ** CURLOPT_VERBOSE , CURLOPT_HEADER : for debuging purposes
    ** CURLOPT_DEBUGFUNCTION : speaks by itslef... don't think we'll get THAT far into completing our program

    */

    // curl_easy_setopt(easyhandle, CURLOPT_WRITEFUNCTION, write_data);
    // curl_easy_setopt(easyhandle, CURLOPT_WRITEDATA, &internal_struct);


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

    printf("returns : %d\n" , success);

    return 0;
}