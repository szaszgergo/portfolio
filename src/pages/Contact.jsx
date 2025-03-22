export default function Contact() {
    return (
        <>
            <div style={styles.main}>
                <h1 className="title-color contact">Contact</h1>
                <p style={styles.text}>Fill and submit the form below to contact</p>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="name">Name:</label>
                    <input style={styles.input} type="text" id="name" />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="email">Email:</label>
                    <input style={styles.input} type="email" id="email" />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="message">Message:</label>
                    <textarea style={styles.textarea} id="message"></textarea>
                </div>

                <button style={styles.button}>Submit</button>
            </div>
        </>
    );
}

const styles = {
    text: {
        marginTop: '0px',
        marginBottom: '50px',
    },
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px",
        maxWidth: "700px",
        margin: "auto",
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "15px",
        width: "100%",
    },
    label: {
        marginBottom: "5px",
    },
    input: {
        width: "100%",
        height: "40px",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxSizing: "border-box",
    },
    textarea: {
        width: "100%",
        height: "100px",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxSizing: "border-box",
        resize: "vertical",
    },
    button: {
        width: "100%",
        height: "53px",
        backgroundColor: "#FF6464",
        color: "#fff",
        fontSize: "18px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
    },
    "@media (max-width: 768px)": {
        main: {
            padding: "10px",
        },
        input: {
            width: "100%",
        },
        textarea: {
            width: "100%",
        },
        button: {
            width: "100%",
        },
    }
};
