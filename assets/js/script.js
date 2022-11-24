var calcular = function()  {    
    let cantidad = parseInt(document.querySelector("#cantidad").value);
    let color = document.querySelector("#color").value;
    document.querySelector("#totaltotal").innerHTML = 
    `<div class="card main-bg">               
      <ul class="list-group list-group-flush p-4>
        <li class="list-group-item">Total= $${cantidad * 40000}</li>
        <li class="list-group-item">Cantidad= ${cantidad}</li>
        <li class="list-group-item">Color= <span 
          style="height: 25px; width: 25px; border-radius: 50%; background-color: ${color}; display: inline-block">  
        <span/></li>
      </ul>       
    </div>`;
    
  };