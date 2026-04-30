   
import {use, useEffect,useState} from 'react'
import 'flowtoken/dist/styles.css';
import { useAnimatedText } from '../hooks/useAnimationText';
import { streamText } from '../utilities/utility';


   
export const DataView = () =>{

    const [data, setData] = useState([])
    const [currText,setCurrText] = useState('')

    useEffect(( )=>{

        const getData =  ()=>{

        const data =   fetch('http://localhost:5173/visionary-react-flow/data.json').then(async (res)=>{
            let dataRes = await res.json();
            setData(dataRes)
            console.log(dataRes)

        }).catch(e=>{
            console.error('error')
        })
        }

        getData()

    },[])


    return (
        <>
            <div> Select your Option</div>
            <select onChange = {(e)=>{setCurrText(e.target.value);}}>
                <option key ={'default'} value ={''}>Select</option>
                {
                    data.map((item,index)=>(
                        <option key ={item.id} value ={item.bio}>{item.name}</option>
                    ))
                }
                
            </select>
            <br/>
            <br/>
            <div>
                <AnimatedText text = {currText}/>
            </div>
        </>
    )


        
}


const AnimatedText = ({text})=>{   

    const [animatedText, setAnimatedText] = useAnimatedText();

    useEffect(()=>{
        async function generateStream() {

            const { textStream } = await streamText(text);

                for await (const textPart of textStream) {
                    setAnimatedText(textPart);
            }
      
         }
         generateStream()
         console.log('text',text)
         console.log('animatedText',animatedText)

         return ()=> setAnimatedText('')

    },[text])


    return (

            <div>
                {animatedText}
            </div>
    )
}