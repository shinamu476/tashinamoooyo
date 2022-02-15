

/* ==== Itemsクラス ==================================== */
class Items{
    constructor() {
        this.items={}
    }
    setItem(item,name){
        this.items[name]=item
    }
    isItem(name){
        if(this.items[name]==null){
            return false;
        }
        else{
            return true;
        }
    }
    getPrice(){
        var price=0;
        for(const itemKey of Object.keys(this.items)){
            price=price+this.items[itemKey].getPrice()
        }
        return price;
    }
    addItem(name){
        this.items[name].addNum();
    }
    subItem(name){
        this.items[name].subNum();
    }
    getName(name){
        return this.items[name].getName();
    }
    getNum(name){
        return this.items[name].getNum();
    }

}
/* ==== Itemクラス ==================================== */
class  Item{
    constructor(name,info,price,image) {
        this.name=name; //作品名
        this.info=info; //作品情報
        this.price=price; //値段
        this.image=image; //画像パス
        this.num=0; //購入数
    }

    addNum(){
        this.num=this.num+1;
    }
    subNum(){
        this.num=this.num-1;
        if(this.num<0){
            this.num=0;
        }
    }
    getPrice(){
        return this.num*this.price;
    }
    getName(){
        return this.name;
    }
    getNum(){
        return this.num;
    }
}


var items=new Items()





function addText(str){
    var elem  =  document.getElementById("showItem");
    elem.innerHTML =  elem.innerHTML +"<br>"+str;
}


/* カートに追加ボタンを表示して,カートから削除ボタンを消す */
function showAddButton(id){
    var elem  =   document.getElementById(id).querySelector(".addButton");
    elem.style.display ="block";
    var elem  =   document.getElementById(id).querySelector(".subButton");
    elem.style.display ="none";
}
/* カートから削除ボタンを表示して,カートに追加ボタンを消す */
function showSubButton(id){
    var elem  =   document.getElementById(id).querySelector(".subButton");
    elem.style.display ="block";
    var elem  =   document.getElementById(id).querySelector(".addButton");
    elem.style.display ="none";
}

function setItem(id){
    if(!items.isItem(id)){
        var oya  =   document.getElementById(id);
        var name  =  oya.querySelector(".workName").textContent;
        var info  =   oya.querySelector(".workInfo").textContent;
        var price  =  Number(oya.querySelector(".workPrice").textContent);
        oya.querySelector(".workPrice").textContent = price.toLocaleString();
        var image  =   oya.querySelector(".workImage").textContent;
        var item=new Item(name,info,price,image);
        items.setItem(item,id);
    }
}

function goke(){
    var p=items.getPrice();
    var elem  =  document.getElementById("goke");
    elem.innerHTML = "合計 : "+ p;
}

/* カートに追加ボタンを押されたときの処理 */
function addCart(id){
    setItem(id);
    items.addItem(id);
    addText("item : "+items.getName(id)+" , num : "+ items.getNum(id));
    showSubButton(id);
    goke();
}

/* カートから削除ボタンを押されたときの処理 */
function subCart(id){
    items.subItem(id);
    addText("item : "+items.getName(id)+" , num : "+ items.getNum(id));
    showAddButton(id);
    goke();
}














