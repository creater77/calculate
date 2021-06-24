  const someOperation = document.getElementsByClassName('button-operation');
  const nameOperation = document.getElementById('name_operation');
  const endSolve = document.getElementById('end_solve');
  const out = document.getElementById('out');
  const tableSolve = document.getElementById("tableSolve");
  const deleteAnswer = document.getElementById('btnrmAnswer');
  const rankk = document.getElementById("rank");
  rankk.style.fontSize = "1.8rem";
  const regex = /[A-Za-zА-Яа-яЁё]/;


  // close instruction
  const openInstruction = document.getElementById('instruction');
  // 3
  const closeinstruction3 = document.getElementById('top6');
  const method3 = document.querySelector('.about_method_3');
  closeinstruction3.onclick = function() {
    method3.style.marginTop = "-50em";
  }

  // 4
  const closeinstruction4 = document.getElementById('top5');
  const method4 = document.querySelector('.about_method_4');
  closeinstruction4.onclick = function() {
    method4.style.marginTop = "-50em";
  }

  // 5
  const closeinstruction5 = document.getElementById('top4');
  const method5 = document.querySelector('.about_method_5');
  closeinstruction5.onclick = function() {
    method5.style.marginTop = "-50em";
  }

  // 6
  const closeinstruction6 = document.getElementById('top');
  const method6 = document.querySelector('.about_method_6');
  closeinstruction6.onclick = function() {
    method6.style.marginTop = "-50em";
  }

  // 7
  const closeinstruction7 = document.getElementById('top3');
  const method7 = document.querySelector('.about_method_7');
  closeinstruction7.onclick = function() {
    method7.style.marginTop = "-50em";
  }

  // 8
  const closeinstruction8 = document.getElementById('top1');
  const method8 = document.querySelector('.about_method_8');
  closeinstruction8.onclick = function() {
    method8.style.marginTop = "-50em";
  }

  // 9
  const closeinstruction9 = document.getElementById('top2');
  const method9 = document.querySelector('.about_method_9');
  closeinstruction9.onclick = function() {
    method9.style.marginTop = "-50em";
  }


  // buttons for matrix
  let typesBtns = document.createElement("div");
  typesBtns.classList.add("typesBtns");
  typesBtns.style.marginTop = "7px";

  //solve
  const solvebtn = document.createElement("button");
  solvebtn.classList.add("sovle");
  solvebtn.style.background = "#05932E";
  solvebtn.style.color = "white";
  solvebtn.style.borderRadius = "10px";
  solvebtn.style.padding = "5px";
  solvebtn.style.border = "none";
  solvebtn.style.fontWeight = "bold";
  solvebtn.style.marginRight = "4px";
  solvebtn.style.cursor = "pointer";
  solvebtn.innerHTML = "розрахувати";

  const solvebtnListeners = [];

  // clearfields
  const clearfields = document.createElement("button");
  clearfields.classList.add("field");
  clearfields.style.background = "black";
  clearfields.style.color = "white";
  clearfields.style.borderRadius = "10px";
  clearfields.style.padding = "5px";
  clearfields.style.border = "none";
  clearfields.style.fontWeight = "bold";
  clearfields.style.marginleft = "4px";
  clearfields.style.cursor = "pointer";
  clearfields.innerHTML = "очистити поля";

  // btnfillfielszero
  const zerofields = document.createElement("button");
  zerofields.classList.add("zero");
  zerofields.style.background = "black";
  zerofields.style.color = "white";
  zerofields.style.borderRadius = "10px";
  zerofields.style.padding = "5px";
  zerofields.style.border = "none";
  zerofields.style.fontWeight = "bold";
  zerofields.style.marginLeft = "4px";
  zerofields.style.cursor = "pointer";
  zerofields.innerHTML = "заповнити поля - 0";

  // clearMatrix
  const clearbtn = document.createElement("button");
  clearbtn.classList.add("clear");
  clearbtn.style.background = "#C80808";
  clearbtn.style.color = "white";
  clearbtn.style.borderRadius = "10px";
  clearbtn.style.padding = "5px";
  clearbtn.style.border = "none";
  clearbtn.style.fontWeight = "bold";
  clearbtn.style.marginRight = "4px";
  clearbtn.style.cursor = "pointer";
  clearbtn.innerHTML = "змінити матрицю";


  btnrmAnswer.onclick = function() {
    let tableTr = tableSolve.getElementsByTagName("tr");
    while(tableTr.length>0) {
      tableTr[0].parentNode.removeChild(tableTr[0]);
    }
    rankk.innerHTML = '';
    endSolve.style.opacity = 0;
    btnrmAnswer.disabled = true;

    solvebtn.disabled = false;
    solvebtn.style.background = "#05932E";

    clearbtn.disabled = false;
    clearbtn.style.background = "#C80808";
  }

  const span3 = document.createElement('span');
  span3.innerHTML = "A = ";
  span3.style.fontFamily = "Caveat, cursive";
  span3.style.fontSize = "1.5rem";
  span3.style.marginRight = ".5em";
  span3.style.opacity = 0;

  // for method9
  const span4 = document.createElement('span');
  span4.innerHTML = "A = ";
  span4.style.fontFamily = "Caveat, cursive";
  span4.style.fontSize = "1.5rem";
  span4.style.marginRight = ".5em";
  span4.style.opacity = 0;

  const span5= document.createElement('span');
  span5.innerHTML = "B = ";
  span5.style.fontFamily = "Caveat, cursive";
  span5.style.fontSize = "1.5rem";
  span5.style.marginRight = ".5em";
  span5.style.opacity = 0;

  // for method8
  const span6 = document.createElement('span');
  span6.innerHTML = "A = ";
  span6.style.fontFamily = "Caveat, cursive";
  span6.style.fontSize = "1.5rem";
  span6.style.marginRight = ".5em";
  span6.style.opacity = 0;

  const span7 = document.createElement('span');
  span7.innerHTML = "B = ";
  span7.style.fontFamily = "Caveat, cursive";
  span7.style.fontSize = "1.5rem";
  span7.style.marginRight = ".5em";
  span7.style.opacity = 0;




/////////// 3
// for clearbtn
function removeElements3(table, solvebtn, clearfields, clearbtn, zerofields, rows, cols, btn3) {
  let tr = table.getElementsByTagName("td");

  while(tr.length>0) {
    tr[0].parentNode.removeChild(tr[0]);
  }

  btn3.disabled = false;
  rows.disabled = false;
  cols.disabled = false;
  span3.style.opacity = 0;

  solvebtn.remove();
  clearfields.remove();
  clearbtn.remove();
  zerofields.remove();

  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));
}

// for clearfields
function clearFields3(table) {
  let inputs = table.getElementsByTagName("input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}

// fillfieldszero
function fillFieldsZero3(table) {
  let inputs = table.getElementsByTagName("input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = 0;
  }
}

// solveBtn3
function Determinant(arr2) {
  let N = arr2.length;
  let arr3 = [];
  let denom = 1;
  let exchanges = 0;

  for (let i = 0; i < N; ++i) {
    arr3[i] = [];
    for (let j = 0; j < N; ++j) {
      arr3[i][j] = arr2[i][j];
    }
  }

  for (let i = 0; i < N - 1; ++i) {
    let maxN = i;
    let maxValue = Math.abs(arr3[i][i]);
    for (let j = i + 1; j < N; ++j) {
      let value = Math.abs(arr3[j][i]);
      if (value > maxValue) {
        maxN = j;
        maxValue = value;
      }
    }
    if (maxN > i) {
      let tmp = arr3[i]
      arr3[i] = arr3[maxN];
      arr3[maxN] = tmp;
      ++exchanges;
    } else {
      if (maxValue == 0) {
        return maxValue;
      }
    }
    let value1 = arr3[i][i];
    for (let j = i + 1; j < N; ++j) {
      let value2 = arr3[j][i];
      arr3[j][i] = 0;
      for (let k = i + 1; k < N; ++k) {
        arr3[j][k] = (arr3[j][k] * value1 - arr3[i][k] * value2) / denom;
      }
    }
    denom = value1;
  }
  if (exchanges % 2) {
    return -arr3[N-1][N-1];
  } else {
    return arr3[N-1][N-1];
  }
}

function MatrixRank(arr1) {
  let matrix = arr1.length;
  let n = arr1[0].length;
  let k = (matrix < n ? matrix : n);
  let r = 1;
  let rank = 0;

  while(r <= k) {
    let arr2 = [];
    for (let i = 0; i < r; i++) {
      arr2[i] = [];
    }
    for (let a = 0; a < matrix - r + 1; a++) {
      for (let b = 0; b < n - r + 1; b++) {
        for (let c = 0; c < r; c++) {
          for (let d = 0; d < r; d++) {
            arr2[c][d] = arr1[a + c][b + d];
          }
          if (Determinant(arr2) != 0) {
            rank = r;
          }
        }
      }
    }
    r++;
  }
  console.log(rank);
  rankk.innerHTML = "Ранг матриці =  " + rank;
}

function solveBtn3(rows, cols, table) {
  let inputs = table.getElementsByTagName("input");
  let arr1 = [];
  let count1 = 0;

  for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].value == '') {
      alert("Заповніть всі поля!!!!!");
      return false;
    }
  }

  for (let i = 0; i < rows.value; i++) {
    arr1[i] = [];
    for (let j = 0; j < cols.value; j++) {
      arr1[i][j] = inputs[count1].value;
      count1++;
    }
  }

  endSolve.style.opacity = 1;
  endSolve.innerHTML = "Відповідь";

  btnrmAnswer.disabled = false;

  solvebtn.disabled = true;
  solvebtn.style.background = 'grey';

  clearbtn.disabled = true;
  clearbtn.style.background = 'grey';

  MatrixRank(arr1);
}

