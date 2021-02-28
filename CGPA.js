const firstButton = document.getElementById('add');
const secondButton = document.getElementById('remove');


const tableBody = document.querySelector('.table-body');

const template = () => {
  const result = `
    <tr>
      <td>
        <form>
          <input id="course" type="text" placeholder="Your course..." required>
        </form>
      </td>
      <td>
        <form>
          <input class="credit-class" id="credit" type="number" placeholder="Credit load..." required>
        </form>
      </td>
      <td>
        <form>
          <select id="input" class="grade-class" type="text">
            <option></option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
            <option>F</option>
          </select>  
        </form>   
      </td>
    </tr>`
  return result
}

firstButton.addEventListener("click", (e) =>{
  e.preventDefault()
  tableBody.innerHTML += template()
});

secondButton.addEventListener("click", () =>{
  if(tableBody) {
    tableBody.removeChild(tableBody.lastChild)
  }   
});




const calculateResult = document.getElementById('CGPA');
const Button = document.getElementById('calculator');
const inputCredit = document.getElementsByClassName('credit-class');
const inputGrade = document.getElementsByClassName('grade-class');
const input = document.getElementById('input');



Button.addEventListener("click", () => {
  const creditLength = inputCredit.length;
  
  let newVariable = 0;
  let newValue = 0;

  for ( let i=0;  i < creditLength;  i++) 
  {   
    let creditValue = inputCredit[i].value
    let  grade = inputGrade[i].value;  
    if (grade !== 0 && creditValue !== 0)  {
      // if (grade === "A") {
      //    grade =  5 * creditValue;
      //   } 
      // if (grade === "B") {
      //    grade = 4 * creditValue;
      //   }
      // if (grade === "C") {
      //    grade = 3 * creditValue;
      //   }
      // if (grade === "D") {
      //    grade = 2 * creditValue;
      //   }
      // if (grade === "E") {
      //    grade = 1 * creditValue;
      //   }
      // if (grade === "F") {
      //    grade = 0 * creditValue;

      //   }

      switch(grade) {
        case "A":
          grade =  5 * creditValue;
          break;
        case "B":
          grade =  4 * creditValue;
          break;
        case "C":
          grade =  3 * creditValue;
          break;
        case "D":
          grade =  2 * creditValue;
          break;
        case "E":
          grade =  1 * creditValue;
          break;
        default:
          grade = 0 * creditValue;
      }

       
        
      if (creditValue != 0){
        newVariable = newVariable + parseInt(creditValue, 10);
      }
      
     if (grade !=0) {
        newValue = newValue + parseInt(grade, 10); 
      }
       
        
      let product = newValue / newVariable;

      calculateResult.textContent = 'Your CGPA is' + ' ' + product + ' ! '
      //calculateResult.textContent = "I'm ready man";
      //console.log(calculateResult) 
 }
      if(grade == 0 || creditValue == 0) {
     return 
     calculateResult.textContent = 'error!'
     }
     
  
        
  }

  
   
   })

   
 

 
