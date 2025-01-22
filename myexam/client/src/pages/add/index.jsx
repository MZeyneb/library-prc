import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BASE_URL } from '../../constants';
import axios from "axios"
import styles from "./index.module.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const SignupSchema = Yup.object().shape({
  image: Yup.string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
description: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
price: Yup.number().required('Required')
});



const Add = () => {
    const [goods, setGoods] = useState([])
    const getAllGoods = async()=>{
        const res = await axios.get(`${BASE_URL}`)
        setGoods(res.data)

    }

    const deleteGood = async(id)=>{
        const res = await axios.delete(`${BASE_URL}/${id}`)
        setGoods([...goods].filter((g)=> g._id!= id))
    }

    useEffect(() => {
    getAllGoods()
    }, [])
    

  return (
    <>
     <h1>Add</h1>
     <div className={styles["box"]}>

     <Formik
       initialValues={{
         image: '',
         name: '',
         description: '',
         price: 0
       }}
       validationSchema={SignupSchema}
       onSubmit={async (values, {resetForm}) => {
        const res = await axios.post(`${BASE_URL}`, values)
         resetForm()
       }}
     >
       {({ errors, touched }) => (
         <Form className={styles["form"]}>
           <Field name="image" placeholder="image"/>
           {errors.image && touched.image ? (
             <div>{errors.image}</div>
           ) : null}
           <Field name="name" placeholder="name"/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="description" placeholder="description"/>
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
           <Field name="price" type="number" placeholder="price"/>
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           
           <button type="submit" >Submit</button>
         </Form>
       )}
     </Formik>
     </div>

     <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">description</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {goods && goods.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><img src={row.image} alt="" width={100}/></TableCell>
              <TableCell align="right"><button onClick={()=> {window.confirm("Are you sure?") && deleteGood(row._id)}}>Delete</button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
  )
}

export default Add
