const Info = {
    firstBlock:[
        {
            title:'Снизить количество ошибок 1.1',
            description:'Перспективные изображения являются неотъемлемой частью пакета документов АР, используются в ходе проведения ремонтных работ и необходимы при авторском надзоре'
        },
        {
            title:'Снизить количество ошибок 1.2',
            description:'Перспективные изображения являются неотъемлемой частью пакета документов АР, используются в ходе проведения ремонтных работ и необходимы при авторском надзоре'
        },
        {
            title:'Снизить количество ошибок 1.3',
            description:'Перспективные изображения являются неотъемлемой частью пакета документов АР, используются в ходе проведения ремонтных работ и необходимы при авторском надзоре'
        }
    ],
    secondBlock:[
        {
            title:'Снизить количество ошибок 2.1',
            description:'Перспективные изображения являются неотъемлемой частью пакета документов АР, используются в ходе проведения ремонтных работ и необходимы при авторском надзоре'
        },
        {
            title:'Снизить количество ошибок 2.2',
            description:'Перспективные изображения являются неотъемлемой частью пакета документов АР, используются в ходе проведения ремонтных работ и необходимы при авторском надзоре'
        },
        {
            title:'Снизить количество ошибок 2.3',
            description:'Перспективные изображения являются неотъемлемой частью пакета документов АР, используются в ходе проведения ремонтных работ и необходимы при авторском надзоре'
        }
    ],
    thirdBlock:[
        {
            title:'Снизить количество ошибок 3.1',
            description:'Перспективные изображения являются неотъемлемой частью пакета документов АР, используются в ходе проведения ремонтных работ и необходимы при авторском надзоре'
        },
        {
            title:'Снизить количество ошибок 3.2',
            description:'Перспективные изображения являются неотъемлемой частью пакета документов АР, используются в ходе проведения ремонтных работ и необходимы при авторском надзоре'
        },
        {
            title:'Снизить количество ошибок 3.3',
            description:'Перспективные изображения являются неотъемлемой частью пакета документов АР, используются в ходе проведения ремонтных работ и необходимы при авторском надзоре'
        }
    ]
}

const bookInfo = document.querySelector('.book_info'),
      arrowFirst = document.querySelector('.arrow_first'),
      arrowSecond = document.querySelector('.arrow_second'),
      arrowThird = document.querySelector('.arrow_third'),
      arrow1 = document.querySelector('.arrow1'),
      arrow2 = document.querySelector('.arrow2'),
      arrow3 = document.querySelector('.arrow3'),
      container = document.querySelector('.book_info')
      
      

function createBlockInfo(block){
  bookInfo.innerHTML = ''
     block.forEach((el) =>{
      let nameElement = document.createElement("h3");
      nameElement.textContent = el.title;
      nameElement.classList.add("name");
      container.appendChild(nameElement);

  let descriptionElement = document.createElement("p");
  descriptionElement.textContent = el.description;
  descriptionElement.classList.add("description");
  descriptionElement.style.display = "none";
  container.appendChild(descriptionElement);

  nameElement.addEventListener("click", function() {
    if (descriptionElement.style.display === "none") {
      descriptionElement.style.display = "block";
    } else {
      descriptionElement.style.display = "none";
    }
  });
     })

}


 arrowFirst.style.color = '#EA4C14'
      arrow1.style.visibility= 'visible'
      arrow1.style.position = 'static'
createBlockInfo(Info.firstBlock)

function changeBlockInfo(arrow,block){
     arrow.addEventListener('click', ()=>{
    changeStyle(arrow)
    createBlockInfo(block)
 })
}

function changeStyle(arrow){
  if( arrow === arrowFirst){
      arrowSecond.style.color = 'white'
      arrow2.style.visibility= 'hidden'
      arrow2.style.position = 'absolute'
      arrowThird.style.color = 'white'
      arrow3.style.visibility= 'hidden'
      arrow3.style.position = 'absolute'
      arrowFirst.style.color = '#EA4C14'
      arrow1.style.visibility= 'visible'
      arrow1.style.position = 'static'
      
  }
  if( arrow === arrowSecond){
      arrowThird.style.color = 'white'
      arrow3.style.visibility= 'hidden'
      arrow3.style.position = 'absolute'
      arrowFirst.style.color = 'white'
      arrow1.style.visibility= 'hidden'
      arrow1.style.position = 'absolute'
      arrowSecond.style.color = '#EA4C14'
      arrow2.style.visibility= 'visible'
      arrow2.style.position = 'static'
     
  }
  if( arrow === arrowThird){
      arrowSecond.style.color = 'white'
      arrow2.style.visibility= 'hidden'
      arrow2.style.position = 'absolute'
      arrowFirst.style.color = 'white'
      arrow1.style.visibility= 'hidden'
      arrow1.style.position = 'absolute'
      arrowThird.style.color = '#EA4C14'
      arrow3.style.visibility= 'visible'
      arrow3.style.position = 'static'
  }
}

changeBlockInfo(arrowFirst,Info.firstBlock)
changeBlockInfo(arrowSecond,Info.secondBlock)
changeBlockInfo(arrowThird,Info.thirdBlock)

