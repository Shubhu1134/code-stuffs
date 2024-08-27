#include <stdio.h>
int main(){

    int a,b,c;

    printf("ENTER first NUMBERS:");
    scanf("%d",&a);
    printf("ENTER second NUMBERS:");
    scanf("%d",&b);
    printf("ENTER third NUMBERS:");
    scanf("%d",&c);

if(a>b && a>c) {
    printf("THIS NUMBER IS GREATEST:%d",a);
}else if(b>c && b>a){

 printf("THIS NUMBER IS GREATEST:%d",b);
}
else{
    printf("THIS NUMBER IS GREATEST:%d",c);
}
    }

