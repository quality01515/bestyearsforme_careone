export const Footer = (props) => {
    return (
        <div>
            <div id="contact">
                <div className="container">
                <div className="col-md-12">
                    <div className="row">
                    <div className="social">
                        <ul>
                        <li>
                            <a href={props.data ? props.data.facebook : "/"}>
                            <i className="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href={props.data ? props.data.linkedin : "/"}>
                            <i className="fa fa-linkedin-square"></i>
                            </a>
                        </li>
                        <li>
                            <a href={props.data ? props.data.instagram : "/"}>
                            <i className="fa fa-instagram"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                <p>
                    Copyright © 2025 CareONE Health – All Rights Reserved{" "}
                </p>
                </div>
            </div>
        </div>
    )
}