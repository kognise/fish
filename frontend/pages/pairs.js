import { useState, useEffect } from 'react'
import Head from 'next/head'

export default () => {
  const [ loading, setLoading ] = useState(true)
  const [ pairs, setPairs ] = useState([])

  useEffect(() => {
    fetch('/backend/pairs').then((res) => {
      return res.json()
    }).then((json) => {
      setPairs(json)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <h1>Password Pairs</h1>
      <Head>
        <title>Password Pairs</title>
      </Head>
      {loading && <p>Loading...</p>}
      <ul>
        {pairs.map(({ email, password }) => (
          <li>
            {email}: {password}
          </li>
        ))}
      </ul>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
        @font-face {
          font-family: 'Google Sans';
          src: url('https://fonts.gstatic.com/s/googlesans/v9/4UaGrENHsxJlGDuGo1OIlL3Owp4.woff2');
          font-weight: 400;
        }

        body {
          margin: 0 auto;
          max-width: 500px;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
        }
        h1 {
          font-family: 'Google Sans', sans-serif;
          font-weight: 400;
          font-size: 24px;
          line-height: 1.333;
          padding-top: 16px;
          margin: 0;
        }
      `}</style>
    </>
  )
}