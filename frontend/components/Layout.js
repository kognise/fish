import Logo from './Logo'
import Box from './Box'
import SmallButton from './SmallButton'

export default (props) => (
  <>
    <Box>
      <Logo />
      <h1 className='title'>{props.title}</h1>
      {props.children}
    </Box>

    <div className='bottom'>
      <div className='spacer' />
      <SmallButton inline href='https://support.google.com/accounts'>
        Help
      </SmallButton>
      <SmallButton inline href='https://policies.google.com/privacy'>
        Privacy
      </SmallButton>
      <SmallButton inline href='https://policies.google.com/terms'>
        Terms
      </SmallButton>
    </div>

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
      @font-face {
        font-family: 'Google Sans';
        src: url('https://fonts.gstatic.com/s/googlesans/v9/4UaGrENHsxJlGDuGo1OIlL3Owp4.woff2');
        font-weight: 400;
      }
      @font-face {
        font-family: 'Google Sans';
        src: url('https://fonts.gstatic.com/s/googlesans/v9/4UabrENHsxJlGDuGo1OIlLU94YtzCwY.woff2');
        font-weight: 500;
      }
      body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        margin: 0;
      }
    `}</style>
    <style jsx>{`
      .title {
        font-family: 'Google Sans', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 1.333;
        text-align: center;
        padding-top: 16px;
        margin: 0;
      }
      .bottom {
        display: flex;
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        width: 530px;
        margin: 0 auto;
        padding-top: 20px;
      }
      .spacer {
        flex: 1;
      }
    `}</style>
  </>
)