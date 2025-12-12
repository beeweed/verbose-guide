import 'package:flutter/material.dart';
import 'package:shadcn_ui/shadcn_ui.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          const CircleAvatar(radius: 50, child: Icon(Icons.person, size: 50)),
          const SizedBox(height: 16),
          Text('User Name', style: ShadTheme.of(context).textTheme.h3),
          const SizedBox(height: 32),
          ShadButton.outline(
            child: const Text('Edit Profile'),
            onPressed: () {},
          ),
          const SizedBox(height: 16),
          ShadButton.destructive(
            child: const Text('Logout'),
            onPressed: () {},
          ),
        ],
      ),
    );
  }
}