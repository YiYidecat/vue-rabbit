import request from '@/utils/http'

export const loginAPI = (Form) => {
  const {account,password} = Form
  return request({
    url:"/login",
    method:"POST",
    data:{
      account,
      password
    }
  })
} 