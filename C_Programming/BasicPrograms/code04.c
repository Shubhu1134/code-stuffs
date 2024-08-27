#include<stdio.h>
int main(){

float ptdist,trlength,time,speed,totallength,timeA,timeB,timeC;
int timeE,timeF;

//total length = plateform lenguth + train length
//time = total length/speed
printf("enter lenght of train in meter  :");
scanf("%f",&trlength);

printf("ENTER THE LENGHT OF THE PLATEFORM  in meter: ");
scanf("%f",&ptdist);

printf("ENTER THE SPEED OF THE TRAIN in km/h:");
scanf("%f",&speed);

totallength =trlength+ptdist;

float speed1 =(speed*1000)/3600;

timeE =totallength/speed1; 

timeF = timeE/3600;
//for hours
timeA=timeF/3600;
timeB=(timeF % 3600)/60;//for minuts
timeC=((timeF % 3600) % 60);// for seconds

printf("timeA is %f",timeA);
printf("timeB is %f",timeB);
printf("timeC is %f",timeC;