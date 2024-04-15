"use client"

import * as React from "react"
import { useState } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import GoogleIcon from "@mui/icons-material/Google"
import Divider from "@mui/material/Divider"

///Google Authentication Imports
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "/app/firebase/firebaseConfig"

import { useRouter } from "next/navigation"
import { register } from "../firebase/firebaseConfig"

const RegisterPage = () => {
  const router = useRouter()
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)

  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await register(email, firstName, lastName, password)
      router.push("/")
    } catch (err) {
      setErrorMessage(err.code)
    }
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
        <Typography>Wiki Explorer</Typography>
        <Typography fontWeight="bold" sx={{ paddingBottom: 1 }} component="h1" variant="h4">
          Sign up
        </Typography>
        <Typography variant="body2">
          Already have an account?{" "}
          <Link href="/login" variant="body2">
            Sign in
          </Link>
        </Typography>

        {/* Google Authentication */}
        <Button startIcon={<GoogleIcon />} sx={{ marginTop: 2, marginBottom: 1 }} variant="outlined" onClick={handleGoogleAuth}>
          Continue with Google
        </Button>

        <Divider>
          <Typography variant="overline"> OR </Typography>
        </Divider>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="given-name" onChange={e => setfirstName(e.target.value)} name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="lastName" onChange={e => setlastName(e.target.value)} label="Last Name" name="lastName" autoComplete="family-name" />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth onChange={e => setEmail(e.target.value)} id="email" label="Email Address" name="email" autoComplete="email" />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                onChange={e => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          {errorMessage &&
            <Typography variant="body2" sx={{ color: "red" }}>
              {errorMessage}
            </Typography>}
        </Box>
      </Box>
    </Container>
  )
}

export default RegisterPage
