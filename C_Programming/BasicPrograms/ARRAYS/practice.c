#include<stdio.h>
int main(){
    int n;
    printf("ENTER NUMBER OF ROWS : ");
    scanf("%d",&n);
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            printf("*");
        }
        printf("\n");
    }
}

//printf("######\n");
//printf("#\n#\n#####\n#\n#\n");
//return(0);

//printf("   ######\n ##      ##\n#\n");
//printf("#\n#\n#\n ##      ##\n");
//printf("   ######\n");
//return(0);
