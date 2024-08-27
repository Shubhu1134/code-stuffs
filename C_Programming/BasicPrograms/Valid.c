#include<stdio.h>
int main(){
    int a,b,c,sum1,sum2,sum3;

    sum1=c+b;
    sum2=a+c;
    sum3=a+b;

printf("enter first side");
scanf("%d",&a);

printf("enter 2nd side");
scanf("%d",&b);


printf("enter 3rd side");
scanf("%d",&c);

if(a>b&& a>c && sum1>a){
    printf("TRIANGLE IS VALID");
}
else if (b>a&& b>c && sum2>a){
    printf("TRIANGLE IS VALID");

}else if (c>a && c>b && sum3>c){
    printf("triangle is valid ");
}
else {
    printf("TRIANGLE IS NOT VALID");
}


}