var SidebarItem = React.createClass({
    render: function(){
        var iconClasses = "fa " + this.props.iconClass;
        return (
            <div className="col l12 m12 s12 sort-info sidebar-item">
                <div className="row">
                    <div className="col m12 s12 l3 icon">
                        <i className={iconClasses}></i>
                    </div>
                    <div className="col m12 s12 l9 info wow fadeIn a1 animated" data-wow-delay="0.1s">
                        <div class="section-item-details">
                            <p>{this.props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});