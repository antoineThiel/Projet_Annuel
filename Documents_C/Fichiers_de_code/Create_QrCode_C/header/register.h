#define FIELDS_QTY 9

void win_inscription();
void check_fields( GtkWidget *widget, GtkWidget **inputsArray);

void displayError(gchar *line);

void prepareErrorText(char* wrongInputs , char **surroundingText);


void psswHide(GtkWidget *this , GtkEntry* pswdInput);

bool validCasualString(const char* someString);
bool validEmail(const char* email);

bool validPwd(const char* password);
bool validAddr(const char* address);
bool validLicense(const char* LicenseNbr);
bool validPhone(const char* phoneNbr);
bool validTown(const char* townName);
bool validPostalCode(const char* postal);
