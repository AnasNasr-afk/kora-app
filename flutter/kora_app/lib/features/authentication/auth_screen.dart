import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:kora_app/core/themes/color_manager.dart';
import 'package:kora_app/features/authentication/cubit/auth_cubit.dart';
import 'package:kora_app/features/authentication/widgets/app_logo.dart';
import 'package:kora_app/features/authentication/widgets/email_password_form.dart';
import 'package:kora_app/features/authentication/widgets/login_buttons.dart';
import 'package:kora_app/features/authentication/widgets/signup_forms.dart';

import '../../core/themes/text_styles.dart';

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {


  @override
  Widget build(BuildContext context) {
    var cubit = AuthCubit.get(context);
    return Scaffold(
      backgroundColor: ColorManager.backgroundColor,
      body: Padding(
        padding: EdgeInsets.symmetric(horizontal: 20.w, vertical: 25.h),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AppLogo(),
            SizedBox(height: 60.h),
            // امتلك حساب و انشاء حساب
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // "انشاء حساب" (Create Account)
                Column(
                  children: [
                    TextButton(
                      onPressed: () {
                        setState(() {
                          cubit.hasAccount = false; // Switch to Sign Up mode
                        });
                      },
                      child: Text(
                        "انشاء حساب",
                        style: TextStyles.font14TealBlueMedium,
                      ),
                    ),
                    SizedBox(height: 5.h),
                    Container(
                      width: 150.w,
                      height: 1.h,
                      color: cubit.hasAccount
                          ? Colors.transparent
                          : ColorManager.tealBlue,
                    ),
                  ],
                ),

                SizedBox(width: 30.w),

                // "امتلك حساب" (Already Have Account)
                Column(
                  children: [
                    TextButton(
                      onPressed: () {
                        setState(() {
                          cubit.hasAccount = true; // Switch to Login mode
                        });
                      },
                      child: Text(
                        "امتلك حساب",
                        style: TextStyles.font14TealBlueMedium,
                      ),
                    ),
                    SizedBox(height: 5.h),
                    Container(
                      width: 150.w,
                      height: 1.h,
                      color: cubit.hasAccount
                          ? ColorManager.tealBlue
                          : Colors.transparent,
                    ),
                  ],
                ),
              ],
            ),

            SizedBox(height: 25.h),

            cubit.hasAccount
                ? EmailPasswordForm()
                : SignupForms(),

            SizedBox(height: 16.h),

            LoginButtons(),

            SizedBox(height: 16.h),
          ],
        ),
      ),
    );
  }
}
