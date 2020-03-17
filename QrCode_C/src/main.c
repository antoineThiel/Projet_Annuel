#include "../header/header.h"

GtkBuilder* MAIN_BUILDER;

int main(int argc, char *argv[]){

    GtkWidget *window;
    gtk_init (&argc, &argv);
    MAIN_BUILDER = gtk_builder_new_from_file ("./glade/window_main.glade");

    window = GTK_WIDGET(gtk_builder_get_object(MAIN_BUILDER, "window"));
    g_signal_connect(window, "destroy", G_CALLBACK(gtk_main_quit), NULL);
    gtk_widget_show(window);
    gtk_main();

    char* string = "coucou thomas";
    qrEncode(string);

    return 0;
}

