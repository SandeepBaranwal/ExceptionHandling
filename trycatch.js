try{
    const m =1;
    const n =m;
    throw new Error("Kuch bhi ");
    console.log('Test..................');
}
catch(err)
{
    console.log(new Error('Variable not decalred, Error details are \n ' + err));
}
console.log('hiiiiiiiiiiiiiiiiiii');