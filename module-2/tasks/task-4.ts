{

    interface Book{
        id:number;
        name:string;
        price:number;
    }

    interface Magazine{
        name:string;
        totalBooks:number;
    }

    type commonType = Book | Magazine;
    type commonType2 = Book & Magazine;




}