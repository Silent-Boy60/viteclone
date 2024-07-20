var element = document.getElementsByTagName('a');
console.log(element)
var imgs = document.querySelector(".navul").getElementsByTagName('img');
function downsection() {
    document.getElementById("navresources").addEventListener("mouseover", () => {
        document.getElementById("resources").classList.add("display");
    })
    document.getElementById("navresources").addEventListener("mouseout", () => {
        document.getElementById("resources").classList.remove("display");
    })
    document.getElementById("navversion").addEventListener("mouseover", () => {
        document.getElementById("version").classList.add("display");
    })
    document.getElementById("navversion").addEventListener("mouseout", () => {
        document.getElementById("version").classList.remove("display");
    })
    document.getElementById("navlang").addEventListener("mouseover", () => {
        document.getElementById("lang").classList.add("display");
    })
    document.getElementById("navlang").addEventListener("mouseout", () => {
        document.getElementById("lang").classList.remove("display");
    })
}
document.querySelector("#darklight").addEventListener("click", () => {
    console.log("Run");
    let imgsrc = document.getElementById("imgid").src
    console.log(imgsrc.split("svgs/")[1])
    if (imgsrc.split("svgs/")[1] == "dark.svg") {
        document.getElementById("imgid").src = "svgs/sun.svg"
        document.getElementById("imgid").style.filter = "invert(0)"
        for (let i = 0; i < element.length; i++) {
            element[i].style.color = "var(--darkcolor)"
        }
        // for (let i = 0; i < imgs.length; i++) {
        //     imgs[i].style.filter = "invert(0.1)"
        //     //    body.background = "white"
        // }
        document.body.style.backgroundColor = "var(--bodybright)"
        document.body.style.color = "var(--darkcolor)"
        document.getElementById("header").style.backgroundColor = "var(--bodybright)";
        document.getElementById("header").style.border = "var(--bodybright)";
        document.querySelector(".leftnav > input").style.backgroundColor = "var(--inputbricol)"
        document.querySelector(".leftnav > input").style.color = "var(--black)"
        document.querySelector(".heading").style.color = "var(--headingdarkcolor)"
        document.getElementById("diffimg").id = "diffimgc";
        Array.from(document.querySelectorAll(".changeimg")).forEach(element => {
            element.classList.add("imgschange")
        });
        Array.from(document.getElementsByClassName("box")).forEach(element => {
            element.style.backgroundColor = "#ffffff"
            element.style.color = "var(--darkcard)"
            element.classList.add("boxhover")
        });
        Array.from(document.querySelectorAll(".btnwhite")).forEach(element => {
            element.classList.add("whitebtn")
        });
        Array.from(document.getElementsByClassName("line")).forEach(element => {
            element.style.backgroundColor = "var(--brightline)"
        });
        Array.from(document.getElementsByClassName("btnwhite")).forEach(element => {
            element.style.backgroundColor = "var(--brightbtn)"
            element.style.color = "var(--brightcardcol)"
        });
        Array.from(document.getElementsByClassName("card")).forEach(element => {
            element.style.backgroundColor = "var(--brightcard)"
            element.style.color = "var(--brightcardcol)"
        });
        Array.from(document.querySelectorAll(".card > p")).forEach(element => {
            element.style.color = "var(--brightcardpcol)"
        });
        Array.from(document.querySelectorAll(".card > div")).forEach(element => {
            element.style.backgroundColor = "var(--brightcardimg)"
        });
        Array.from(document.getElementsByTagName("hr")).forEach(element => {
            element.style.backgroundColor = "var(--bseperator)"
        });
        Array.from(document.getElementsByClassName("sponsorscolor")).forEach(element => {
            element.style.backgroundColor = "#f6f6f7"
            element.style.color = "#121212"
        });
        // console.log(document.getElementsByClassName("specialsponsors"))
        Array.from(document.querySelectorAll(".specialsponsors img")).forEach(element => {
            element.style.filter = "var(--brightsponsorscardimg)"
        });
        Array.from(document.getElementsByClassName("sponsorsbtn")).forEach(element => {
            element.style.border = "1px solid gray"
            element.style.color = "gray"
        });
        Array.from(document.querySelectorAll(".footer > div")).forEach(element => {
            element.style.color = "gray"
        });
    }
    else {
        document.getElementById("imgid").src = "svgs/dark.svg"
        document.getElementById("imgid").style.filter = "invert(0.8)"
        for (let i = 0; i < element.length; i++) {
            element[i].style.color = "var(--color)"
            //    body.background = "white"
        }
        // for (let i = 0; i < imgs.length; i++) {
        //     imgs[i].style.filter = "invert(0.3)"
        //     //    body.background = "white"
        // }
        document.body.style.backgroundColor = "var(--bodycolor)"
        document.body.style.color = "var(--color)"
        document.getElementById("header").style.backgroundColor = "var(--bodycolor)";
        document.getElementById("header").style.border = "var(--bodycolor)";
        document.querySelector(".leftnav > input").style.backgroundColor = "var(--black)"
        document.querySelector(".leftnav > input").style.color = "var(--inputbricol)"
        // Array.from(document.getElementsByClassName("diffa")).forEach(element => {
        //     element.style.color = "var(--color)"
        // });
        document.getElementById("diffimgc").id = "diffimg";
        document.querySelector(".heading").style.color = "var(--headingcolor)"
        Array.from(document.getElementsByClassName("box")).forEach(element => {
            element.style.backgroundColor = "#202127"
            element.style.color = "white"
            element.classList.remove("boxhover")
        });
        Array.from(document.querySelectorAll(".changeimg")).forEach(element => {
            element.classList.remove("imgschange")
        });
        Array.from(document.getElementsByClassName("line")).forEach(element => {
            element.style.backgroundColor = "var(--darkline)"
        });
        Array.from(document.querySelectorAll(".btnwhite")).forEach(element => {
            element.classList.remove("whitebtn")
        });
        Array.from(document.getElementsByClassName("btnwhite")).forEach(element => {
            element.style.backgroundColor = "var(--darkbtn)"
            element.style.color = "white"
        });
        Array.from(document.getElementsByClassName("card")).forEach(element => {
            element.style.backgroundColor = "var(--darkcard)"
            element.style.color = "var(--darkcardcol)"
        });
        Array.from(document.querySelectorAll(".card > p")).forEach(element => {
            element.style.color = "var(--darkcardpcol)"
        });
        Array.from(document.querySelectorAll(".card > div")).forEach(element => {
            element.style.backgroundColor = "var(--darkcardimg)"
        });
        Array.from(document.getElementsByTagName("hr")).forEach(element => {
            element.style.backgroundColor = "var(--dseperator)"
        });
        Array.from(document.getElementsByClassName("sponsorscolor")).forEach(element => {
            element.style.backgroundColor = "#202127"
            element.style.color = "var(--bodybright)"
        });
        Array.from(document.querySelectorAll(".specialsponsors img")).forEach(element => {
            element.style.filter = "var(--sponsorscardimg)"
        });
        Array.from(document.getElementsByClassName("sponsorsbtn")).forEach(element => {
            element.style.border = "1px solid var(--darkcardpcol)"
            element.style.color = "var(--darkcardpcol)"
        });
        Array.from(document.querySelectorAll(".footer > div")).forEach(element => {
            element.style.color = "var(--darkcardpcol)"
        });
    }
})

downsection();
