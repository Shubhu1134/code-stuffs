#include<stdio.h>
int main(){
    
    float eng,hindi,maths,phy,chem,percent;

printf("\n enter the marks of ENGLISH :");
scanf("%f",&eng);

printf("\nenter the marks of HINDI :");
scanf("%f",&hindi);

printf("\n enter the marks of MATHS :");
scanf("%f",&maths);

printf("\n enter the marks of PHYSICS :");
scanf("%f",&phy);

printf("\n enter the marks of CHEMISTRY :");
scanf("%f",&chem);

percent=(eng+hindi+maths+phy+chem)/5;
printf("\n percent=%f",percent);

if(percent>=60){
    printf("\n FIRST DIVISION ");
}
else if(percent>=50){
    printf("\n SECOND DIVISION ");
}
else if(percent>=40){
    printf("\n THIRD DIVISI0N ");
}
else{
    printf("\n DONT WORRY TRY NEXT TIME: you are failed");
}


}