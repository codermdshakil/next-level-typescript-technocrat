{
    /**
     * 
     * Spread And Rest Operator
     * 
     * - Spread Operator
     * - Rest Operator
     * 
     * 
    */

    // spread operator

    const friends: string[] = ['Noyon', 'Nadim', 'Shakil'];
    const friends2: string[] = ['Mahfuj', 'Asraf', 'Samiul'];
    // copy array
    const newArray = [...friends]; 
    friends.push(...friends2);

    const nums1:number[] = [2,3,4,5,6];
    const nums2:number[] = [5,6,8,9];

    // spread in array
    const bothNumbs:number[] = [...nums1, ...nums2, 1000]


    // spread in object
    const firstPriority = {
        techology:'Noyon',
        civilEng:'Nadim',
        peopleManagement:'Shakil'
    };

    const secondPriority = {
        thining:'Asraf',
        pokpok:'Mahfuj'
    };

    const allPriority = {
        ...firstPriority,
        ...secondPriority
    }


    // rest operators
    const greetFriends = (...friends:string[]) => {

        friends.forEach((friend) => console.log(`Hi!, Mr. ${friend}`))

    };

    greetFriends('Shakil', 'Nadim', 'Noyon');







}