import {Bad} from "../../estimation/bad";
import {Good} from "../../estimation/good";
import {Excellent} from "../../estimation/excellent";



export const estimationValue = (random)=>{

   if(random < 0.3){
     return <Bad/>
   }
   if(random <0.6 && random >0.3){
     return <Good/>
   }
   else{
     return <Excellent/>
   }
}


