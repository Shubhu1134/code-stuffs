#include<stdio.h>
int main(){

    char sex,ms;
    int age;

    printf("enter age ,sex,marital status :");
    scanf("%d,%c,%c",&age,&sex,&ms);

    if(ms=='M'){
        printf("the driver is insured");
    }
    else if(ms=='y'){
        printf("the driver is insured");
    }
    else if(age>=30){
        printf("the driver is insured");
    }
    else{
        printf("the driver is not insured");
    }
    
}