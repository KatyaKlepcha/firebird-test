import React from "react";
import './highLight.css'

type HighLightPropsType = {
    filter: string
    str: string
}
export const HighLight: React.FC<HighLightPropsType> = (props) => {
    const {filter, str} = props
    if (!filter) return <>{str}</>
    const regexp = new RegExp(filter, 'ig')
    const matchValue = str.match(regexp)
    if (matchValue) {

       return <>
           {
               str.split(regexp).map((s, index, array) => {
                   if (index < array.length - 1) {
                       const c = matchValue.shift()
                       return <>{s}<span className={'highlight'}>{c}</span></>
                   }
                   return <span>{s}</span>
               })
           }
       </>
    }
    return <>
         {str}
    </>
}