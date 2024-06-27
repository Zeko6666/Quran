// dictionary for Check on length of ayah 
let data = {
  "الفاتحة": [7 , 1],
  "البقرة": [286 , 2],
  "آل عمران": [200 , 3],
  "النساء": [176, 4],
  "المائدة": [120,5],
  "الأنعام": [165, 6],
  "الأعراف": [206,7],
  "الأنفال": [75,8],
  "التوبة": [129,9],
  "يونس": [109,10],
  "هود": [123,11],
  "يوسف": [111,12],
  "الرعد": [43,13],
  "إبراهيم": [52,14],
  "الحجر": [99,15],
  "النحل": [128,16],
  "الإسراء": [111,17],
  "الكهف": [110,18],
  "مريم": [98,19],
  "طه": [135,20],
  "الأنبياء": [112,21],
  "الحج": [78,22],
  "المؤمنون": [118,23],
  "النور": [64,24] , 
  "الفرقان": [77,25],
  "الشعراء": [227,26] , 
  "النمل": [93,27],
  "القصص": [88,28],
  "العنكبوت": [69,29],
  "الروم": [60,30],
  "لقمان": [34,31],
  "السجدة": [30,32],
  "الاحزاب": [73,33],
  "سبأ": [54,34],
  "فاطر": [45,35],
  "يس": [83,36],
  "الصافات": [182,37],
  "ص": [88,38],
  "الزمر": [75,39],
  "غافر": [85,40],
  "فصلت": [54,41],
  "الشورى": [53,42],
  "الزخرف": [89,43],
  "الدخان": [59,44],
  "الجاثية": [37,45],
  "الأحقاف": [35,46],
  "محمد": [38,47],
  "الفتح": [29,48],
  "الحجرات": [18,49],
  "ق": [45,50],
  "الذاريات": [60,51],
  "الطور": [49,52],
  "النجم": [62,53],
  "القمر": [55,54],
  "الرحمن": [78,55],
  "الواقعة": [96,56],
  "الحديد": [29,57],
  "المجادلة": [22,58],
  "الحشر": [24,59],
  "الممتحنة": [13,60],
  "الصف": [14,61],
  "الجمعة": [11,62],
  "المنافقون": [11,63],
  "التغابن": [18,64],
  "الطلاق": [12,65],
  "التحريم": [12,66],
  "الملك": [30,67],
  "القلم": [52,68],
  "الحاقة": [52,69],
  "المعارج": [44,70],
  "نوح": [28,71],
  "الجن": [28,72],
  "المزمل": [20,73],
  "المدثر": [56,74],
  "القيامة": [40,75],
  "الإنسان": [31,76],
  "المرسلات": [50,77],
  "النبإ": [40,78],
  "النازعات": [46,79],
  "عبس": [42,80],
  "التكوير": [29,81],
  "الإنفطار": [19,82],
  "المطففين": [36,83],
  "الإنشقاق": [25,84],
  "البروج": [22,85],
  "الطارق": [17,86],
  "الأعلى": [19,87],
  "الغاشية": [26,88],
  "الفجر": [30,89],
  "البلد": [20,90],
  "الشمس": [15,91],
  "الليل": [21,92],
  "الضحي": [11,93],
  "الشرح": [8,94],
  "التين": [8,95],
  "العلق": [19,96],
  "القدر": [5,97],
  "البينة": [8,98],
  "الزلزلة": [8,99],
  "العاديات": [9,100],
  "القارعة": [11,101],
  "التكاثر": [8,102],
  "العصر": [3,103],
  "الهمزة": [9,104],
  "الفيل": [5,105],
  "قريش": [4,106],
  "الماعون": [7,107],
  "الكوثر": [3,108],
  "الكافرون": [6,109],
  "النصر": [3,110],
  "المسد": [5,111],
  "الإخلاص": [4,112],
  "الفلق": [5,113],
  "الناس": [6,114]
}

