import { Card, CardContent } from "@mui/material";

import { Link } from "react-router-dom";

const CardItem = ({ to, children }) => (
  <Link to={to}>
    <Card style={{ margin: 16 }}>
      <CardContent>{children}</CardContent>
    </Card>
  </Link>
);

export default CardItem;
