import React from 'react'
import {SectionList,Text, View, Image, StyleSheet, Dimensions} from 'react-native'
import {fetchMovies} from '../Api';




export default class DetailsScreen  extends React.Component {

    sections = [
        {title : 'DETAILS',
            data : Object.entries(this.props.route.params).filter( (key) =>
                key[0] !== 'Ratings'
                && key[0] !== 'showDetails'
                && key[0] !== 'Response'
                && key[0] !== 'Poster')
        },
        {title : 'RATINGS',
            data : this.props.route.params.Ratings.map((entry) => (
                [ entry.Source , entry.Value]))
            }
        ]



    render() {
        return (

            <SectionList
                ListHeaderComponent = {
                    <View>
                        <Image
                            style = {styles.logo}
                               source = {{uri : this.props.route.params.Poster !== "N/A" ? this.props.route.params.Poster
                                       : "https://www.moodfit.com/front/images/genral_image_notfound.png"}}/>
                    </View>
                }
                renderItem={({item}) =>
                     <View style = {{padding:10}}>
                        <Text style = {{fontSize : 17}}>
                            <Text style = {{fontWeight : 'bold'}}>{item[0]}</Text><Text> : {item[1]}</Text>
                        </Text>
                    </View>
                }

                sections = {this.sections}
                keyExtractor = { (item, index) => index}
                renderSectionHeader={({ section: { title } }) => (
                    <View style = {{alignItems : 'center', backgroundColor : 'orange'}}>
                        <Text >{title}</Text>
                    </View>
                )}
            />
        )
    }

}

const styles = StyleSheet.create({
    logo : {
        flex: 1,
        width: 400,
        height: 400,
        resizeMode: 'contain'
    }
})