// creatematrix3
function creatematrix3(rows, cols, table, btn3) {
  rows.setAttribute("disabled", true);
  cols.setAttribute("disabled", true);
  btn3.setAttribute("disabled", true);

  span3.style.opacity = 1;


  typesBtns.appendChild(clearbtn);
  typesBtns.appendChild(solvebtn);
  typesBtns.appendChild(clearfields);
  typesBtns.appendChild(zerofields);

  for (let i = 0; i < rows.value; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < cols.value; j++) {
      let td = document.createElement('td');
      let input = document.createElement('INPUT')
      input.setAttribute("type", "text");
      input.setAttribute("value", '');
      input.required = true;
      input.style.textAlign = "center";
      input.style.width = "60px";
      input.oninput = function() {
        this.value = this.value.replace(regex, '');
      }

      td.appendChild(input);
      td.width = "20px";

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }


  clearbtn.addEventListener("click", removeElements3.bind(null, table, solvebtn, clearfields, clearbtn, zerofields, rows, cols, btn3), false);
  clearfields.addEventListener("click", clearFields3.bind(null, table), false);
  zerofields.addEventListener("click", fillFieldsZero3.bind(null, table), false);

  const solvebtnListener = solveBtn3.bind(null, rows, cols, table);
  solvebtn.addEventListener("click", solvebtnListener, false);
  solvebtnListeners.push(solvebtnListener);
}

function numberLiThree() {
  instruction.style.opacity = 1;
  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));

  const method = document.getElementById('method');
  method.innerHTML = " ";
  typesBtns.innerHTML = " ";

  // div
  let div = document.createElement('div');
  div.classList.add("plusandminus")
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";

  // span 1,2
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');

  // btn3
  let btn3 =  document.createElement('button');
  btn3.style.marginTop = "5px";
  btn3.style.borderRadius = "5px";
  btn3.style.background = "white";
  btn3.style.padding = "5px";
  btn3.style.cursor = "pointer";
  btn3.style.border = "none";
  btn3.style.letterSpacing = "2px";
  btn3.classList.add("createMatrix6");
  btn3.innerHTML = 'створити';
  btn3.getAttribute("disabled", false);

  let createMatrix6 = document.querySelector('createMatrix6');

  // select3
  let select1 = document.createElement('select');
  select1.classList.add("number1");
  let select2 = document.createElement('select');
  select2.classList.add("number2");


  // select1 option
  let Select1option1 = document.createElement('option');
  let Select1option2 = document.createElement('option');
  let Select1option3 = document.createElement('option');
  let Select1option4 = document.createElement('option');
  let Select1option5 = document.createElement('option');
  let Select1option6 = document.createElement('option');

  // select2 option
  let Select2option1 = document.createElement('option');
  let Select2option2 = document.createElement('option');
  let Select2option3 = document.createElement('option');
  let Select2option4 = document.createElement('option');
  let Select2option5 = document.createElement('option');
  let Select2option6 = document.createElement('option');

  // block for size matrix
  let sizeMatrix = document.createElement("div");
  sizeMatrix.classList.add("sizeMatrix");

  // block for created matrix
  let createdMatrix = document.createElement("div");
  createdMatrix.classList.add("createdMatrix");
  createdMatrix.style.marginTop = "7px";
  createdMatrix.style.display = "flex";
  createdMatrix.style.alignItems = "center";


  // span1
  span1.innerHTML = "Розмір матриці";
  span1.style.marginRight = "10px";
  span1.style.fontFamily = "Caveat, cursive";
  span1.style.fontSize = "1.8rem";

  // span2
  span2.innerHTML = "X";
  span2.style.marginRight = "7px";
  span2.style.marginLeft = "5px";
  span2.style.fontFamily = "Caveat, cursive";
  span2.style.fontSize = "1rem";

  // span3
  span3.innerHTML = "A = ";
  span3.style.fontFamily = "Caveat, cursive";
  span3.style.fontSize = "1.5rem";
  span3.style.marginRight = ".5em";
  span3.style.opacity = 0;

  // option select1
  Select1option2.value = '2';
  Select1option2.innerHTML = 2;

  Select1option3.value = '3';
  Select1option3.innerHTML = 3;

  Select1option4.value = '4';
  Select1option4.innerHTML = 4;

  Select1option5.value = '5';
  Select1option5.innerHTML = 5;

  Select1option6.value = '6';
  Select1option6.innerHTML = 6;

  select1.appendChild(Select1option2);
  select1.appendChild(Select1option3);
  select1.appendChild(Select1option4);
  select1.appendChild(Select1option5);
  select1.appendChild(Select1option6);

  // option select2
  Select2option2.value = '2';
  Select2option2.innerHTML = 2;

  Select2option3.value = '3';
  Select2option3.innerHTML = 3;

  Select2option4.value = '4';
  Select2option4.innerHTML = 4;

  Select2option5.value = '5';
  Select2option5.innerHTML = 5;

  Select2option6.value = '6';
  Select2option6.innerHTML = 6;

  select2.appendChild(Select2option2);
  select2.appendChild(Select2option3);
  select2.appendChild(Select2option4);
  select2.appendChild(Select2option5);
  select2.appendChild(Select2option6);

  // table

  let table = document.createElement("table");
  table.id = "out";

  div.appendChild(sizeMatrix);
  sizeMatrix.appendChild(span1);
  sizeMatrix.appendChild(select1);
  sizeMatrix.appendChild(span2);
  sizeMatrix.appendChild(select2);

  div.appendChild(btn3);

  div.appendChild(createdMatrix);
  createdMatrix.appendChild(span3);
  createdMatrix.appendChild(table);

  div.appendChild(typesBtns);

  document.getElementById('method').appendChild(div);

  btn3.addEventListener("click", creatematrix3.bind(null, select1, select2, table, btn3), false);

}

/////////// 4
// for clearbtn
function removeElements4(table, number, solvebtn, clearfields, clearbtn, zerofields, btn4) {
  let tr = table.getElementsByTagName("td");

  while(tr.length>0) {
    tr[0].parentNode.removeChild(tr[0]);
  }

  btn4.disabled = false;
  number.disabled = false;
  span3.style.opacity = 0;

  solvebtn.remove();
  clearfields.remove();
  clearbtn.remove();
  zerofields.remove();

  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));
}

// for clearfields
function clearFields4(table) {
  let inputs = table.getElementsByTagName("input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}

// fillfieldszero
function fillFieldsZero4(table) {
  let inputs = table.getElementsByTagName("input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = 0;
  }
}

// solveBtn4
function Determinant(arr1) {
  let N = arr1.length;
  let arr2 = [];
  let denom = 1;
  let exchanges = 0;

  for (let i = 0; i < N; ++i) {
    arr2[i] = [];
    for (let j = 0; j < N; ++j) {
      arr2[i][j] = arr1[i][j];
    }
  }

  for (let i = 0; i < N - 1; ++i) {
    let maxN = i;
    let maxValue = Math.abs(arr2[i][i]);
    for (let j = i + 1; j < N; ++j) {
      let value = Math.abs(arr2[j][i]);
      if (value > maxValue) {
        maxN = j;
        maxValue = value;
      }
    }
    if (maxN > i) {
      let tmp = arr2[i]
      arr2[i] = arr2[maxN];
      arr2[maxN] = tmp;
      ++exchanges;
    } else {
      if (maxValue == 0) {
        return maxValue;
      }
    }
    let value1 = arr2[i][i];
    for (let j = i + 1; j < N; ++j) {
      let value2 = arr2[j][i];
      arr2[j][i] = 0;
      for (let k = i + 1; k < N; ++k) {
        arr2[j][k] = (arr2[j][k] * value1 - arr2[i][k] * value2) / denom;
      }
    }
    denom = value1;
  }
  if (exchanges % 2) {
    return -arr2[N-1][N-1];
  } else {
    return arr2[N-1][N-1];
  }
}

function solveBtn4(number, table) {
  let inputs = table.getElementsByTagName("input");
  let arr1 = [];
  let count1 = 0;
  let result = 0;

  for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].value == '') {
      alert("Заповніть всі поля!!!!!");
      return false;
    }
  }

  for (let i = 0; i < number.value; i++) {
    arr1[i] = [];
    for (let j = 0; j < number.value; j++) {
      arr1[i][j] = inputs[count1].value;
      count1++;
    }
  }

  endSolve.style.opacity = 1;
  endSolve.innerHTML = "Відповідь";

  btnrmAnswer.disabled = false;

  solvebtn.disabled = true;
  solvebtn.style.background = 'grey';

  clearbtn.disabled = true;
  clearbtn.style.background = 'grey';

  result = Determinant(arr1);

  rankk.innerHTML = "Rank = " + result;

}


