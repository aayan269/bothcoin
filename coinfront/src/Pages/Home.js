import { Box ,Button} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, logout } from '../redux/auth/auth.action'

export default function Home() {
    const {data}=useSelector(store=>store.auth)
const dispatch=useDispatch()

    useEffect(()=>{
     dispatch(getUsers())
    },[])
//console.log(data)

  return (
   <Box width={"45vw"} m={"auto"} p={"25px"}>
                            <h1 style={{fontSize:"25px",textAlign:"center"}}><b>Your Email is :</b> {data&&data.email}</h1>
                            <br/>
                      <h2 style={{fontSize:"25px",textAlign:"center"}}><b>Logout: </b> <Button onClick={()=>dispatch(logout())}>LOGOUT</Button>  </h2>
      </Box>
  )
}
