import 'package:flutter/material.dart';
import 'package:shadcn_ui/shadcn_ui.dart';
import 'package:go_router/go_router.dart';

class WorkoutListScreen extends StatelessWidget {
  const WorkoutListScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Workouts')),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: 5,
        itemBuilder: (context, index) {
          return Padding(
            padding: const EdgeInsets.only(bottom: 16.0),
            child: ShadCard(
              title: Text('Workout #${index + 1}'),
              description: const Text('Upper Body Strength'),
              footer: ShadButton.outline(
                child: const Text('View Details'),
                onPressed: () {},
              ),
              child: const Text('45 mins • 320 kcal'),
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => context.push('/workouts/create'),
        child: const Icon(Icons.add),
      ),
    );
  }
}