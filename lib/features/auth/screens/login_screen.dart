import 'package:flutter/material.dart';
import 'package:shadcn_ui/shadcn_ui.dart';
import 'package:go_router/go_router.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('Login'),
            ShadButton(
              onPressed: () => context.go('/dashboard'),
              child: const Text('Login'),
            ),
            ShadButton.ghost(
              onPressed: () => context.push('/signup'),
              child: const Text('Sign Up'),
            ),
          ],
        ),
      ),
    );
  }
}
