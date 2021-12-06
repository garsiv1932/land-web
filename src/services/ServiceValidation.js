import * as Yup from 'yup'
import { isNullOrUndef } from 'chart.js/helpers'

function email(eml){
    let result = {error: true, errorMessage: ""}
    if(!eml.isEmpty){
        let x =0;
        while (x < eml.length) {
            let letter = eml.charAt(x);
            if (letter === "@") {
                result.error= false;
                return result;
            }
            x++;
        }
    }
    result.errorMessage = "Parece haber un problema con su email";
    return result;
}

function validSchema(){
    return Yup.object({
        
    });
}

const isNullOrEmpty = (val) => {
    let nullOrEmpty = true
    if (!isNullOrUndef(val) && val.length > 0) {
        nullOrEmpty = false
    }
    return nullOrEmpty
}

const isNullOrWhiteSpace = (val) => {
    let nullOrWiteSpace = true
    if (!isNullOrEmpty(val) && val.length > 0) {
        const trimedValue = val.trim()
        if (trimedValue > 0) {
            nullOrWiteSpace = false
        }
    }
    return nullOrWiteSpace
}

export default {email, validSchema, isNullOrEmpty}