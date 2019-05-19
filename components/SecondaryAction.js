export default (props) => (
  <div className='flex'>
    <button onClick={props.onClick} className='button'>
      {props.children}
    </button>
    <style jsx>{`
      .button {
        max-width: 300px;
        padding: 10px 16px;
        display: inline-block;
        color: #1a73e8;
        font-family: 'Google Sans', sans-serif;
        letter-spacing: .25px;
        background: transparent;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 4px;
        font-weight: 500;
        line-height: 20px;
        min-width: 88px;
      }
      .button:focus {
        background: rgba(26,115,232,0.149);
      }
      .flex {
        flex: 1;
      }
    `}</style>
  </div>
)