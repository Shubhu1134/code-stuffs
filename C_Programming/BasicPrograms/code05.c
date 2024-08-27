#include<stdio.h>
int main(){

int time1,time2,time3,speed,a,b,c;

printf("ENTER SPEED OF TRAIN  in m/s  :  ");
scanf("%d",a);

printf("ENTER LENGTH OF TRAIN in m :  ");
scanf("%d",b);

printf("ENTER LENGTH OF PLATEFORM  in m: ");
scanf("%d"c);

tlength = (b+c);

time = tlength/speed;

// time in hours 
time1 =time/3600;
//time in minutes
time2 =(time%3600)/60;
// time in seconds 
time3 =(time%3600)%60;


printf("%d",time3);
}