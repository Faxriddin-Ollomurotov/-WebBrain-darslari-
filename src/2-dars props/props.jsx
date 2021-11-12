import React from 'react';

class Props extends React.Component {
    constructor(props) {
        super(props);
    console.log(this);
    }

    render() {
        return (
            <div>
                <h5
                style={{
                    width:'200px',
                    height:'200px',
                    borderRadius:'50%',
                    backgroundColor:"grey",
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >{this.props.children} {this.props.name}</h5>
            </div>
        );
    }
}

export default Props;
