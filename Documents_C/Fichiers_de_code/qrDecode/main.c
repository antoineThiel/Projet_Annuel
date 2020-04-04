#include <quirc.h>
#include <stdlib.h>
#include <stdio.h>

int main(void){
	
	struct quirc *qr;

	qr = quirc_new();
	if (!qr) {
		printf("Failed to allocate memory");
		abort();
	}

	if (quirc_resize(qr, 640, 480) < 0) {
    perror("Failed to allocate video memory");
    abort();
}

	quirc_destroy(qr);
	printf("end\n");
	
	return 0;
}