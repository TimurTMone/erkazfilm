import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../l10n.dart';
import '../models.dart';
import '../providers.dart';
import '../theme.dart';

class ActorDetailScreen extends StatelessWidget {
  final Actor actor;

  const ActorDetailScreen({super.key, required this.actor});

  List<Color> _avatarGradient() {
    switch (actor.id.hashCode % 6) {
      case 0:
        return [kPrimaryAmber, const Color(0xFFD97706)];
      case 1:
        return [kSecondaryCyan, const Color(0xFF0891B2)];
      case 2:
        return [const Color(0xFF8B5CF6), const Color(0xFF6D28D9)];
      case 3:
        return [const Color(0xFFEF4444), const Color(0xFFDC2626)];
      case 4:
        return [const Color(0xFF10B981), const Color(0xFF059669)];
      default:
        return [const Color(0xFFF472B6), const Color(0xFFEC4899)];
    }
  }

  @override
  Widget build(BuildContext context) {
    final loc = AppLocalizations(context.watch<LocaleProvider>().locale);
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final gradColors = _avatarGradient();

    return Scaffold(
      body: CustomScrollView(
        slivers: [
          // App bar with gradient header
          SliverAppBar(
            expandedHeight: 280,
            pinned: true,
            backgroundColor: gradColors[0],
            foregroundColor: Colors.white,
            flexibleSpace: FlexibleSpaceBar(
              background: Container(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: gradColors,
                  ),
                ),
                child: SafeArea(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const SizedBox(height: 40),
                      Container(
                        width: 90,
                        height: 90,
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.25),
                          borderRadius: BorderRadius.circular(28),
                        ),
                        child: Center(
                          child: Text(
                            actor.initial,
                            style: const TextStyle(
                              fontSize: 40,
                              fontWeight: FontWeight.w900,
                              color: Colors.white,
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 14),
                      Text(
                        actor.name,
                        style: const TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.w800,
                          color: Colors.white,
                        ),
                      ),
                      const SizedBox(height: 6),
                      Text(
                        '${actor.city} \u2022 ${actor.age} ${loc.t('actorAge')} \u2022 ${actor.gender == Gender.male ? loc.t('male') : loc.t('female')}',
                        style: TextStyle(
                          fontSize: 14,
                          color: Colors.white.withOpacity(0.9),
                        ),
                      ),
                      const SizedBox(height: 12),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.star_rounded,
                              size: 20, color: Colors.white.withOpacity(0.9)),
                          const SizedBox(width: 4),
                          Text(
                            actor.rating.toStringAsFixed(1),
                            style: const TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.w700,
                              color: Colors.white,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),

          // Body
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Stats row
                  Row(
                    children: [
                      _StatTile(
                        value: actor.filmsCount.toString(),
                        label: loc.t('actorFilms'),
                        isDark: isDark,
                      ),
                      _StatTile(
                        value: actor.awards.toString(),
                        label: loc.t('actorAwards'),
                        isDark: isDark,
                      ),
                      _StatTile(
                        value: actor.experience.toString(),
                        label: loc.t('actorExperience'),
                        isDark: isDark,
                      ),
                      _StatTile(
                        value: actor.rating.toStringAsFixed(1),
                        label: loc.t('actorRating'),
                        isDark: isDark,
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),

                  // Skills
                  Text(
                    loc.t('actorSkills'),
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w700,
                      color: isDark ? Colors.white : Colors.black87,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: actor.skills.map((skill) {
                      return Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 8,
                        ),
                        decoration: BoxDecoration(
                          color: kPrimaryAmber.withOpacity(0.12),
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(
                            color: kPrimaryAmber.withOpacity(0.3),
                          ),
                        ),
                        child: Text(
                          skill,
                          style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w600,
                            color: kPrimaryAmber,
                          ),
                        ),
                      );
                    }).toList(),
                  ),
                  const SizedBox(height: 24),

                  // About
                  Text(
                    loc.t('actorAbout'),
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w700,
                      color: isDark ? Colors.white : Colors.black87,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Text(
                    actor.bio,
                    style: TextStyle(
                      fontSize: 15,
                      height: 1.6,
                      color: isDark ? Colors.grey.shade300 : Colors.grey.shade700,
                    ),
                  ),
                  const SizedBox(height: 24),

                  // Filmography
                  Text(
                    loc.t('actorFilmography'),
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w700,
                      color: isDark ? Colors.white : Colors.black87,
                    ),
                  ),
                  const SizedBox(height: 10),
                  ...actor.filmography.map((film) {
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Row(
                        children: [
                          Container(
                            width: 36,
                            height: 36,
                            decoration: BoxDecoration(
                              color: kSecondaryCyan.withOpacity(0.12),
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: Icon(
                              Icons.movie_outlined,
                              size: 18,
                              color: kSecondaryCyan,
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Text(
                              film,
                              style: TextStyle(
                                fontSize: 15,
                                color: isDark
                                    ? Colors.grey.shade300
                                    : Colors.grey.shade700,
                              ),
                            ),
                          ),
                        ],
                      ),
                    );
                  }),
                  const SizedBox(height: 24),

                  // Action buttons
                  Row(
                    children: [
                      Expanded(
                        child: ElevatedButton.icon(
                          onPressed: () {},
                          icon: const Icon(Icons.mail_outline_rounded),
                          label: Text(loc.t('actorContact')),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: ElevatedButton.icon(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            backgroundColor: kSecondaryCyan,
                          ),
                          icon: const Icon(Icons.send_rounded),
                          label: Text(loc.t('actorInvite')),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 32),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _StatTile extends StatelessWidget {
  final String value;
  final String label;
  final bool isDark;

  const _StatTile({
    required this.value,
    required this.label,
    required this.isDark,
  });

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Card(
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 8),
          child: Column(
            children: [
              Text(
                value,
                style: TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.w800,
                  color: kPrimaryAmber,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                label,
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.w500,
                  color: isDark ? Colors.grey.shade400 : Colors.grey.shade600,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
