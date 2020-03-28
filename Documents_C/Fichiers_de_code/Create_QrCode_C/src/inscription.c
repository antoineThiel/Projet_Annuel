#include "../header/header.h"
#define FIELDS_QTY 9

GtkBuilder* mainBuilder;
const char[][] fieldsNames = {
	{"Last Name"},
	{"First Name"},
	{"E-mail"},
	{"Password"},
	{"Postal Code"},
	{"Town"},
	{"Street Address"},
	{"License number"},
	{"Phone number"}
}


void win_inscription(){

	GtkWidget *window;
	// GtkWidget *lastName;
	// GtkWidget *firstName;
	// GtkWidget *mail;
	// GtkWidget *password;
	// GtkWidget *address;
	// GtkWidget *license;
	// GtkWidget *phone;
	GtkWidget *button_valid;
	GtkWidget *button_pssw;

	GtkWidget **formFields;
	formFields = malloc(FIELDS_QTY * sizeof(GtkWidget));
	
	mainBuilder = gtk_builder_new_from_file ("./glade/window_main.glade");
	
	window = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "window"));
	g_signal_connect(window, "destroy", G_CALLBACK(gtk_main_quit), NULL);
	
	//Faire une structure client :)
	// lastName = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_last"));
	formFields[0] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_last"));

	// firstName = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_first"));
	formFields[1] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_first"));

	// mail = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_mail"));
	formFields[2] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_mail"));

	// password = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_passw"));
	formFields[3] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_passw"));

	gtk_entry_set_visibility(GTK_ENTRY(formFields[3]), false);
	button_pssw = GTK_WIDGET(gtk_builder_get_object(mainBuilder,"toggle_visibility"));

	g_signal_connect(button_pssw, "clicked", G_CALLBACK(psswHide), formFields[3]);

	// address = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_addre"));
	formFields[4] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_addr"));

	 

	// license = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_license"));
	formFields[5] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_license"));

	// phone = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_phone"));
	formFields[6] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_phone"));

	formFields[7] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_pc"));
	
	formFields[8] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_town"));

	button_valid = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "button_valid"));

   	g_signal_connect(button_valid, "clicked", G_CALLBACK(check_fields), formFields);
		
	gtk_window_set_default_size (GTK_WINDOW(window),
							 500,
							 500);
	gtk_widget_show(window);
};

void check_fields( GtkWidget *widget, GtkWidget **inputsArray){

  	gchar* inputs[FIELDS_QTY];

    bool (*functionArray[FIELDS_QTY])(const char*) =  { validCasualString , validCasualString ,validEmail , validPwd , validAddr, validLicense, validPhone , validPostalCode , validTown};
    
    bool allChecked = true;

  	for (u_int8_t i = 0; i < FIELDS_QTY; i++)
  	{
		bool isCurrentInputCorrect = functionArray[i](gtk_entry_get_text(GTK_ENTRY(inputsArray[i])) ) ;

		allChecked &= isCurrentInputCorrect; 
		printf("%s\n",gtk_entry_get_text(GTK_ENTRY(inputsArray[i])));
		if(!isCurrentInputCorrect){
			printf("error on input n°%d \n", i+1);
		}
  	}
  
    if(allChecked){
      printf("\nWOAWWW\n");
    }else{
      printf("\nmissing smtg\n");
    }


}

// Tant que 'window' n'est pas déclarée en tant que globale, ne vas pas marcher)
// void displayError(GtkWidget *parent_window->voir dessous/dessus, const gchar *line -> message a faire passer){
//   GtkWidget *dialog, *label, content_area;
//   GtkDialogFlags flags;
  
//   flags = GTK_DIALOG_DESTROY_WITH_PARENT;
//   dialog = gtk_gtk_dialog_new_with_buttons ("Erreur", /* parent window -> faut que la fenetre soit en globale, du coup*/, flags, "ok", GTK_RESPONSE_NONE, NULL);
//   content_area = gtk_dialog_get_content_area(GTK_DIALOG(dialog));
//   label = gtk_label_new(line);
//   g_signal_connect_swapped(dialog, "response", G_CALLBACK(gtk_widget_destroy), dialog);
//   gtk_container_add(GTK_CONTAINER(content_area), label);
//   gtk_widget_show_all(dialog);
// }