function creatematrix4(number, table, btn4){
  number.setAttribute("disabled", true);
  btn4.setAttribute("disabled", true);

  span3.style.opacity = 1;


  typesBtns.appendChild(clearbtn);
  typesBtns.appendChild(solvebtn);
  typesBtns.appendChild(clearfields);
  typesBtns.appendChild(zerofields);

  for (let i = 0; i < number.value; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < number.value; j++) {
      let td = document.createElement('td');
      let input = document.createElement('INPUT')
      input.setAttribute("type", "text");
      input.setAttribute("value", '');
      input.style.textAlign = "center";
      input.style.width = "60px";
      input.oninput = function() {
        this.value = this.value.replace(regex, '');
      }

      td.appendChild(input);
      td.width = "20px";

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  clearbtn.addEventListener("click", removeElements4.bind(null, table, number, solvebtn, clearfields, clearbtn, zerofields, btn4), false);
  clearfields.addEventListener("click", clearFields4.bind(null, table), false);
  zerofields.addEventListener("click", fillFieldsZero4.bind(null, table), false);

  const solvebtnListener = solveBtn4.bind(null, number, table);
  solvebtn.addEventListener("click", solvebtnListener, false);
  solvebtnListeners.push(solvebtnListener);
}

function numberLiFour() {
  instruction.style.opacity = 1;
  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));

  const method = document.getElementById('method');
  method.innerHTML = " ";
  typesBtns.innerHTML = " ";

  // div
  let div = document.createElement('div');
  div.classList.add("plusandminus")
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";

  // span 1,2
  const span1 = document.createElement('span');

  // btn4
  let btn4 =  document.createElement('button');
  btn4.style.marginTop = "5px";
  btn4.style.borderRadius = "5px";
  btn4.style.background = "white";
  btn4.style.padding = "5px";
  btn4.style.border = "none";
  btn4.style.letterSpacing = "2px";
  btn4.style.cursor = "pointer";
  btn4.classList.add("createMatrix6");
  btn4.innerHTML = 'створити';
  btn4.getAttribute("disabled", false);

  let createMatrix6 = document.querySelector('createMatrix6');

  // select7
  let select1 = document.createElement('select');
  select1.classList.add("number1");

  // select1 option
  let Select1option1 = document.createElement('option');
  let Select1option2 = document.createElement('option');
  let Select1option3 = document.createElement('option');
  let Select1option4 = document.createElement('option');
  let Select1option5 = document.createElement('option');
  let Select1option6 = document.createElement('option');

  // block for size matrix
  let sizeMatrix = document.createElement("div");
  sizeMatrix.classList.add("sizeMatrix");

  // block for created matrix
  let createdMatrix = document.createElement("div");
  createdMatrix.classList.add("createdMatrix");
  createdMatrix.style.marginTop = "7px";
  createdMatrix.style.display = "flex";
  createdMatrix.style.alignItems = "center";


  // span1
  span1.innerHTML = "Розмір матриці";
  span1.style.marginRight = "10px";
  span1.style.fontFamily = "Caveat, cursive";
  span1.style.fontSize = "1.8rem";

  // span3
  span3.innerHTML = "A = ";
  span3.style.fontFamily = "Caveat, cursive";
  span3.style.fontSize = "1.5rem";
  span3.style.marginRight = ".5em";
  span3.style.opacity = 0;

  // option select1
  Select1option2.value = '2';
  Select1option2.innerHTML = 2;

  Select1option3.value = '3';
  Select1option3.innerHTML = 3;

  Select1option4.value = '4';
  Select1option4.innerHTML = 4;

  Select1option5.value = '5';
  Select1option5.innerHTML = 5;

  Select1option6.value = '6';
  Select1option6.innerHTML = 6;

  select1.appendChild(Select1option2);
  select1.appendChild(Select1option3);
  select1.appendChild(Select1option4);
  select1.appendChild(Select1option5);
  select1.appendChild(Select1option6);

  // table

  let table = document.createElement("table");
  table.id = "out";

  div.appendChild(sizeMatrix);
  sizeMatrix.appendChild(span1);
  sizeMatrix.appendChild(select1);

  div.appendChild(btn4);

  div.appendChild(createdMatrix);
  createdMatrix.appendChild(span3);
  createdMatrix.appendChild(table);

  div.appendChild(typesBtns);

  document.getElementById('method').appendChild(div);

  btn4.addEventListener("click", creatematrix4.bind(null, select1, table, btn4), false);
}
////////////4




/////////// 5
// for clearbtn
function removeElements5(table, number, solvebtn, clearfields, clearbtn, zerofields, btn5) {
  let tr = table.getElementsByTagName("td");

  while(tr.length>0) {
    tr[0].parentNode.removeChild(tr[0]);
  }

  btn5.disabled = false;
  number.disabled = false;
  span3.style.opacity = 0;

  solvebtn.remove();
  clearfields.remove();
  clearbtn.remove();
  zerofields.remove();

  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));
}

// for clearfields
function clearFields5(table) {
  let inputs = table.getElementsByTagName("input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}

// fillfieldszero
function fillFieldsZero5(table) {
  let inputs = table.getElementsByTagName("input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = 0;
  }
}

// solveBtn5
function Determinant(arr1) {
  let N = arr1.length;
  let arr2 = [];
  let denom = 1;
  let exchanges = 0;

  for (let i = 0; i < N; ++i) {
    arr2[i] = [];
    for (let j = 0; j < N; ++j) {
      arr2[i][j] = arr1[i][j];
    }
  }

  for (let i = 0; i < N - 1; ++i) {
    let maxN = i;
    let maxValue = Math.abs(arr2[i][i]);
    for (let j = i + 1; j < N; ++j) {
      let value = Math.abs(arr2[j][i]);
      if (value > maxValue) {
        maxN = j;
        maxValue = value;
      }
    }
    if (maxN > i) {
      let tmp = arr2[i]
      arr2[i] = arr2[maxN];
      arr2[maxN] = tmp;
      ++exchanges;
    } else {
      if (maxValue == 0) {
        return maxValue;
      }
    }
    let value1 = arr2[i][i];
    for (let j = i + 1; j < N; ++j) {
      let value2 = arr2[j][i];
      arr2[j][i] = 0;
      for (let k = i + 1; k < N; ++k) {
        arr2[j][k] = (arr2[j][k] * value1 - arr2[i][k] * value2) / denom;
      }
    }
    denom = value1;
  }
  if (exchanges % 2) {
    return -arr2[N-1][N-1];
  } else {
    return arr2[N-1][N-1];
  }
}

function AdjugateMatrix(arr1) {
  let N = arr1.length;
  let adjArr1 = [];

  for (let i = 0; i < N; i++) {
    adjArr1[i] = [];
    for (let j = 0; j < N; j++) {
      let arr2 = [];
      let sign = ((i + j) % 2 == 0) ? 1 : -1;
      for (let m = 0; m < j; m++) {
        arr2[m] = [];
        for (let n = 0; n < i; n++) {
          arr2[m][n] = arr1[m][n];
        }
        for (let n = i + 1; n < N; n++) {
          arr2[m][n - 1] = arr1[m][n];
        }
      }
      for (let m = j + 1; m < N; m++) {
        arr2[m - 1] = [];
        for (let n = 0; n < i; n++) {
          arr2[m - 1][n] = arr1[m][n];
        }
        for (let n = i + 1; n < N; n++) {
          arr2[m-1][n-1] = arr1[m][n];
        }
      }
      adjArr1[i][j] = sign * Determinant(arr2);
    }
  }

  return adjArr1;
}

function InverseMatrix(arr1) {
  let det = Determinant(arr1);
  if (det == 0) return false;
  let N = arr1.length;
  arr1 = AdjugateMatrix(arr1);
  let arrFinal = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      arr1[i][j] /= det;
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    arrFinal[i] = [];
    for (let j = 0; j < arr1[0].length; j++) {
      arrFinal[i][j] = arr1[i][j].toFixed(1);
    }
  }

  for (let i = 0; i < arrFinal.length; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < arrFinal[0].length; j++) {
      let td = document.createElement('td');
      td.innerHTML = arrFinal[i][j];

      tr.appendChild(td);
    }
    tableSolve.appendChild(tr);
  }

  console.log(arrFinal);
}

function solveBtn5(number, table) {
  let inputs = table.getElementsByTagName("input");
  let arr1 = [];
  let count1 = 0;

  for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].value == '') {
      alert("Заповніть всі поля!!!!!");
      return false;
    }
  }

  for (let i = 0; i < number.value; i++) {
    arr1[i] = [];
    for (let j = 0; j < number.value; j++) {
      arr1[i][j] = inputs[count1].value;
      count1++;
    }
  }

  endSolve.style.opacity = 1;
  endSolve.innerHTML = "Відповідь";

  btnrmAnswer.disabled = false;

  solvebtn.disabled = true;
  solvebtn.style.background = 'grey';

  clearbtn.disabled = true;
  clearbtn.style.background = 'grey';

  InverseMatrix(arr1);

}

