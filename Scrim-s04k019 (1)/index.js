let homeEl = document.getElementById("home-el")
let guestEL = document.getElementById("guest-el")
homepoint = 0
guestpoint = 0 


function homeonepoint() {
  homepoint = homepoint + 1  
    homeEl.textContent = homepoint
    
}

function hometwopoints() {
     homepoint = homepoint + 2  
    homeEl.textContent = homepoint 
    
    
}

function homethreepoints() {
      homepoint = homepoint + 3 
    homeEl.textContent = homepoint
    
    
}

function guestonepoint() {
  guestpoint = guestpoint + 1  
    guestEL.textContent = guestpoint  
    
    
}

function guesttwopoints() {
     guestpoint = guestpoint + 2  
    guestEL.textContent = guestpoint
    
    
}

function guestthreepoints() {
     guestpoint = guestpoint + 3  
    guestEL.textContent = guestpoint
    
    
}

function newgame(){
    
    guestEL.textContent = 0 
    homeEl.textContent = 0 
    homepoint = 0
    guestpoint = 0
    
}

