#include "../header/header.h"


int main(int argc, char *argv[]){

    // validCasualString("thomas");
    // validCasualString("Tresgots");

    // if(validEmail("test")){
    //     printf("yeahh");
    // }else
    // {
    //     printf("uhhh");
    // }
    
    gtk_init (&argc, &argv);
    win_inscription();
    gtk_main();
    char* string = "coucou thiel ahah";
    qrEncode(string); 

    return 0;
}