export default (props) => (
  <div className='box'>
    {props.children}
    <style jsx>{`
      .box {
        padding: 48px 40px 36px;
        font-size: 14px;
        line-height: 1.4286;
        color: #202124;
        font-family: 'Roboto', sans-serif;
        border: 1px solid #dadce0;
        border-radius: 8px;
        max-width: 450px;
        margin: 0 auto;
      }
      @media only screen and (max-width: 400px) {
        .box {
          border: none;
        }
      }
    `}</style>
  </div>
)