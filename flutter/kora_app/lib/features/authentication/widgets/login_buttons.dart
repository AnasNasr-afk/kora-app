import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../../../core/themes/color_manager.dart';
import '../../../core/themes/text_styles.dart';
import '../../../core/widgets/app_text_button.dart';

class LoginButtons extends StatelessWidget {
  const LoginButtons({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        AppTextButton(
          onPressed: () {},
          child: Text(
            'تسجيل الدخول',
            style: TextStyles.font14DarkWhiteMedium,
          ),
        ),
        SizedBox(height: 16.h),
        Padding(
          padding:  EdgeInsets.symmetric(horizontal: 3.w ),
          child: AppTextButton(
            onPressed: () {},
            buttonStyle: ButtonStyle(
              backgroundColor: WidgetStatePropertyAll(
                ColorManager.backgroundColor,
              ),
              foregroundColor: WidgetStatePropertyAll(ColorManager.darkGreen),
              minimumSize: WidgetStatePropertyAll(Size(320.w, 50.h)),
              shape: WidgetStatePropertyAll(
                RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12.r),
                  side: BorderSide(
                    color: ColorManager.primaryColor,
                    width: 1.5.w,
                  ),
                ),
              ),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(
                  FontAwesomeIcons.google,
                  color: ColorManager.darkGreen,
                  size: 20.sp,
                ),
                SizedBox(width: 8.w),
                Text(
                  'التسجيل بحساب جوجل',
                  style: TextStyles.font14DarkWhiteMedium,
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
