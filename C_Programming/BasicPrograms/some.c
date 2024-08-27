#include <stdio.h>

int main(){

  // Program to check 
  // cadidate is eligible 
  // to hire or not based on
  // age, marital status, and 
  // gender!
  
  int age, status, gender;

  printf("Your Gender? enter 0 for male and 1 for female: \n");
  scanf("%d", &gender);

  if(gender == 0){
    // male conditions
    printf("What's your age?\n");
    scanf("%d", &age);

    if(age>=18 && age<=40){
      printf("Your Marital Staus? Enter 0 for married and 1 for unmarried:\n");
      scanf("%d", &status);
      if(status == 0){
        printf("You are hired!\n");
      }
      else{
        printf("You are not eligible!\n");
      }
    }
      else{
        printf("You are not eligible!\n");
      }
  }
  else if(gender == 1){
    // female conditions
    printf("What's your age?\n");
    scanf("%d", &age);

    if(age>=21 && age<=35){
      printf("Your Marital Staus? Enter 0 for married and 1 for unmarried:\n");
      scanf("%d", &status);
      if(status == 1){
        printf("You are hired!\n");
      }
      else{
        printf("You are not eligible!\n");
      }
    }
      else{
        printf("You are not eligible!\n");
      }
  }
  else{
    // other condition
    printf("You are not Eligible!");
  }

  return 0;
}
