

function App() {
 

  return (
 <div className="h-screen  flex flex-col justify-between ">
<div>
<div className="bg-[rgba(9,95,89,1)] sm:h-[80px] flex justify-between items-center text-center">
  <h1 className="font-montserrat text-3xl font-extrabold leading-[42.67px] text-left underline-from-font decoration-none text-white ">SHEY</h1>
  <div className="flex text-white font-montserrat sm:text-[20px] gap-4">
<h3>Home</h3>
<h3>Services</h3>
<h3>Contact us</h3>


  </div>
</div>  
  
  </div> 
<img   src="./images/Rectangle 12 (2).png" />
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-8 text-white w-[554px]   h-[531px] shadow-md lg:z-10 lg:h-[500px]  z-10 md:z-10">
<h1 className="font-montserrat sm:text-[70px] font-semibold leading-[85.33px] text-left underline-from-font decoration-none text-[rgba(9,95,89,0.84)]
">LOGIN</h1>
<div>
 <input className=" sm:mt-4  w-[461px]  sm:w-[461px] sm:h-[52px] border-[1px] border-[rgba(0,0,0,0.31)] rounded-[10px]"></input> 
</div>
<div>
 <input className="w-full sm:mt-4 sm:w-[461px] sm:h-[52px] border-[1px] border-[rgba(0,0,0,0.31)] rounded-[10px]"></input> 
</div>
<button className="w-full sm:mt-4 sm:w-[222px] h-[54px] bg-[rgba(9,95,89,1)] font-montserrat font-extrabold text-2xl rounded-lg">LOGIN</button>
<div className=" sm:mt-4 flex justify-between items-center">
<div className="w-[246px] top-[474px]  h-[1px] border border-black text-[rgba(16,26,28,1)]"></div>
<span className='sm:mt-4 font-montserrat text-2xl font-semibold leading-[30.48px] text-left underline-from-font decoration-none text-[rgba(16,26,28,1)]'>OR</span>
<div className="w-[246px] top-[474px]  h-[1px] border border-black"></div>  
</div>
<div className=" sm:mt-4 flex justify-center gap-16 px-">
<img  src="./images/image 1.png"/>
<img  src="./images/image 2.png"/>
</div>
<div className="flex justify-center text-center">
<p className="sm:mt-8 sm:w-[518px] sm:h-[25px] font-montserrat text-[rgba(9,95,89,0.75)] text-lg font-semibold leading-[24.38px] text-center ">Not yet registered , Click here to sign up</p>

</div>
</div>
<div className="absolute lg:left-[40px] md:left-[40px] md:top-[300px]  w-[185px] h-[185px] xl:top-[400px]  sm:top-[100px] top-[388px] sm:left-[110px] border-[23px] rounded-[50%] border-[rgba(2,185,75,0.1)] bg-[rgba(9,95,89,0.84)]"></div>

<div className="absolute w-[20px]  sm:w-[100px] xl:h-[278px] xl:w-[278px] h-[30px] sm:h-[128px] sm:top-[200px] md:top-[500px] xl:top-[649px]  lg:left-[800px]  lg:w-[200px] lg:h-[278px] lg:top-[350px]  md:left-[450px]   xl:left-[1531px]  sm:left-[30px] border-[48px] rounded-[50%] border-[rgba(2,185,75,0.1)] bg-[rgba(9,95,89,0.84)]"></div>

 </div>    
  )
}

export default App
