
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { useDeleteByIdMutation, useEditByIdMutation, useGetProductsByIdQuery } from '../../redux/services';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';


const productSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      imageUrl: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      description: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      price: Yup.number()
      .required('Required'),
  });
const Edit = () => {
    const {id} = useParams()

    const {data,isLoading,isError} = useGetProductsByIdQuery(id)
    const [edit,res] = useEditByIdMutation()
    if (isLoading) {
        return <h1>loading</h1>
    }
    if (isError) {
        return <h1>error</h1>
    }
    console.log(data);
    

   
  return (
    <>
    <div>
     <h1>Add</h1>
     <Formik
     initialValues={{
        title: data.Product?.title || "",
        imageUrl: data.Product?.imageUrl || "",
        description:  data.Product?.description || "",
        price:data.Product?.price || 0
    }}
       validationSchema={productSchema}
       onSubmit={(values) => {

        edit({id,...values})
    }}
     >
       {({ errors, touched }) => (
         <Form>

            <Field name="imageUrl" />
           {errors.imageUrl && touched.imageUrl ? (
             <div>{errors.imageUrl}</div>
           ) : null}
           <Field name="title" />
           {errors.title && touched.title ? (
             <div>{errors.title}</div>
           ) : null}

           <Field name="description" />
           {errors.description && touched.description ? <div>{errors.description}</div> : null}
           <Field name="price" type="number"/>
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
    </>
  )
}

export default Edit