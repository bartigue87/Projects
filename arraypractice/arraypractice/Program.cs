using System;

namespace arraypractice
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] happiness = { 5, 30, 45, 54,4};
            SunIsShining(happiness);
            foreach(int y in happiness)
            {
                Console.WriteLine(y);
            }


            ////declare 2D Array
            //string[,] matrix;

            ////declare 3D Array
            //string[,,] threeD;

            ////two dimensional array
            //int[,] array2D = new int[,]
            //{
            //    {1, 2, 3},
            //    {4, 5, 6},
            //    {7, 8, 9}
            //};

            //Console.WriteLine($"Central value is {array2D[1,1]}");
            
           

        }

        static void SunIsShining(int[] x)
        {
            for(int i = 0; i < x.Length; i++)
            {
                x[i] += 2;
            }
        }
    }
}

//            Boolean valid = false;
//            string inputValueType;

//            Console.WriteLine("Please enter any value:");
//            string value = Console.ReadLine();

//            Console.WriteLine("Please select the Data type to validate the input you have entered.");
//            Console.WriteLine("Press 1 for String");
//            Console.WriteLine("Press 2 for Integer");
//            Console.WriteLine("Press 3 for Boolean");

//            int input = int.Parse(Console.ReadLine());

//            switch (input)
//            {
//                case 1:
//                    valid = IsAllAlphabetic(value);
//                    inputValueType = "String";
//                    break;
//                case 2:
//                    int retValue = 0;
//                    valid = int.TryParse(value, out retValue);
//                    inputValueType = "Integer";
//                    break;
//                case 3:
//                    bool retFlag = false;
//                    valid = bool.TryParse(value, out retFlag);
//                    inputValueType = "Boolean";
//                    break;
//                default:
//                    inputValueType = "Unknown";
//                    Console.WriteLine("Not able to detect the input type, something is wrong.");
//                    break;

//            }

//            Console.WriteLine($"You have entered a value: {value}");
//            if (valid)
//            {
//                Console.WriteLine($"It is valid: {inputValueType}");
//            } else
//            {
//                Console.WriteLine($"It is an invalid {inputValueType} ");
//            }

            
//        }

//        static bool IsAllAlphabetic(string value)
//        {
//            foreach(char c in value)
//            {
//                if (!char.IsLetter(c))
//                {
//                    return false;
//                }
//            } return true;
//        }
//    }
//}


//string[] friends = { "Ian", "Anthony", "Michaela", "Will", "Destiny" };


//foreach(string name in friends)
//{
//    Console.WriteLine($"Hello {name}");

//}

//int[] nums = new int[10];

//for(int i = 0; i < 10; i++)
//{
//    nums[i] = i+3;
//}

//for(int j = 0; j < nums.Length; j++)
//{
//    Console.WriteLine($"Element {j} = {nums[j]}");
//}

//int counter = 0;
//foreach(int k in nums)
//{
//    Console.WriteLine($"Element {counter} = {k}");
//    counter++;
//} 

//int[] grades = new int[5];

//grades[0] = 20;
//grades[1] = 15;

//int[] gradesOfMathStudentsA = { 1, 2, 3, 4, 5, 6, 7 };

//int[] gradesOfMathStudentsB = new int[] { 1, 3, 45, 67, 8 };