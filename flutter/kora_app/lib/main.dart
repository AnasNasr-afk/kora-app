import 'package:flutter/material.dart';

void main() {
  runApp(const KoraApp());
}


class KoraApp extends StatelessWidget {
  const KoraApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Kora',
      debugShowCheckedModeBanner: false,
    );
  }
}
