/* eslint-disable react/prop-types */
import '../../App.css'

export const CampoTextArea = ({title, id, name, onChange}) => {
  return (
    <div className='container-campo'>
        <label htmlFor={id}>{title}</label>
        <textarea id={id} name={name} onChange={onChange}/>
    </div>
  )
}
