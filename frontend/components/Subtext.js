export default (props) => (
  <div className='subtext'>
    {props.children}
    <style jsx>{`
      .subtext {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: .1px;
        line-height: 1.5;
        text-align: center;
        padding-top: 8px;
      }
    `}</style>
  </div>
)