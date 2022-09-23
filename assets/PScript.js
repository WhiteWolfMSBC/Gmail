
// Toggle navbar and images

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }



// Pop Up Chat Button


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}







 //   fetch data promotions


 const api_url2="https://jsonplaceholder.typicode.com/users";

 async function getdata(url){
     await fetch(url).then((res)=>{
          console.log(res);
          return res.json();
  
      }).then((data)=>{
          console.log(data);
 
          show(data);
      })   
  }
  
  getdata(api_url2);
  
  function show(data){
 
     let ptable=
     `<tr>
     </tr>`;
 
 
     for(let tbl of data){
         ptable += 
          `<tr>
          <td>
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </td>
          <td>
          <label class="form-check-label" for="star">
            <input class="star" type="checkbox" title="bookmark page">
          </label>
          </td>
          <td> <h4><b>.${tbl.id}.</b></h4>   </td>
          <td> <h5><b>${tbl.name}</b></h5>   </td>
          <td> <h5><b>${tbl.email}</b></h5>   </td>
          <td> <h5><b>${tbl.website}</b></h5>   </td>
          </tr>`;
      }
  
      document.getElementById("msg-promotion-table").innerHTML=ptable;
  }
  