#include "../header/header.h"
#define FIELDS_QTY 7

GtkBuilder* mainBuilder;

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

	// address = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_addre"));
	formFields[4] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_addre"));

	// license = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_license"));
	formFields[5] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_license"));

	// phone = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_phone"));
	formFields[6] = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_phone"));

	button_valid = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "button_valid"));

   	g_signal_connect(button_valid, "clicked", G_CALLBACK(check_fields), formFields);
		
	gtk_window_set_default_size (GTK_WINDOW(window),
							 500,
							 500);
	gtk_widget_show(window);
};

char* check_fields( GtkWidget *widget, GtkWidget **inputsArray){

  	gchar* inputs[FIELDS_QTY];

  	for (u_int8_t i = 0; i < FIELDS_QTY; i++)
  	{
		const gchar *tmp = gtk_entry_get_text(GTK_ENTRY(inputsArray[i]));
		inputs[i] = tmp;
		printf("%s\n",tmp);
  	}
  
  
  
  	char* inputString = malloc(sizeof(char) * 500);
  	if(inputString == NULL){
		printf("manque d'espace mémoire; sortie...");
		exit(1);
  	}

  	return inputString;

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
  	__uint8_t length = strlen(someString);

	  if(length >= 2  && length <= 30){

		length -= 1; 
		while(length){
	  	if(  !(someString[length] >= 'a' && someString[length] <= 'z') || (someString[length] >= 'A' && someString[length] <= 'Z') ){
			return false;
	  	}
	  
	  	length--;
		}
		return true;
  	}
  	return false;
}

bool validEmail(const char* email){
  	regex_t regex;
	char msgbuf[100];
  	
	  GRegex *regex2;
	  GMatchInfo *match_info;

	regex2 = g_regex_new ("^[a-z][a-z0-9.]{2,35}[@]{1}[a-z]{2,8}[.]{1}(fr|com|eu){1}", 0, 0, NULL);
  	g_regex_match (regex2, "tho.mas.tres@gmail.fr", 0, &match_info);

	while (g_match_info_matches (match_info))
    {
      gchar *word = g_match_info_fetch (match_info, 0);
      g_print ("Found: %s\n", word);
      g_free (word);
      g_match_info_next (match_info, NULL);
    }
  	g_match_info_free (match_info);
  	g_regex_unref (regex2);

	return true;
}

	/*   
	// int buff = regcomp(&regex, "[:alnum:]{2-35}@[:alpha:]{2-8}[.][fr | com | eu]", 0);
	int buff = regcomp(&regex, "[a-zA-Z0-9.][@][a-zA-Z]", 0);
  	
// +@[a-zA-Z0-9].[a-zA-Z0-9]/

	if (buff) {
	  	fprintf(stderr, "Could not compile regex\n");
	  	exit(1);
  	}

		buff = regexec(&regex, "azerty.azerty@gmail.", 0, NULL, 0);
	if (!buff) {
		regfree(&regex);
		printf("yepeee\n");
    	return true;
	}
	else if (buff == REG_NOMATCH) {
		regfree(&regex);
		printf("buhhh\n");
		return false;
	}
	else {
	    regerror(buff, &regex, msgbuf, sizeof(msgbuf));
	    fprintf(stderr, "Regex match failed: %s\n", msgbuf);
	    exit(1);
	}


}
 */