// creatematrix5
function creatematrix5(number, table, btn5){
  number.setAttribute("disabled", true);
  btn5.setAttribute("disabled", true);

  span3.style.opacity = 1;


  typesBtns.appendChild(clearbtn);
  typesBtns.appendChild(solvebtn);
  typesBtns.appendChild(clearfields);
  typesBtns.appendChild(zerofields);

  for (let i = 0; i < number.value; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < number.value; j++) {
      let td = document.createElement('td');
      let input = document.createElement('INPUT')
      input.setAttribute("type", "text");
      input.setAttribute("value", '');
      input.style.textAlign = "center";
      input.style.width = "60px";
      input.oninput = function() {
        this.value = this.value.replace(regex, '');
      }

      td.appendChild(input);
      td.width = "20px";

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  clearbtn.addEventListener("click", removeElements5.bind(null, table, number, solvebtn, clearfields, clearbtn, zerofields, btn5), false);
  clearfields.addEventListener("click", clearFields5.bind(null, table), false);
  zerofields.addEventListener("click", fillFieldsZero5.bind(null, table), false);

  const solvebtnListener = solveBtn5.bind(null, number, table);
  solvebtn.addEventListener("click", solvebtnListener, false);
  solvebtnListeners.push(solvebtnListener);
}

function numberLiFive() {
  instruction.style.opacity = 1;
  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));

  const method = document.getElementById('method');
  method.innerHTML = " ";
  typesBtns.innerHTML = " ";

  // div
  let div = document.createElement('div');
  div.classList.add("plusandminus")
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";

  // span 1,2
  const span1 = document.createElement('span');

  // btn5
  let btn5 =  document.createElement('button');
  btn5.style.marginTop = "5px";
  btn5.style.borderRadius = "5px";
  btn5.style.background = "white";
  btn5.style.padding = "5px";
  btn5.style.border = "none";
  btn5.style.letterSpacing = "2px";
  btn5.style.cursor = "pointer";
  btn5.classList.add("createMatrix6");
  btn5.innerHTML = 'створити';
  btn5.getAttribute("disabled", false);

  let createMatrix6 = document.querySelector('createMatrix6');

  // select5
  let select1 = document.createElement('select');
  select1.classList.add("number1");

  // select1 option
  let Select1option1 = document.createElement('option');
  let Select1option2 = document.createElement('option');
  let Select1option3 = document.createElement('option');
  let Select1option4 = document.createElement('option');
  let Select1option5 = document.createElement('option');
  let Select1option6 = document.createElement('option');

  // block for size matrix
  let sizeMatrix = document.createElement("div");
  sizeMatrix.classList.add("sizeMatrix");

  // block for created matrix
  let createdMatrix = document.createElement("div");
  createdMatrix.classList.add("createdMatrix");
  createdMatrix.style.marginTop = "7px";
  createdMatrix.style.display = "flex";
  createdMatrix.style.alignItems = "center";


  // span1
  span1.innerHTML = "Розмір матриці";
  span1.style.marginRight = "10px";
  span1.style.fontFamily = "Caveat, cursive";
  span1.style.fontSize = "1.8rem";

  // span3
  span3.innerHTML = "A = ";
  span3.style.fontFamily = "Caveat, cursive";
  span3.style.fontSize = "1.5rem";
  span3.style.marginRight = ".5em";
  span3.style.opacity = 0;

  // option select1
  Select1option2.value = '2';
  Select1option2.innerHTML = 2;

  Select1option3.value = '3';
  Select1option3.innerHTML = 3;

  Select1option4.value = '4';
  Select1option4.innerHTML = 4;

  Select1option5.value = '5';
  Select1option5.innerHTML = 5;

  Select1option6.value = '6';
  Select1option6.innerHTML = 6;

  select1.appendChild(Select1option2);
  select1.appendChild(Select1option3);
  select1.appendChild(Select1option4);
  select1.appendChild(Select1option5);
  select1.appendChild(Select1option6);

  // table
  let table = document.createElement("table");
  table.id = "out";

  div.appendChild(sizeMatrix);
  sizeMatrix.appendChild(span1);
  sizeMatrix.appendChild(select1);

  div.appendChild(btn5);

  div.appendChild(createdMatrix);
  createdMatrix.appendChild(span3);
  createdMatrix.appendChild(table);

  div.appendChild(typesBtns);

  document.getElementById('method').appendChild(div);

  btn5.addEventListener("click", creatematrix5.bind(null, select1, table, btn5), false);
}

/////////// 5





/////////// 7
// for clearbtn
function removeElements7(table, solvebtn, clearfields, clearbtn, zerofields, rows, cols, btn7) {
  let tr = table.getElementsByTagName("td");

  while(tr.length>0) {
    tr[0].parentNode.removeChild(tr[0]);
  }

  btn7.disabled = false;
  rows.disabled = false;
  cols.disabled = false;
  span3.style.opacity = 0;

  solvebtn.remove();
  clearfields.remove();
  clearbtn.remove();
  zerofields.remove();

  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));
}

// for clearfields
function clearFields7(table) {
  let inputs = table.getElementsByTagName("input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}

// fillfieldszero
function fillFieldsZero7(table) {
  let inputs = table.getElementsByTagName("input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = 0;
  }
}

// solveMatrix7
function TransMatrix(arr1, rows, cols) {
  let arrlength = arr1.length, n = arr1[0].length, arr2 = [];

  for (let i = 0; i < n; i++) {
    arr2[i] = [];
    for (let j = 0; j < arrlength; j++) {
      arr2[ i ][j] = arr1[j][ i ];
    }
  }

  for (let i = 0; i < cols.value; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < rows.value; j++) {
      let td = document.createElement('td');
      td.innerHTML = arr2[i][j];

      tr.appendChild(td);
    }
    tableSolve.appendChild(tr);
  }
}

function solveBtn7(rows, cols, table) {
  let inputs = table.getElementsByTagName("input");
  let arr1 = [];
  let count1 = 0;

  for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].value == '') {
      alert("Заповніть всі поля!!!!!");
      return false;
    }
  }

  for (let i = 0; i < rows.value; i++) {
    arr1[i] = [];
    for (let j = 0; j < cols.value; j++) {
      arr1[i][j] = inputs[count1].value;
      count1++;
    }
  }

  endSolve.style.opacity = 1;
  endSolve.innerHTML = "Відповідь";

  btnrmAnswer.disabled = false;

  solvebtn.disabled = true;
  solvebtn.style.background = 'grey';

  clearbtn.disabled = true;
  clearbtn.style.background = 'grey';

  TransMatrix(arr1, rows, cols);

}

function creatematrix7(rows, cols, table, btn7) {
  rows.setAttribute("disabled", true);
  cols.setAttribute("disabled", true);
  btn7.setAttribute("disabled", true);

  span3.style.opacity = 1;


  typesBtns.appendChild(clearbtn);
  typesBtns.appendChild(solvebtn);
  typesBtns.appendChild(clearfields);
  typesBtns.appendChild(zerofields);

  for (let i = 0; i < rows.value; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < cols.value; j++) {
      let td = document.createElement('td');
      let input = document.createElement('INPUT')
      input.setAttribute("type", "text");
      input.setAttribute("value", '');
      input.style.textAlign = "center";
      input.style.width = "60px";
      input.oninput = function() {
        this.value = this.value.replace(regex, '');
      }

      td.appendChild(input);
      td.width = "20px";

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }


  clearbtn.addEventListener("click", removeElements7.bind(null, table, solvebtn, clearfields, clearbtn, zerofields, rows, cols, btn7), false);
  clearfields.addEventListener("click", clearFields7.bind(null, table), false);
  zerofields.addEventListener("click", fillFieldsZero7.bind(null, table), false);

  const solvebtnListener = solveBtn7.bind(null, rows, cols, table);
  solvebtn.addEventListener("click", solvebtnListener, false);
  solvebtnListeners.push(solvebtnListener);
}

function numberLiSeven() {
  instruction.style.opacity = 1;
  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));

  const method = document.getElementById('method');
  method.innerHTML = " ";
  typesBtns.innerHTML = " ";

  // div
  let div = document.createElement('div');
  div.classList.add("plusandminus")
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";

  // span 1,2
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');

  // btn7
  let btn7 =  document.createElement('button');
  btn7.style.marginTop = "5px";
  btn7.style.borderRadius = "5px";
  btn7.style.background = "white";
  btn7.style.padding = "5px";
  btn7.style.border = "none";
  btn7.style.letterSpacing = "2px";
  btn7.style.cursor = "pointer";
  btn7.classList.add("createMatrix6");
  btn7.innerHTML = 'створити';
  btn7.getAttribute("disabled", false);

  let createMatrix6 = document.querySelector('createMatrix6');

  // select7
  let select1 = document.createElement('select');
  select1.classList.add("number1");
  let select2 = document.createElement('select');
  select2.classList.add("number2");


  // select1 option
  let Select1option1 = document.createElement('option');
  let Select1option2 = document.createElement('option');
  let Select1option3 = document.createElement('option');
  let Select1option4 = document.createElement('option');
  let Select1option5 = document.createElement('option');
  let Select1option6 = document.createElement('option');

  // select2 option
  let Select2option1 = document.createElement('option');
  let Select2option2 = document.createElement('option');
  let Select2option3 = document.createElement('option');
  let Select2option4 = document.createElement('option');
  let Select2option5 = document.createElement('option');
  let Select2option6 = document.createElement('option');

  // block for size matrix
  let sizeMatrix = document.createElement("div");
  sizeMatrix.classList.add("sizeMatrix");

  // block for created matrix
  let createdMatrix = document.createElement("div");
  createdMatrix.classList.add("createdMatrix");
  createdMatrix.style.marginTop = "7px";
  createdMatrix.style.display = "flex";
  createdMatrix.style.alignItems = "center";


  // span1
  span1.innerHTML = "Розмір матриці";
  span1.style.marginRight = "10px";
  span1.style.fontFamily = "Caveat, cursive";
  span1.style.fontSize = "1.8rem";

  // span2
  span2.innerHTML = "X";
  span2.style.marginRight = "7px";
  span2.style.marginLeft = "5px";
  span2.style.fontFamily = "Caveat, cursive";
  span2.style.fontSize = "1rem";

  // span3
  span3.innerHTML = "A = ";
  span3.style.fontFamily = "Caveat, cursive";
  span3.style.fontSize = "1.5rem";
  span3.style.marginRight = ".5em";
  span3.style.opacity = 0;

  // option select1
  Select1option2.value = '2';
  Select1option2.innerHTML = 2;

  Select1option3.value = '3';
  Select1option3.innerHTML = 3;

  Select1option4.value = '4';
  Select1option4.innerHTML = 4;

  Select1option5.value = '5';
  Select1option5.innerHTML = 5;

  Select1option6.value = '6';
  Select1option6.innerHTML = 6;

  select1.appendChild(Select1option2);
  select1.appendChild(Select1option3);
  select1.appendChild(Select1option4);
  select1.appendChild(Select1option5);
  select1.appendChild(Select1option6);

  // option select2
  Select2option2.value = '2';
  Select2option2.innerHTML = 2;

  Select2option3.value = '3';
  Select2option3.innerHTML = 3;

  Select2option4.value = '4';
  Select2option4.innerHTML = 4;

  Select2option5.value = '5';
  Select2option5.innerHTML = 5;

  Select2option6.value = '6';
  Select2option6.innerHTML = 6;

  select2.appendChild(Select2option2);
  select2.appendChild(Select2option3);
  select2.appendChild(Select2option4);
  select2.appendChild(Select2option5);
  select2.appendChild(Select2option6);

  // table

  let table = document.createElement("table");
  table.id = "out";

  div.appendChild(sizeMatrix);
  sizeMatrix.appendChild(span1);
  sizeMatrix.appendChild(select1);
  sizeMatrix.appendChild(span2);
  sizeMatrix.appendChild(select2);

  div.appendChild(btn7);

  div.appendChild(createdMatrix);
  createdMatrix.appendChild(span3);
  createdMatrix.appendChild(table);

  div.appendChild(typesBtns);

  document.getElementById('method').appendChild(div);

  btn7.addEventListener("click", creatematrix7.bind(null, select1, select2, table, btn7), false);

}

