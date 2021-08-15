import * as Yup from 'yup'

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

export default {email, validSchema}