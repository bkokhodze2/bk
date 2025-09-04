'use client'
import React, {useEffect, useState} from 'react'
import axios from "axios";

const Flats = () => {
  const [flats, setFlats] = useState<any>()
  const fetchData = async () => {
    try {
      const res = await axios.get("https://bk-node-2.onrender.com/api/flats");

      setFlats(res.data)
      console.log(res.data)

    } catch (err: any) {

    }
  }


  useEffect(() => {
    fetchData()
  }, [])

  return (
      <div>
        {flats?.flats?.map((e: any) => {
          return <div key={e._id}>{e?.location} - {e?.price} gel</div>
        })}
      </div>
  )
}
export default Flats
