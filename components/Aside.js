export default (props) => (
  <div className='aside'>
    {props.children}
    <style jsx>{`
      .aside {
        color: #5f6368;
        font-size: 16px;
        line-height: 1.4286;
        margin-top: 32px;
      }
    `}</style>
  </div>
)