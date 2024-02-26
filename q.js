let qNo=1;
let score=0;
const qObject   = [
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra" // Option 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: "Mars" // Option 1
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "George Orwell"],
        answer: "Harper Lee" // Option 1
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au" // Option 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean" // Option 1
    },
    {
        question: "Who painted 'The Starry Night'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Vincent van Gogh" // Option 1
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria" // Option 1
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
        answer: "Albert Einstein" // Option 1
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Euro", "Dollar", "Pound"],
        answer: "Yen" // Option 1
    },
    {
        question: "Which is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest" // Option 1
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Robert Koch"],
        answer: "Alexander Fleming" // Option 1
    },
    {
        question: "What is the chemical symbol for iron?",
        options: ["Fe", "Au", "Ag", "Cu"],
        answer: "Fe" // Option 1
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide" // Option 1
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
        answer: "Charles Babbage" // Option 1
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Skin", "Heart", "Liver", "Brain"],
        answer: "Skin" // Option 1
    },
    {
        question: "Which gas is known as laughing gas?",
        options: ["Nitrous Oxide", "Carbon Monoxide", "Sulphur Dioxide", "Methane"],
        answer: "Nitrous Oxide" // Option 1
    },
    {
        question: "Who is the first woman Prime Minister of India?",
        options: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Margaret Thatcher"],
        answer: "Indira Gandhi" // Option 1
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale" // Option 1
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "William Faulkner", "Mark Twain"],
        answer: "F. Scott Fitzgerald" // Option 1
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O" // Option 1
    }
];




// step 5
let initialisation=()=>{
    score=0;
    qNo=1;
    window.location.reload();
}
// step 4
 let nextButton=document.getElementById("next")
nextButton.addEventListener('click',()=>{
    qNo++
    let buttons=document.querySelectorAll(".btn")
    buttons.forEach(btn=>{
        btn.disabled=false;
        btn.style.backgroundColor="white"
    })
    if(qNo<21){
        fillInnerText(qNo)
    }
    else{
        console.log(score)
        let container=document.querySelector(".container")
        let buttons=document.querySelectorAll(".btn")
        let nextButton=document.getElementById("next")
        let scoreDisplay=document.getElementById("question")
        let playButton=document.getElementById("btn3")
        container.style.backgroundColor="black"
        buttons.forEach(btn=>{
           btn.style.backgroundColor="black"
        })
        nextButton.style.backgroundColor="black"
        scoreDisplay.classList.add("scoreBoard")
        scoreDisplay.innerText="Your Score =" +" "+ score
        playButton.innerText="Play Again"
        playButton.style.backgroundColor="white"

        playButton.addEventListener("click",()=>{
          initialisation();
        })
    }
   
})
// step 3
let checkAnswer=(qNo)=>{
     let buttons=document.querySelectorAll('.btn')
     buttons.forEach(btn=>{
        btn.addEventListener('click',()=>{
            let ans=btn.innerText
            if(ans==qObject[qNo-1].answer){
                score++
                btn.style.backgroundColor="#006400"
                
                

            }
            else{
               
               btn.style.backgroundColor="red"
               let buttons=document.querySelectorAll(".btn")
               buttons.forEach(btn=>{
                if(btn.innerText==qObject[qNo-1].answer){
                    btn.style.backgroundColor="#006400"
                    btn.style.color="#000000"
                }
               })
               
               
            }
            buttons.forEach(btn=>{
                btn.disabled=true;
            })
            
        })
       
     })

}




// 2nd step
  let fillInnerText=(qNO)=>{
    let question=document.getElementById("question")
    let button1=document.getElementById("btn1")
    let button2=document.getElementById("btn2")
    let button3=document.getElementById("btn3")
    let button4=document.getElementById("btn4")
    question.innerText=qNo+"." +" "+ qObject[qNO-1].question 
    button1.innerText=qObject[qNO-1].options[0]
    button2.innerText=qObject[qNO-1].options[1]
    button3.innerText=qObject[qNO-1].options[2]
    button4.innerText=qObject[qNO-1].options[3]
    checkAnswer(qNo);
}
// first step
if(qNo==1){
    fillInnerText(qNo)
    
}
