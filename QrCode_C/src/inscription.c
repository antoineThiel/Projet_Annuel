#include "../header/header.h"

GtkBuilder* mainBuilder;

void win_inscription(){

    GtkWidget *window;
    GtkWidget *lastName;
    GtkWidget *firstName;
    GtkWidget *mail;
    GtkWidget *password;
    GtkWidget *address;
    GtkWidget *license;
    GtkWidget *phone;
    GtkWidget *button_valid;
    
    mainBuilder = gtk_builder_new_from_file ("./glade/window_main.glade");
    
    window = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "window"));
    g_signal_connect(window, "destroy", G_CALLBACK(gtk_main_quit), NULL);
    
    //Faire une structure client :)
    lastName = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_last"));

    firstName = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_first"));

    mail = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_mail"));

    password = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_passw"));

    address = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_addre"));

    license = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_license"));

    phone = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "entry_phone"));

    button_valid = GTK_WIDGET(gtk_builder_get_object(mainBuilder, "button_valid"));
    g_signal_connect(button_valid, "clicked", G_CALLBACK(check_fields /*A faire*/), /*struct*/);
        
    gtk_widget_show(window);
};