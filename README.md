# react-native-breakpoints
### 📱 📐 Simple device size breakpoints for React Native apps.

This module creates breakpoints based on device width. 

Breakpoint | Example Devices
-- | --
Small | iPhone 4/5/SE/etc
Medium | iPhone 6/7/8/X, Samsung Galaxy S9
Large | iPhone 6+/7+/8+, Google Pixel XL, Samsung Note 8

## Installation

```
npm i react-native-breakpoints
```

## Usage

```jsx
import * as Breakpoints from 'react-native-breakpoints';

export YourComponent extends React.Component {
  render() {
    return (
      <View>
        { Breakpoints.isSmall && <Text>Small Device</Text> }
        { Breakpoints.isMedium && <Text>Medium Device</Text> }
        { Breakpoints.isLarge && <Text>Large Device</Text> }
        <Text style={Breakpoints.select({
          small: {
            fontSize: 12,
          },
          medium: {
            fontSize: 14
          },
          large: {
            fontSize: 16
          },
          default: {
            fontSize: 14
          }
        })}>This Text will vary in size.</Text>
      </View>
    );
  }
}
```

## Todo

- [ ] Base breakpoints on Width and Height
- [ ] Set breakpoint size
- [ ] Add custom breakpoints
