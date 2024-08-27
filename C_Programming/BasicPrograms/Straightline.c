#include<stdio.h>
int main(){

    int x1,x2,x3,y1,y2,y3;

    printf("ennter point (x1),(y1),:");
    scanf("%d%d",&x1,&y1);

    printf("ennter point (x2).(y2):");
    scanf("%d%d",&x2,&y2);

    printf("ennter point (y2) :");
    scanf("%d",&y2);

    printf("ennter point (x3) :");
    scanf("%d",&x3);

    printf("ennter point (y3) :");
    scanf("%d",&y3);

    if(x1/y1==x2/y2 &&x1/y1==x1/y3){
        printf("ALL OF THREE POINTS LIES IN A STRAIGHT LINE");
    }
    else{
        printf("points are not on a straight line");
    }

}