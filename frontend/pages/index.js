import Layout from '../components/Layout'
import Subtext from '../components/Subtext'
import Input from '../components/Input'
import Aside from '../components/Aside'
import SmallButton from '../components/SmallButton'
import Actions from '../components/Actions'
import SecondaryAction from '../components/SecondaryAction'
import PrimaryAction from '../components/PrimaryAction'

import { useState, useEffect } from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'

export default withRouter((props) => {
  const [ email, setEmail ] = useState(props.router.query.email || '')
  useEffect(() => {
    const href = `/?email=${encodeURIComponent(email)}`
    const as = href
    props.router.push(href, as, { shallow: true })
  }, [ email ])

  return (
    <Layout title='Sign in'>
      <Head>
        <title>Sign in - Google Accounts</title>
      </Head>
      
      <Subtext>with your Google Account</Subtext>
      <Input value={email} onChange={setEmail} label='Email or phone' onSubmit={() => {
        props.router.push(`/password?email=${encodeURIComponent(email)}`)
      }} />
      <Aside>
        Not your computer? Use a Private Window to sign in.{' '}
        <SmallButton href='https://support.google.com/accounts?p=signin_privatebrowsing&hl=en'>
          Learn more
        </SmallButton>
      </Aside>
      <Aside>
        <strong>Do not enter your Google login info here! This is a fake login screen and was built for educational purposes.</strong>
      </Aside>

      <Actions>
        <SecondaryAction onClick={() => {
          props.router.push('https://accounts.google.com/signup/v2/webcreateaccount?biz=false&flowName=GlifWebSignIn&flowEntry=SignUp')
        }}>
          Create account
        </SecondaryAction>
        <PrimaryAction onClick={() => {
          props.router.push(`/password?email=${encodeURIComponent(email)}`)
        }}>
          Next
        </PrimaryAction>
      </Actions>
    </Layout>
  )
})