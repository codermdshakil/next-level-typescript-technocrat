{
    /**
     * Topic:  Conditional type
     * 
     * - যদি কোন একটি টাইপের মান  যখন অন্য কোন একটি টাইপ এর ওপর depended থাকে কোন একটি সর্তের মাধ্যমে তখন তাকে Condition type বলে।
     *  Ex: type isString<T> = T extends string ? 'Yes, string': 'No, Not string';
     * 
     * 
    */

    // conditional type - 1
    type isString<T> = T extends string ? "Yes, string": "No, Not string";

    type A = isString<'String'>; // Yes, string
    type B = isString<120>; // No, Not string

    // another
    type Pack<Item> = Item extends "Fragile" ? "Bubble Wrap" : "Box pack";

    type Glass = Pack<'Fragile'>;
    type Books = Pack<'Books'>;


 
}