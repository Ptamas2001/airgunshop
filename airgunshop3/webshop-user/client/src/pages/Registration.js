import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Registration() {
 

        

    let history = useNavigate();
    const initialValues = {
        
        username: "",
        password: "",
        mobile: "",
        isAdmin: "",
        name: "",
        birthDate: "",
      };
      const validationSchema = Yup.object().shape({
        
        username: Yup.string().required("Kötelező megadni"),
        password: Yup.string().required("Kötelező megadni"),
        name: Yup.string().required("Kötelező megadni"),
        mobile: Yup.string().required("Kötelező megadni"),
        birthDate: Yup.string().required("Kötelező megadni"),
  
      });
      const onSubmit = (data)=> {
        console.log(validationSchema)
        axios.post("http://localhost:3001/users/registration",data).then(() => {
            history("/login");
            
        
      })
    }
      
  return (
       <div className="">
         <Formik
           initialValues={initialValues}
           onSubmit={onSubmit}
           validationSchema={validationSchema}
           >
           <Form>
             <label>Teljes név:</label>
             <Field 
             name="name"
             placeholder="Teljes név"
             />
            <label>Felhasználónév</label>
             <Field 
             name="username"
             />
             <label>Jelszó</label>
             <Field 
             name="password"
             />
             <label>Mobile szám</label>
             <Field 
             name="mobile"
                    placeholder="+36..."/>
            <label>Születési dátum</label>
             <Field 
             name="birthDate"
             placeholder="yyyy.mm.nn"
             />
                      
              <button onClick={onSubmit} type="submit" > regisztrálok</button>
           </Form>
         </Formik>


    </div>
  )


}

export default Registration
