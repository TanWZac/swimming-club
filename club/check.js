function checker(){
    if (Validation() == true){
      replace('SWAP', 'LOADING', event);
      setTimeout(function(){
        document.getElementById("LOADING").style.display="none";
        document.getElementById("TARGET").style.display="flex";
        event.preventDefault();
      }, 8100)
    }
  }