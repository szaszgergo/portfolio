import Blog_post from "../components/Blog_post.jsx";
import Work_post from "../components/Work_post.jsx";

export default function Home() {
    return (
        <div>
            <section style={styles.home}>
                <div style={styles.content} className="content">
                    <div style={styles.text} className="text">
                        <h1 style={styles.title} className="title">Hi, I am John, <br />Creative Technologist</h1>
                        <p style={styles.paragraph} className="paragraph">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <button className="gomb">
                            Download Resume
                        </button>
                    </div>
                    <img style={styles.johnkep} src="/john.png" alt="John" />
                </div>
            </section>

            <section style={styles.kek}>
                <div style={styles.postsHeader}>
                    <p style={styles.recent}>Recent posts</p>
                    <p style={styles.viewAll}>View all</p>
                </div>
                <div style={styles.blogok}>
                    <Blog_post className="balesjob"
                        title='Making a design system from scratch'
                        date='12 Feb 2020'
                        tags='Design, Pattern'
                        content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                    />
                    <Blog_post className="balesjob"
                        title='Creating pixel perfect icons in Figma'
                        date='12 Feb 2020'
                        tags='Figma, Icon Design'
                        content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                    />
                </div>
            </section>

            <section style={styles.featuredworks} className="featuredworks" >
                <h3 className="sectionTitle">Featured works</h3>
                <Work_post 
                    kepek='/index-blog-post-images/designing-dashboards.png'
                    title='Designing Dashboards'
                    date='2020'
                    tags='Dashboard'
                    content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                />
                <Work_post
                    kepek='/index-blog-post-images/vibrant-portraits.png'
                    title='Vibrant Portraits of 2020'
                    date='2018'
                    tags='Illustration'
                    content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                />
                <Work_post 
                    kepek='/index-blog-post-images/malayalam-type.png'
                    title='36 Days of Malayalam type'
                    date='2018'
                    tags='Typography'
                    content ='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                />
            </section>
        </div>
    );
}

const styles = {
    home: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
    },
    content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "80px",
        maxWidth: "900px",
        '@media (maxWidth: 700px)': {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    },
    text: {
        flex: 1,
        textAlign: "left",
    },
    title: {
        fontSize: "32px",
        fontWeight: "bold",
        color: "#232323",
    },
    paragraph: {
        fontSize: "16px",
        color: "#666",
        lineHeight: "1.6",
    },
    johnkep: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        objectFit: "cover",
        '@media (maxWidth: 700px)': {
            width: "150px",
            height: "150px",
        },
    },
    blogok: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        padding: "20px",
        justifyContent: "space-between",
        maxWidth: "900px",
        margin: "0 auto",
        '@media (maxWidth: 700px)': {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    kek: {
        backgroundColor: "#EAF7FB",
        width: "100%",
        margin: "0 auto",
        padding: "20px 0",
    },
    postsHeader: {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        '@media (maxWidth: 700px)': {
            flexDirection: "column",
            textAlign: "center",
            gap: "10px",
        },
    },
    recent: {
        fontSize: "18px",
        color: "#232323",
    },
    viewAll: {
        fontSize: "16px",
        color: "#00A8CC",
        cursor: "pointer",
    },
    featuredworks: {
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
    },
};