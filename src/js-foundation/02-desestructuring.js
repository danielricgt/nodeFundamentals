console.log(process.env.PORT ?? 3000);

const {INFOPATH, LOGNAME} = process.env;  
// console.log(LOGNAME);

const characters = ['Flash','Superman', 'green Lantern' , 'Batman'];

const [ , ,batman] = characters;
// console.log(batman)