class auto{
    marka:string;

}
const ujAuto=new auto();//Osztály példányosítása ujAuto néven
ujAuto.marka="TESLA";//Példányosított osztály marka tulajdonságának "TESLA" értéke

class Szemely{
    //mező
    public nev: string;
    //Konstruktor egy paraméterrel
    public constructor(nevErtek:string){
        this.nev=nevErtek;
    }
    //metódus
    public dolgozik(){
        console.log(this.nev+"munkába megy...");
    }
}
const ujEmber=new Szemely("Józsi");
console.log(ujEmber.nev);
ujEmber.dolgozik();

class Dolgozo extends Szemely{

    //korábban létrehozott metódust fölürírtuk
    public dolgozik(){
        console.log(this.nev+"frontendes munkahelyre megy...");
    }
}
const ujDolgozo=new Dolgozo("Lajos");
console.log(ujDolgozo.nev);
ujDolgozo.dolgozik();