bool validCasualString(const char* someString){
  	char msgbuf[100];
  	
	GRegex *regex;
	GMatchInfo *match_info;

	regex = g_regex_new ("^[a-zA-Z-À-ÿ ']+$", 0, 0, NULL);
  	g_regex_match (regex, someString, 0, &match_info);

	if(g_match_info_matches (match_info))
    {
      gchar *word = g_match_info_fetch (match_info, 0);
    //   g_print ("Found: %s\n", word);
      g_free (word);
      g_match_info_next (match_info, NULL);
      return true;
    }
  	g_match_info_free (match_info);
  	g_regex_unref (regex);

	return false;
}

bool validEmail(const char* email){
	char msgbuf[100];
  	
	GRegex *regex;
	GMatchInfo *match_info;

	regex = g_regex_new ("^[a-z][a-z0-9.]{2,35}[@]{1}[a-z]{2,8}[.]{1}(fr|com|eu){1}$", 0, 0, NULL);
  	g_regex_match (regex, email, 0, &match_info);

	if(g_match_info_matches (match_info))
    {
      gchar *word = g_match_info_fetch (match_info, 0);
    //   g_print ("Found: %s\n", word);
      g_free (word);
      g_match_info_next (match_info, NULL);
      return true;
    }
  	g_match_info_free (match_info);
  	g_regex_unref (regex);

	return false;
}


bool validPwd(const char* password){
  	
	if(strlen(password) > 8 && strpbrk(password , "0123456789") != NULL){
		return true;
	}

	return false;

}
//TODO: define the rules to have a proper address
bool validAddr(const char* address){
  printf("checking adress...\n");
  return true;
}


bool validLicense(const char* licenseNbr){
	char msgbuf[100];
  	
	GRegex *regex;
	GMatchInfo *match_info;

	regex = g_regex_new ("^[0-9]{2}[A-Z]{2}[0-9]{5}$", 0, 0, NULL);
  	g_regex_match (regex, licenseNbr, 0, &match_info);

	if(g_match_info_matches (match_info))
    {
      gchar *word = g_match_info_fetch (match_info, 0);
    //   g_print ("Found: %s\n", word);
      g_free (word);
      g_match_info_next (match_info, NULL);
      return true;
    }
  	g_match_info_free (match_info);
  	g_regex_unref (regex);

	return false;
}
bool validPhone(const char* phoneNbr){
	char msgbuf[100];

	GRegex *regex;
	GMatchInfo *match_info;

	regex = g_regex_new ("^[0]{1}[0-9]{9}$", 0, 0, NULL);
	g_regex_match (regex, phoneNbr, 0, &match_info);

	if(g_match_info_matches (match_info))
	{
		gchar *word = g_match_info_fetch (match_info, 0);
	//   g_print ("Found: %s\n", word);
		g_free (word);
		g_match_info_next (match_info, NULL);
		return true;
	}
	g_match_info_free (match_info);
	g_regex_unref (regex);

	return false;
}



bool validTown(const char* townName){
	char msgbuf[100];

	GRegex *regex;
	GMatchInfo *match_info;
	regex = g_regex_new ("^[A-Za-z][a-z-À-ÿ]+[^[:punct:]]$", 0, 0, NULL);
	g_regex_match (regex, townName, 0, &match_info);

	if(g_match_info_matches (match_info))
	{
		gchar *word = g_match_info_fetch (match_info, 0);
		g_print ("Found: %s\n", word);

		g_free (word);
		g_match_info_next (match_info, NULL);
		return true;
	}
	g_match_info_free (match_info);
	g_regex_unref (regex);

	return false;
}

bool validPostalCode(const char* postal){
	char msgbuf[100];

	GRegex *regex;
	GMatchInfo *match_info;

	regex = g_regex_new ("^[0-9]{4}[0]$", 0, 0, NULL);
	g_regex_match (regex, postal, 0, &match_info);

	if(g_match_info_matches (match_info))
	{
		gchar *word = g_match_info_fetch (match_info, 0);
		g_free (word);
		g_match_info_next (match_info, NULL);
		return true;
	}
	g_match_info_free (match_info);
	g_regex_unref (regex);

	return false;
}


void psswHide(GtkWidget *this , GtkEntry* pswdInput){
	if(gtk_toggle_button_get_active (GTK_TOGGLE_BUTTON(this) )){
		
		gtk_entry_set_visibility(pswdInput, true);
		gtk_button_set_label(GTK_BUTTON(this), "Cacher");
	}else{

		gtk_entry_set_visibility(pswdInput, false);
		gtk_button_set_label(GTK_BUTTON(this), "Afficher");
	}
}
