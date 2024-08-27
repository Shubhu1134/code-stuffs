#include <stdio.h>
int main() {

    int age,status,gender;
    // if you are male =
    //if you are female =1
    // if you are married =0 ,unmarried =1


  printf("\nWhat is  your gender?? : ");
  scanf("%d", &gender);

  if(gender==0){

    printf("\n what is your age :" );
    scanf("%d", &age);

    // age <18, 40>

    ("<18 || >40" );


    printf("\n what is your marrital status ,0= married,1=unmarried: ");
    scanf ("%d",&status);

    if (status==0){
      printf("YOU ARE HIRED");
    }else ("YOU ARE NOT HIRED");


  } else if (gender ==1){
    printf("\n what is your age : ");
    scanf("%d",&age);
    // age 21 btw 35

    age("<21 || >35");

    printf("\n what is your marrital status ,0= married ,1=unmarried: ");
    scanf("%d",&status);

    if (status==0){
        printf("YOU ARE HIRED");
    }else("YOU ARE NOT HIRED");

}
}

