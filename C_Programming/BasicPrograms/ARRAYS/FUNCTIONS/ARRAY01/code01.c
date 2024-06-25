#include<stdio.h>
int main(){

    int i,s=0;

    int some[]={1,2,3,4,5,6,7,8,9,12,45,56};
    for (i=0;i<=11;i++){
     s = s+i;
     printf("%d+",some[i]);
         }
 
    printf("\n=%d ",s);
    return 0;
}