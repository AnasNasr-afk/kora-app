import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class AppLogo extends StatelessWidget {
  const AppLogo({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 75.h,
      width: 180.w,
      decoration: BoxDecoration(
        image: DecorationImage(
            fit: BoxFit.contain,
            image: AssetImage('assets/images/logo.png'
            )
        ),
      ),
    );
  }
}