////////// 7



/////////// 8
// removeElements
function removeElements8(table1, table2, solvebtn, clearfields, clearbtn, zerofields, rows1, cols1, rows2, cols2, btn8) {
  let tr1 = table1.getElementsByTagName("td");
  while(tr1.length>0) {
    tr1[0].parentNode.removeChild(tr1[0]);
  }

  let tr2 = table2.getElementsByTagName("td");
  while(tr2.length>0) {
    tr2[0].parentNode.removeChild(tr2[0]);
  }

  btn8.disabled = false;
  rows1.disabled = false;
  cols1.disabled = false;
  rows2.disabled = false;
  cols2.disabled = false;

  span6.style.opacity = 0;
  span7.style.opacity = 0;

  solvebtn.remove();
  clearfields.remove();
  clearbtn.remove();
  zerofields.remove();

  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));
}

// for clearfields
function clearFields8(table1, table2) {
  let inputs1 = table1.getElementsByTagName("input")
  for (let i = 0; i < inputs1.length; i++) {
    inputs1[i].value = '';
  }

  let inputs2 = table2.getElementsByTagName("input")
  for (let i = 0; i < inputs2.length; i++) {
    inputs2[i].value = '';
  }
}

// fillfieldszero
function fillFieldsZero8(table1, table2) {
  let inputs1 = table1.getElementsByTagName("input")
  for (let i = 0; i < inputs1.length; i++) {
    inputs1[i].value = 0;
  }
  let inputs2 = table2.getElementsByTagName("input")
  for (let i = 0; i < inputs2.length; i++) {
    inputs2[i].value = 0;
  }
}

// solveMatrix8
  function  MultiplyMatrix(arr1, arr2) {
    let rowsArr1 = arr1.length;
    let colsArr1 = arr1[0].length;

    let rowsArr2 = arr2.length;
    let colsArr2 = arr2[0].length;

    let arr3 = [];

    console.log("colsArr1 - ", colsArr1);
    console.log("colsArr2 - ", rowsArr2);

    if (colsArr1 != rowsArr2) return false;

    for (let i = 0; i < rowsArr1; i++) {
      arr3[i] = [];
    }
    for (let k = 0; k < colsArr2; k++) {
      for (let i = 0; i < rowsArr1; i++) {
        let t = 0;
        for (let j = 0; j < rowsArr2; j++) {
          t += arr1[i][j] * arr2[j][k];
          arr3[i][k] = t;
        }
      }
    }

    console.log(arr3);

    for (let i = 0; i < arr3.length; i++) {
       let tr = document.createElement('tr');

       for (let j = 0; j < arr3[0].length; j++) {
         let td = document.createElement('td');
         td.innerHTML = arr3[i][j];

         tr.appendChild(td);
       }
       tableSolve.appendChild(tr);
     }
  }

  function solveBtn8(rows1, cols1, cols2, table1, table2) {
    let inputs1 = table1.getElementsByTagName("input");
    let inputs2 = table2.getElementsByTagName("input");

    let arr1 = [];
    let arr2 = [];

    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < inputs1.length; i++) {
      if(inputs1[i].value == '') {
        alert("Заповніть всі поля!!!!!");
        return false;
      }
    }

    for (let i = 0; i < inputs2.length; i++) {
      if(inputs2[i].value == '') {
        alert("Заповніть всі поля!!!!!");
        return false;
      }
    }

    for (let i = 0; i < rows1.value; i++) {
      arr1[i] = [];
      for (let j = 0; j < cols1.value; j++) {
        arr1[i][j] = inputs1[count1].value;
        count1++;
      }
    }

    for (let i = 0; i < cols1.value; i++) {
      arr2[i] = [];
      for (let j = 0; j < cols2.value; j++) {
        arr2[i][j] = inputs2[count2].value;
        count2++;
      }
    }

    endSolve.style.opacity = 1;
    endSolve.innerHTML = "Відповідь";

    btnrmAnswer.disabled = false;

    solvebtn.disabled = true;
    solvebtn.style.background = 'grey';

    clearbtn.disabled = true;
    clearbtn.style.background = 'grey';

    MultiplyMatrix(arr1, arr2);
  }

// creatematrix8
  function creatematrix8(rows1, cols1, rows2, cols2, table1, table2, btn8) {
    rows1.setAttribute("disabled", true);
    cols1.setAttribute("disabled", true);
    rows2.setAttribute("disabled", true);
    cols2.setAttribute("disabled", true);
    btn8.setAttribute("disabled", true);

    span6.style.opacity = 1;
    span7.style.opacity = 1;

    typesBtns.appendChild(clearbtn);
    typesBtns.appendChild(solvebtn);
    typesBtns.appendChild(clearfields);
    typesBtns.appendChild(zerofields);

    for (let i = 0; i < rows1.value; i++) {
      let tr = document.createElement('tr');

      for (let j = 0; j < cols1.value; j++) {
        let td = document.createElement('td');
        let input = document.createElement('INPUT')
        input.setAttribute("type", "text");
        input.setAttribute("value", '');
        input.style.textAlign = "center";
        input.style.width = "60px";
        input.oninput = function() {
          this.value = this.value.replace(regex, '');
        }

        td.appendChild(input);
        td.width = "20px";

        tr.appendChild(td);
      }
      table1.appendChild(tr);
    }

    for (let i = 0; i < cols1.value; i++) {
      let tr = document.createElement('tr');

      for (let j = 0; j < cols2.value; j++) {
        let td = document.createElement('td');
        let input = document.createElement('INPUT')
        input.setAttribute("type", "text");
        input.setAttribute("value", '');
        input.style.textAlign = "center";
        input.style.width = "60px";
        input.oninput = function() {
          this.value = this.value.replace(regex, '');
        }

        td.appendChild(input);
        td.width = "20px";

        tr.appendChild(td);
      }
      table2.appendChild(tr);
    }

    clearbtn.addEventListener("click", removeElements8.bind(null, table1, table2, solvebtn, clearfields, clearbtn, zerofields, rows1, cols1, rows2, cols2, btn8), false);
    clearfields.addEventListener("click", clearFields8.bind(null, table1, table2), false);
    zerofields.addEventListener("click", fillFieldsZero8.bind(null, table1, table2), false);

    const solvebtnListener = solveBtn8.bind(null, rows1, cols1, cols2, table1, table2);
    solvebtn.addEventListener("click", solvebtnListener, false);
    solvebtnListeners.push(solvebtnListener);
  }

  function equalSelect(select2, select3) {
    select2.addEventListener('click', function() {
      select3.value = select2.value;
    })

    select3.addEventListener('click', function() {
      select2.value = select3.value;
    })
  }

