export function TextBox(props) {
  return (
    <div id={props.parentId}>
      {props.LabelData && (
        <label htmlFor={props.inputId}>{props.LabelData}</label>
      )}
      <input
        id={props.inputId}
        onClick={props.onClickAction}
        onChange={props.onChangeAction}
        type={props.Type ? props.Type : "text"}
        placeholder={props.Placeholder}
        value={props.Value}
      />
    </div>
  );
}

export function CustomButton(props) {
  return (
    <div id={props.parentId}>
      <button
        id={props.ButtonId}
        onKeyDown={props.keyDownAction}
        onClick={props.onClickAction}
      >
        {props.buttonText}
      </button>
    </div>
  );
}

export function RenderList(props){
  const list = props.list
  return(
    <div>
      {list.map((item, key) => (
        <li key={key}>{item}</li>
      ))}
    </div>
  )
}
