#include<stdio.h>
int main(){

    int i,n;
    int some[5];

    for(int i=0;i<5;i++){
        scanf("%d",&some[i]);
    }
    printf("displaying integers : ");

    for(int i=0; i<5;i++){
        printf("%d,",some[i]);
    }
    return 0;
}