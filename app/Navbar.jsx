import "./css/Navbar.css"
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material"

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        padding: "0 40px",
        justifyContent: "center",
        marginTop: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        color: "black",
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "1px solid black"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5" component="h5">
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Next.JS Authentication
          </Link>
        </Typography>
        <Link href="/login" className="login" color="primary">
          Login/Create Account
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
