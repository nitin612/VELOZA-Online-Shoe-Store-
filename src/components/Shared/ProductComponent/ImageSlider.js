import React from 'react';
import { Dimensions, View, ImageBackground } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

// Reusable ImageSlider component
function ImageSlider({ images }) {
    const width = Dimensions.get('window').width;

    return (
        // <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width/2}
                height={width / 2}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                        }}
                    >
                        <ImageBackground
                            source={{ uri: images[index] }}
                            style={{ flex: 1 }}
                            resizeMode="cover"
                        />
                    </View>
                )}
            />
        // </View>
    );
}

export default ImageSlider;
