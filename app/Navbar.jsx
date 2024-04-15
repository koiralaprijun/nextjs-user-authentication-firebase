import "./css/Navbar.css"
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material"
import Face5Icon from "@mui/icons-material/Face5"
import Stack from "@mui/material/Stack"

import { useAuth } from "./context/auth"
import { Fragment } from "react"
import { logout } from "./firebase/firebaseConfig"

const Navbar = () => {
  const { currentUser } = useAuth()

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

        {currentUser
          ? <Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ bgcolor: "#f0f0f0", p: 1, borderRadius: 1, display: "flex", alignItems: "center" }}>
                  <Face5Icon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">
                    {currentUser.firstName}
                  </Typography>
                </Box>
                <Link onClick={logout} style={{ cursor: "pointer" }}>
                  Logout
                </Link>
              </Stack>
            </Box>
          : <Link href="/login" className="login" color="primary">
              Login/Create Account
            </Link>}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
