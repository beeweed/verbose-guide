import 'package:flutter/material.dart';
import 'package:shadcn_ui/shadcn_ui.dart';

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Dashboard', style: ShadTheme.of(context).textTheme.h2),
          const SizedBox(height: 16),
          const ShadCard(
            title: Text('Total Workouts'),
            description: Text('This Month'),
            child: Text('12', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
          ),
          const SizedBox(height: 16),
          const ShadCard(
            title: Text('Calories Burned'),
            description: Text('This Month'),
            child: Text('4,500 kcal', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
          ),
        ],
      ),
    );
  }
}