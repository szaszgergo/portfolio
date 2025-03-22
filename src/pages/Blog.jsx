import Blog_post from "../components/Blog_post.jsx";

export default function Blog() {
    return (
        <>
            <div style={styles.blogContainer}>
                <h1 className="blogTitle" >Blog</h1>

                {/* First Post */}
                <Blog_post
                    title="UI Interactions of the week"
                    date="12 Feb 2019"
                    tags="Express, Handlebars"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
                <hr style={styles.separator} />

                {/* Second Post */}
                <Blog_post
                    title="UI Interactions of the week"
                    date="12 Feb 2019"
                    tags="Express, Handlebars"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
                <hr style={styles.separator} />

                {/* Third Post */}
                <Blog_post
                    title="UI Interactions of the week"
                    date="12 Feb 2019"
                    tags="Express, Handlebars"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
                <hr style={styles.separator} />

                {/* Fourth Post */}
                <Blog_post
                    title="UI Interactions of the week"
                    date="12 Feb 2019"
                    tags="Express, Handlebars"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
                <hr style={styles.separator} />
            </div>
        </>
    );
}

const styles = {
    blogContainer: {
        maxWidth: "800px", 
        margin: "auto",
        padding: "20px",
    },
  
   
    separator: {
        border: "0",
        height: "1px",
        backgroundColor: "#ccc",
        margin: "20px 0",
    },
    "@media (max-width: 700px)": {
        blogContainer: {
            padding: "0px",
        }
        
    },
};
