export{};

function TeglalapKeruletTerulet (a:number, b:number):void{
    let kerulet:number=2*(a+b);
    let terulet:number=a*b;
    document.write(`<br>A ${a},${b} oldalú téglalap kerület: ${kerulet}`);
    document.write(`<br>A ${a},${b} oldalú téglalap terület: ${terulet}`);
}

//ParosE függvény
//Szám bemeneti paraméter
//logikai értékkel kell visszatérnie
function ParosE(vizsgalandoSzam:number):boolean{
    if(vizsgalandoSzam%2==0){
        return true;
    }
    return false;
}

// Prímszám generátor
// Határérték bemeneti paraméter(határ1, határ2)
// Egész szám értékkel térjen vissza, ami egy prímszám!

function PrimGenerator(hatarEgy:number, hatarKetto:number):number{
    let also:number;
    let felso:number;
    if(hatarEgy < hatarKetto) {
        also = hatarEgy;
        felso = hatarKetto;
    }
    else {
        also = hatarKetto;
        felso = hatarEgy;
    }
    let probalkozasokSzama=0;
    let sikeresGeneralas=false;
    let generaltSzam;
    do{
        generaltSzam=Math.round(Math.random()*(felso-also)+also);
        probalkozasokSzama++;
        let oszto=0;
        for(let i=1;i<=generaltSzam;i++)
        {
            if(generaltSzam%i==0){
                oszto++;
            }
        }
        if(oszto==2)
        {
            sikeresGeneralas=true;
        }
    }while(sikeresGeneralas=false && probalkozasokSzama<100)
    return generaltSzam;
}

function TeglalapKeruletTeruletTupleFuggveny(a:number, b:number):[number, number]{
    let kerulet:number=2*(a+b);
    let terulet:number=a*b;
    return [kerulet, terulet];
}

function UniverzalisTombGenerator(meret:number, alsoHatar:number, felsoHatar:number): Array<number>{
    let generaltTomb: Array<number>=[];
    for(let i=0;i<meret;i++)
    {
        generaltTomb.push(Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar);
    }
    return generaltTomb;
}
function OsszegzesTeteleTS(vizsgaltTomb:Array<number>):number{
    let osszeg:number=0;
    for(let i=0;i<vizsgaltTomb.length;i++)
    {
        osszeg+=vizsgaltTomb[i];
    }
    return osszeg;
}