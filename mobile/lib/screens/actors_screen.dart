import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../l10n.dart';
import '../models.dart';
import '../providers.dart';
import '../theme.dart';
import '../widgets/actor_card.dart';
import 'actor_detail_screen.dart';

class ActorsScreen extends StatefulWidget {
  const ActorsScreen({super.key});

  @override
  State<ActorsScreen> createState() => _ActorsScreenState();
}

class _ActorsScreenState extends State<ActorsScreen> {
  String _searchQuery = '';
  String _genderFilter = 'all'; // all, male, female, children
  final TextEditingController _searchController = TextEditingController();

  List<Actor> get _filteredActors {
    var actors = mockActors.where((a) {
      // Gender filter
      if (_genderFilter == 'male' && a.gender != Gender.male) return false;
      if (_genderFilter == 'female' && a.gender != Gender.female) return false;
      if (_genderFilter == 'children' && a.age > 16) return false;

      // Search filter
      if (_searchQuery.isNotEmpty) {
        final q = _searchQuery.toLowerCase();
        return a.name.toLowerCase().contains(q) ||
            a.city.toLowerCase().contains(q) ||
            a.skills.any((s) => s.toLowerCase().contains(q));
      }
      return true;
    }).toList();

    return actors;
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final loc = AppLocalizations(context.watch<LocaleProvider>().locale);
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final actors = _filteredActors;

    return Scaffold(
      appBar: AppBar(
        title: Text(loc.t('actorsTitle')),
      ),
      body: Column(
        children: [
          // Search bar
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 8),
            child: TextField(
              controller: _searchController,
              onChanged: (value) => setState(() => _searchQuery = value),
              decoration: InputDecoration(
                hintText: loc.t('actorsSearch'),
                prefixIcon: const Icon(Icons.search_rounded),
                suffixIcon: _searchQuery.isNotEmpty
                    ? IconButton(
                        icon: const Icon(Icons.clear_rounded),
                        onPressed: () {
                          _searchController.clear();
                          setState(() => _searchQuery = '');
                        },
                      )
                    : null,
              ),
            ),
          ),

          // Gender filter chips
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Row(
              children: [
                _FilterChip(
                  label: loc.t('filterAll'),
                  selected: _genderFilter == 'all',
                  onSelected: () => setState(() => _genderFilter = 'all'),
                ),
                const SizedBox(width: 8),
                _FilterChip(
                  label: loc.t('filterMale'),
                  selected: _genderFilter == 'male',
                  onSelected: () => setState(() => _genderFilter = 'male'),
                ),
                const SizedBox(width: 8),
                _FilterChip(
                  label: loc.t('filterFemale'),
                  selected: _genderFilter == 'female',
                  onSelected: () => setState(() => _genderFilter = 'female'),
                ),
                const SizedBox(width: 8),
                _FilterChip(
                  label: loc.t('filterChildren'),
                  selected: _genderFilter == 'children',
                  onSelected: () => setState(() => _genderFilter = 'children'),
                ),
              ],
            ),
          ),

          // Results count
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 4),
            child: Row(
              children: [
                Text(
                  '${loc.t('actorsFound')}: ${actors.length}',
                  style: TextStyle(
                    fontSize: 13,
                    color:
                        isDark ? Colors.grey.shade400 : Colors.grey.shade600,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          ),

          // Actor list
          Expanded(
            child: actors.isEmpty
                ? Center(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(
                          Icons.person_search_rounded,
                          size: 64,
                          color: isDark
                              ? Colors.grey.shade700
                              : Colors.grey.shade300,
                        ),
                        const SizedBox(height: 12),
                        Text(
                          loc.t('noActorsFound'),
                          style: TextStyle(
                            fontSize: 16,
                            color: isDark
                                ? Colors.grey.shade500
                                : Colors.grey.shade500,
                          ),
                        ),
                      ],
                    ),
                  )
                : ListView.builder(
                    padding: const EdgeInsets.fromLTRB(16, 4, 16, 16),
                    itemCount: actors.length,
                    itemBuilder: (context, index) {
                      return ActorCard(
                        actor: actors[index],
                        loc: loc,
                        onTap: () {
                          Navigator.of(context).push(
                            MaterialPageRoute(
                              builder: (_) => ActorDetailScreen(
                                actor: actors[index],
                              ),
                            ),
                          );
                        },
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }
}

class _FilterChip extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onSelected;

  const _FilterChip({
    required this.label,
    required this.selected,
    required this.onSelected,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onSelected,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
        decoration: BoxDecoration(
          color: selected
              ? kPrimaryAmber
              : (Theme.of(context).brightness == Brightness.dark
                  ? Colors.grey.shade800
                  : Colors.grey.shade200),
          borderRadius: BorderRadius.circular(20),
        ),
        child: Text(
          label,
          style: TextStyle(
            fontSize: 13,
            fontWeight: FontWeight.w600,
            color: selected
                ? Colors.white
                : (Theme.of(context).brightness == Brightness.dark
                    ? Colors.grey.shade300
                    : Colors.grey.shade700),
          ),
        ),
      ),
    );
  }
}
