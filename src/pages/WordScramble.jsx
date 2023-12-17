import { useState } from "react";
import Back from "./back";

function suffle(word) {
    const a = word.split(""),
        n = a.length;

    for(let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

const words = ["ayam", "bebek", "cupang", "biawak", "alpaca", "ikan"]
const index = Math.floor(Math.random() * words.length)
const randomWord = suffle(words[index])

export default function WordScramble() {
    const [word, setWord] = useState('')
    const userWord = (e) => {
        setWord(e.target.value)
    }

    const [result, setResult] = useState('')
    const check = () => {
        console.log("check")
        if (words[index] == word) {
            setResult("benar")
        } else {
            setResult("salah")
        }
    } 
    
    return (
        <div>    
            <div className="container p-5 mx-auto justify-content-center">
                <Back />
                <h1 className="text-center mb-2">Word Scramble Animal</h1>
                <div className="p-3 w-50 mx-auto justify-content-center ">
                    <p className="fs-3">{randomWord}</p>
                    <textarea value={word} onChange={userWord} className="bg-white w-100 p-2 rounded fs-5 border border-black shadow-sm" style={{resize: "none"}} rows={1} />
                    <a className="bg-black text-white px-3 py-1 rounded-5 mb-4 fw-bold fs-5 float-end text-decoration-none" style={{cursor:"pointer"}} onClick={check}>Submit</a>
                    <p className="fs-3">{result}</p>
                </div>
            </div>
            
        </div>
    )
}
