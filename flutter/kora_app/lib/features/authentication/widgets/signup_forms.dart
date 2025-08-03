import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../../../core/themes/color_manager.dart';
import '../../../core/widgets/app_text_form_field.dart';

class SignupForms extends StatelessWidget {
  const SignupForms({super.key});

  @override
  Widget build(BuildContext context) {
    return  Column(
      children: [
        AppTextFormField(
          hintText: "الاسم الكامل",
          validator: (value) {},
        ),
        SizedBox(height: 16.h),
        AppTextFormField(
          hintText: "البريد الالكتروني",
          inputType: TextInputType.emailAddress,
          validator: (value) {},
        ),
        SizedBox(height: 16.h),
        AppTextFormField(
          hintText: "رقم الهاتف",
          inputType: TextInputType.phone,
          validator: (value) {},
        ),
        SizedBox(height: 16.h),
        AppTextFormField(
          hintText: "كلمة السر",
          validator: (value) {},
          isObscureText: true,
          suffixIcon: Icon(
            Icons.lock_outline,
            color: ColorManager.darkGreen,
            size: 20.sp,
          ),
        ),
        SizedBox(height: 16.h),
        AppTextFormField(
          hintText: "تأكيد كلمة السر",
          validator: (value) {},
          isObscureText: true,
          suffixIcon: Icon(
            Icons.lock_outline,
            color: ColorManager.darkGreen,
            size: 20.sp,
          ),
        ),
      ],
    );
  }
}
