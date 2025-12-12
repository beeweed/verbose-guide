// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility in the flutter_test package. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.


import 'package:flutter_test/flutter_test.dart';

import 'package:fit_pulse/main.dart';

void main() {
  testWidgets('App smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const FitPulseApp());

    // Verify that our counter starts at 0.
    // Note: The default test expects a counter app, but we changed the app.
    // We'll just check if the Splash or Login screen appears.
    // Since it's async navigation, we might just check for FitPulse text
    expect(find.text('FitPulse'), findsOneWidget);
  });
}