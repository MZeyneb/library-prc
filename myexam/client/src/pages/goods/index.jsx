import { useState, useEffect } from "react"
import axios from 'axios'
import { BASE_URL } from "../../constants"
import styles from "./index.module.scss"
import { useNavigate } from "react-router-dom"
import Grid from '@mui/material/Grid2';

const Goods = () => {
    const [goods, setGoods] = useState([])
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState('name')

    const nav = useNavigate()
    const getAllGoods = async()=>{
        const res = await axios.get(`${BASE_URL}`)
        setGoods(res.data)
    }

    const sortedGoods = (goodsList)=>{
        const cloned = [...goodsList]
        if(sortBy === "ASC"){
            return cloned.sort((a, b)=>a.price - b.price)
        }
        else if(sortBy === "DESC"){
            return cloned.sort((a, b)=> b.price - a.price )
        }
        return cloned
    }
  
    useEffect(() => {
      getAllGoods()
    
    }, [])

    const filtered = goods.filter((g)=> g.name.toLowerCase().includes(search.toLowerCase().trim()))
    const sortedAndFiltered = sortedGoods(filtered)
  return (
    <>
    <section className={styles["goods"]}>
    <div className="container">
        <div className={styles["inp"]}>
            <input type="text" placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
            <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>

                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
                <option value="default">default</option>

            </select>
        </div>
        <Grid container spacing={2} className={styles["products"]}>
            

        {
            sortedAndFiltered.length> 0 && sortedAndFiltered.map((g)=>{
                return (

                    <Grid size={{xs: 12, md: 6, lg: 4}} key={g._id} onClick={()=> {nav(`../details/${g._id}`)}} className={styles["product"]}>
                        <div className={styles["imge"]}>
                    <img src={g.image} alt=""/>

                        </div>
                    <h3>{g.name}</h3>
                    <p>{g.description}</p>
                    <p>{g.price}</p>
                    </Grid>

                )

            })
        }

</Grid>

    </div>

    </section>

    
    </>
  )
}

export default Goods
