import 'package:fit_pulse/core/theme.dart';
import 'package:fit_pulse/features/auth/screens/login_screen.dart';
import 'package:fit_pulse/features/auth/screens/signup_screen.dart';
import 'package:fit_pulse/features/auth/screens/splash_screen.dart';
import 'package:fit_pulse/features/dashboard/screens/dashboard_screen.dart';
import 'package:fit_pulse/features/profile/screens/profile_screen.dart';
import 'package:fit_pulse/features/workouts/screens/create_workout_screen.dart';
import 'package:fit_pulse/features/workouts/screens/workout_list_screen.dart';
import 'package:fit_pulse/shared/widgets/main_scaffold.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:shadcn_ui/shadcn_ui.dart';

void main() {
  runApp(const FitPulseApp());
}

final _router = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const SplashScreen(),
    ),
    GoRoute(
      path: '/login',
      builder: (context, state) => const LoginScreen(),
    ),
    GoRoute(
      path: '/signup',
      builder: (context, state) => const SignupScreen(),
    ),
    ShellRoute(
      builder: (context, state, child) {
        return MainScaffold(child: child);
      },
      routes: [
        GoRoute(
          path: '/dashboard',
          builder: (context, state) => const DashboardScreen(),
        ),
        GoRoute(
          path: '/workouts',
          builder: (context, state) => const WorkoutListScreen(),
        ),
        GoRoute(
          path: '/profile',
          builder: (context, state) => const ProfileScreen(),
        ),
      ],
    ),
    GoRoute(
      path: '/workouts/create',
      builder: (context, state) => const CreateWorkoutScreen(),
    ),
  ],
);

class FitPulseApp extends StatelessWidget {
  const FitPulseApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ShadApp.router(
      title: 'FitPulse',
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      routerConfig: _router,
    );
  }
}