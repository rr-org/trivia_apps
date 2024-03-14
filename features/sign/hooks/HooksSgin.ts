import React from 'react'
import { ILogin } from '../../../interface/Avatar'

export const HooksSgin = () => {
    // const [ sign, setSign ] = React.useState<ILogin>({
    //     email: "",
    //     family_name: "",
    //     given_name: "",
    //     id: "",
    //     locale: "",
    //     name: "",
    //     picture: "",
    //     verified_email: false
    // })
    const [ sign, setSign ] = React.useState(null)
    // console.log("hooks", sign)
  return {
    sign,
    setSign
  }
}
