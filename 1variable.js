// (var)
/*
    We can declare multiple variable with the same or different name also we can assign or re-assign the values in that given
    variable.

    Ex:- 
        var a = 10;        --true
        var a = 15;        --true     
        var a = "lipsa";   --true
        var a = true; etc. --true
*/

// (let)
/*
    with this ES6 let feture we can assign multiple values in a variable but we can't declare the same variable multiple
    times.

    Ex:- 
        let a = 10;        --true
        a = 15;            --true
        a = "lipsa";       --true
        a = true; etc      --true

        let a = "padhy"    --false // because we can declare multiple variable with same name.(remember it is case-sencitive)
*/

// (const)
/*
    this is a JS ES6 feture where we declare and assign value only once. we can't declare more the one variable with the same 
    name or we can't re-assign the value.(globaly)

    Ex:- 
        const a = 10;      --true

        a = 15;            --false
        a = "lipsa";       --false
        const a = "padhy"; --false
*/
