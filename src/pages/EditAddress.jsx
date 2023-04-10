
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { MdMyLocation } from "react-icons/md";
import AddLocationForm from './AddLocationForm';
import SaveAddressForm from './SaveAddressForm';




const EditAddress = ({ getLocationHandle }) => {
    const [open, setOpen] = useState(false);


    const showDrawer = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };




    return (
        <>
            <Button type="link" onClick={showDrawer} >
                Edit
            </Button>
            <Drawer title="Save Delivery Address" placement="left" onClose={handleClose} open={open}>
                {/* <AddLocationForm handleClose={handleClose} getLocationHandle={getLocationHandle}/> */}
                <SaveAddressForm />
            </Drawer>
        </>
    );
};

export default EditAddress
