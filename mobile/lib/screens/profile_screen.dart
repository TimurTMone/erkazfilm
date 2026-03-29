import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../l10n.dart';
import '../providers.dart';
import '../theme.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final locProvider = context.watch<LocaleProvider>();
    final themeProvider = context.watch<ThemeProvider>();
    final loc = AppLocalizations(locProvider.locale);
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      appBar: AppBar(
        title: Text(loc.t('profileTitle')),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            // Profile header card
            Card(
              child: Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  children: [
                    Container(
                      width: 80,
                      height: 80,
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(
                          colors: [kPrimaryAmber, Color(0xFFD97706)],
                        ),
                        borderRadius: BorderRadius.circular(24),
                      ),
                      child: const Center(
                        child: Icon(
                          Icons.person_rounded,
                          size: 40,
                          color: Colors.white,
                        ),
                      ),
                    ),
                    const SizedBox(height: 14),
                    Text(
                      loc.t('profileName'),
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.w800,
                        color: isDark ? Colors.white : Colors.black87,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      loc.t('profileRole'),
                      style: TextStyle(
                        fontSize: 14,
                        color: isDark
                            ? Colors.grey.shade400
                            : Colors.grey.shade600,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      loc.t('profileEmail'),
                      style: TextStyle(
                        fontSize: 13,
                        color: kSecondaryCyan,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),

            // Quick stats
            Row(
              children: [
                _ProfileStatCard(
                  icon: Icons.folder_rounded,
                  value: '12',
                  label: loc.t('profileProjects'),
                  isDark: isDark,
                ),
                const SizedBox(width: 10),
                _ProfileStatCard(
                  icon: Icons.favorite_rounded,
                  value: '48',
                  label: loc.t('profileFavorites'),
                  isDark: isDark,
                ),
              ],
            ),
            const SizedBox(height: 20),

            // Settings section
            _SectionHeader(
              title: loc.t('profileSettings'),
              isDark: isDark,
            ),
            const SizedBox(height: 8),

            // Language selector
            Card(
              child: Padding(
                padding: const EdgeInsets.all(4),
                child: ListTile(
                  leading: Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      color: kSecondaryCyan.withOpacity(0.12),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Icon(
                      Icons.language_rounded,
                      color: kSecondaryCyan,
                    ),
                  ),
                  title: Text(
                    loc.t('profileLanguage'),
                    style: const TextStyle(fontWeight: FontWeight.w600),
                  ),
                  trailing: Container(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 4, vertical: 2),
                    decoration: BoxDecoration(
                      color: isDark ? Colors.grey.shade800 : Colors.grey.shade100,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: AppLocalizations.supportedLocales.map((code) {
                        final isSelected = locProvider.locale == code;
                        return GestureDetector(
                          onTap: () => locProvider.setLocale(code),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 200),
                            padding: const EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 6,
                            ),
                            decoration: BoxDecoration(
                              color:
                                  isSelected ? kPrimaryAmber : Colors.transparent,
                              borderRadius: BorderRadius.circular(8),
                            ),
                            child: Text(
                              code.toUpperCase(),
                              style: TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.w700,
                                color: isSelected
                                    ? Colors.white
                                    : (isDark
                                        ? Colors.grey.shade400
                                        : Colors.grey.shade600),
                              ),
                            ),
                          ),
                        );
                      }).toList(),
                    ),
                  ),
                ),
              ),
            ),
            const SizedBox(height: 8),

            // Theme toggle
            Card(
              child: Padding(
                padding: const EdgeInsets.all(4),
                child: SwitchListTile(
                  secondary: Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      color: const Color(0xFF8B5CF6).withOpacity(0.12),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Icon(
                      isDark
                          ? Icons.dark_mode_rounded
                          : Icons.light_mode_rounded,
                      color: const Color(0xFF8B5CF6),
                    ),
                  ),
                  title: Text(
                    loc.t('profileTheme'),
                    style: const TextStyle(fontWeight: FontWeight.w600),
                  ),
                  value: themeProvider.isDark,
                  activeColor: kPrimaryAmber,
                  onChanged: (_) => themeProvider.toggleTheme(),
                ),
              ),
            ),
            const SizedBox(height: 8),

            // Notifications
            Card(
              child: Padding(
                padding: const EdgeInsets.all(4),
                child: SwitchListTile(
                  secondary: Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      color: kPrimaryAmber.withOpacity(0.12),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Icon(
                      Icons.notifications_rounded,
                      color: kPrimaryAmber,
                    ),
                  ),
                  title: Text(
                    loc.t('profileNotifications'),
                    style: const TextStyle(fontWeight: FontWeight.w600),
                  ),
                  value: true,
                  activeColor: kPrimaryAmber,
                  onChanged: (_) {},
                ),
              ),
            ),
            const SizedBox(height: 20),

            // Account section
            _SectionHeader(
              title: loc.t('profileAccount'),
              isDark: isDark,
            ),
            const SizedBox(height: 8),

            // About
            Card(
              child: Padding(
                padding: const EdgeInsets.all(4),
                child: ListTile(
                  leading: Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      color: Colors.green.withOpacity(0.12),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Icon(
                      Icons.info_outline_rounded,
                      color: Colors.green,
                    ),
                  ),
                  title: Text(
                    loc.t('profileAboutApp'),
                    style: const TextStyle(fontWeight: FontWeight.w600),
                  ),
                  subtitle: Text(loc.t('profileVersion')),
                  trailing: Icon(
                    Icons.chevron_right_rounded,
                    color: isDark ? Colors.grey.shade600 : Colors.grey.shade400,
                  ),
                  onTap: () {},
                ),
              ),
            ),
            const SizedBox(height: 8),

            // Logout
            Card(
              child: Padding(
                padding: const EdgeInsets.all(4),
                child: ListTile(
                  leading: Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      color: Colors.red.withOpacity(0.12),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Icon(
                      Icons.logout_rounded,
                      color: Colors.red,
                    ),
                  ),
                  title: Text(
                    loc.t('profileLogout'),
                    style: const TextStyle(
                      fontWeight: FontWeight.w600,
                      color: Colors.red,
                    ),
                  ),
                  trailing: Icon(
                    Icons.chevron_right_rounded,
                    color: isDark ? Colors.grey.shade600 : Colors.grey.shade400,
                  ),
                  onTap: () {},
                ),
              ),
            ),
            const SizedBox(height: 32),
          ],
        ),
      ),
    );
  }
}

class _SectionHeader extends StatelessWidget {
  final String title;
  final bool isDark;

  const _SectionHeader({required this.title, required this.isDark});

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.centerLeft,
      child: Padding(
        padding: const EdgeInsets.only(left: 4),
        child: Text(
          title,
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w700,
            color: isDark ? Colors.grey.shade400 : Colors.grey.shade600,
          ),
        ),
      ),
    );
  }
}

class _ProfileStatCard extends StatelessWidget {
  final IconData icon;
  final String value;
  final String label;
  final bool isDark;

  const _ProfileStatCard({
    required this.icon,
    required this.value,
    required this.label,
    required this.isDark,
  });

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Card(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Row(
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(
                  color: kPrimaryAmber.withOpacity(0.12),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(icon, color: kPrimaryAmber),
              ),
              const SizedBox(width: 12),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    value,
                    style: TextStyle(
                      fontSize: 22,
                      fontWeight: FontWeight.w800,
                      color: isDark ? Colors.white : Colors.black87,
                    ),
                  ),
                  Text(
                    label,
                    style: TextStyle(
                      fontSize: 12,
                      color: isDark
                          ? Colors.grey.shade400
                          : Colors.grey.shade600,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
