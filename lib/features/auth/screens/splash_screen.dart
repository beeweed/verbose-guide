import 'package:flutter/material.dart';

import 'package:go_router/go_router.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // Simulate check and redirect
    Future.delayed(const Duration(seconds: 2), () {
      if (context.mounted) {
        context.go('/login');
      }
    });

    return const Scaffold(
      body: Center(child: Text('FitPulse')),
    );
  }
}
