#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int arr[10];
    int arr1[] = {1, 2, 3, 4};
    int arr2[10] = {1, 1, 2, 2, 3, 3};

    int *arr3 = new int[10];

    cout << arr1.size() << endl;

    cout << "Printing arr: " << endl;
    for (int i = 0; i < 10; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    cout << "Printing arr2: " << endl;
    for (int i = 0; i < arr1.size() - 1; i++)
    {
        cout << arr1[i] << " ";
    }
    cout << endl;

    cout << "Printing arr2: " << endl;
    for (int i = 0; i < 10; i++)
    {
        cout << arr2[i] << " ";
    }
    cout << endl;

    cout << "Printing arr3: " << endl;
    for (int i = 0; i < arr3.size() - 1; i++)
    {
    }

    return 0;
}