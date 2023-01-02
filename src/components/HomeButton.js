import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const HomeButton = () => {
    return (
      <div>
     <Link to={"/"}>
        <Button variant="text" style={{margin: 5}}>
            <HomeIcon color='primary'></HomeIcon>
        </Button>
     </Link>
      </div>
    );
  }
  
  export default HomeButton;