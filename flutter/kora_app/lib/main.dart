import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:kora_app/core/routing/app_router.dart';
import 'package:kora_app/core/themes/color_manager.dart';

void main() {
  runApp( KoraApp( appRouter: AppRouter()));
}


class KoraApp extends StatelessWidget {
  final AppRouter appRouter;
  const KoraApp({super.key,
    required this.appRouter});

  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      designSize: const Size(375, 812),
      minTextAdapt: true,
      child: MaterialApp(
        title: 'Kora',
        theme: ThemeData(
          primaryColor: ColorManager.primaryColor,

        ),
        debugShowCheckedModeBanner: false,
        onGenerateRoute: appRouter.onGenerateRoute,
      ),
    );
  }
}
