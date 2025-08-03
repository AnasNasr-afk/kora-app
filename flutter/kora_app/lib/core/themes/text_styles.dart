

import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:kora_app/core/themes/color_manager.dart';

class TextStyles {
  static TextStyle font14TealBlueMedium = GoogleFonts.cairo(
    fontSize: 14.sp,
    color: ColorManager.tealBlue,
    fontWeight: FontWeight.w500,
  );
  static TextStyle font14DarkWhiteMedium = GoogleFonts.cairo(
    fontSize: 14.sp,
    color: ColorManager.darkWhite,
    fontWeight: FontWeight.w500,
  );
  static  TextStyle font14DarkGreenMedium = GoogleFonts.cairo(
    fontSize: 14.sp,
    color: ColorManager.darkGreen,
    fontWeight: FontWeight.w500,
  );
  static  TextStyle font12DarkWhiteSemiBold = GoogleFonts.cairo(
    fontSize: 12.sp,
    color: ColorManager.darkWhite,
    fontWeight: FontWeight.w600,
  );

  static TextStyle font14GreyMedium = GoogleFonts.albertSans(
    fontSize: 14.sp,
    color: Colors.grey,
    fontWeight: FontWeight.w500,
  );
  static TextStyle font14BlackMedium = GoogleFonts.cairo(
    fontSize: 14.sp,
    color: Colors.black,
    fontWeight: FontWeight.w500,
  );
}