import React from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import Component1 from './Component1';

export default class Screen1 extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            Component1Visible: true,
        }

    }

    toggleComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';
        let val  = this.state[prop];
        if (typeof val === 'undefined') {
            return false;
        }

        this.setState({
            [prop]: val === true ? false : true
        })

        return true;

    }

    hideComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: false
        })

        return true;

    }

    showComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: true
        })

        return true;

    }
	//Appbar functions 
	  _onSearch = () => console.log('Searching');

	  _onMore = () => console.log('Shown more');
    render() {
        return (

            
            <View style={styles.container}>
				   <Appbar.Header>
				
					<Appbar.Content
					  title="Hakika"
					  subtitle="Verify your drugs here"
					/>
					<Appbar.Action icon="search" onPress={this._onSearch} />
					<Appbar.Action icon="more-vert" onPress={this._onMore} />
				  </Appbar.Header>
                <View style={styles.screencontainer}>

                    <View style={styles.screencontainerInner}>

                        <Component1 
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.Component1Visible }
                        />

                    </View>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
	screencontainer: {
	    backgroundColor: 'rgba(255,255,255,1)',
	    flex: 1,
	},
	
	screencontainerInner: {
	    flex: 1,
	},
	
});