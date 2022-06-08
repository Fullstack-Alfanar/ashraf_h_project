let arr = [];

let bton = document.getElementById("btn");
let inp = document.getElementById("inp");
let date = document.getElementById("date");
let lis = document.getElementById("list");


bton.addEventListener("click", function () {

    //////////////check insert value
    if (inp.value == null || inp.value == "") {
        alert("insert somthing to the filed")
    }
    else {
        //////////////creat the pargraph 
        var par = document.createElement("p");
        par.classList.add("par_style");
        par.innerText = date.value;
        par.innerText = inp.value;
        lis.appendChild(par);
       
        //////////////creat button for remove the elemnt
        var remove_btn = document.createElement("button")
        remove_btn.innerText = "remove";
        par.appendChild(remove_btn)
        remove_btn.className="remove_btn"
        remove_btn.addEventListener("click", function () {
            list.removeChild(par);
        })

        //////////////creat button for add a line on the elemnt
        var done_btn = document.createElement("button")
        done_btn.innerText = "DONE";
        par.appendChild(done_btn)
        done_btn.addEventListener("click", function () {
            par.style.textDecoration = "line-through"
        })
        arr.push(inp.value);
        localStorage.setItem("lista", JSON.stringify(arr));
        inp.value = "";
    }

})




function getItemfromLocal() {
    if (localStorage.getItem("lista")) {
        arr = JSON.parse(localStorage.getItem("lista"))
    }
}
getItemfromLocal();