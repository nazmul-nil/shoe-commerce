// Material Drawer
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';



const MaterialDrawer = ({isDrawerOpen, setIsDrawerOpen}) => {
  return (
    <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} className='absolute top-4 bg-red-700 text-white'>
            <Button variant="text" onClick={() => setIsDrawerOpen(false)} className='absolute top-1 left-1'><CloseIcon/></Button>
        Right Responsive Nav
    </Drawer>
  )
}

export default MaterialDrawer