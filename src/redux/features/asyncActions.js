import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = {
  headers: {
    Authorization: 'Bearer testtoken'
  }
}

export const fetchCalls = createAsyncThunk('calls/fetchCalls',async () =>{

    const {data} = await axios.post('https://api.skilla.ru/mango/getList',null, token)
        .then(res =>{
          return res
        })
  return data.results
})



export const fetchRecord = async (recordId,partnerId) =>{

  const {data} = await axios(
      {
        url:`https://api.skilla.ru/mango/getRecord?record=${recordId}&partnership_id=${partnerId}`,
        method:'POST',
        responseType: 'blob',
        headers: {
          Authorization : 'Bearer testtoken',
          'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
          'Content-Transfer-Encoding': 'binary',
          'Content-Disposition': 'filename="record.mp3"',
        }
      })
      .then(res =>{
          return res
      })
  return data
}
