var ImageHeader = React.createClass({

    getDefaultProps: function () {
        return {
            name: 'Antonio Campos',
            title: 'Software Engineer'
        }
    },
    render: function(){
        return (
            <div className="heading">
                <div className="feature-img">
                    <a href="index.html">
                        <img className="responsive-img" src="https://avatars1.githubusercontent.com/u/5265784?v=3&s=460" alt></img>
                    </a>
                </div>

                <div className="title col s12 m12 l9 right  wow fadeIn animated" data-wow-delay="0.1s">
                    <h2>{this.props.name}</h2>
                    <span>{this.props.title}</span>
                </div>

                <NavMenu />
            </div>
        )
    }
});