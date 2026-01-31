let homeEl = document.getElementById("home-el")
let guestEL = document.getElementById("guest-el")
let winningteamEl = document.getElementById("winningteam-el")
homepoint = 0
guestpoint = 0 



function homeonepoint() {
  homepoint = homepoint + 1  
    homeEl.textContent = homepoint
    winning()
}

function hometwopoints() {
     homepoint = homepoint + 2  
    homeEl.textContent = homepoint 
    
    winning()
}

function homethreepoints() {
      homepoint = homepoint + 3 
    homeEl.textContent = homepoint
    
    winning()
}

function guestonepoint() {
  guestpoint = guestpoint + 1  
    guestEL.textContent = guestpoint  
    
    winning()
}

function guesttwopoints() {
     guestpoint = guestpoint + 2  
    guestEL.textContent = guestpoint
    
    winning()
}

function guestthreepoints() {
     guestpoint = guestpoint + 3  
    guestEL.textContent = guestpoint
    
    winning()
}

function newgame(){
    
    document.getElementById("home-el").classList.remove("highlightwin")
     document.getElementById("guest-el").classList.remove("highlightwin")
         document.getElementById("home-el").classList.remove("highlightlose")
     document.getElementById("guest-el").classList.remove("highlightlose")
         document.getElementById("home-el").classList.remove("highlightdraw")
     document.getElementById("guest-el").classList.remove("highlightdraw")

    guestEL.textContent = 0 
    homeEl.textContent = 0 
    winningteamEl.textContent = " "
    homepoint = 0
    guestpoint = 0
    
}

function winning(){

    document.getElementById("home-el").classList.remove("highlightwin")
     document.getElementById("guest-el").classList.remove("highlightwin")
         document.getElementById("home-el").classList.remove("highlightlose")
     document.getElementById("guest-el").classList.remove("highlightlose")
         document.getElementById("home-el").classList.remove("highlightdraw")
     document.getElementById("guest-el").classList.remove("highlightdraw")

if (homepoint>guestpoint){

    winningteamEl.textContent = "HOME"
    document.getElementById("home-el").classList.add("highlightwin")
     document.getElementById("guest-el").classList.add("highlightlose")
}   else if (homepoint<guestpoint){

    winningteamEl.textContent = "Away"
     document.getElementById("home-el").classList.add("highlightlose")
     document.getElementById("guest-el").classList.add("highlightwin")
}else{

    winningteamEl.textContent = "DRAW"
    document.getElementById("home-el").classList.add("highlightdraw")
     document.getElementById("guest-el").classList.add("highlightdraw")
}



}

window.onload(winning())
