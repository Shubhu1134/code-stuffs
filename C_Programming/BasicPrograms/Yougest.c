#include<stdio.h>
int main(){

    int a,b,c,age;

printf("\n ENTER THE AGE OF RAM:");
scanf("%d",&a);
printf("\n ENTER THE AGE OF SHYAM :");
scanf("%d",&b);
printf("\n ENTER THE AGE OF AJAY :");
scanf("%d",&c);


if(a>b && a>c){
    printf("RAM IS YOUNGEST");
}
else if(b>a&&b>c){
    printf("shyam is youngest");
}
else{
    printf("ajay is younest");
}

}