// Add Event Listener To change dropDown Selection First
let sectionMenuContainer = document.getElementById("selectM");
let selectedValue = "";
document.getElementById("selectMenu").addEventListener("change", function(){
    selectedValue = this.value ; 
    if(selectedValue === "آيَة"){
        sectionMenuContainer.innerHTML = `
        <input
        list="myDataList"
        id="myInput"
        placeholder=" اسم السورة"
        class="fieldText"
      />
      <input
        type="number"
        id="ageInput"
        class="fieldText"
        min="0"
        placeholder="رَقم الآيَة"
      />
      <div class="search1">
        <input
          class="y fieldText"
          name="drop"
          type="text"
          id="wordSearchOutside"
          placeholder=" حَرف، كَلِمة، كَلِمات"
        />
        <i class="fas fa-search" id="outSearchIcon"></i>
      </div>
      <div id="second-Content" style="margin-top: 20px"></div>
      <div id="buttonsControl">
        <section style="margin-top: 60px">
        <div style='display:inline-block'id="letterCount">  
        <input
          type="radio"
          name="choose"
          id="letterCount1"
        />
        <label for="letterCount1">عَدْ الحُروف</label>
        </div>
        <div style='display:inline-block'id="wordCount">  
          <input type="radio" name="choose" id="wordCount1" class="me-4" />
          <label for="wordCount1">عد الكلمات</label>
        </div>
          <input type="radio" name="choose" id="numberCount" class="me-4" />
          <label for="numberCount">عَدَد مَرَّات تِكرَار</label>
          <input type="radio" name="choose" id="sentenceCount" class="me-4" />
          <label for="sentenceCount">حِسَاب الجُمَل</label>
        </section>
      </div>
      <div
      class="modal fade"
      id="letterCountModal"
      tabindex="-1"
      aria-labelledby="letterCountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" style="min-height: 300px">
          <div class="modal-body">
            <div class="body-content" id="contentPdf">
              <div class="first-section">
              <h4>النِطَاق</h4>
                <span id="areaLetter"></span>
              </div>
              <div class="second-section">
                <h4 style="margin-right: 18px">عَد الحُروف</h4>
                <span id="letterArea" style="padding: 8px 15px"></span>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              إلغاء
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onclick="generatePDF('contentPdf')"
            >
              طباعة 
            </button>
          </div>
        </div>
      </div>
    </div>

<div
      class="modal fade"
      id="wordCountModal"
      tabindex="-1"
      aria-labelledby="wordCountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" style="min-height: 300px">
          <div class="modal-body">
            <div class="body-content" id="contentPdf12">
              <div class="first-section">
              <h5 style='text-align:center;color:red'>إذا أردت جمع أماكن كلمة محددة يمكنك الضغط عليها</h5>
              <h4>النِطَاق</h4>
                <span id="areaWord"></span>
              </div>
              <div class="second-section">
                <h4 style="margin-right: 18px">ناتج عد الكلمات</h4>
                <span id="wordArea" style="padding: 8px 15px"></span>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              id="clickOut1"
            >
              إلغاء
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onclick="generatePDF('contentPdf12')"
            >
              طباعة 
            </button>
          </div>
        </div>
      </div>
    </div>


      <div
        class="modal fade"
        id="resultSearchModal"
        tabindex="-1"
        aria-labelledby="resultSearchModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content" style="min-height: 300px">
            <div class="modal-body">
              <div class="body-content">
                <div class="first-section">
                  <h4 class="me-3">نتيجة البحث</h4>
                  <span id="Surah" style="padding: 8px 10px ; border:none ; color: red; font-weight:bold ; margin-bottom: -20px"></span>
                  <span id="ayahContainer" style="padding: 8px 10px">
                  </span>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-center">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                id="clickOut"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
      class="modal fade"
      id="resultRepeatedModal"
      tabindex="-1"
      aria-labelledby="resultRepeatedModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" style="min-height: 300px">
          <div class="modal-body">
            <div class="body-content" id="contentPdf4">
              <div class="first-section">
                <h4 >النِطَاق</h4>
                <span id="areaLetterRepeatedAyah1"></span>
              </div>
              <div class="second-section">
                <h4 class="me-3">النَّص</h4>
                <span id="areaLetterRepeatedAyah2"></span>
              </div>
              <div class="second-section">
                <h4 class="me-3">عدد مرّات تِكرارًا</h4>
                <span id="areaLetterRepeatedAyah3"></span>
              </div>
              <div class="second-section">
                <h4 class="me-3">نَص الآيَة</h4>
                <span id="areaLetterRepeatedAyah4"></span>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              إلغاء
            </button>
            <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            onclick="generatePDF('contentPdf4')"
          >
            طباعة 
          </button>
          </div>
        </div>
      </div>
    </div>


    <div
      class="modal fade"
      id="positionCountModal"
      tabindex="-1"
      aria-labelledby="positionCountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" style="min-height: 300px">
          <div class="modal-body">
            <div class="body-content" id="contentPdf13">
            <div class="first-section">
            <h4 style="margin-right: 18px; color:red">أماكن الكلمة</h4>
              <span id="areaPosition"></span>
            </div>
              <div class="second-section">
                <h4 style="margin-right: 18px; color:red">ناتج جمع اماكن تلك الكلمة </h4>
                <span id="positionArea" style="padding: 8px 15px"></span>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              id="clickOut1"
            >
              إلغاء
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onclick="generatePDF('contentPdf13')"
            >
              طباعة 
            </button>
          </div>
        </div>
      </div>
    </div>

        `

  
      
       document.getElementById("outSearchIcon").addEventListener("click" , function(){
        let surahName = document.getElementById("myInput");
        let inputAge = document.getElementById("ageInput");
        let wordSearch = document.getElementById("wordSearchOutside");
        let ayahContainer = document.getElementById("ayahContainer");
        let test = document.getElementById("Surah");
        test.innerHTML = surahName.value ; 
        const options = {
          method: 'POST', // Use Post method
          headers: {
            'Content-Type': 'application/json' // Specify content type as JSON
          },
          body: JSON.stringify({
            surah : data[`${surahName.value}`][1] , 
            word : wordSearch.value
          }) // Convert data to JSON string and include in the body
        };
        if(surahName.value !== "" && wordSearch.value !== "" ){
          this.setAttribute("data-bs-toggle" , "modal");
          this.setAttribute("data-bs-target" , "#resultSearchModal");
          let storage = "";
          fetch('http://localhost:3000/quran/countOccurrencesInSurah' , options)
          .then(response => {
            // Parse the response body as JSON
            return response.json();
          })
          .then(data => {
            // Use the retrieved data
            if(data["عدد النتائج"] == 0 ){
              ayahContainer.innerHTML = `<div style='color:red; font-weight: bold'>لاتوجد أية تحتوي على تلك الكلمة</div>`;
            }else{
              for(let i = 0 ; i < data["عدد النتائج"] ; i++){
              storage += `<div class="ayah-style-search">${data["النتائج"][i].text} (<span class="ayahNum" style="display:inline">${ data["النتائج"][i]["Ayah_Number"]}</span>)</div>`
            }
            ayahContainer.innerHTML = storage ; 
            ayahContainer.style.fontWeight = "bold";
            let ayahsNums = document.querySelectorAll(".ayahNum");
            ayahsNums.forEach(elem =>{
              elem.addEventListener("click" , function(e){
                e.stopPropagation();
                document.getElementById("clickOut").click();
                inputAge.value = this.innerHTML ; 
              })
            })
            }
          })
          .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error:', error);
          });
          this.click();
          this.removeAttribute("data-bs-toggle");
          this.removeAttribute("data-bs-target");
        }
       })

       document.getElementById("letterCount").addEventListener("click" , function(){
        let surahName = document.getElementById("myInput");
        let valueCompare = data[`${surahName.value}`][0];
        let inputAge = document.getElementById("ageInput");
        if(parseInt(inputAge.value) <= 0) inputAge.value = 1 ; 
        if(parseInt(inputAge.value) > valueCompare){
          Swal.fire({
                    title:"إشعار",
            text : "رقم الأية الذي أدخلته أكبر من عدد أيات السورة",
            icon : "error"
                  })
        }else{
          document.querySelector("#letterCount input").click();
        let areaLetter = document.getElementById("areaLetter");
        areaLetter.style.padding = "8px 20px" ; 
        if(inputAge.value !== ""){
          const options = {
            method: 'POST', // Use Post method
            headers: {
              'Content-Type': 'application/json' // Specify content type as JSON
            },
            body: JSON.stringify({
              surah_id : data[`${surahName.value}`][1] , 
              number_in_surah : inputAge.value
            }) // Convert data to JSON string and include in the body
            
          };
          this.setAttribute("data-bs-toggle" , "modal");
          this.setAttribute("data-bs-target" , "#letterCountModal");
          fetch('http://localhost:3000/quran/getText' , options)
          .then(response =>{
            return response.json();
          })
          .then(data =>{
            areaLetter.innerHTML = `<div style="font-weight :bold"><h5 style="color : red">${surahName.value}</h5>${data["Ayah_Text"]}&nbsp;(${inputAge.value})</div>`;
          })
          .catch(error => {
            console.error("Error:" , error);
          })
          let letterArea = document.getElementById("letterArea");
          fetch('http://localhost:3000/quran/countLetterInAya' , options)
          .then(response => {
            // Parse the response body as JSON
            return response.json();
          })
          .then(data => {
            // Use the retrieved data
            letterArea.innerHTML = data["totalLetters"];
          })
          .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error:', error);
          });
          this.click();
          this.removeAttribute("data-bs-toggle");
          this.removeAttribute("data-bs-target");
          }else{
            Swal.fire({
              text:"برجاء إدخال رقم الأية التي تريد عد حروفها" ,
              icon :"info"
            })
          }
        }
        
      })

      document.getElementById("wordCount").addEventListener("click" , function(){
        let surahName = document.getElementById("myInput");
        let valueCompare = data[`${surahName.value}`][0];
        let inputAge = document.getElementById("ageInput");
        if(parseInt(inputAge.value) <= 0) inputAge.value = 1 ; 
        if(parseInt(inputAge.value) > valueCompare){
          Swal.fire({
                    title:"إشعار",
            text : "رقم الأية الذي أدخلته أكبر من عدد أيات السورة",
            icon : "error"
                  })
        }
        else{
          document.querySelector("#wordCount input").click();
          let areaWord = document.getElementById("areaWord");
          areaWord.style.padding = "8px 20px" ; 
          if(inputAge.value !== ""){
            const options = {
              method: 'POST', // Use Post method
              headers: {
                'Content-Type': 'application/json' // Specify content type as JSON
              },
              body: JSON.stringify({
                surah_id : data[`${surahName.value}`][1] , 
                number_in_surah : inputAge.value
              }) // Convert data to JSON string and include in the body
              
            };
            this.setAttribute("data-bs-toggle" , "modal");
            this.setAttribute("data-bs-target" , "#wordCountModal");
            fetch('http://localhost:3000/quran/getText' , options)
            .then(response =>{
              return response.json();
            })
            .then(data =>{
              areaWord.innerHTML = `<div style="font-weight :bold"><h5 style="color : red">${surahName.value}</h5>${data["Ayah_Text"]}&nbsp;(${inputAge.value})</div>`;
            })
            .catch(error => {
              console.error("Error:" , error);
            })
            const options1 = {
              method: 'POST', // Use Post method
              headers: {
                'Content-Type': 'application/json' // Specify content type as JSON
              },
              body: JSON.stringify({
                surah: data[`${surahName.value}`][1] , 
                ayah : inputAge.value
              }) // Convert data to JSON string and include in the body
              
            };
            let wordArea = document.getElementById("wordArea");
            let storage = "" ; 
            fetch('http://localhost:3000/quran/countWordsInAyah' , options1)
            .then(response => {
              // Parse the response body as JSON
              return response.json();
            })
            .then(data1 => {
              // Use the retrieved data
              let result = extractSpecific(data1["wordsWithIndex"]);
              for(let i=0 ; i < result[0].length ; i++){
                storage += `<div class="ayah-style-search">(${result[0][i]}) <span class="ayahIndex" style="display:inline;">${result[1][i]}</span></div>` ; 
              }
              wordArea.innerHTML = storage;
              wordArea.style.fontWeight = "bold";
              let ayahWord = document.querySelectorAll(".ayahIndex");
              ayahWord.forEach(elem=>{
                elem.addEventListener("click" , function(e){
                  let storage = "";
                  e.stopPropagation();
                  document.getElementById("clickOut1").click();
                  const options2 = {
                    method: 'POST', // Use Post method
                    headers: {
                      'Content-Type': 'application/json' // Specify content type as JSON
                    },
                    body: JSON.stringify({
                      surah_id : data[`${surahName.value}`][1] , 
                      number_in_surah : inputAge.value ,
                      word : this.innerHTML
                    }) // Convert data to JSON string and include in the body
                  };
                  fetch("http://localhost:3000/quran/sumIndexsInWordInAyah" , options2)
                  .then(res =>{
                    return res.json();
                  })
                  .then(data2 =>{
                    let resultPositionArea = document.getElementById("positionArea");
                    let resultPositionAreaOccurance = document.getElementById("areaPosition");
                    for(let i = 0 ; i < data2["occurrences"].length ; i++){
                      storage += `<div class="ayah-style-search" style="background-color: #fff">(${data2["occurrences"][i]}) <span class="ayahIndex" style="display:inline;">${this.innerHTML}</span></div>` ;
                    }
                    resultPositionAreaOccurance.innerHTML = storage ; 
                    let btn = document.getElementById("ayahIndecise");
                    resultPositionArea.innerHTML =  data2["totalIndexes"] ;
                    btn.setAttribute("data-bs-toggle" , "modal");
                    btn.setAttribute("data-bs-target" , "#positionCountModal");
                    btn.click();
                    btn.removeAttribute("data-bs-toggle");
                    btn.removeAttribute("data-bs-target");
                  })
                })
              })
            })
            .catch(error => {
              // Handle any errors that occurred during the fetch
              console.error('Error:', error);
            });
            this.click();
            this.removeAttribute("data-bs-toggle");
            this.removeAttribute("data-bs-target");
            }else{
              Swal.fire({
                text:"برجاء إدخال رقم الأية التي تريد عد حروفها" ,
                icon :"info"
              })
            }
        }
      })

let letterCount = document.getElementById("letterCount");
let secondContent = document.getElementById("second-Content");
let numberCount = document.getElementById("numberCount");
let sentenceCount = document.getElementById("sentenceCount");
let wordCount = document.getElementById("wordCount");

wordCount.addEventListener("change" , ()=>{
 let surahName = document.getElementById("myInput");
  let valueCompare = data[`${surahName.value}`][0];
  let inputAge = document.getElementById("ageInput");
  if(parseInt(inputAge.value) > valueCompare){
    Swal.fire({
              title:"إشعار",
      text : "رقم الأية الذي أدخلته أكبر من عدد أيات السورة",
      icon : "error"
            })
  }else{
    secondContent.innerHTML = ""; 
  }
})

letterCount.addEventListener("change",()=>{
  let surahName = document.getElementById("myInput");
  let valueCompare = data[`${surahName.value}`][0];
  let inputAge = document.getElementById("ageInput");
  if(parseInt(inputAge.value) > valueCompare){
    Swal.fire({
              title:"إشعار",
      text : "رقم الأية الذي أدخلته أكبر من عدد أيات السورة",
      icon : "error"
            })
  }else{
    secondContent.innerHTML = ""; 
  }
});

