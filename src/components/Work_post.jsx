import { NavLink } from "react-router";
import "../css/WorkPost.css"; 

export default function Work_post({ title, date, tags, content, kepek }) {
    return (
        <>
            <NavLink to="/Work_detail">
                <section>
                    <div className="work-container">
                        <div>
                            <img className="kepek" src={kepek} alt="Work Image" />
                        </div>
                        <div className="work-text">
                            <h1 className="work-title">{title}</h1>
                            <div className="year-and-category">
                                <span className="year">{date}</span>
                                <p className="category">{tags}</p>
                            </div>
                            <p className="work-description">
                                {content}
                            </p>
                        </div>
                    </div>
                    <hr className="hr" />
                </section>
            </NavLink>
        </>
    );
}
