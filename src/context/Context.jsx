import main from "../config/gemini";
import { createContext,useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [previousPrompt, setPreviousPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState([])


    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await main(input)
        let responseArray = response.split("**")
        let newResponse;
        for (let i=0; i < responseArray.length; i++){
            if (i === 0 || i % 2 !== 1){
                newResponse += responseArray[i]
            }
            else{
                newResponse += `<b style="color: grey;">${responseArray[i]}</b>`;
            }
        }

        let newResponse2 = newResponse.split("*").join('</br style="margin-top: 20px;">');
        setResultData(newResponse2)
        setLoading(false)
        setInput("")


    }

    // onSent("What is React Js")
    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
} 

export default ContextProvider