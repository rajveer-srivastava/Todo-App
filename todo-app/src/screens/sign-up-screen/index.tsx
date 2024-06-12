import React from "react";
import { Box, Text } from "@/utils/theme";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign In Screen</Text>
        <Button
          title="Navigate to sign up "
          onPress={navigateToSignUpScreen}
        ></Button>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;
