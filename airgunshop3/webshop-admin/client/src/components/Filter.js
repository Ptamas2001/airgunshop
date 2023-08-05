import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Filter() {
  return (<div>
    <div className='filterdiv'>
      Szűrés
      <p>készleten</p><input type="checkbox" value="olcso"></input>

    

    </div>
    </div>
  )
}

export default Filter