function numberLiEight() {
  openInstruction.style.opacity = 1;
  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));
  span6.style.opacity = 0;
  span7.style.opacity = 0;

  const method = document.getElementById('method');
  method.innerHTML = " ";
  typesBtns.innerHTML = " ";

  // div
  let div = document.createElement('div');
  div.classList.add("plusandminus")
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";

  // span 1,2
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const span4 = document.createElement('span');

  // btn9
  let btn8 =  document.createElement('button');
  btn8.style.marginTop = "5px";
  btn8.style.borderRadius = "5px";
  btn8.style.background = "white";
  btn8.style.padding = "5px";
  btn8.style.border = "none";
  btn8.style.letterSpacing = "2px";
  btn8.style.cursor = "pointer";
  btn8.classList.add("createMatrix6");
  btn8.innerHTML = 'створити';
  btn8.getAttribute("disabled", false);
  //
  let createMatrix6 = document.querySelector('createMatrix6');

  // select9
  let select1 = document.createElement('select');
  select1.classList.add("number1");
  let select2 = document.createElement('select');
  select2.classList.add("number2");
  let select3 = document.createElement('select');
  select3.classList.add("number3");
  let select4 = document.createElement('select');
  select4.classList.add("number4");


  // select1 option
  let Select1option1 = document.createElement('option');
  let Select1option2 = document.createElement('option');
  let Select1option3 = document.createElement('option');
  let Select1option4 = document.createElement('option');
  let Select1option5 = document.createElement('option');
  let Select1option6 = document.createElement('option');

  // select2 option
  let Select2option1 = document.createElement('option');
  let Select2option2 = document.createElement('option');
  let Select2option3 = document.createElement('option');
  let Select2option4 = document.createElement('option');
  let Select2option5 = document.createElement('option');
  let Select2option6 = document.createElement('option');

  // select3 option
  let Select3option1 = document.createElement('option');
  let Select3option2 = document.createElement('option');
  let Select3option3 = document.createElement('option');
  let Select3option4 = document.createElement('option');
  let Select3option5 = document.createElement('option');
  let Select3option6 = document.createElement('option');

  // select4 option
  let Select4option1 = document.createElement('option');
  let Select4option2 = document.createElement('option');
  let Select4option3 = document.createElement('option');
  let Select4option4 = document.createElement('option');
  let Select4option5 = document.createElement('option');
  let Select4option6 = document.createElement('option');

  // block for size matrix
  let sizeMatrix = document.createElement("div");
  sizeMatrix.classList.add("sizeMatrix");
  //
  let sizeMatrix2 = document.createElement("div");
  sizeMatrix2.classList.add("sizeMatrix2");

  // block for created matrix
  let createdMatrix = document.createElement("div");
  createdMatrix.classList.add("createdMatrix");
  createdMatrix.style.marginTop = "7px";
  createdMatrix.style.display = "flex";
  createdMatrix.style.alignItems = "center";


  // span1
  span1.innerHTML = "Розмір матриці А";
  span1.style.marginRight = "10px";
  span1.style.fontFamily = "Caveat, cursive";
  span1.style.fontSize = "1.8rem";

  // span2
  span2.innerHTML = "X";
  span2.style.marginRight = "7px";
  span2.style.marginLeft = "5px";
  span2.style.fontFamily = "Caveat, cursive";
  span2.style.fontSize = "1rem";

  // span3
  span3.innerHTML = "Розмір матриці B";
  span3.style.marginRight = "7px";
  span3.style.marginLeft = "5px";
  span3.style.fontFamily = "Caveat, cursive";
  span3.style.fontSize = "1.8rem";

  // span4
  span4.innerHTML = "X";
  span4.style.marginRight = "7px";
  span4.style.marginLeft = "5px";
  span4.style.fontFamily = "Caveat, cursive";
  span4.style.fontSize = "1rem";

  // option select1
  Select1option1.value = '1';
  Select1option1.innerHTML = 1;

  Select1option2.value = '2';
  Select1option2.innerHTML = 2;

  Select1option3.value = '3';
  Select1option3.innerHTML = 3;

  Select1option4.value = '4';
  Select1option4.innerHTML = 4;

  Select1option5.value = '5';
  Select1option5.innerHTML = 5;

  Select1option6.value = '6';
  Select1option6.innerHTML = 6;

  select1.appendChild(Select1option1);
  select1.appendChild(Select1option2);
  select1.appendChild(Select1option3);
  select1.appendChild(Select1option4);
  select1.appendChild(Select1option5);
  select1.appendChild(Select1option6);

  // option select2
  Select2option1.value = '1';
  Select2option1.innerHTML = 1;

  Select2option2.value = '2';
  Select2option2.innerHTML = 2;

  Select2option3.value = '3';
  Select2option3.innerHTML = 3;

  Select2option4.value = '4';
  Select2option4.innerHTML = 4;

  Select2option5.value = '5';
  Select2option5.innerHTML = 5;

  Select2option6.value = '6';
  Select2option6.innerHTML = 6;

  select2.appendChild(Select2option1);
  select2.appendChild(Select2option2);
  select2.appendChild(Select2option3);
  select2.appendChild(Select2option4);
  select2.appendChild(Select2option5);
  select2.appendChild(Select2option6);

  // option select3
  Select3option1.value = '1';
  Select3option1.innerHTML = 1;

  Select3option2.value = '2';
  Select3option2.innerHTML = 2;

  Select3option3.value = '3';
  Select3option3.innerHTML = 3;

  Select3option4.value = '4';
  Select3option4.innerHTML = 4;

  Select3option5.value = '5';
  Select3option5.innerHTML = 5;

  Select3option6.value = '6';
  Select3option6.innerHTML = 6;

  select3.appendChild(Select3option1);
  select3.appendChild(Select3option2);
  select3.appendChild(Select3option3);
  select3.appendChild(Select3option4);
  select3.appendChild(Select3option5);
  select3.appendChild(Select3option6);

  // option select3
  Select4option1.value = '1';
  Select4option1.innerHTML = 1;

  Select4option2.value = '2';
  Select4option2.innerHTML = 2;

  Select4option3.value = '3';
  Select4option3.innerHTML = 3;

  Select4option4.value = '4';
  Select4option4.innerHTML = 4;

  Select4option5.value = '5';
  Select4option5.innerHTML = 5;

  Select4option6.value = '6';
  Select4option6.innerHTML = 6;

  select4.appendChild(Select4option1);
  select4.appendChild(Select4option2);
  select4.appendChild(Select4option3);
  select4.appendChild(Select4option4);
  select4.appendChild(Select4option5);
  select4.appendChild(Select4option6);

  // table

  let table1 = document.createElement("table");
  table1.id = "out1";
  table1.style.marginRight = "10px";

  let table2 = document.createElement("table")
  table2.id = "out2";

  div.appendChild(sizeMatrix);
  sizeMatrix.appendChild(span1);
  sizeMatrix.appendChild(select1);
  sizeMatrix.appendChild(span2);
  sizeMatrix.appendChild(select2);

  div.appendChild(sizeMatrix2);
  sizeMatrix2.appendChild(span3);
  sizeMatrix2.appendChild(select3);
  sizeMatrix2.appendChild(span4);
  sizeMatrix2.appendChild(select4);

  div.appendChild(btn8);

  div.appendChild(createdMatrix);
  createdMatrix.appendChild(span6);
  createdMatrix.appendChild(table1);
  createdMatrix.appendChild(span7);
  createdMatrix.appendChild(table2);

  div.appendChild(typesBtns);

  equalSelect(select2, select3);

  document.getElementById('method').appendChild(div);

  btn8.addEventListener("click", creatematrix8.bind(null, select1, select2, select3, select4, table1, table2, btn8), false);
}
/////// 8



/////////////// 9
// removeElements
function removeElements9(table1, table2, solvebtn, clearfields, clearbtn, zerofields, rows, cols, btn9) {
  let tr1 = table1.getElementsByTagName("td");
  while(tr1.length>0) {
    tr1[0].parentNode.removeChild(tr1[0]);
  }

  let tr2 = table2.getElementsByTagName("td");
  while(tr2.length>0) {
    tr2[0].parentNode.removeChild(tr2[0]);
  }

  btn9.disabled = false;
  rows.disabled = false;
  cols.disabled = false;
  span4.style.opacity = 0;
  span5.style.opacity = 0;

  solvebtn.remove();
  clearfields.remove();
  clearbtn.remove();
  zerofields.remove();

  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));
}

// for clearfields
function clearFields9(table1, table2) {
  let inputs1 = table1.getElementsByTagName("input")
  for (let i = 0; i < inputs1.length; i++) {
    inputs1[i].value = '';
  }

  let inputs2 = table2.getElementsByTagName("input")
  for (let i = 0; i < inputs2.length; i++) {
    inputs2[i].value = '';
  }
}

// fillfieldszero
function fillFieldsZero9(table1, table2) {
  let inputs1 = table1.getElementsByTagName("input")
  for (let i = 0; i < inputs1.length; i++) {
    inputs1[i].value = 0;
  }
  let inputs2 = table2.getElementsByTagName("input")
  for (let i = 0; i < inputs2.length; i++) {
    inputs2[i].value = 0;
  }

}

// solveMatrix9
function SumMatrix(arr1, arr2, sign, rows, cols) {
  let operation = sign.value;
  let arrLength = arr1.length, n = arr1[0].length, arr3 = [];

  if (operation === "plus") {
    for (let i = 0; i < arrLength; i++) {
      arr3[i] = [];
      for (let j = 0; j < n; j++) {
        arr3[ i ][j] = +arr1[ i ][j] + +arr2[ i ][j];
      }
    }
  }

  if (operation === "minus") {
    for (let i = 0; i < arrLength; i++) {
      arr3[i] = [];
      for (let j = 0; j < n; j++) {
        arr3[ i ][j] = arr1[ i ][j] - arr2[ i ][j];
      }
    }
  }

  for (let i = 0; i < rows.value; i++) {
     let tr = document.createElement('tr');

     for (let j = 0; j < cols.value; j++) {
       let td = document.createElement('td');
       td.innerHTML = arr3[i][j];

       tr.appendChild(td);
     }
     tableSolve.appendChild(tr);
   }
}

