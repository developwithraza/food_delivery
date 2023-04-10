
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import {  MdMyLocation } from "react-icons/md";
import AddLocationForm from './AddLocationForm';




const AddLocation = ({getLocationHandle}) => {
  const [open, setOpen] = useState(false);


  const showDrawer = () => {
    setOpen(true);
   
  };
  const handleClose = () => {
    setOpen(false);
  };




  return (
    <>
      <Button type="link" onClick={showDrawer} icon={<MdMyLocation className='myLocation' />}>
            Delivery Location
      </Button>
      <Drawer title="Add Your Location" placement="left" onClose={handleClose} open={open}>
       <AddLocationForm handleClose={handleClose} getLocationHandle={getLocationHandle}/>
      </Drawer>
    </>
  );
};

export default AddLocation
