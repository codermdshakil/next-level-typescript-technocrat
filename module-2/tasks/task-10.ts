{
    
    const getDisplayName = (name: string | null | undefined):string => {
        
        if(typeof name === 'string'){
            return name;

        }

        let result = name ?? "Anonymous";
        return result;
    }

    // const result =  getDisplayName("Shakil Ahmed");
    // const result =  getDisplayName(undefined); // Anonymous
    // const result =  getDisplayName(null); // Anonymous



}