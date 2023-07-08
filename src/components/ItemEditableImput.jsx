import React, { useState } from 'react'
import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  useEditableControls,
  IconButton,
  ButtonGroup
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import api from '../url/url'

function ItemEditableImput(props) {
  const [data, setData] = useState({data: "", id:null})
  

  
  /* Here's a custom control */
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()
    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        {props.type == "email" || props.type == "tel" ? null : <IconButton ml='10' bg='green' icon={<CheckIcon onClick={()=>{props.add(data)}}/>} {...getSubmitButtonProps()} /> }
        
        <IconButton ml='10' bg='red' icon={<CloseIcon onClick={()=>{props.delete(props.id)}}/>} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (

      <IconButton size='sm' bg='transparent' fontSize='18' color='black' ml='10' icon={<EditIcon />} {...getEditButtonProps()} />

    )
  }

  return (
    <Editable
      defaultValue={props.value}
      fontSize='16'
      isPreviewFocusable={false}
      style={{ borderBottom: '1px solid' }}
    >
        <Input type={props.type} as={EditableInput}  onChange={e => {setData({data:e.target.value, id: props.id})}}/>

      <EditablePreview />
      
      {/* Here is the custom input */}
      
      <EditableControls />
    </Editable>

  )
}

export default ItemEditableImput