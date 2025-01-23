
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { useDeleteByIdMutation } from '../../redux/services';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';




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








const Add = () => {

    const [del,{isError,isSuccess}] = useDeleteByIdMutation()
    console.log(del);
    
    const [products, setProducts] = useState([])

    const getAll = async() => {
        const products = await axios("http://localhost:3000/api/products")
        console.log(products.data.Products);
        
        setProducts(products.data.Products)
        
     }
    useEffect(() => {
      
        getAll()
    }, [])

    useEffect(() => {
      
      if (isError) {
        console.log(salam);
        
      }
      if (isSuccess) {
        Swal.fire({
          title: "Drag me!",
          icon: "success",
          draggable: true
        });
      }
  }, [isError,isSuccess])
    
    const nav = useNavigate()
  return (
    <>
    <div className="container">

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>imageUrl</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products && products.map((p) => {
            return(
                <tr  key={p._id}>
                    <td>{p.imageUrl}</td>
                    <td>{p.title}</td>
                    <td>{p.description}</td>
                    <td>{p.price}</td>
                    <td><button onClick={async() => {
                      await del(p._id)
                      refetch()

                    }}>Delete</button></td>
                    <td><button onClick={async() => {

                      nav(`/edit/${p._id}`)
                    }}>Edit</button></td>
                </tr>
            )
            
        })}
      </tbody>
    </Table>
        <div>
     <h1>Add</h1>
     <Formik
     initialValues={{
        title: "",
        imageUrl: "",
        description:  "",
        price:0
    }}
       validationSchema={productSchema}
       onSubmit={(values) => {

         axios.post("http://localhost:3000/api/products",values)
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
    </div>

   
    </>
  )
}

export default Add