export default (props) => (
  <div className='actions'>
    {props.children}
    <style jsx>{`
      .actions {
        display: flex;
        margin-top: 64px;
        margin-bottom: 16px;
      }
    `}</style>
  </div>
)