function solveBtn9(rows, table1, table2, cols, sign) {
  let inputs1 = table1.getElementsByTagName("input");
  let inputs2 = table2.getElementsByTagName("input");

  let arr1 = [];
  let arr2 = [];

  let count1 = 0;
  let count2 = 0;


  for (let i = 0; i < inputs1.length; i++) {
    if(inputs1[i].value == '') {
      alert("Заповніть всі поля!!!!!");
      return false;
    }
  }

  for (let i = 0; i < inputs2.length; i++) {
    if(inputs2[i].value == '') {
      alert("Заповніть всі поля!!!!!");
      return false;
    }
  }

  for (let i = 0; i < rows.value; i++) {
    arr1[i] = [];
    for (let j = 0; j < cols.value; j++) {
      arr1[i][j] = inputs1[count1].value;
      count1++;
    }
  }

  for (let i = 0; i < rows.value; i++) {
    arr2[i] = [];
    for (let j = 0; j < cols.value; j++) {
      arr2[i][j] = inputs2[count2].value;
      count2++;
    }
  }

  endSolve.style.opacity = 1;
  endSolve.innerHTML = "Відповідь";

  btnrmAnswer.disabled = false;

  solvebtn.disabled = true;
  solvebtn.style.background = 'grey';

  clearbtn.disabled = true;
  clearbtn.style.background = 'grey';

  SumMatrix(arr1, arr2, sign, rows, cols);
}

function creatematrix9(rows, cols, table1, table2, btn9, sign) {
  rows.setAttribute("disabled", true);
  cols.setAttribute("disabled", true);
  btn9.setAttribute("disabled", true);

  span4.style.opacity = 1;
  span5.style.opacity = 1;

  typesBtns.appendChild(clearbtn);
  typesBtns.appendChild(solvebtn);
  typesBtns.appendChild(clearfields);
  typesBtns.appendChild(zerofields);

  for (let i = 0; i < rows.value; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < cols.value; j++) {
      let td = document.createElement('td');
      let input = document.createElement('INPUT')
      input.setAttribute("type", "text");
      input.setAttribute("value", '');
      input.style.textAlign = "center";
      input.style.width = "60px";
      input.oninput = function() {
        this.value = this.value.replace(regex, '');
      }

      td.appendChild(input);
      td.width = "20px";

      tr.appendChild(td);
    }
    table1.appendChild(tr);
  }

  for (let i = 0; i < rows.value; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < cols.value; j++) {
      let td = document.createElement('td');
      let input = document.createElement('INPUT')
      input.setAttribute("type", "text");
      input.setAttribute("value", '');
      input.style.textAlign = "center";
      input.style.width = "60px";
      input.oninput = function() {
        this.value = this.value.replace(regex, '');
      }

      td.appendChild(input);
      td.width = "20px";

      tr.appendChild(td);
    }
    table2.appendChild(tr);
  }


  clearbtn.addEventListener("click", removeElements9.bind(null, table1, table2, solvebtn, clearfields, clearbtn, zerofields, rows, cols, btn9), false);
  clearfields.addEventListener("click", clearFields9.bind(null, table1, table2), false);
  zerofields.addEventListener("click", fillFieldsZero9.bind(null, table1, table2), false);

  const solvebtnListener = solveBtn9.bind(null, rows, table1, table2, cols, sign);
  solvebtn.addEventListener("click", solvebtnListener, false);
  solvebtnListeners.push(solvebtnListener);

}

function numberLiNine() {
  openInstruction.style.opacity = 1;
  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));
  span4.style.opacity = 0;
  span5.style.opacity = 0;

  const method = document.getElementById('method');
  method.innerHTML = " ";
  typesBtns.innerHTML = " ";


  // div
  let div = document.createElement('div');
  div.classList.add("plusandminus")
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";

  // span 1,2
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');

  // btn9
  let btn9 =  document.createElement('button');
  btn9.style.marginTop = "5px";
  btn9.style.borderRadius = "5px";
  btn9.style.background = "white";
  btn9.style.padding = "5px";
  btn9.style.border = "none";
  btn9.style.letterSpacing = "2px";
  btn9.style.cursor = "pointer";
  btn9.classList.add("createMatrix6");
  btn9.innerHTML = 'створити';
  btn9.getAttribute("disabled", false);

  let createMatrix6 = document.querySelector('createMatrix6');

  // select9
  let select1 = document.createElement('select');
  select1.classList.add("number1");
  let select2 = document.createElement('select');
  select2.classList.add("number2");
  let select3 = document.createElement('select');
  select3.classList.add("number3");


  // select1 option
  let Select1option1 = document.createElement('option');
  let Select1option2 = document.createElement('option');
  let Select1option3 = document.createElement('option');
  let Select1option4 = document.createElement('option');
  let Select1option5 = document.createElement('option');
  let Select1option6 = document.createElement('option');

  // select2 option
  let Select2option1 = document.createElement('option');
  let Select2option2 = document.createElement('option');
  let Select2option3 = document.createElement('option');
  let Select2option4 = document.createElement('option');
  let Select2option5 = document.createElement('option');
  let Select2option6 = document.createElement('option');

  // select3 option
  let Select3option1 = document.createElement('option');
  let Select3option2 = document.createElement('option');

  // block for size matrix
  let sizeMatrix = document.createElement("div");
  sizeMatrix.classList.add("sizeMatrix");

  let sign = document.createElement("div");
  sign.classList.add("sign");

  // block for created matrix
  let createdMatrix = document.createElement("div");
  createdMatrix.classList.add("createdMatrix");
  createdMatrix.style.marginTop = "7px";
  createdMatrix.style.display = "flex";
  createdMatrix.style.alignItems = "center";


  // span1
  span1.innerHTML = "Розмір матриць";
  span1.style.marginRight = "10px";
  span1.style.fontFamily = "Caveat, cursive";
  span1.style.fontSize = "1.8rem";

  // span2
  span2.innerHTML = "X";
  span2.style.marginRight = "7px";
  span2.style.marginLeft = "5px";
  span2.style.fontFamily = "Caveat, cursive";
  span2.style.fontSize = "1rem";

  // span3
  span3.innerHTML = "знак";
  span3.style.marginRight = "7px";
  span3.style.marginLeft = "5px";
  span3.style.fontFamily = "Caveat, cursive";
  span3.style.fontSize = "1.5rem";

  // option select1
  Select1option2.value = '2';
  Select1option2.innerHTML = 2;

  Select1option3.value = '3';
  Select1option3.innerHTML = 3;

  Select1option4.value = '4';
  Select1option4.innerHTML = 4;

  Select1option5.value = '5';
  Select1option5.innerHTML = 5;

  Select1option6.value = '6';
  Select1option6.innerHTML = 6;

  select1.appendChild(Select1option2);
  select1.appendChild(Select1option3);
  select1.appendChild(Select1option4);
  select1.appendChild(Select1option5);
  select1.appendChild(Select1option6);

  // option select2
  Select2option2.value = '2';
  Select2option2.innerHTML = 2;

  Select2option3.value = '3';
  Select2option3.innerHTML = 3;

  Select2option4.value = '4';
  Select2option4.innerHTML = 4;

  Select2option5.value = '5';
  Select2option5.innerHTML = 5;

  Select2option6.value = '6';
  Select2option6.innerHTML = 6;

  select2.appendChild(Select2option2);
  select2.appendChild(Select2option3);
  select2.appendChild(Select2option4);
  select2.appendChild(Select2option5);
  select2.appendChild(Select2option6);

  // option3 select3
  Select3option1.value = "plus";
  Select3option1.innerHTML = "+";

  Select3option2.value = 'minus';
  Select3option2.innerHTML = "-";

  select3.appendChild(Select3option1);
  select3.appendChild(Select3option2);

  // table

  let table1 = document.createElement("table");
  table1.id = "out1";
  table1.style.marginRight = "10px";

  let table2 = document.createElement("table")
  table2.id = "out2";

  div.appendChild(sizeMatrix);
  sizeMatrix.appendChild(span1);
  sizeMatrix.appendChild(select1);
  sizeMatrix.appendChild(span2);
  sizeMatrix.appendChild(select2);

  div.appendChild(sign);
  sign.appendChild(span3);
  sign.appendChild(select3);

  div.appendChild(btn9);

  div.appendChild(createdMatrix);
  createdMatrix.appendChild(span4);
  createdMatrix.appendChild(table1);
  createdMatrix.appendChild(span5);
  createdMatrix.appendChild(table2);

  div.appendChild(typesBtns);

  document.getElementById('method').appendChild(div);

  btn9.addEventListener("click", creatematrix9.bind(null, select1, select2, table1, table2, btn9, select3), false);
}
/////////////////// 9



//////////////////// 6
// for clearbtn
function removeElements(table, solvebtn, clearfields, clearbtn, zerofields, btn, power, number) {
  let tr = table.getElementsByTagName("tr");
  console.log(tr);
  while(tr.length>0) {
    tr[0].parentNode.removeChild(tr[0]);
  }

  btn.disabled = false;
  power.disabled = false;
  number.disabled = false;
  span3.style.opacity = 0;

  solvebtn.remove();
  clearfields.remove();
  clearbtn.remove();
  zerofields.remove();

  solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));
}


