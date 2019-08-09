import React from 'react';



class Done extends React.Component {
    componentDidMount() {      
        setTimeout(() => {
            this.props.history.push('/');
        }, 3000);
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <h1 className="text-success">EVERYONE'S HERE!!!!!</h1>
            </div>);
    }
}
export default Done;