#include<iostream>
#include<conio.h>
#include<iomanip>
using namespace std;
int main()
{
double radius, radians, area;

cout<<showpoint;
cout<<setprecision(45);

cout<<"Enter the radius ; ";
cin>>radius;

cout<<"Enter the radians  ; ";
cin>>radians;

area = (double) 1/2 * radius * radius * radians;

cout<<setw(20)<<"This is sector are :: " <<area;


    getch();
}