import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../themes/color_manager.dart';
import '../themes/text_styles.dart';


class AppTextFormField extends StatelessWidget {
  final EdgeInsetsGeometry? contentPadding;
  final InputBorder? focusedBorder;
  final InputBorder? enabledBorder;
  final TextStyle? inputTextStyle;
  final TextStyle? hintStyle;
  final Widget? suffixIcon;
  final String hintText;
  final bool? isObscureText;
  final Color? backgroundColor;
  final TextInputType? inputType;
  final TextEditingController? controller;
  final Function(String?) validator;

  const AppTextFormField({super.key,
    this.contentPadding,
    this.focusedBorder,
    this.enabledBorder,
    this.inputTextStyle,
    this.hintStyle,
    this.suffixIcon,
    required this.hintText,
    this.isObscureText,
    this.backgroundColor,
    this.controller,
    required this.validator,
    this.inputType,
  });

  @override
  Widget build(BuildContext context) {
    return TextFormField(

      keyboardType: inputType ?? TextInputType.text,
      controller: controller,
      decoration: InputDecoration(
        isDense: true,
        contentPadding: contentPadding ??
            EdgeInsets.symmetric(
              horizontal: 20.w,
              vertical: 15.h,
            ),
        focusedBorder: focusedBorder ??
            OutlineInputBorder(
              borderSide: const BorderSide(
                color: Colors.black,
                width: 1.3,
              ),
              borderRadius: BorderRadius.circular(16),
            ),
        enabledBorder: enabledBorder ??
            OutlineInputBorder(
              borderSide: const BorderSide(
                color: Colors.black,
                width: 1.3,
              ),
              borderRadius: BorderRadius.circular(16),
            ),
        errorBorder: OutlineInputBorder(
          borderSide: const BorderSide(
            color: Colors.red,
            width: 1.3,
          ),
          borderRadius: BorderRadius.circular(16),
        ),
        focusedErrorBorder: OutlineInputBorder(
          borderSide: const BorderSide(
            color: Colors.red,
            width: 1.3,
          ),
          borderRadius: BorderRadius.circular(16),
        ),
        hintStyle: hintStyle ??
            TextStyles.font14DarkGreenMedium,
        hintText: hintText,
        suffixIcon: suffixIcon,
        filled: true,
        fillColor: backgroundColor ??
            ColorManager.lightBlue,
      ),
      obscureText: isObscureText ?? false,
      style: inputTextStyle ??
          TextStyles.font14BlackMedium,
      validator: (value){
        return validator(value);
      },
    );
  }
}
