#include <stdio.h>
#include <qrencode.h>
#include <errno.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <png.h>
#include <gtk/gtk.h>

#include <sys/types.h>
#include <regex.h>
#include <glib.h>
#include <stdbool.h>

#include <curl/curl.h>

int qrEncode(char *string);     
void win_inscription();
void check_fields( GtkWidget *widget, GtkWidget **inputsArray);
void psswHide(GtkWidget *this , GtkEntry* pswdInput);



bool validCasualString(const char* someString);
bool validEmail(const char* email);

bool validPwd(const char* password);
bool validAddr(const char* address);
bool validLicense(const char* LicenseNbr);
bool validPhone(const char* phoneNbr);
bool validTown(const char* townName);
bool validPostalCode(const char* postal);

void displayError(gchar *line);
void prepareErrorText(char* wrongInputs , char **surroundingText);


bool getCRinstring(const char* wrongInputs);

