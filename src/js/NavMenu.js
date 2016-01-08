var NavMenu = React.createClass({
    render: function(){
        return (
            <div className="nav-icon">
                nav stuff here
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="side-nav">
                            <li><a href="index.html">Resume</a></li>
                            <li><a href="project.html">Projects</a></li>
                            <li><a href="cover-latter.html">Cover Latter</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <a href="#" data-activates="nav-mobile" className="button-collapse"><i class="mdi-navigation-menu"></i></a>
                    </div>
                </nav>
            </div>
        )
    }
});