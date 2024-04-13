"use client"

import * as React from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import GoogleIcon from "@mui/icons-material/Google"
import Divider from "@mui/material/Divider"

//Google Authentication Imports
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "@/app/firebase/firebaseConfig"

const LoginPage = () => {
  const handleGoogleAuth = async () => {
    const provider = await new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: "150px" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "left"
        }}
      >
        <Typography>Welcome to</Typography>
        <Typography fontWeight="bold" sx={{ paddingBottom: 1 }} component="h1" variant="h4">
          Wiki Explorer
        </Typography>
        <Typography component="div" variant="body2">
          Don't have an account? <Link href="/register">Sign Up</Link>
        </Typography>

        {/* Google Authentication */}
        <Button startIcon={<GoogleIcon />} sx={{ marginTop: 2, marginBottom: 1 }} variant="outlined" onClick={handleGoogleAuth}>
          Continue with Google
        </Button>

        <Divider>
          <Typography variant="overline"> OR </Typography>
        </Divider>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, py: 2, px: 4 }}>
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default LoginPage
