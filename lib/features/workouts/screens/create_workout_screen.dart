import 'package:flutter/material.dart';
import 'package:shadcn_ui/shadcn_ui.dart';

class CreateWorkoutScreen extends StatelessWidget {
  const CreateWorkoutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('New Workout')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            const ShadInput(
              placeholder: Text('Workout Name'),
            ),
            const SizedBox(height: 16),
            const ShadInput(
              placeholder: Text('Duration (mins)'),
              keyboardType: TextInputType.number,
            ),
            const SizedBox(height: 32),
            ShadButton(
              child: const Text('Save Workout'),
              onPressed: () => Navigator.of(context).pop(),
            ),
          ],
        ),
      ),
    );
  }
}