numberCount.addEventListener("change" , ()=>{
  let surahName = document.getElementById("myInput");
  let valueCompare = data[`${surahName.value}`][0];
  let inputAge = document.getElementById("ageInput");
  if(parseInt(inputAge.value) > valueCompare){
    Swal.fire({
              title:"إشعار",
      text : "رقم الأية الذي أدخلته أكبر من عدد أيات السورة",
      icon : "error"
            })
  }else if(inputAge.value !== ""){
    secondContent.innerHTML = `
    <h4 class="sub-title">النَّص المطلُوب</h4>
    <input
      type="text"
      placeholder="اكتب النص"
      class="fieldText"
      style="margin-top: 8px"
      id="TextWrite"
    />
    <div class="search1">
      <input
        class="y fieldText"
        name="drop"
        type="text"
        placeholder=" حَرف، كَلِمة، كَلِمات"
        style="margin-right: 10px"
        id="wordSearchInside"
      />
      <i class="fas fa-search text-light" id="insideSearchIcon"></i>
    </div>
    <br />
    <button class="btn btn-myStyle mt-3" id="buttonResultRepeated" data-bs-toggle="modal"
    data-bs-target="#resultRepeatedModal">
    عدد مرّات تِكرارًا
    </button>`
   document.getElementById("insideSearchIcon").addEventListener("click" , function(){
    let wordSearch = document.getElementById("wordSearchInside");
    let ayahContainer = document.getElementById("ayahContainer");
    const options = {
      method: 'POST', // Use Post method
      headers: {
        'Content-Type': 'application/json' // Specify content type as JSON
      },
      body: JSON.stringify({
        word : wordSearch.value
      }) // Convert data to JSON string and include in the body
    };
    if(wordSearch.value !== "" ){
      this.setAttribute("data-bs-toggle" , "modal");
      this.setAttribute("data-bs-target" , "#resultSearchModal");
      let storage = "";
      fetch('http://localhost:3000/quran/countOccurrencesInQuran' , options)
      .then(response => {
        // Parse the response body as JSON
        return response.json();
      })
      .then(data => {
        // Use the retrieved data
        if(data["عدد النتائج"] == 0 ){
          ayahContainer.innerHTML = `<div style='color:red; font-weight: bold'>لاتوجد أية تحتوي على تلك الكلمة</div>`;
        }else{
          for(let i = 0 ; i < data["عدد النتائج"] ; i++){
          storage += `<div class="ayah-style-search">${data["النتائج"][i].text} (${ data["النتائج"][i]["Ayah_Number"]})<br><div style="color : red">${data["النتائج"][i]["Surah"]}</div></div>`
        }
        ayahContainer.innerHTML = storage ; 
        ayahContainer.style.fontWeight = "bold";
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
      });
      this.click();
      this.removeAttribute("data-bs-toggle");
      this.removeAttribute("data-bs-target");
    }
   })
  
   document.getElementById("buttonResultRepeated").addEventListener("click" , function(){
    let surahName = document.getElementById("myInput");
    let inputAge = document.getElementById("ageInput");
      let TextWrite = document.getElementById("TextWrite");
      let areaLetterRepeated = document.getElementById("areaLetterRepeatedAyah1");
      let areaLetterRepeated2 = document.getElementById("areaLetterRepeatedAyah2");
      let areaLetterRepeated3 = document.getElementById("areaLetterRepeatedAyah3");
      let areaLetterRepeated4 = document.getElementById("areaLetterRepeatedAyah4");
      let storage = "";
      areaLetterRepeated.style.padding = "8px 20px" ; 
      areaLetterRepeated2.style.padding = "8px 20px" ; 
      areaLetterRepeated3.style.padding = "8px 20px" ; 
      areaLetterRepeated4.style.padding = "8px 20px" ; 
      areaLetterRepeated2.innerHTML = TextWrite.value ;
      const options = {
        method: 'POST', // Use Post method
        headers: {
          'Content-Type': 'application/json' // Specify content type as JSON
        },
        body: JSON.stringify({
          surah_id : data[`${surahName.value}`][1] , 
          number_in_surah : inputAge.value
        }) // Convert data to JSON string and include in the body
      };
  
      const options1 = {
        method :'POST' , 
        headers: {
          'Content-Type': 'application/json' // Specify content type as JSON
        },
        body: JSON.stringify({
          surah_id : data[`${surahName.value}`][1] , 
          number_in_surah : inputAge.value , 
          word : TextWrite.value
        }) // Convert data to JSON string and include in the body
      }
      fetch('http://localhost:3000/quran/getText' , options)
      .then(response =>{
        return response.json();
      })
      .then(data =>{
        areaLetterRepeated.innerHTML = data["Ayah_Text"];
      })
      .catch(error => {
        console.error("Error:" , error);
      })
  
      fetch("http://localhost:3000/quran/countOccurrencesInAya" , options1)
      .then(response => {
        return response.json();
      })
      .then(data =>{
        areaLetterRepeated3.innerHTML = data["عدد النتائج"];
        if(data["عدد النتائج"] == 0 ){
          ayahContainer.innerHTML = `<div style='color:red; font-weight: bold'>لاتوجد أية تحتوي على تلك الكلمة</div>`;
        }else{
          for(let i = 0 ; i < parseInt(data["عدد النتائج"]) ; i++){
          storage += data["النتائج"][i].text + "<br>" ; 
        }
        areaLetterRepeated4.innerHTML = storage ; 
        areaLetterRepeated4.style.fontWeight = "bold";
        }
      })
      .catch(error => {
        console.error("Error:" , error);
      })
   })
  }
});


sentenceCount.addEventListener("change" , ()=>{
  let surahName = document.getElementById("myInput");
  let valueCompare = data[`${surahName.value}`][0];
  let inputAge = document.getElementById("ageInput");
  if(parseInt(inputAge.value) > valueCompare){
    Swal.fire({
              title:"إشعار",
      text : "رقم الأية الذي أدخلته أكبر من عدد أيات السورة",
      icon : "error"
            })
  }else{
    secondContent.innerHTML = `
    <select id="selectElement"  class="menu">
    <option  value="1" disabled selected>حِسَاب الجُمَل</option>
    <option  value="2">طريقة: حِسَاب الجُمَل الكُبرَى    </option>
    <option  value="3">طريقة: حِسَاب الجُمَل الصُغرَى    </option>
    <option  value="4">طريقة: حِسَاب الجُمَل الوسطَى    </option>
    <option  value="5">طريقة:أكثَر الحُروف تِكرارًا    </option>
    <option  value="6">طريقة:تَرتِيب ظهورها في القُرآن</option>
    <option  value="7">طريقة:تَرتِيب حُروف الهِجاء     </option>
  </select>
    `
    let selectElement = document.getElementById("selectElement");
    let selectedValue = "" ; 
    let button = document.createElement("button");
    button.style.display = "none";
    document.body.append(button);
    selectElement.addEventListener("change" , function(){
      selectedValue = this.value ; 
      let surahName = document.getElementById("myInput");
      let inputAge = document.getElementById("ageInput");
       const options = {
          method: 'POST', // Use Post method
          headers: {
            'Content-Type': 'application/json' // Specify content type as JSON
          },
          body: JSON.stringify({
            surah : data[`${surahName.value}`][1] , 
            ayah : inputAge.value
          }) // Convert data to JSON string and include in the body
          
        };
      block.innerHTML = "";
      if(selectedValue == 2){
        createModal("حِسَاب الجُمَل الكُبرَى" , 1);
        fetch('http://localhost:3000/quran/wayVerse/bigSentences' , options)
        .then(response =>{
          return response.json();
        })
        .then(data =>{
          document.getElementById("areaMethod1").style.padding = "8px 20px";
          document.getElementById("calcMethod1").style.padding = "8px 20px";
          document.getElementById("areaMethod1").innerHTML = data["نص الآية "];
          document.getElementById("calcMethod1").innerHTML = data["مجموع العدد "];
        })
        .catch(error => {
          console.error("Error:" , error);
        })
      }else if(selectedValue == 3){
        createModal("حِسَاب الجُمَل الصُغرَى" , 2);
        fetch('http://localhost:3000/quran/wayVerse/minorSentences' , options)
        .then(response =>{
          return response.json();
        })
        .then(data =>{
          document.getElementById("areaMethod2").style.padding = "8px 20px";
          document.getElementById("calcMethod2").style.padding = "8px 20px";
          document.getElementById("areaMethod2").innerHTML = data["نص الآية "];
          document.getElementById("calcMethod2").innerHTML = data["مجموع العدد "];
        })
        .catch(error => {
          console.error("Error:" , error);
        })
      }else if(selectedValue == 4){
        createModal("حِسَاب الجُمَل الوسطَى" , 3);
        fetch('http://localhost:3000/quran/wayVerse/middleSentences' , options)
        .then(response =>{
          return response.json();
        })
        .then(data =>{
          document.getElementById("areaMethod3").style.padding = "8px 20px";
          document.getElementById("calcMethod3").style.padding = "8px 20px";
          document.getElementById("areaMethod3").innerHTML = data["نص الآية "];
          document.getElementById("calcMethod3").innerHTML = data["مجموع العدد "];
        })
        .catch(error => {
          console.error("Error:" , error);
        })
      }else if(selectedValue == 5){
        createModal("أكثَر الحُروف تِكرارًا" , 4);
        fetch('http://localhost:3000/quran/wayVerse/mostRepeatedLetters' , options)
        .then(response =>{
          return response.json();
        })
        .then(data =>{
          document.getElementById("areaMethod4").style.padding = "8px 20px";
          document.getElementById("calcMethod4").style.padding = "8px 20px";
          document.getElementById("areaMethod4").innerHTML = data["نص الآية "];
          document.getElementById("calcMethod4").innerHTML = data["مجموع العدد "];
        })
        .catch(error => {
          console.error("Error:" , error);
        })
      }else if(selectedValue == 6){
        createModal("تَرتِيب ظهورها في القُرآن" , 5);
        fetch('http://localhost:3000/quran/wayVerse/appearanceOfLetters' , options)
        .then(response =>{
          return response.json();
        })
        .then(data =>{
          document.getElementById("areaMethod5").style.padding = "8px 20px";
          document.getElementById("calcMethod5").style.padding = "8px 20px";
          document.getElementById("areaMethod5").innerHTML = data["نص الآية "];
          document.getElementById("calcMethod5").innerHTML = data["مجموع العدد "];
        })
        .catch(error => {
          console.error("Error:" , error);
        })
      }else if(selectedValue == 7){
        createModal("تَرتِيب حُروف الهِجاء" , 6);
        fetch('http://localhost:3000/quran/wayVerse/arrangOfLetters' , options)
        .then(response =>{
          return response.json();
        })
        .then(data =>{
          document.getElementById("areaMethod6").style.padding = "8px 20px";
          document.getElementById("calcMethod6").style.padding = "8px 20px";
          document.getElementById("areaMethod6").innerHTML = data["نص الآية "];
          document.getElementById("calcMethod6").innerHTML = data["مجموع العدد "];
        })
        .catch(error => {
          console.error("Error:" , error);
        })
      }
      button.setAttribute("data-bs-toggle","modal");
        button.setAttribute("data-bs-target","#calulateModal");
        button.click();
    })
  }
})

let input = document.createElement("input");
input.type = "radio";
input.style.visibility = "hidden";
input.id = "ayahIndecise";
document.body.appendChild(input);

let block = document.createElement("section");
const createModal = (Method , id)=>{
  block.innerHTML = `
  <div
  class="modal fade"
  id="calulateModal"
  tabindex="-1"
  aria-labelledby="calulateModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content" style="min-height: 300px">
      <div class="modal-body">
        <div class="body-content" id="contentPdf8">
          <div class="first-section">
            <h4 >النِطَاق</h4>
            <span id="areaMethod${id}"></span>
          </div>
          <div class="second-section">
            <h4 style="margin-right: 18px">
              طريقة: ${Method}  
            </h4>
            <span id="calcMethod${id}"></span>
          </div>
        </div>
      </div>
      <div class="modal-footer justify-content-center">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إلغاء
        </button>
        <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onclick="generatePDF('contentPdf8')"
            >
              طباعة 
            </button>
      </div>
    </div>
  </div>
</div>
  `
  document.body.append(block);
}
    }else if(selectedValue === "سُورَة"){
        sectionMenuContainer.innerHTML = `
        <input
        list="myDataList"
        id="myInput"
        placeholder=" اسم السورة"
        class="fieldText"
      />
      <div id="second-Content" style="margin-top: 20px"></div>
      <div id="buttonsControl">
      <section style="margin-top: 60px">
      <div style='display:inline-block'id="letterCount">  
        <input
          type="radio"
          name="choose"
        />
        <label for="letterCount">عَدْ الحُروف</label>
        </div>
         <div style='display:inline-block'id="wordCount">  
          <input type="radio" name="choose" id="wordCount1" class="me-4" />
          <label for="wordCount1">عد الكلمات</label>
        </div>
        <input type="radio" name="choose" id="numberCount" class="me-4" />
        <label for="numberCount">عَدَد مَرَّات تِكرَار</label>
        <input type="radio" name="choose" id="sentenceCount" class="me-4" />
        <label for="sentenceCount">حِسَاب الجُمَل</label>
      </section>
    </div>

    <div
    class="modal fade"
    id="letterCountModal"
    tabindex="-1"
    aria-labelledby="letterCountModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content" style="min-height: 300px">
        <div class="modal-body">
          <div class="body-content" id="contentPdf1">
            <div class="first-section">
              <h4 >النِطَاق</h4>
              <span id="areaLetter"></span>
            </div>
            <div class="second-section">
              <h4 style="margin-right: 18px">عَد الحُروف</h4>
              <span id="letterArea" style="padding: 8px 15px"></span>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            id="btn1"
          >
            إلغاء
          </button>
          <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
          onclick="generatePDF('contentPdf1')"
        >
          طباعة 
        </button>
        </div>
      </div>
    </div>
  </div>
  

  <div
      class="modal fade"
      id="wordCountModal"
      tabindex="-1"
      aria-labelledby="wordCountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" style="min-height: 300px">
          <div class="modal-body">
            <div class="body-content" id="contentPdf14">
              <div class="first-section">
              <h5 style='text-align:center;color:red'>إذا أردت جمع أماكن كلمة محددة يمكنك الضغط عليها</h5>
              <h4>النِطَاق</h4>
                <span id="areaWord"></span>
              </div>
              <div class="second-section">
                <h4 style="margin-right: 18px">ناتج عد الكلمات</h4>
                <span id="wordArea" style="padding: 8px 15px"></span>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              id="clickOut1"
            >
              إلغاء
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onclick="generatePDF('contentPdf14')"
            >
              طباعة 
            </button>
          </div>
        </div>
      </div>
    </div>

  <div
  class="modal fade"
  id="resultSearchModal"
  tabindex="-1"
  aria-labelledby="resultSearchModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content" style="min-height: 300px">
      <div class="modal-body">
        <div class="body-content">
          <div class="first-section">
            <h4 class="me-3">نتيجة البحث</h4>
            <span id="ayahContainer" style="padding: 8px 10px"></span>
          </div>
        </div>
      </div>
      <div class="modal-footer justify-content-center">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إلغاء
        </button>
      </div>
    </div>
  </div>
</div>

<div
class="modal fade"
id="resultRepeatedModal"
tabindex="-1"
aria-labelledby="resultRepeatedModalLabel"
aria-hidden="true"
>
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content" style="min-height: 300px">
    <div class="modal-body">
      <div class="body-content" id="contentPdf5">
        <div class="first-section">
          <h4 >النِطَاق</h4>
          <span id="areaLetterRepeatedAyah1"></span>
        </div>
        <div class="second-section">
          <h4 class="me-3">النَّص</h4>
          <span id="areaLetterRepeatedAyah2"></span>
        </div>
        <div class="second-section">
          <h4 class="me-3">عدد مرّات تِكرارًا</h4>
          <span id="areaLetterRepeatedAyah3"></span>
        </div>
        <div class="second-section">
          <h4 class="me-3">نَص الآيَة</h4>
          <span id="areaLetterRepeatedAyah4"></span>
        </div>
      </div>
    </div>
    <div class="modal-footer justify-content-center">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        إلغاء
      </button>
      <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            onclick="generatePDF('contentPdf5')"
          >
            طباعة 
          </button>
    </div>
  </div>
</div>
</div>


 <div
      class="modal fade"
      id="positionCountModal"
      tabindex="-1"
      aria-labelledby="positionCountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" style="min-height: 300px">
          <div class="modal-body">
            <div class="body-content" id="contentPdf13">
            <div class="first-section">
            <h4 style="margin-right: 18px; color:red">أماكن الكلمة</h4>
              <span id="areaPosition"></span>
            </div>
              <div class="second-section">
                <h4 style="margin-right: 18px; color:red">ناتج جمع اماكن تلك الكلمة </h4>
                <span id="positionArea" style="padding: 8px 15px"></span>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              id="clickOut1"
            >
              إلغاء
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onclick="generatePDF('contentPdf13')"
            >
              طباعة 
            </button>
          </div>
        </div>
      </div>
    </div>
        `;
        

        document.getElementById("letterCount").addEventListener("click" , function(){
          document.querySelector("#letterCount input").click();
          let surahName = document.getElementById("myInput");
          let areaLetter = document.getElementById("areaLetter");
          areaLetter.style.padding = "8px 20px" ; 
          areaLetter.innerHTML = surahName.value ;
          const options = {
            method: 'POST', // Use Post method
            headers: {
              'Content-Type': 'application/json' // Specify content type as JSON
            },
            body: JSON.stringify({
              surah: data[`${surahName.value}`][1] , 
            }) // Convert data to JSON string and include in the body
            
          };
          this.setAttribute("data-bs-toggle" , "modal");
          this.setAttribute("data-bs-target" , "#letterCountModal");
          let letterArea = document.getElementById("letterArea");
          fetch('http://localhost:3000/quran/countLetterInSurah' , options)
          .then(response => {
            // Parse the response body as JSON
            return response.json();
          })
          .then(data => {
            // Use the retrieved data
            letterArea.innerHTML = data["totalLetters"];
          })
          .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error:', error);
          });
          this.click();
          this.removeAttribute("data-bs-toggle");
          this.removeAttribute("data-bs-target");
        })

    document.getElementById("wordCount").addEventListener("click" , function(){
      document.querySelector("#wordCount input").click();
      let surahName = document.getElementById("myInput");
      let areaWord = document.getElementById("areaWord");
      areaWord.style.padding = "8px 20px";
      areaWord.innerHTML = surahName.value ;
       const options = {
            method: 'POST', // Use Post method
            headers: {
              'Content-Type': 'application/json' // Specify content type as JSON
            },
            body: JSON.stringify({
              surah: data[`${surahName.value}`][1] , 
            }) // Convert data to JSON string and include in the body      
          };
          this.setAttribute("data-bs-toggle" , "modal");
          this.setAttribute("data-bs-target" , "#wordCountModal");
          let wordArea = document.getElementById("wordArea");
          let storage = "" ; 
          fetch("http://localhost:3000/quran/countWordsInSurah" , options)
          .then(res =>{
            return res.json();
          }).then(result =>{
            let data1 = extractSpecific(result["wordsWithIndex"]);
            for(let i=0 ; i < data1[1].length ; i++){
                storage += `<div class="ayah-style-search">(${data1[0][i]}) <span class="ayahIndex" style="display:inline;">${data1[1][i]}</span></div>` ; 
            }
            wordArea.innerHTML = storage;
            wordArea.style.fontWeight = "bold";
            let ayahWord = document.querySelectorAll(".ayahIndex");
            ayahWord.forEach(elem =>{
              elem.addEventListener("click" , function(e){
                e.stopPropagation();
                document.getElementById("clickOut1").click();
                let storage = "" ;
                const options2 = {
                  method: 'POST', // Use Post method
                  headers: {
                    'Content-Type': 'application/json' // Specify content type as JSON
                  },
                  body: JSON.stringify({
                    surah : data[`${surahName.value}`][1] , 
                    word : this.innerHTML
                    
                  }) // Convert data to JSON string and include in the body
                };
                fetch("http://localhost:3000/quran/sumIndexsInWordInSurah" , options2)
                .then(res =>{
                  return res.json();
                })
                .then(data2 =>{
                  let resultPositionArea = document.getElementById("positionArea");
                  let resultPositionAreaOccurance = document.getElementById("areaPosition");
                    for(let i = 0 ; i < data2["occurences"].length ; i++){
                      storage += `<div class="ayah-style-search" style="background-color: #fff">(${data2["occurences"][i]}) <span class="ayahIndex" style="display:inline;">${this.innerHTML}</span></div>` ;
                    }
                    resultPositionAreaOccurance.innerHTML = storage ; 
                    let btn = document.getElementById("ayahIndecise");
                    resultPositionArea.innerHTML =  data2["totalIndexes"] ;
                    btn.setAttribute("data-bs-toggle" , "modal");
                    btn.setAttribute("data-bs-target" , "#positionCountModal");
                    btn.click();
                    btn.removeAttribute("data-bs-toggle");
                    btn.removeAttribute("data-bs-target");
                })
                .catch(error => {
                  // Handle any errors that occurred during the fetch
                  console.error('Error:', error);
                });
                this.click();
                this.removeAttribute("data-bs-toggle");
                this.removeAttribute("data-bs-target");
              })
            })
          })
      })