// for clearfields
function clearFields(table) {
  let inputs = table.getElementsByTagName("input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}

// fillfieldszero
function fillFieldsZero(table) {
  let inputs = table.getElementsByTagName("input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = 0;
  }
}


  // for solvebtn
  function PowArray(arr2, arr1, N, pow) {
    let i, j, k, p = 1;
    let tmp = [];

    for (let i = 0; i < N; i++) {
      tmp[i] = [];
      for (let j = 0; j < N; j++) {
        tmp[i][j] = 0;
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        arr2[i][j] = arr1[i][j];
      }
    }

    while (++p <= pow) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          for (let k = 0; k < N; k++) {
            tmp[i][j] +=  arr2[i][k] * arr1[k][j];
          }
        }
      }
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          arr2[i][j] = tmp[i][j];
          tmp[i][j] = 0;
        }
      }
    }

    delete tmp;
    delete N;

    for (let i = 0; i < N; i++) {
       let tr = document.createElement('tr');

       for (let j = 0; j < N; j++) {
         let td = document.createElement('td');
         td.innerHTML = arr2[i][j];

         tr.appendChild(td);
       }
       tableSolve.appendChild(tr);
     }
  }

  function solveBtn(number, table, power) {
    let inputs = table.getElementsByTagName("input")
    let arrNumber = []
    let count = 0;
    let n = power.value;
    let arrNumber2 = [];


    for (let i = 0; i < inputs.length; i++) {
      if(inputs[i].value == '') {
        alert("Заповніть всі поля!!!!!");
        return false;
      }
    }

    for (let i = 0; i < number.value; i++) {
      arrNumber2[i] = [];
      for (let j = 0; j < number.value; j++) {
        arrNumber2[i][j] = 0;
      }
    }

    for (let i = 0; i < number.value; i++) {
      arrNumber[i] = [];
      for (let j = 0; j < number.value; j++) {
        arrNumber[i][j] = inputs[count].value;
        count++;
      }
    }

    endSolve.style.opacity = 1;
    endSolve.innerHTML = "Відповідь";

    btnrmAnswer.disabled = false;

    solvebtn.disabled = true;
    solvebtn.style.background = 'grey';

    clearbtn.disabled = true;
    clearbtn.style.background = 'grey';

    PowArray(arrNumber2, arrNumber, number.value, power.value);
  }


  function creatematrix6(number, table, div, btn, power) {
    number.setAttribute("disabled", true);
    btn.setAttribute("disabled", true);
    span3.style.opacity = 1;


    typesBtns.appendChild(clearbtn);
    typesBtns.appendChild(solvebtn);
    typesBtns.appendChild(clearfields);
    typesBtns.appendChild(zerofields);

    for (let i = 0; i < number.value; i++) {
       let tr = document.createElement('tr');

       for (let j = 0; j < number.value; j++) {
         let td = document.createElement('td');
         let input = document.createElement('INPUT')
         input.setAttribute("type", "text");
         input.setAttribute("value", '');
         input.style.textAlign = "center";
         input.style.width = "60px";
         input.oninput = function() {
           this.value = this.value.replace(regex, '');
         }

         td.appendChild(input);
         td.width = "20px";

         tr.appendChild(td);
       }
       table.appendChild(tr);
     }

     clearbtn.addEventListener("click", removeElements.bind(null, table, solvebtn, clearfields, clearbtn, zerofields, btn, power, number), false);
     clearfields.addEventListener("click", clearFields.bind(null, table), false);
     zerofields.addEventListener("click", fillFieldsZero.bind(null, table), false);

     const solvebtnListener = solveBtn.bind(null, number, table, power);
     solvebtn.addEventListener("click", solvebtnListener, false);
     solvebtnListeners.push(solvebtnListener);
  }

  function numberLiSix() {
    instruction.style.opacity = 1;
    solvebtnListeners.forEach(listener => solvebtn.removeEventListener('click', listener));

    const method = document.getElementById('method');
    method.innerHTML = " ";
    typesBtns.innerHTML = " ";

    // div
    let div = document.createElement('div');
    div.classList.add("AddorSubtract")
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";

    // span 1,2
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');

    // btn6
    let btn =  document.createElement('button');
    btn.style.marginTop = "5px";
    btn.style.borderRadius = "5px";
    btn.style.background = "white";
    btn.style.padding = "5px";
    btn.style.border = "none";
    btn.style.letterSpacing = "2px";
    btn.style.cursor = "pointer";
    btn.classList.add("createMatrix6");
    btn.innerHTML = 'створити';
    btn.getAttribute("disabled", false);

    let createMatrix6 = document.querySelector('createMatrix6');

    // select6
    let select1 = document.createElement('select');
    select1.classList.add("number1");
    let select2 = document.createElement('select');
    select2.classList.add("number2");

    // select1
    let Select1option1 = document.createElement('option');
    let Select1option2 = document.createElement('option');
    let Select1option3 = document.createElement('option');
    let Select1option4 = document.createElement('option');
    let Select1option5 = document.createElement('option');
    let Select1option6 = document.createElement('option');

    // select2
    let Select2option1 = document.createElement('option');
    let Select2option2 = document.createElement('option');
    let Select2option3 = document.createElement('option');
    let Select2option4 = document.createElement('option');
    let Select2option5 = document.createElement('option');
    let Select2option6 = document.createElement('option');

    // block for size matrix
    let sizeMatrix = document.createElement("div");
    sizeMatrix.classList.add("sizeMatrix");

    // block for pow matrix
    let powMatrix = document.createElement("div");
    powMatrix.classList.add("powMatrix");

    // block for created matrix
    let createdMatrix = document.createElement("div");
    createdMatrix.classList.add("createdMatrix");
    createdMatrix.style.marginTop = "7px";
    createdMatrix.style.display = "flex";
    createdMatrix.style.alignItems = "center";


    // span1
    span1.innerHTML = "Розмір матриці";
    span1.style.marginRight = "10px";
    span1.style.fontFamily = "Caveat, cursive";
    span1.style.fontSize = "1.8rem";

    // span2
    span2.innerHTML = "Степінь";
    span2.style.marginRight = "10px";
    span2.style.fontFamily = "Caveat, cursive";
    span2.style.fontSize = "1.8rem";

    // span3
    span3.innerHTML = "A = ";
    span3.style.fontFamily = "Caveat, cursive";
    span3.style.fontSize = "1.5rem";
    span3.style.marginRight = ".5em";
    span3.style.opacity = 0;

    // option select1
    Select1option2.value = '2';
    Select1option2.innerHTML = 2;

    Select1option3.value = '3';
    Select1option3.innerHTML = 3;

    Select1option4.value = '4';
    Select1option4.innerHTML = 4;

    Select1option5.value = '5';
    Select1option5.innerHTML = 5;

    Select1option6.value = '6';
    Select1option6.innerHTML = 6;

    select1.appendChild(Select1option2);
    select1.appendChild(Select1option3);
    select1.appendChild(Select1option4);
    select1.appendChild(Select1option5);
    select1.appendChild(Select1option6);

    // option select2
    Select2option2.value = '2';
    Select2option2.innerHTML = 2;

    Select2option3.value = '3';
    Select2option3.innerHTML = 3;

    Select2option4.value = '4';
    Select2option4.innerHTML = 4;

    Select2option5.value = '5';
    Select2option5.innerHTML = 5;

    Select2option6.value = '6';
    Select2option6.innerHTML = 6;

    select2.appendChild(Select2option2);
    select2.appendChild(Select2option3);
    select2.appendChild(Select2option4);
    select2.appendChild(Select2option5);
    select2.appendChild(Select2option6);

    // table

    let table = document.createElement("table");
    table.id = "out";

    div.appendChild(sizeMatrix);
    sizeMatrix.appendChild(span1);
    sizeMatrix.appendChild(select1);

    div.appendChild(powMatrix);
    powMatrix.appendChild(span2);
    powMatrix.appendChild(select2);

    div.appendChild(btn);

    div.appendChild(createdMatrix);
    createdMatrix.appendChild(span3);
    createdMatrix.appendChild(table);

    div.appendChild(typesBtns);

    document.getElementById('method').appendChild(div);

    btn.addEventListener("click", creatematrix6.bind(null, select1, table, div, btn, select2), false);


  }
  //////////////6



  ///////////// active method
  function removeActive(event) {
    let elems = document.querySelectorAll(".active");

    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });

    event.target.classList.add("active");
  }


  function activeMethod(num) {
    let activeM = document.querySelectorAll(".active_method");

    [].forEach.call(activeM, function(active) {
      active.classList.remove("active_method");
    });

    if(num == 3) {
      method3.classList.add("active_method");
    }
    if(num == 4) {
      method4.classList.add("active_method");
    }
    if(num == 5) {
      method5.classList.add("active_method");
    }
    if(num == 6) {
      method6.classList.add("active_method");
    }
    if(num == 7) {
      method7.classList.add("active_method");
    }
    if(num == 8) {
      method8.classList.add("active_method");
    }
    if(num == 9) {
      method9.classList.add("active_method");
    }
  }

  // let activeM = document.querySelectorAll(".active_method");

  openInstruction.onclick = function() {
      if(method3.classList.contains("active_method")) {
        method3.style.marginTop = 0;
      }
      if(method4.classList.contains("active_method")) {
        method4.style.marginTop = 0;
      }
      if(method5.classList.contains("active_method")) {
        method5.style.marginTop = 0;
      }
      if(method6.classList.contains("active_method")) {
        method6.style.marginTop = 0;
      }
      if(method8.classList.contains("active_method")) {
        method8.style.marginTop = 0;
      }
      if(method9.classList.contains("active_method")) {
        method9.style.marginTop = 0;
      }
      if(method7.classList.contains("active_method")) {
        method7.style.marginTop = 0;
      }
  }

  ////////////// choose options
  for (let i = 0; i < someOperation.length; i++) {
    someOperation[i].onclick = function(event) {
      removeActive(event);
      activeMethod(i);
      numberList = event.target.tagName;
      nameOperation.innerHTML = someOperation[i].getAttribute('data-value');
      nameOperation.style.marginTop = "0";

      if (i == 3) {
        numberLiThree();
      }

      if (i == 4) {
        numberLiFour();
      }

      if (i == 5) {
        numberLiFive();
      }

      if (i == 6) {
        numberLiSix();
      }

      if (i == 7) {
        numberLiSeven();
      }

      if (i == 8) {
        numberLiEight();
      }

      if (i == 9) {
        numberLiNine();
      }
    }
  }
