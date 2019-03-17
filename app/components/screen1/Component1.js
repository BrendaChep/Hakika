import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
} from 'react-native';

import { 
    BarCodeScanner,
    Permissions,
    Constants,
    WebBrowser,
} from 'expo';


export default class Component1 extends React.Component {

    constructor(props) {
    
        super(props);

        this.state = {
            hasCameraPermission: null,
        }

    }

    async componentWillMount() {
    
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });


    }

    async handleBarCodeScanned(data) {
    
     
		fetch('https://hakika-pharezwk.c9users.io/verify', {
			method: 'POST',
		    headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			type: data.type,
			code: data.data,
		  }),
		})
		    .then((response) => response.json())
    
		
		.then(res=>{
			   alert('Data scanned: ' + JSON.stringify(data) +'\n'+
			   'Response: ' + JSON.stringify(res)+ '\n'
			   );
		})


    }


    render() {

        if (!this.props.visible) {
            return false;
        }
        
        if (this.state.hasCameraPermission === null) {
            return <View />;
        }
        else if (this.state.hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }

        return (

            <View 
                style={styles.component}
            >

                <View style={styles.layouts}>

                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>

                                <BarCodeScanner 
										style={styles.item1}
										onBarCodeRead={(data) => this.handleBarCodeScanned(data)}
									/>

                			</View>

                		</View>

                	</View>
                	
                </View>

            </View>
            
        );

    }

}

const styles = StyleSheet.create({
    
	component: {
		alignItems:'center',
		justifyContent:'center',
	    width: '100%',
	    flexDirection: 'column',
	    backgroundColor: 'rgba(24,24,24,1)',
	    height: '100%',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout1: {
	    width: '100%',
	    height: 616.5,
	},
	
	itemcontainer1: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer1Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item1: {
	    width: '90%',
	    height: '55%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    borderStyle: 'solid',
	    borderWidth: 2,
	},
	
});