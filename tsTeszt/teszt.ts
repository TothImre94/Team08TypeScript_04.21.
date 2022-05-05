export{};

function DiakInfo(nev:string, csoport:number, tipus:boolean):string{
    if(tipus==true){
        return nev+ " [Team0"+csoport+"] Junior Frontend";
    }else{
        return nev+ "[Team0"+csoport+"] Webfejlesztő";
    }
}

function SzovegesErtekeles(jegy:number):[string, string]{
    if(jegy==5)
    {
        return ["Példás","Példás"];
    }
    else if(jegy==4)
    {
        return ["Jó","Jó"];
    }
    else if(jegy==3)
    {
        return ["Hanyag","Rossz"];
    }else if(jegy==2)
    {
        return["Hanyag","Rossz"];
    }
    else
    {
        return["Hibás érték", "Hibás érték"];
    }
}

function HarommalOszthatokSzama(adatTomb:Array<number>):number{
    let darab:number = 0;
    for(let i=0;i<adatTomb.length;i++)
    {
        if(adatTomb[i]%3==0)
        {
            darab++;
        }
    }
    return darab;
}