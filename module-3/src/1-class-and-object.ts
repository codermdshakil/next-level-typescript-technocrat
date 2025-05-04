{
    /**
     * Topic : Class and Object
     * 
     * - class
     *   - class properties
     *   - perameter properties - constructor(public name:string, public species:string, readonly sound:string){
     * 
     * 
     * 
     * 
     * */

    class Animal {

        // public name:string;
        // public species:string;
        // public sound:string;

        // parameter properties
    
        constructor(public name:string, public species:string, readonly sound:string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal('Kotta', 'Dog', 'Ghew Ghew Ghew');
    const cat = new Animal('Persian Bhai', 'Cat', 'Mew mew mew');
    cat.makeSound();

    

}