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

	/* ... */

	quirc_destroy(qr);
	printf("end\n");
	
	return 0;
}