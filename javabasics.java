import java.util.Scanner;

class javabasics
{
    public static void main(String[] args) 
    {
        Scanner sc=new Scanner(System.in);
        // String fruit=sc.nextLine();
        // switch(fruit){
            
        //     case "Mango" -> System.out.println("King of fruits");
        //     case "Apple" -> System.out.println("a sweet red fruit");
        //     default ->System.out.println("Enter a valid fruit:");
        // }
        
        int salary = sc.nextInt();
        if (salary>1000){
            salary +=  2000;

        }
        else if (salary>5000){
            salary += 3000;
            System.out.println("Salary not enough get more",salary)
        }
        else{
            System.out.println("Salary enough for use",salary);
        }

    }
}