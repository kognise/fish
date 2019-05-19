export default (props) => (
  <a href={props.href} className='button' target='_blank'>
    {props.children}
    <style jsx>{`
      .button {
        border-radius: 4px;
        color: ${props.inline ? '#757575' : '#1a73e8'};
        display: inline-block;
        font-weight: 500;
        letter-spacing: .25px;
        background-color: transparent;
        border: 0;
        cursor: pointer;
        outline: 0;
        text-decoration: none;
        padding: ${props.inline ? '10px' : '0'}
      }
      .button:focus {
        background: ${props.inline ? '#e0e0e0' : 'rgba(26,115,232,0.149)'};
      }
    `}</style>
  </a>
)