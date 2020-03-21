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

int qrEncode(char *string);     
void win_inscription();
void check_fields( GtkWidget *widget, GtkWidget **inputsArray);



bool validCasualString(const char* someString);
bool validEmail(const char* email);

bool validPwd(const char* password);
bool validAddr(const char* address);
bool validLicense(const char* LicenseNbr);
bool validPhone(const char* phoneNbr);
