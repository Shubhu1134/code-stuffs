#include<stdio.h>
int main(){
    
    int x=0,y=0,x1,y1,x2,y2 p1,p2,p3,p4;


 p1=x-x1;
p2=y-y1;
p3=x-x2;
p4=y-y2;

    printf("ENTER CORDINATE (x)");
    scanf("%d",&x);

    printf("ENTER CORDINATE (x)");
    scanf("%d",&x);

    printf("ENTER CORDINATE (x)");
    scanf("%d",&y);

    printf("ENTER CORDINATE (x)");
    scanf("%d",&x1);

    printf("ENTER CORDINATE (x)");
    scanf("%d",&y1);

    printf("ENTER CORDINATE (x)");
    scanf("%d",&x2);

    printf("ENTER CORDINATE (x)");
    scanf("%d",&y2);
// x,y coordinates of centre of circle 
//x1,y1 coordinates of the radius 
//x2,y2 are the coordinates of the point

// p1=x-x1;
// p2=y-y1;
// p3=x-x2;
// p4=y-y2;
//remeber by convention every p1,p2,p3,p4 should be in positive quantity

if(p1==p3 && p2==p4){
    printf("point lies on the circle");

}else if(p1>p3&& p2>p4){
    printf("point lies inside the circle");
}else{
    printf("point lies outside the ciercle");
}
    

}