var ImageHeader = React.createClass({
    render: function(){
        return (
            <div className="heading">
                This is the image header
                <div className="feature-img">
                    <a href="index.html">
                        <img className="responsive-img" src="https://avatars1.githubusercontent.com/u/5265784?v=3&s=460" alt></img>
                    </a>
                </div>
                <NavMenu />
            </div>
        )
    }
});