let input = document.createElement("input");
input.type = "radio";
input.style.visibility = "hidden";
input.id = "ayahIndecise";
document.body.appendChild(input);

let letterCount = document.getElementById("letterCount");
let secondContent = document.getElementById("second-Content");
let numberCount = document.getElementById("numberCount");
let sentenceCount = document.getElementById("sentenceCount");
let wordCount = document.getElementById("wordCount");

wordCount.addEventListener("change" , ()=>{
  secondContent.innerHTML = "";
})
letterCount.addEventListener("change",()=>{
  secondContent.innerHTML = ""; 
});

numberCount.addEventListener("change" , ()=>{
  secondContent.innerHTML = `
  <h4 class="sub-title">النَّص المطلُوب</h4>
  <input
    type="text"
    placeholder="اكتب النص"
    class="fieldText"
    style="margin-top: 8px"
    id="TextWrite"
  />
  <div class="search1">
    <input
      class="y fieldText"
      name="drop"
      type="text"
      placeholder=" حَرف، كَلِمة، كَلِمات"
      style="margin-right: 10px"
      id="wordSearchInside"
    />
    <i class="fas fa-search text-light" id="insideSearchIcon"></i>
  </div>
  <br />
  <button class="btn btn-myStyle mt-3" id="buttonResultRepeated">
  عدد مرّات تِكرارًا
  </button>`
 document.getElementById("insideSearchIcon").addEventListener("click" , function(){
  let wordSearch = document.getElementById("wordSearchInside");
  let ayahContainer = document.getElementById("ayahContainer");
  const options = {
    method: 'POST', // Use Post method
    headers: {
      'Content-Type': 'application/json' // Specify content type as JSON
    },
    body: JSON.stringify({
      word : wordSearch.value
    }) // Convert data to JSON string and include in the body
  };
  if(wordSearch.value !== "" ){
    this.setAttribute("data-bs-toggle" , "modal");
    this.setAttribute("data-bs-target" , "#resultSearchModal");
    let storage = "";
    fetch('http://localhost:3000/quran/countOccurrencesInQuran' , options)
    .then(response => {
      // Parse the response body as JSON
      return response.json();
    })
    .then(data => {
      // Use the retrieved data
      if(data["عدد النتائج"] == 0 ){
        ayahContainer.innerHTML = `<div style='color:red; font-weight: bold'>لاتوجد أية تحتوي على تلك الكلمة</div>`;
      }else{
        for(let i = 0 ; i < data["عدد النتائج"] ; i++){
          storage += `<div class="ayah-style-search">${data["النتائج"][i].text} (${ data["النتائج"][i]["Ayah_Number"]})<br><div style="color : red">${data["النتائج"][i]["Surah"]}</div></div>`
        }
      ayahContainer.innerHTML = storage ; 
      ayahContainer.style.fontWeight = "bold";
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error('Error:', error);
    });
    this.click();
    this.removeAttribute("data-bs-toggle");
    this.removeAttribute("data-bs-target");
  }
 })

 document.getElementById("buttonResultRepeated").addEventListener("click" , function(){
  let surahName = document.getElementById("myInput");
    let TextWrite = document.getElementById("TextWrite");
    let areaLetterRepeated = document.getElementById("areaLetterRepeatedAyah1");
    let areaLetterRepeated2 = document.getElementById("areaLetterRepeatedAyah2");
    let areaLetterRepeated3 = document.getElementById("areaLetterRepeatedAyah3");
    let areaLetterRepeated4 = document.getElementById("areaLetterRepeatedAyah4");
    let storage = "";
    areaLetterRepeated.style.padding = "8px 20px" ; 
    areaLetterRepeated2.style.padding = "8px 20px" ; 
    areaLetterRepeated3.style.padding = "8px 20px" ; 
    areaLetterRepeated4.style.padding = "8px 20px" ; 
    areaLetterRepeated.innerHTML = surahName.value ;
    areaLetterRepeated2.innerHTML = TextWrite.value ;

    const options = {
      method :'POST' , 
      headers: {
        'Content-Type': 'application/json' // Specify content type as JSON
      },
      body: JSON.stringify({
        surah : data[`${surahName.value}`][1] , 
        word : TextWrite.value
      }) // Convert data to JSON string and include in the body
    }

   if(TextWrite.value !== ""){
    this.setAttribute("data-bs-toggle" , "modal");
    this.setAttribute("data-bs-target" , "#resultRepeatedModal");
    fetch("http://localhost:3000/quran/countOccurrencesInSurah" , options)
    .then(response => {
      return response.json();
    })
    .then(data =>{
      areaLetterRepeated3.innerHTML = data["عدد النتائج"];
      if(data["عدد النتائج"] == 0 ){
        ayahContainer.innerHTML = `<div style='color:red; font-weight: bold'>لاتوجد أية تحتوي على تلك الكلمة</div>`;
      }else{
        for(let i = 0 ; i < parseInt(data["عدد النتائج"]) ; i++){
          storage += `<div class="ayah-style-search">${data["النتائج"][i].text}<br><div><span style="color : red ; display: inline !important">${data["النتائج"][i]["Surah"]}</span> (${ data["النتائج"][i]["Ayah_Number"]})</div></div>`
      }
      areaLetterRepeated4.innerHTML = storage ; 
      areaLetterRepeated4.style.fontWeight = "bold";
      }
    })
    .catch(error => {
      console.error("Error:" , error);
    })
    this.click();
    this.removeAttribute("data-bs-toggle");
    this.removeAttribute("data-bs-target");
   }else{
    Swal.fire({
      title:"برجاء إدخال النص" ,
      icon : "info"
    })
   }
 })
});


sentenceCount.addEventListener("change" , ()=>{
  secondContent.innerHTML = `
  <select id="selectElement"  class="menu">
  <option  value="1" disabled selected>حِسَاب الجُمَل</option>
  <option  value="2">طريقة: حِسَاب الجُمَل الكُبرَى    </option>
  <option  value="3">طريقة: حِسَاب الجُمَل الصُغرَى    </option>
  <option  value="4">طريقة: حِسَاب الجُمَل الوسطَى    </option>
  <option  value="5">طريقة:أكثَر الحُروف تِكرارًا    </option>
  <option  value="6">طريقة:تَرتِيب ظهورها في القُرآن</option>
  <option  value="7">طريقة:تَرتِيب حُروف الهِجاء     </option>
</select>
  `
  let selectElement = document.getElementById("selectElement");
  let selectedValue = "" ; 
  let button = document.createElement("button");
  button.style.display = "none";
  document.body.append(button);
  selectElement.addEventListener("change" , function(){
    selectedValue = this.value ; 
    let surahName = document.getElementById("myInput");
     const options = {
        method: 'POST', // Use Post method
        headers: {
          'Content-Type': 'application/json' // Specify content type as JSON
        },
        body: JSON.stringify({
          surah : data[`${surahName.value}`][1] , 
        }) // Convert data to JSON string and include in the body
        
      };

      async function fetchData(url , id){
        try{
           // Make the fetch request
           let response = await fetch(url, options);
            
           // Check if the response is ok
           if (!response.ok) {
               throw new Error('Network response was not ok');
           }
           
           // Parse the response
           let data = await response.json();
           
           
           // Update DOM elements
           let areaMethod6Element = document.getElementById(`areaMethod${id}`);
           let calcMethod6Element = document.getElementById(`calcMethod${id}`);

           if (areaMethod6Element && calcMethod6Element) {
               areaMethod6Element.style.padding = "8px 20px";
               calcMethod6Element.style.padding = "8px 20px";
               areaMethod6Element.innerHTML = surahName.value ; 
               calcMethod6Element.innerHTML = data["مجموع العدد "];
           }
           
           // Open modal
           button.setAttribute("data-bs-toggle", "modal");
           button.setAttribute("data-bs-target", "#calulateModal");
           button.click(); 
        }catch(error){
          console.error("Error:", error);
        }
      }
    block.innerHTML = "";
    if(selectedValue == 2){
      createModal("حِسَاب الجُمَل الكُبرَى" , 1);
      fetchData("http://localhost:3000/quran/waySurah/bigSentences",1)
    }else if(selectedValue == 3){
      createModal("حِسَاب الجُمَل الصُغرَى" , 2);
      fetchData("http://localhost:3000/quran/waySurah/minorSentences",2)
    }else if(selectedValue == 4){
      createModal("حِسَاب الجُمَل الوسطَى" , 3);
      fetchData("http://localhost:3000/quran/waySurah/middleSentences",3)
    }else if(selectedValue == 5){
      createModal("أكثَر الحُروف تِكرارًا" , 4);
      fetchData("http://localhost:3000/quran/waySurah/mostRepeatedLetters" , 4);
    }else if(selectedValue == 6){
      createModal("تَرتِيب ظهورها في القُرآن" , 5);
      fetchData("http://localhost:3000/quran/waySurah/appearanceOfLetters" , 5);
    }else if(selectedValue == 7){
      createModal("تَرتِيب حُروف الهِجاء" , 6);
      fetchData("http://localhost:3000/quran/waySurah/arrangOfLetters" , 6);
    }
  })
})


let block = document.createElement("section");
const createModal = (Method , id)=>{
  block.innerHTML = `
  <div
  class="modal fade"
  id="calulateModal"
  tabindex="-1"
  aria-labelledby="calulateModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content" style="min-height: 300px">
      <div class="modal-body">
        <div class="body-content" id="contentPdf9">
          <div class="first-section">
            <h4 >النِطَاق</h4>
            <span id="areaMethod${id}"></span>
          </div>
          <div class="second-section">
            <h4 style="margin-right: 18px">
              طريقة: ${Method}  
            </h4>
            <span id="calcMethod${id}"></span>
          </div>
        </div>
      </div>
      <div class="modal-footer justify-content-center">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إلغاء
        </button>
        <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onclick="generatePDF('contentPdf9')"
            >
              طباعة 
            </button>
      </div>
    </div>
  </div>
</div>
  `
  document.body.append(block);
}
    }else if(selectedValue === "جملَة"){
        sectionMenuContainer.innerHTML = `
        <input
        placeholder="جُملَة"
        class="fieldText ms-2"
        type="text"
        id="wordSearchOutside"
      />
      <i class="fas fa-search" style="cursor:pointer; color:#fff" id="outSearchIcon"></i>
      <div id="second-Content" style="margin-top: 20px"></div>
      <div id="buttonsControl">
      <section style="margin-top: 60px">
      <div style='display:inline-block'id="letterCount">  
        <input
          type="radio"
          name="choose"
        />
        <label for="letterCount">عَدْ الحُروف</label>
        </div>
        <div style='display:inline-block'id="wordCount">  
        <input type="radio" name="choose" id="wordCount1" class="me-4" />
        <label for="wordCount1">عد الكلمات</label>
      </div>
        <input type="radio" name="choose" id="numberCount" class="me-4" />
        <label for="numberCount">عَدَد مَرَّات تِكرَار</label>
        <input type="radio" name="choose" id="sentenceCount" class="me-4" />
        <label for="sentenceCount">حِسَاب الجُمَل</label>
      </section>
    </div>

    <div
      class="modal fade"
      id="letterCountModal"
      tabindex="-1"
      aria-labelledby="letterCountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" style="min-height: 300px">
          <div class="modal-body">
            <div class="body-content" id="contentPdf2">
              <div class="first-section">
                <h4 >النِطَاق</h4>
                <span id="areaLetter"></span>
              </div>
              <div class="second-section">
                <h4 style="margin-right: 18px">عَد الحُروف</h4>
                <span id="letterArea" style="padding: 8px 15px"></span>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              إلغاء
            </button>
            <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            onclick="generatePDF('contentPdf2')"
          >
            طباعة 
          </button>
          </div>
        </div>
      </div>
    </div>

    <div
    class="modal fade"
    id="wordCountModal"
    tabindex="-1"
    aria-labelledby="wordCountModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content" style="min-height: 300px">
        <div class="modal-body">
          <div class="body-content" id="contentPdf15">
            <div class="first-section">
            <h5 style='text-align:center;color:red'>إذا أردت جمع أماكن كلمة محددة يمكنك الضغط عليها</h5>
            <h4>النِطَاق</h4>
              <span id="areaWord"></span>
            </div>
            <div class="second-section">
              <h4 style="margin-right: 18px">ناتج عد الكلمات</h4>
              <span id="wordArea" style="padding: 8px 15px"></span>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            id="clickOut1"
          >
            إلغاء
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            onclick="generatePDF('contentPdf15')"
          >
            طباعة 
          </button>
        </div>
      </div>
    </div>
  </div>



    <div
    class="modal fade"
    id="resultSearchModal"
    tabindex="-1"
    aria-labelledby="resultSearchModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content" style="min-height: 300px">
        <div class="modal-body">
          <div class="body-content">
            <div class="first-section">
              <h4 class="me-3">نتيجة البحث</h4>
              <span id="ayahContainer" style="padding: 8px 10px"></span>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            id="clickOut"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  </div>
      <button id="resultSearchModal1" style="display:none" data-bs-toggle="modal" data-bs-target="#resultSearchModal2"></button>
    <div
    class="modal fade"
    id="resultSearchModal2"
    tabindex="-1"
    aria-labelledby="resultSearchModal2Label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content" style="min-height: 300px">
        <div class="modal-body">
          <div class="body-content">
            <div class="first-section">
              <h4 class="me-3">نص السورة</h4>
              <span id="ayahContainer1" style="padding: 8px 10px ; font-weight:bold"></span>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            id="clickOut"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  </div>

  
<div
class="modal fade"
id="resultRepeatedModal"
tabindex="-1"
aria-labelledby="resultRepeatedModalLabel"
aria-hidden="true"
>
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content" style="min-height: 300px">
    <div class="modal-body">
      <div class="body-content" id="contentPdf6">
        <div class="first-section">
          <h4 class="me-3">النِطَاق</h4>
          <span id="areaLetterRepeatedAyah1"></span>
        </div>
        <div class="second-section">
          <h4 class="me-3">النَّص</h4>
          <span id="areaLetterRepeatedAyah2"></span>
        </div>
        <div class="second-section">
          <h4 class="me-3">عدد مرّات تِكرارًا</h4>
          <span id="areaLetterRepeatedAyah3"></span>
        </div>
        <div class="second-section">
          <h4 class="me-3">نَص الآيَة</h4>
          <span id="areaLetterRepeatedAyah4"></span>
        </div>
      </div>
    </div>
    <div class="modal-footer justify-content-center">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        إلغاء
      </button>
      <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            onclick="generatePDF('contentPdf6')"
          >
            طباعة 
          </button>
    </div>
  </div>
</div>
</div>

<div
      class="modal fade"
      id="positionCountModal"
      tabindex="-1"
      aria-labelledby="positionCountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" style="min-height: 300px">
          <div class="modal-body">
            <div class="body-content" id="contentPdf16">
            <div class="first-section">
            <h4 style="margin-right: 18px; color:red">أماكن الكلمة</h4>
              <span id="areaPosition"></span>
            </div>
              <div class="second-section">
                <h4 style="margin-right: 18px; color:red">ناتج جمع اماكن تلك الكلمة </h4>
                <span id="positionArea" style="padding: 8px 15px"></span>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              id="clickOut1"
            >
              إلغاء
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onclick="generatePDF('contentPdf16')"
            >
              طباعة 
            </button>
          </div>
        </div>
      </div>
    </div>

        `
      
        document.getElementById("outSearchIcon").addEventListener("click" , function(){
          let wordSearch = document.getElementById("wordSearchOutside");
          let ayahContainer = document.getElementById("ayahContainer");
          let ayahContainer1 = document.getElementById("ayahContainer1");
          const options = {
            method: 'POST', // Use Post method
            headers: {
              'Content-Type': 'application/json' // Specify content type as JSON
            },
            body: JSON.stringify({
              word : wordSearch.value
            }) // Convert data to JSON string and include in the body
          };
          if(wordSearch.value !== "" ){
            this.setAttribute("data-bs-toggle" , "modal");
            this.setAttribute("data-bs-target" , "#resultSearchModal");
            let storage = "";
            fetch('http://localhost:3000/quran/countOccurrencesInQuran' , options)
            .then(response => {
              // Parse the response body as JSON
              return response.json();
            })
            .then(data1 => {
              // Use the retrieved data
              if(data1["عدد النتائج"] == 0 ){
                ayahContainer.innerHTML = `<div style='color:red; font-weight: bold'>لاتوجد أية تحتوي على تلك الكلمة</div>`;
              }else{
                for(let i = 0 ; i < data1["عدد النتائج"] ; i++){
                storage += `<div class="ayah-style-search" style="cursor : pointer">${data1["النتائج"][i].text}<br> <span style="display:inline !important">${data1["النتائج"][i]["Surah"]}</span> (${ data1["النتائج"][i]["Ayah_Number"]})</div>`
              }
              ayahContainer.innerHTML = storage ; 
              ayahContainer.style.fontWeight = "bold";
              let ayahSearch = document.querySelectorAll(".ayah-style-search");
              ayahSearch.forEach((elem , index) =>{
                elem.addEventListener("click" , function(){
                  let splitDataLength = data1["النتائج"][0]["Surah"].split(" ").length ;
                  let splitData = "" ;
                  let tempWord = data1["النتائج"][0]["Surah"].split(" ");
                  let ayahSelected = "";
                  if(splitDataLength > 2){
                    let temp = "" ;
                    for(let i= 1 ; i < splitDataLength -1 ; i++){
                      temp += tempWord[i];  
                    }
                    temp += " " + tempWord[splitDataLength - 1 ];
                    splitData = temp ; 
                    ayahSelected = splitData ;
                  }else{
                    splitData =  data1["النتائج"][index]["Surah"].split(" ");
                    ayahSelected = splitData[1];
                  }
                  const options1 = {
                    method: 'POST', // Use Post method
                    headers: {
                      'Content-Type': 'application/json' // Specify content type as JSON
                    },
                    body: JSON.stringify({
                      surah : data[`${ayahSelected}`][1]
                    }) // Convert data to JSON string and include in the body
                  };
                  fetch("http://localhost:3000/quran/getSurahText" , options1)
                  .then(response =>{
                    return response.json();
                  })
                  .then(data =>
                    ayahContainer1.innerHTML = data["Ayahs"]
                    )
                  document.getElementById("clickOut").click();
                  document.getElementById("resultSearchModal1").click();
                })
              })
              }
            })
            .catch(error => {
              // Handle any errors that occurred during the fetch
              console.error('Error:', error);
            });
            this.click();
            this.removeAttribute("data-bs-toggle");
            this.removeAttribute("data-bs-target");
          }
         })

         document.getElementById("letterCount").addEventListener("click" , function(){
          document.querySelector("#letterCount input").click();
          let wordSearch = document.getElementById("wordSearchOutside");
          let areaLetter = document.getElementById("areaLetter");
          areaLetter.style.padding = "8px 20px" ; 
          const regex = /[\u0600-\u06FF\s]+/g;
          let extractedText = wordSearch.value.match(regex).join("");
          areaLetter.innerHTML = wordSearch.value ; 
          const options = {
            method: 'POST', // Use Post method
            headers: {
              'Content-Type': 'application/json' // Specify content type as JSON
            },
            body: JSON.stringify({
              text : extractedText
            }) // Convert data to JSON string and include in the body
            
          };
          this.setAttribute("data-bs-toggle" , "modal");
          this.setAttribute("data-bs-target" , "#letterCountModal");
          let letterArea = document.getElementById("letterArea");
          fetch('http://localhost:3000/quran/countLetters' , options)
          .then(response => {
            // Parse the response body as JSON
            return response.json();
          })
          .then(data => {
            // Use the retrieved data
            letterArea.innerHTML = data["count"];
          })
          .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error:', error);
          });
          this.click();
          this.removeAttribute("data-bs-toggle");
          this.removeAttribute("data-bs-target");
        })

        document.getElementById("wordCount").addEventListener("click" , function(){
          document.querySelector("#wordCount input").click();
          let wordSearch = document.getElementById("wordSearchOutside");
          let areaWord = document.getElementById("areaWord");
          areaWord.style.padding = "8px 20px" ; 
          areaWord.innerHTML = wordSearch.value ; 
          const options = {
            method: 'POST', // Use Post method
            headers: {
              'Content-Type': 'application/json' // Specify content type as JSON
            },
            body: JSON.stringify({
              text: wordSearch.value , 
            }) // Convert data to JSON string and include in the body      
          };
          this.setAttribute("data-bs-toggle" , "modal");
          this.setAttribute("data-bs-target" , "#wordCountModal");
          let wordArea = document.getElementById("wordArea");
          let storage = "" ; 
          fetch("http://localhost:3000/quran/countWordsInSentence" , options)
          .then(res =>{
            return res.json(); 
          })
          .then(data1 =>{
            for(let i = 0 ; i < data1["count"] ; i++){
              storage += `<div class="ayah-style-search">(${data1["words"][i]["index"]}) <span class="ayahIndex" style="display:inline;">${data1["words"][i]["word"]}</span></div>` ; 
            }
            wordArea.innerHTML = storage;
            wordArea.style.fontWeight = "bold";   
            let ayahWord = document.querySelectorAll(".ayahIndex");
            ayahWord.forEach(elem =>{
              elem.addEventListener("click" , function(e){
                e.stopPropagation();
                document.getElementById("clickOut1").click();
                let storage = "" ; 
                const options2 = {
                  method: 'POST', // Use Post method
                  headers: {
                    'Content-Type': 'application/json' // Specify content type as JSON
                  },
                  body: JSON.stringify({
                    text : wordSearch.value , 
                    word : this.innerHTML
                    
                  }) // Convert data to JSON string and include in the body
                };
                fetch("http://localhost:3000/quran/sumIndexsInWordInSentence" , options2)
                .then(res =>{
                  return res.json();
                })
                .then(data2 =>{
                  let resultPositionArea = document.getElementById("positionArea");
                  let resultPositionAreaOccurance = document.getElementById("areaPosition");
                    for(let i = 0 ; i < data2["occurrences"].length ; i++){
                      storage += `<div class="ayah-style-search" style="background-color: #fff">(${data2["occurrences"][i]}) <span class="ayahIndex" style="display:inline;">${this.innerHTML}</span></div>` ;
                    }
                    resultPositionAreaOccurance.innerHTML = storage ; 
                    let btn = document.getElementById("ayahIndecise");
                    resultPositionArea.innerHTML =  data2["totalIndexes"] ;
                    btn.setAttribute("data-bs-toggle" , "modal");
                    btn.setAttribute("data-bs-target" , "#positionCountModal");
                    btn.click();
                    btn.removeAttribute("data-bs-toggle");
                    btn.removeAttribute("data-bs-target");
                })
                .catch(error => {
                  // Handle any errors that occurred during the fetch
                  console.error('Error:', error);
                });
                this.click();
                this.removeAttribute("data-bs-toggle");
                this.removeAttribute("data-bs-target");
              })
            })
          })
        })

