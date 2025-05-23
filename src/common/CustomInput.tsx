/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
  ImageSourcePropType,
  TextStyle,
  ImageStyle,
  TextInputProps,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../constants/colors';
import { Fonts } from '../assets/fonts/Customfont';
import { useCommonStyles } from './CommonStyle';

interface CustomInputProps {
  value?: string;
  inputConfigurations?: TextInputProps;
  labelStyle?: TextStyle;
  inputBoxStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  label?: string;
  onChange: (text: string) => void;
  isPassword?: boolean;
  isPhoneInput?: boolean;
  placeholderText?: string;
  handleIconAction?: () => void;
  showIcon?: boolean;
  iconSource?: ImageSourcePropType;
  iconStyle?: ImageStyle;
  customPressableStyle?: ViewStyle;
  customInputContentStyle?: ViewStyle;
  isDisabled?: boolean;
}

const CustomInput = forwardRef<any, CustomInputProps>(
  (
    {
      inputConfigurations,
      inputBoxStyle,
      label,
      onChange,
      isPassword,
      handleIconAction,
      showIcon,
      iconSource,
      iconStyle,
      customPressableStyle,
      isDisabled = false,
      value,
    },
    ref,
  ) => {
    const [isSecure] = useState(true);
    const { disabledInputContentStyle, inputContent } = useCommonStyles();
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus?.(),
      blur: () => inputRef.current?.blur?.(),
    }));

    return (
      <View style={[styles.container, inputBoxStyle]}>
        <View style={styles.inputContainer}>
          <View
            style={[
              styles.borderShadow,
              isFocused && styles.focusBorderShadow,
            ]}>
            <TextInput
              ref={inputRef}
              label={label}
              value={value}
              onChangeText={onChange}
              secureTextEntry={isPassword && isSecure}
              disabled={isDisabled}
              style={[styles.newInputStyle, isFocused && styles.onFocusInput]}
              contentStyle={styles.innerContent}
              outlineStyle={styles.outline}
              mode="outlined"
              theme={{
                colors: {
                  primary: isFocused ? 'orange' : colors.trustBase,
                },
              }}
              {...inputConfigurations}
            />

            {showIcon && (
              <Pressable
                onPress={handleIconAction}
                style={({ pressed }) => [
                  styles.pressableButton,
                  customPressableStyle,
                  pressed && styles.pressed,
                ]}>
                <Image
                  source={iconSource}
                  style={[styles.iconEye, iconStyle]}
                  resizeMode="contain"
                />
              </Pressable>
            )}
          </View>
        </View>
      </View>
    );
  },
);

// Wrap with React.memo to prevent unnecessary re-renders
export default React.memo(CustomInput);

const styles = StyleSheet.create({
  onFocusInput: {
    color: colors.errorAlert,
  },
  innerContent: {
    fontSize: 16,
    lineHeight: 21.6,
    color: colors.textSecondary,
    fontFamily: Fonts.inter400,
  },
  outline: {
    borderColor: colors.trustBase,
    borderWidth: 1,
    borderRadius: 12,
  },
  focusBorderShadow: {
    shadowColor: '#800080', // 🟣 Purple
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4, // Android
  },
  borderShadow: {
    flex: 1,
    borderRadius: 12,
  },
  outlineInput: {
    borderRadius: 10,
    borderColor: 'rgba(56, 57, 62, 1)',
    borderWidth: 1,
  },
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  newInputStyle: {
    backgroundColor: colors.background,
    fontSize: 16,
    fontFamily: Fonts.inter400,
    lineHeight: 16.8,
  },
  pressableButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  iconEye: {
    width: 24,
    height: 24,
  },
  pressed: {
    opacity: 0.7,
  },
});