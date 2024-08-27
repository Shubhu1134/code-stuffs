#include<stdio.h>
int main() {
    int num, i, sum = 0;

    // Prompt the user to input a number
    printf("Input any number: ");
    scanf("%d", &num);

    // Display the initial part of the series
    printf("1 + ");

    // Print the series
    for(i = 2; i <= num; i++)
        printf(" 1/%d +", i);

    // Calculate the sum of the series
    for(i = 1; i <= num; i++)
        sum = sum + i;


    // Calculate and display the sum
    printf("\nSum = 1/%d", sum + 1/num);

    return 0;
}
