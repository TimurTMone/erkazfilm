import 'package:flutter/material.dart';
import '../models.dart';
import '../l10n.dart';
import '../theme.dart';

class ActorCard extends StatelessWidget {
  final Actor actor;
  final AppLocalizations loc;
  final VoidCallback? onTap;
  final double? matchPercent;

  const ActorCard({
    super.key,
    required this.actor,
    required this.loc,
    this.onTap,
    this.matchPercent,
  });

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
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final gradColors = _avatarGradient();

    return Card(
      margin: const EdgeInsets.only(bottom: 10),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Padding(
          padding: const EdgeInsets.all(14),
          child: Row(
            children: [
              // Avatar
              Container(
                width: 54,
                height: 54,
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: gradColors,
                  ),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Center(
                  child: Text(
                    actor.initial,
                    style: const TextStyle(
                      fontSize: 22,
                      fontWeight: FontWeight.w800,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
              const SizedBox(width: 14),
              // Info
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      actor.name,
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w700,
                        color: isDark ? Colors.white : Colors.black87,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Row(
                      children: [
                        Icon(
                          Icons.location_on_rounded,
                          size: 14,
                          color: isDark
                              ? Colors.grey.shade400
                              : Colors.grey.shade500,
                        ),
                        const SizedBox(width: 2),
                        Text(
                          '${actor.city} \u2022 ${actor.age} ${loc.t('actorAge')}',
                          style: TextStyle(
                            fontSize: 13,
                            color: isDark
                                ? Colors.grey.shade400
                                : Colors.grey.shade600,
                          ),
                        ),
                        const SizedBox(width: 8),
                        Icon(
                          Icons.star_rounded,
                          size: 14,
                          color: kPrimaryAmber,
                        ),
                        const SizedBox(width: 2),
                        Text(
                          actor.rating.toStringAsFixed(1),
                          style: TextStyle(
                            fontSize: 13,
                            fontWeight: FontWeight.w600,
                            color: isDark
                                ? Colors.grey.shade300
                                : Colors.grey.shade700,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    Wrap(
                      spacing: 6,
                      runSpacing: 4,
                      children: actor.skills.map((skill) {
                        return Container(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 10,
                            vertical: 4,
                          ),
                          decoration: BoxDecoration(
                            color: kPrimaryAmber.withOpacity(0.12),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Text(
                            skill,
                            style: TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.w600,
                              color: kPrimaryAmber,
                            ),
                          ),
                        );
                      }).toList(),
                    ),
                  ],
                ),
              ),
              // Match percent or chevron
              if (matchPercent != null)
                Container(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                  decoration: BoxDecoration(
                    color: _matchColor(matchPercent!).withOpacity(0.15),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Text(
                    '${matchPercent!.round()}%',
                    style: TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.w800,
                      color: _matchColor(matchPercent!),
                    ),
                  ),
                )
              else
                Icon(
                  Icons.chevron_right_rounded,
                  color: isDark ? Colors.grey.shade600 : Colors.grey.shade400,
                ),
            ],
          ),
        ),
      ),
    );
  }

  Color _matchColor(double percent) {
    if (percent >= 70) return Colors.green;
    if (percent >= 40) return kPrimaryAmber;
    return Colors.red;
  }
}
