import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:kora_app/core/themes/color_manager.dart';

class AppTextButton extends StatelessWidget {
  final void Function() onPressed;
  final Widget child;

  final ButtonStyle? buttonStyle;

  const AppTextButton(
      {super.key,
        required this.onPressed,
        required this.child,
        this.buttonStyle});

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: onPressed,
      style: buttonStyle ??
          ButtonStyle(
            backgroundColor: const WidgetStatePropertyAll(ColorManager.primaryColor),
            minimumSize:  WidgetStatePropertyAll(
              Size(330.w, 50.h),
            ),
            shape: WidgetStatePropertyAll(
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.r))),
          ),
      child: child ,

    );
  }
}
