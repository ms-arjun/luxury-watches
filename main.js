function explore(){
    document.location.href = "allcollection.html";
}

fetch('https://proud-barracuda.cyclic.app/api/watches/all')
.then(function(res){
    return res.json()
})
.then(function(data){
data.map(function(val){
  allCollectionFunc(val)
})
})
.catch(function(err){
    console.log(err)
})

function allCollectionFunc(fetchVal){
    let{title,images,description,oldPrice,currPrice} = fetchVal
    
    let allCollectionWatches = document.querySelector(".all-collection-cards");
    let divEle = document.createElement("div");
    divEle.style.width = "300px";
    divEle.style.height = "350px";

    let img = document.createElement("img");
     img.src = images;
     img.style.height = "200px"
     img.style.width = "297px"
     img.style.objectFit = "cover"
     img.alt = "img"

     
    let watchName = document.createElement("p");
    watchName.style.fontWeight = "bold"
    watchName.innerText = title;

    let desp = document.createElement("p");
    desp.style.fontSize = "10px";
    desp.style.position = "relative";
    desp.style.bottom = "12px"
    desp.innerText = description;

    let oldPri = document.createElement("p");
    oldPri.style.position = "relative";
    oldPri.style.bottom = "16px"
    oldPri.innerHTML = "old Price : " + oldPrice;

    
    let currPri = document.createElement("p");
    currPri.style.position = "relative";
    currPri.style.bottom = "16px"
    currPri.style.color = "#003150";
    currPri.style.fontWeight = "bold";
    currPri.innerHTML = "Offer Price : " + currPrice;

    let cartBtn= document.createElement("button");
    cartBtn.style.fontSize = "20px";
    cartBtn.style.color = "#003150";
    cartBtn.style.backgroundColor = "aliceblue";
    cartBtn.style.border = "none";
    cartBtn.style.position = "relative";
    cartBtn.style.bottom = "150px";
    cartBtn.style.left = "270px";
    cartBtn.innerHTML = "<i class='bx bx-cart-add'></i>";


    divEle.appendChild(img)
    divEle.appendChild(watchName);
    divEle.appendChild(desp);
    divEle.appendChild(oldPri);
    divEle.appendChild(currPri);
   divEle.appendChild(cartBtn);

    allCollectionWatches.append(divEle);
    }




   