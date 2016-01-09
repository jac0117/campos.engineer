var Sidebar = React.createClass({
    render: function(){
        var desc = 'Dynamic and process-oriented Software Developer professional with solid and diverse experience in mobile software and web development. Highly reliable with profound technical knowledge in the full life-cycle of the software development including designing, developing, and testing software applications in different programming languages, identifying new technologies for implementation, software modeling and simulation, and implementing user interface. Self-motivated, creative, and resourceful with a demonstrated ability to meet deadlines as a leader and team member. Enthusiastic with excellent communication skills, recognized ability to establish and maintain effective working relationships across cross-functional teams and diverse individuals at any levels.';
        return (
            <aside className="col l4 m12 s12 sidebar z-depth-1" id="sidebar">
                <div className="row">
                    <ImageHeader />
                    <SidebarItem iconClass="fa-phone" text={desc}/>
                </div>

            </aside>
        )
    }
});