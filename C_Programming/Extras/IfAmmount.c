#include <stdio.h>
int main() 
{
     
     int a,b,c,ammount;
     // ammount = input ammount to be taken 
     //a = notes of Rs. 100
     //b = notes of Rs. 50
     //c = notes of Rs. 10
printf("Enter an ammount;");

scanf ("%d",&ammount);

if (ammount >=100){
    a=ammount/100;
    ammount= ammount%100;
}
if (ammount >=50){
    b= ammount/50;
    ammount= ammount%50;
}
if (ammount >=10){
    c=ammount/10;
    ammount= ammount%10;
}
printf("notes of 100 :%d\n",a);
printf("notes of 50:%d\n",b);
printf("notes of 10:%d\n",c);
printf("Remaining notes :%d\n",ammount);

return 0;

}