import React from 'react';
import { Text, View, Modal } from "react-native";
import { CardSection } from "./CardSection";
import { Button } from "./Button";

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => {}}
      >
          <View>
              <CardSection>
                  <Text>{children}</Text>
              </CardSection>
              <CardSection>
                  <Button onPress={onAccept}>YES</Button>
                  <Button onPress={onDecline}>NO</Button>
              </CardSection>
          </View>
      </Modal>
    );
};

export { Confirm };