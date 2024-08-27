#include<stdio.h>
int main(){
    int a,b,para,area;

    printf("Enter side a of ractangle");
    scanf("%d",&a);

    printf("Enter side b of ractangle");
    scanf("%d",&b);
//parameter of a ractangle
    para=2*(a+b);
    area=a*b;

if(para>area){
    printf("parameter of ractangle is grater than its area");
}
else{
    printf("area is greater than its parameter");
}

}