let input = document.createElement("input");
input.type = "radio";
input.style.visibility = "hidden";
input.id = "ayahIndecise";
document.body.appendChild(input);


let letterCount = document.getElementById("letterCount");
let secondContent = document.getElementById("second-Content");
let numberCount = document.getElementById("numberCount");
let sentenceCount = document.getElementById("sentenceCount");
let wordCount = document.getElementById("wordCount");

wordCount.addEventListener("change" , ()=>{
  secondContent.innerHTML = ""; 
})
letterCount.addEventListener("change",()=>{
  secondContent.innerHTML = ""; 
});

numberCount.addEventListener("change" , ()=>{
  secondContent.innerHTML = `
  <h4 class="sub-title">النَّص المطلُوب</h4>
  <input
    type="text"
    placeholder="اكتب النص"
    class="fieldText"
    style="margin-top: 8px"
    id="TextWrite"
  />
  <div class="search1">
    <input
      class="y fieldText"
      name="drop"
      type="text"
      placeholder=" حَرف، كَلِمة، كَلِمات"
      style="margin-right: 10px"
      id="wordSearchInside"
    />
    <i class="fas fa-search text-light" id="insideSearchIcon"></i>
  </div>
  <br />
  <button class="btn btn-myStyle mt-3" id="buttonResultRepeated" data-bs-toggle="modal"
  data-bs-target="#resultRepeatedModal">
   عدد مرّات تِكرارًا
  </button>`
 document.getElementById("insideSearchIcon").addEventListener("click" , function(){
  let wordSearch = document.getElementById("wordSearchInside");
  let ayahContainer = document.getElementById("ayahContainer");
  const options = {
    method: 'POST', // Use Post method
    headers: {
      'Content-Type': 'application/json' // Specify content type as JSON
    },
    body: JSON.stringify({
      word : wordSearch.value
    }) // Convert data to JSON string and include in the body
  };
  if(wordSearch.value !== "" ){
    this.setAttribute("data-bs-toggle" , "modal");
    this.setAttribute("data-bs-target" , "#resultSearchModal");
    let storage = "";
    fetch('http://localhost:3000/quran/countOccurrencesInQuran' , options)
    .then(response => {
      // Parse the response body as JSON
      return response.json();
    })
    .then(data => {
      // Use the retrieved data
      if(data["عدد النتائج"] == 0 ){
        ayahContainer.innerHTML = `<div style='color:red; font-weight: bold'>لاتوجد أية تحتوي على تلك الكلمة</div>`;
      }else{
        for(let i = 0 ; i < data["عدد النتائج"] ; i++){
          storage += `<div class="ayah-style-search">${data["النتائج"][i].text} (${ data["النتائج"][i]["Ayah_Number"]})<br><div style="color : red">${data["النتائج"][i]["Surah"]}</div></div>`
        }
      ayahContainer.innerHTML = storage ; 
      ayahContainer.style.fontWeight = "bold";
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error('Error:', error);
    });
    this.click();
    this.removeAttribute("data-bs-toggle");
    this.removeAttribute("data-bs-target");
  }
 })

 document.getElementById("buttonResultRepeated").addEventListener("click" , function(){
    let wordSearchOutside = document.getElementById("wordSearchOutside");
    let TextWrite = document.getElementById("TextWrite");
    let areaLetterRepeated = document.getElementById("areaLetterRepeatedAyah1");
    let areaLetterRepeated2 = document.getElementById("areaLetterRepeatedAyah2");
    let areaLetterRepeated3 = document.getElementById("areaLetterRepeatedAyah3");
    let areaLetterRepeated4 = document.getElementById("areaLetterRepeatedAyah4");
    areaLetterRepeated.style.padding = "8px 20px" ; 
    areaLetterRepeated2.style.padding = "8px 20px" ; 
    areaLetterRepeated3.style.padding = "8px 20px" ; 
    areaLetterRepeated4.style.padding = "8px 20px" ; 
    areaLetterRepeated.innerHTML = wordSearchOutside.value ; 
    areaLetterRepeated2.innerHTML = TextWrite.value ;
    const options = {
      method: 'POST', // Use Post method
      headers: {
        'Content-Type': 'application/json' // Specify content type as JSON
      },
      body: JSON.stringify({
        text : wordSearchOutside.value , 
        word : TextWrite.value
      }) // Convert data to JSON string and include in the body
    };

    fetch("http://localhost:3000/quran/countOccurrencesInSentence" , options)
    .then(response => {
      return response.json();
    })
    .then(data =>{
      areaLetterRepeated3.innerHTML = data.count||0;
      areaLetterRepeated4.innerHTML = data.text||"" ;
    })
    .catch(error => {
      console.error("Error:" , error);
    })
 })
});


sentenceCount.addEventListener("change" , ()=>{
  secondContent.innerHTML = `
  <select id="selectElement"  class="menu">
  <option  value="1" disabled selected>حِسَاب الجُمَل</option>
  <option  value="2">طريقة: حِسَاب الجُمَل الكُبرَى    </option>
  <option  value="3">طريقة: حِسَاب الجُمَل الصُغرَى    </option>
  <option  value="4">طريقة: حِسَاب الجُمَل الوسطَى    </option>
  <option  value="5">طريقة:أكثَر الحُروف تِكرارًا    </option>
  <option  value="6">طريقة:تَرتِيب ظهورها في القُرآن</option>
  <option  value="7">طريقة:تَرتِيب حُروف الهِجاء     </option>
</select>
  `
  let selectElement = document.getElementById("selectElement");
  let selectedValue = "" ; 
  let button = document.createElement("button");
  button.style.display = "none";
  document.body.append(button);
  selectElement.addEventListener("change" , function(){
    selectedValue = this.value ; 
    let wordSearchOutside = document.getElementById("wordSearchOutside");
    const options = {
      method: 'POST', // Use Post method
      headers: {
        'Content-Type': 'application/json' // Specify content type as JSON
      },
      body: JSON.stringify({
        sentence : wordSearchOutside.value , 
      }) // Convert data to JSON string and include in the body
    };
    async function fetchData(url , id){
      try{
         // Make the fetch request
         let response = await fetch(url , options);
          
         // Check if the response is ok
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         
         // Parse the response
         let data = await response.json();
         
         
         // Update DOM elements
         let areaMethod6Element = document.getElementById(`areaMethod${id}`);
         let calcMethod6Element = document.getElementById(`calcMethod${id}`);

         if (areaMethod6Element && calcMethod6Element) {
             areaMethod6Element.style.padding = "8px 20px";
             calcMethod6Element.style.padding = "8px 20px";
             areaMethod6Element.innerHTML = data["النص"] ;
             calcMethod6Element.innerHTML = data["مجموع العدد "];
         }
         
         // Open modal
         button.setAttribute("data-bs-toggle", "modal");
         button.setAttribute("data-bs-target", "#calulateModal");
         button.click(); 
      }catch(error){
        console.error("Error:", error);
      }
    }
    const basicUrl = "http://localhost:3000/quran/";
    block.innerHTML = "";
    if(selectedValue == 2){
      createModal("حِسَاب الجُمَل الكُبرَى",1);
      fetchData(`${basicUrl}waySentence/bigSentences`,1);
    }else if(selectedValue == 3){
      createModal("حِسَاب الجُمَل الصُغرَى",2);
      fetchData(`${basicUrl}waySentence/minorSentences`,2);
    }else if(selectedValue == 4){
      createModal("حِسَاب الجُمَل الوسطَى",3);
      fetchData(`${basicUrl}waySentence/middleSentences`,3);
    }else if(selectedValue == 5){
      createModal("أكثَر الحُروف تِكرارًا",4);
      fetchData(`${basicUrl}waySentence/mostRepeatedLetters` , 4);
    }else if(selectedValue == 6){
      createModal("تَرتِيب ظهورها في القُرآن", 5);
      fetchData(`${basicUrl}waySentence/appearanceOfLetters` , 5);
    }else if(selectedValue == 7){
      createModal("تَرتِيب حُروف الهِجاء" , 6);
      fetchData(`${basicUrl}waySentence/arrangOfLetters` , 6);
    }
  })
})


let block = document.createElement("section");
const createModal = (Method , id)=>{
  block.innerHTML = `
  <div
  class="modal fade"
  id="calulateModal"
  tabindex="-1"
  aria-labelledby="calulateModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content" style="min-height: 300px">
      <div class="modal-body">
        <div class="body-content" id="contentPdf11">
          <div class="first-section">
            <h4 >النِطَاق</h4>
            <span id="areaMethod${id}"></span>
          </div>
          <div class="second-section">
            <h4 style="margin-right: 18px">
              طريقة: ${Method}  
            </h4>
            <span id="calcMethod${id}"></span>
          </div>
        </div>
      </div>
      <div class="modal-footer justify-content-center">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إلغاء
        </button>
        <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        onclick="generatePDF('contentPdf11')"
      >
        طباعة 
      </button>
      </div>
    </div>
  </div>
</div>
  `
  document.body.append(block);
}
    }else if(selectedValue === "القُرآن الكَرِيم"){  
        sectionMenuContainer.innerHTML = `
        <div id="second-Content" style="margin-top: 20px"></div>
        <div id="buttonsControl">
        <section style="margin-top: 60px">
        <div style='display:inline-block'id="letterCount">  
        <input
          type="radio"
          name="choose"
        />
        <label for="letterCount">عَدْ الحُروف</label>
        </div>
          <input type="radio" name="choose" id="numberCount" class="me-4" />
          <label for="numberCount">عَدَد مَرَّات تِكرَار</label>
          <input type="radio" name="choose" id="sentenceCount" class="me-4" />
          <label for="sentenceCount">حِسَاب الجُمَل</label>
        </section>

        <div
        class="modal fade"
        id="letterCountModal"
        tabindex="-1"
        aria-labelledby="letterCountModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content" style="min-height: 300px">
            <div class="modal-body">
              <div class="body-content" id="contentPdf3">
                <div class="first-section">
                  <h4 >النِطَاق</h4>
                  <span id="areaLetter"></span>
                </div>
                <div class="second-section">
                  <h4 style="margin-right: 18px"> عَد الحُروف</h4>
                  <span id="letterArea" style="padding: 8px 15px"></span>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-center">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                إلغاء
              </button>
              <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onclick="generatePDF('contentPdf3')"
            >
              طباعة 
            </button>
            </div>
          </div>
        </div>
      </div>
       

  <div
  class="modal fade"
  id="resultSearchModal"
  tabindex="-1"
  aria-labelledby="resultSearchModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content" style="min-height: 300px">
      <div class="modal-body">
        <div class="body-content">
          <div class="first-section">
            <h4 class="me-3">نتيجة البحث</h4>
            <span id="ayahContainer" style="padding: 8px 10px"></span>
          </div>
        </div>
      </div>
      <div class="modal-footer justify-content-center">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          إلغاء
        </button>
      </div>
    </div>
  </div>
</div>

<div
class="modal fade"
id="resultRepeatedModal"
tabindex="-1"
aria-labelledby="resultRepeatedModalLabel"
aria-hidden="true"
>
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content" style="min-height: 300px">
    <div class="modal-body">
      <div class="body-content" id="contentPdf7">
        <div class="first-section">
          <h4 >النِطَاق</h4>
          <span id="areaLetterRepeatedAyah1"></span>
        </div>
        <div class="second-section">
          <h4 class="me-3">النَّص</h4>
          <span id="areaLetterRepeatedAyah2"></span>
        </div>
        <div class="second-section">
          <h4 class="me-3">عدد مرّات تِكرارًا</h4>
          <span id="areaLetterRepeatedAyah3"></span>
        </div>
        <div class="second-section">
          <h4 class="me-3">نَص الآيَة</h4>
          <span id="areaLetterRepeatedAyah4"></span>
        </div>
      </div>
    </div>
    <div class="modal-footer justify-content-center">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        إلغاء
      </button>
      <button
      type="button"
      class="btn btn-secondary"
      data-bs-dismiss="modal"
      onclick="generatePDF('contentPdf7')"
    >
      طباعة 
    </button>
    </div>
  </div>
</div>
</div>
        `;
        document.getElementById("letterCount").addEventListener("click" , function(){
          document.querySelector("#letterCount input").click();
          let areaLetter = document.getElementById("areaLetter");
          areaLetter.style.padding = "8px 20px" ; 
          areaLetter.innerHTML = "القُرآن الكَرِيم" ;
          this.setAttribute("data-bs-toggle" , "modal");
          this.setAttribute("data-bs-target" , "#letterCountModal");
          let letterArea = document.getElementById("letterArea");
          fetch('http://localhost:3000/quran/countLetterInQuran' )
          .then(response => {
            // Parse the response body as JSON
            return response.json();
          })
          .then(data => {
            // Use the retrieved data
            letterArea.innerHTML = data["totalLetters"];
          })
          .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error:', error);
          });
          this.click();
          this.removeAttribute("data-bs-toggle");
          this.removeAttribute("data-bs-target");
        })

        let letterCount = document.getElementById("letterCount");
        let secondContent = document.getElementById("second-Content");
        let numberCount = document.getElementById("numberCount");
        let sentenceCount = document.getElementById("sentenceCount");
        
        letterCount.addEventListener("change",()=>{
          secondContent.innerHTML = ""; 
        });
        
        numberCount.addEventListener("change" , ()=>{
          secondContent.innerHTML = `
          <h4 class="sub-title">النَّص المطلُوب</h4>
          <input
            type="text"
            placeholder="اكتب النص"
            class="fieldText"
            style="margin-top: 8px"
            id="TextWrite"
          />
          <div class="search1">
            <input
              class="y fieldText"
              name="drop"
              type="text"
              placeholder=" حَرف، كَلِمة، كَلِمات"
              style="margin-right: 10px"
              id="wordSearchInside"
            />
            <i class="fas fa-search text-light" id="insideSearchIcon"></i>
          </div>
          <br />
          <button class="btn btn-myStyle mt-3" id="buttonResultRepeated" data-bs-toggle="modal"
          data-bs-target="#resultRepeatedModal">
         عدد مرّات تِكرارًا
          </button>`
         document.getElementById("insideSearchIcon").addEventListener("click" , function(){
          let wordSearch = document.getElementById("wordSearchInside");
          let ayahContainer = document.getElementById("ayahContainer");
          const options = {
            method: 'POST', // Use Post method
            headers: {
              'Content-Type': 'application/json' // Specify content type as JSON
            },
            body: JSON.stringify({
              word : wordSearch.value
            }) // Convert data to JSON string and include in the body
          };
          if(wordSearch.value !== "" ){
            this.setAttribute("data-bs-toggle" , "modal");
            this.setAttribute("data-bs-target" , "#resultSearchModal");
            let storage = "";
            fetch('http://localhost:3000/quran/countOccurrencesInQuran' , options)
            .then(response => {
              // Parse the response body as JSON
              return response.json();
            })
            .then(data => {
              // Use the retrieved data
              if(data["عدد النتائج"] == 0 ){
                ayahContainer.innerHTML = `<div style='color:red; font-weight: bold'>لاتوجد أية تحتوي على تلك الكلمة</div>`;
              }else{
                for(let i = 0 ; i < data["عدد النتائج"] ; i++){
                  storage += `<div class="ayah-style-search">${data["النتائج"][i].text} (${ data["النتائج"][i]["Ayah_Number"]})<br><div style="color : red">${data["النتائج"][i]["Surah"]}</div></div>`
                }
              ayahContainer.innerHTML = storage ; 
              ayahContainer.style.fontWeight = "bold";
              }
            })
            .catch(error => {
              // Handle any errors that occurred during the fetch
              console.error('Error:', error);
            });
            this.click();
            this.removeAttribute("data-bs-toggle");
            this.removeAttribute("data-bs-target");
          }
         })
        
         document.getElementById("buttonResultRepeated").addEventListener("click" , function(){
          let surahName = document.getElementById("myInput");
            let TextWrite = document.getElementById("TextWrite");
            let areaLetterRepeated = document.getElementById("areaLetterRepeatedAyah1");
            let areaLetterRepeated2 = document.getElementById("areaLetterRepeatedAyah2");
            let areaLetterRepeated3 = document.getElementById("areaLetterRepeatedAyah3");
            let areaLetterRepeated4 = document.getElementById("areaLetterRepeatedAyah4");
            let storage = "";
            areaLetterRepeated.style.padding = "8px 20px" ; 
            areaLetterRepeated2.style.padding = "8px 20px" ; 
            areaLetterRepeated3.style.padding = "8px 20px" ; 
            areaLetterRepeated4.style.padding = "8px 20px" ; 
            areaLetterRepeated.innerHTML = "القُرآن الكَرِيم" ;
            areaLetterRepeated2.innerHTML = TextWrite.value ;
        
            const options = {
              method :'POST' , 
              headers: {
                'Content-Type': 'application/json' // Specify content type as JSON
              },
              body: JSON.stringify({ 
                word : TextWrite.value
              }) // Convert data to JSON string and include in the body
            }
        
            fetch("http://localhost:3000/quran/countOccurrencesInQuran" , options)
            .then(response => {
              return response.json();
            })
            .then(data =>{
              areaLetterRepeated3.innerHTML = data["عدد النتائج"];
              if(data["عدد النتائج"] == 0 ){
                ayahContainer.innerHTML = `<div style='color:red; font-weight: bold'>لاتوجد أية تحتوي على تلك الكلمة</div>`;
              }else{
                for(let i = 0 ; i < parseInt(data["عدد النتائج"]) ; i++){
                  storage += `<div class="ayah-style-search">${data["النتائج"][i].text}<br><div><span style="color : red ; display: inline !important">${data["النتائج"][i]["Surah"]}</span> (${ data["النتائج"][i]["Ayah_Number"]})</div></div>`
                }
              areaLetterRepeated4.innerHTML = storage ; 
              areaLetterRepeated4.style.fontWeight = "bold";
              }
            })
            .catch(error => {
              console.error("Error:" , error);
            })
         })
        });
        
        
        sentenceCount.addEventListener("change" , ()=>{
          secondContent.innerHTML = `
          <select id="selectElement"  class="menu">
          <option  value="1" disabled selected>حِسَاب الجُمَل</option>
          <option  value="2">طريقة: حِسَاب الجُمَل الكُبرَى    </option>
          <option  value="3">طريقة: حِسَاب الجُمَل الصُغرَى    </option>
          <option  value="4">طريقة: حِسَاب الجُمَل الوسطَى    </option>
          <option  value="5">طريقة:أكثَر الحُروف تِكرارًا    </option>
          <option  value="6">طريقة:تَرتِيب ظهورها في القُرآن</option>
          <option  value="7">طريقة:تَرتِيب حُروف الهِجاء     </option>
        </select>
          `
          let selectElement = document.getElementById("selectElement");
          let selectedValue = "" ; 
          let button = document.createElement("button");
          button.style.display = "none";
          document.body.append(button);
          selectElement.addEventListener("change" , function(){
            selectedValue = this.value ; 
            async function fetchData(url , id){
              try{
                 // Make the fetch request
                 let response = await fetch(url);
                  
                 // Check if the response is ok
                 if (!response.ok) {
                     throw new Error('Network response was not ok');
                 }
                 
                 // Parse the response
                 let data = await response.json();
                 
                 
                 // Update DOM elements
                 let areaMethod6Element = document.getElementById(`areaMethod${id}`);
                 let calcMethod6Element = document.getElementById(`calcMethod${id}`);
      
                 if (areaMethod6Element && calcMethod6Element) {
                     areaMethod6Element.style.padding = "8px 20px";
                     calcMethod6Element.style.padding = "8px 20px";
                     areaMethod6Element.innerHTML = "القُرآن الكَرِيم" ;
                     calcMethod6Element.innerHTML = data["مجموع العدد "];
                 }
                 
                 // Open modal
                 button.setAttribute("data-bs-toggle", "modal");
                 button.setAttribute("data-bs-target", "#calulateModal");
                 button.click(); 
              }catch(error){
                console.error("Error:", error);
              }
            }
            const basicUrl = "http://localhost:3000/quran/";
            block.innerHTML = "";
            if(selectedValue == 2){
              createModal("حِسَاب الجُمَل الكُبرَى" , 1);
              fetchData(`${basicUrl}wayQuran/bigSentences`,1);
            }else if(selectedValue == 3){
              createModal("حِسَاب الجُمَل الصُغرَى" , 2);
              fetchData(`${basicUrl}wayQuran/minorSentences`,2);
            }else if(selectedValue == 4){
              createModal("حِسَاب الجُمَل الوسطَى" , 3);
              fetchData(`${basicUrl}wayQuran/middleSentences`,3);
            }else if(selectedValue == 5){
              createModal("أكثَر الحُروف تِكرارًا" , 4);
              fetchData(`${basicUrl}wayQuran/mostRepeatedLetters`,4);
            }else if(selectedValue == 6){
              createModal("تَرتِيب ظهورها في القُرآن" , 5);
              fetchData(`${basicUrl}wayQuran/appearanceOfLetters`,5);
            }else if(selectedValue == 7){
              createModal("تَرتِيب حُروف الهِجاء" , 6);
              fetchData(`${basicUrl}wayQuran/arrangOfLetters`, 6);
            }
          })
        })
        
        
        let block = document.createElement("section");
        const createModal = (Method , id)=>{
          block.innerHTML = `
          <div
          class="modal fade"
          id="calulateModal"
          tabindex="-1"
          aria-labelledby="calulateModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content" style="min-height: 300px">
              <div class="modal-body">
                <div class="body-content" id="contentPdf10">
                  <div class="first-section">
                    <h4 >النِطَاق</h4>
                    <span id="areaMethod${id}"></span>
                  </div>
                  <div class="second-section">
                    <h4 style="margin-right: 18px">
                      طريقة: ${Method}  
                    </h4>
                    <span id="calcMethod${id}"></span>
                  </div>
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  إلغاء
                </button>
                <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onclick="generatePDF('contentPdf10')"
            >
              طباعة 
            </button>
              </div>
            </div>
          </div>
        </div>
          `
          document.body.append(block);
        }
    }
})

// Function to make print as pdf 
function generatePDF(name){
  const element = document.getElementById(name);
  var opt = {
    margin:       0,
    filename:     'popup.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf()
  .set(opt)
  .from(element)
  .save()
}

// Function to convert result from api to extract two arrays ==> Numbers | Letters
function extractSpecific(strings) {
  // Combine all strings into one string
  const combinedString = strings.join('');

  // Use regular expression to match numbers
  const numbersArray = combinedString.match(/\d+/g);
  const wordsArray = combinedString.match(/[\u0600-\u06FF]+/g);
  // Return the array of matched numbers
  return [numbersArray , wordsArray];
}
