
import 'package:flutter/material.dart';
import 'package:kora_app/core/routing/routes.dart';

class AppRouter {
  Route onGenerateRoute(RouteSettings settings) {

    switch (settings.name) {
      case Routes.onBoardingScreen:
        return MaterialPageRoute(builder: (_) =>  Container());
      default:
       return MaterialPageRoute(
          builder: (_) => Scaffold(
            body: Center(
              child: Text('No route defined for ${settings.name}'),
            ),
          ),
        );
    }
  }
}