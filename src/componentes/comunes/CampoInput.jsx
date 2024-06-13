/* eslint-disable react/prop-types */
import '../../App.css'

export const CampoInput = ({title, id, name, onChange}) => {
  return (
    <div className='container-campo'>
        <label htmlFor={id}>{title}</label>
        <input type="text" id={id} name={name} onChange={onChange}/>
    </div>
  )
}
