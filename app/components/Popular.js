var React = require('react');

class Popular extends React.Component {
    
    constructor(props){
        super();
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang){
        this.setState(function(){
            return{
                selectedLanguage: lang
            }
        });
    }
    render() {
        var languages = ['All', 'Javascript', 'Ruby', 'Python', 'Java', 'CSS'];
        return (
            <div>
            <ul className="languages">
            {languages.map(function(lang){
                return(
                    <li 
                    style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
                    onClick={this.updateLanguage.bind(null, lang)}
                    key={lang}>
                        {lang}
                    </li>
                )
            },this)}
            </ul>
            <p>Selected Language : {this.state.selectedLanguage}</p>
            </div>
        )
    }
}

module.exports = Popular;