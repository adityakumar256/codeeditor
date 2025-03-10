

    

   





    let output = document.querySelector('#output'); 

let allinput = document.querySelectorAll('.leftpart textarea');



let html, css, js = ''; 
allinput.forEach((el,index)=>{
el.addEventListener("keyup",()=>{
  if(index==0){
html=el.value;
  }
  if(index==1){
    css=el.value;
  }
  if(index==2){
    js=el.value;
  }
  output.contentDocument.body.innerHTML = html;
  output.contentDocument.head.innerHTML = `<style>${css}</style>`;
output.contentWindow.eval(js);
})
});
