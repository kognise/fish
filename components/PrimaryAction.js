export default (props) => (
  <button {...props} className='button'>
    {props.children}
    <style jsx>{`
      .button {
        max-width: 300px;
        padding: 10px 16px;
        display: inline-block;
        color: #ffffff;
        font-family: 'Google Sans', sans-serif;
        letter-spacing: .25px;
        background: #1a73e8;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 4px;
        font-weight: 500;
        line-height: 20px;
        min-width: 88px;
        transition: box-shadow 0.28s cubic-bezier(0.4,0.0,0.2,1);
      }
      .button:hover {
        box-shadow: 0 1px 1px 0 rgba(66,133,244,0.45),0 1px 3px 1px rgba(66,133,244,0.3);
      }
      .button:focus {
        background: #1f64bf;
      }
    `}</style>
  </button>
)