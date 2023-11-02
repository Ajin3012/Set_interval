	let word=document.getElementById("welcm");
	let step=0;


	function result(){
	step++;
	let para=document.createElement("p");
	welcm.appendChild(para);
	para.innerHTML="Welcome here";
	}


let loop=setInterval(()=>{
			if(step===5){
				clearInterval(loop)
			} 
			else{
				result()
			}
		},1000)