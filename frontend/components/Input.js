export default (props) => (
  <label className='label'>
    <input
      type={props.password ? 'password' : 'email'}
      placeholder=' '
      value={props.value}
      onChange={(event) => props.onChange && props.onChange(event.target.value)}
      onKeyDown={(event) => event.target.value.length && event.keyCode === 13 && props.onSubmit && props.onSubmit()}
    />
    <span>{props.label}</span>
    <style jsx>{`
      .label {
        margin: 16px 0;
        width: 100%;
        position: relative;
        display: inline-block;
        padding-top: 6px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        overflow: hidden;
      }
      .label > input {
        box-sizing: border-box;
        margin: 0;
        border: solid 1px;
        border-color: #ecedef;
        border-top-color: transparent;
        border-radius: 4px;
        padding: 15px 13px 15px;
        width: 100%;
        height: inherit;
        color: #202124;
        background-color: transparent;
        box-shadow: none;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        transition: border 0.15s, box-shadow 0.15s;
      }
      .label > input + span {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        border-color: #ecedef;
        width: 100%;
        max-height: 100%;
        color: #80868b;
        font-size: 75%;
        line-height: 15px;
        cursor: text;
        transition: color 0.15s, font-size 0.15s, line-height 0.15s;
      }
      .label > input + span::before,
      .label > input + span::after {
        content: '';
        display: block;
        box-sizing: border-box;
        margin-top: 6px;
        border-top: solid 1px;
        border-top-color: #ecedef;
        min-width: 10px;
        height: 8px;
        pointer-events: none;
        box-shadow: inset 0 1px transparent;
        transition: border-color 0.15s, box-shadow 0.15s;
      }
      .label > input + span::before {
        margin-right: 4px;
        border-left: solid 1px transparent;
        border-radius: 4px 0;
      }
      .label > input + span::after {
        flex-grow: 1;
        margin-left: 4px;
        border-right: solid 1px transparent;
        border-radius: 0 4px;
      }
      .label:hover > input {
        border-color: #ecedef;
        border-top-color: transparent;
      }
      .label:hover > input + span::before,
      .label:hover > input + span::after {
        border-top-color: #ecedef;
      }
      .label:hover > input:not(:focus):placeholder-shown {
        border-color: #ecedef;
      }
      .label > input:not(:focus):placeholder-shown {
        border-top-color: #ecedef;
      }
      .label > input:not(:focus):placeholder-shown + span {
        font-size: inherit;
        line-height: 68px;
      }
      .label > input:not(:focus):placeholder-shown + span::before,
      .label > input:not(:focus):placeholder-shown + span::after {
        border-top-color: transparent;
      }
      .label > input:focus {
        border-color: #1a73e8;
        border-top-color: transparent;
        box-shadow: inset 1px 0 #1a73e8, inset -1px 0 #1a73e8, inset 0 -1px #1a73e8;
        outline: none;
      }
      .label > input:focus + span {
        color: #1a73e8;
      }
      .label > input:focus + span::before,
      .label > input:focus + span::after {
        border-top-color: #1a73e8 !important;
        box-shadow: inset 0 1px #1a73e8;
      }
    `}</style>
  </label>
)