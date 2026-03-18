function Box(){

    const styles = {
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        margin: "10px",
        display: "inline-block",
        textAlign: "center",
        borderRadius: "10px",
        padding: "20px",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        border: "none",
        outline: "none",
        textDecoration: "none",
        textTransform: "uppercase",
        letterSpacing: "1px",
        lineHeight: "1",
        position: "relative",
        zIndex: "1",
        overflow: "hidden",
    }
    return(
        <div style={styles}></div>
    )



}
export default Box