import React from 'react'
import {Text,View,FlatList,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {ActionSheet,Root} from 'native-base'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class PostRequestScreen extends React.Component {
        state = {
            fileList:[]
        }

    handleLibraryPhotos = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            let newList = [...this.state.fileList]
            newList.push(...images)
            this.setState({fileList : newList})
            console.log(this.state.fileList);
        });
    }

    handleCameraPhotos = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            let newList = [...this.state.fileList]
            newList.push(image)
            this.setState({fileList : newList})
            console.log(image);
        });
    }

    onlickAddImage = () => {
            const BUTTONS = ['Take a Photo', 'Add from Library', 'Cancel']
            ActionSheet.show({options:BUTTONS, cancelButtonIndex: 2, title: 'Select Photos'},
                buttonIndex => {
                switch (buttonIndex) {
                    case 0:
                        this.handleCameraPhotos()
                        break
                    case 1:
                        this.handleLibraryPhotos()
                        break
                    default:
                        break
                }
                })
    }

    imageRender = ({item,index})=> {
            return (
                <View>
                    <Image source={{uri:item.path}} style={styles.imageItem}/>
                </View>
                )
        }

    render() {
        return (
            <Root>
                <View style={styles.content}>
                    <TouchableOpacity onPress={this.onlickAddImage} style={styles.opacity}>
                        <Text style = {{color : '#3480eb',fontSize:20}}>Add Images</Text>
                    </TouchableOpacity>
                    <FlatList
                        numColumns = {3}
                        columnWrapperStyle={{marginTop: 5}}
                        data={this.state.fileList}
                        renderItem = {this.imageRender}
                        keyExtractor = {(item,index)=> index.toString()}
                        extraData={this.state}
                    />


                </View>
            </Root>

        )
    }
}

const styles = StyleSheet.create({

    content : {
       flex : 1,
        marginBottom: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },

    imageItem : {
        width: 100,
        height : 100,
        borderRadius : 15,
        resizeMode: 'contain'

    },
    opacity : {
        marginBottom: 20,
      justifyContent : 'center',
      alignItems: 'center',
    }
})
