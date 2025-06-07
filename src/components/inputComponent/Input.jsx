const Input = ({ type, placheholder, ...props }) => {
	return (
		<input type={type} placeholder={placheholder} {...props} />
	)
}

export default Input;