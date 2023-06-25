function Button({title, width, color, bg, height, radius, outline, click}) {
    const style = {
        width: width ? width : '100%',
        color: color ? color : '#BFF2A5',
        bg: bg ? bg : '#035D73',
        radius: radius ? radius : '30px',
        height: height ? height : null,
        outline: outline ? outline : 'none',
    };

    return(
        <button style={style} click={click}>
            {title}
        </button>
    )
}
export default Button