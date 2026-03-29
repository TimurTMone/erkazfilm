import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../l10n.dart';
import '../models.dart';
import '../providers.dart';
import '../theme.dart';
import '../widgets/actor_card.dart';
import 'actor_detail_screen.dart';

class AiCastingScreen extends StatefulWidget {
  const AiCastingScreen({super.key});

  @override
  State<AiCastingScreen> createState() => _AiCastingScreenState();
}

class _AiCastingScreenState extends State<AiCastingScreen>
    with SingleTickerProviderStateMixin {
  final TextEditingController _queryController = TextEditingController();
  List<CastingResult> _results = [];
  bool _isSearching = false;
  bool _hasSearched = false;

  late AnimationController _pulseController;

  @override
  void initState() {
    super.initState();
    _pulseController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1200),
    );
  }

  @override
  void dispose() {
    _queryController.dispose();
    _pulseController.dispose();
    super.dispose();
  }

  Future<void> _performSearch() async {
    final query = _queryController.text.trim();
    if (query.isEmpty) return;

    setState(() {
      _isSearching = true;
      _results = [];
    });

    _pulseController.repeat(reverse: true);

    // Simulate AI thinking delay
    await Future.delayed(const Duration(milliseconds: 2000));

    final results = performAiCasting(query);

    if (mounted) {
      _pulseController.stop();
      _pulseController.reset();
      setState(() {
        _results = results;
        _isSearching = false;
        _hasSearched = true;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final loc = AppLocalizations(context.watch<LocaleProvider>().locale);
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      appBar: AppBar(
        title: Text(loc.t('aiCastingTitle')),
      ),
      body: Column(
        children: [
          // Header
          Container(
            width: double.infinity,
            margin: const EdgeInsets.all(16),
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  kSecondaryCyan,
                  kSecondaryCyan.withOpacity(0.7),
                ],
              ),
              borderRadius: BorderRadius.circular(20),
            ),
            child: Column(
              children: [
                const Icon(
                  Icons.auto_awesome_rounded,
                  size: 40,
                  color: Colors.white,
                ),
                const SizedBox(height: 10),
                Text(
                  loc.t('aiCastingTitle'),
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w800,
                    color: Colors.white,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  loc.t('aiCastingSubtitle'),
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.white.withOpacity(0.9),
                  ),
                ),
              ],
            ),
          ),

          // Input area
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: TextField(
              controller: _queryController,
              maxLines: 3,
              minLines: 2,
              decoration: InputDecoration(
                hintText: loc.t('aiCastingHint'),
                hintMaxLines: 3,
              ),
              textInputAction: TextInputAction.done,
              onSubmitted: (_) => _performSearch(),
            ),
          ),
          const SizedBox(height: 12),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: SizedBox(
              width: double.infinity,
              child: ElevatedButton.icon(
                onPressed: _isSearching ? null : _performSearch,
                icon: _isSearching
                    ? SizedBox(
                        width: 20,
                        height: 20,
                        child: CircularProgressIndicator(
                          strokeWidth: 2,
                          valueColor: AlwaysStoppedAnimation<Color>(
                            Colors.white.withOpacity(0.8),
                          ),
                        ),
                      )
                    : const Icon(Icons.auto_awesome_rounded),
                label: Text(
                  _isSearching
                      ? loc.t('aiCastingThinking')
                      : loc.t('aiCastingButton'),
                ),
              ),
            ),
          ),
          const SizedBox(height: 16),

          // Results
          Expanded(
            child: _buildResultsArea(loc, isDark),
          ),
        ],
      ),
    );
  }

  Widget _buildResultsArea(AppLocalizations loc, bool isDark) {
    if (_isSearching) {
      return Center(
        child: AnimatedBuilder(
          animation: _pulseController,
          builder: (context, child) {
            return Opacity(
              opacity: 0.5 + _pulseController.value * 0.5,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    Icons.psychology_rounded,
                    size: 72,
                    color: kSecondaryCyan,
                  ),
                  const SizedBox(height: 16),
                  Text(
                    loc.t('aiCastingThinking'),
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                      color: kSecondaryCyan,
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      );
    }

    if (!_hasSearched) {
      return Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              Icons.auto_awesome_outlined,
              size: 64,
              color: isDark ? Colors.grey.shade700 : Colors.grey.shade300,
            ),
            const SizedBox(height: 12),
            Text(
              loc.t('aiCastingEmpty'),
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 15,
                color: isDark ? Colors.grey.shade500 : Colors.grey.shade500,
              ),
            ),
          ],
        ),
      );
    }

    if (_results.isEmpty) {
      return Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              Icons.search_off_rounded,
              size: 64,
              color: isDark ? Colors.grey.shade700 : Colors.grey.shade300,
            ),
            const SizedBox(height: 12),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32),
              child: Text(
                loc.t('aiCastingNoResults'),
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 15,
                  color: isDark ? Colors.grey.shade500 : Colors.grey.shade500,
                ),
              ),
            ),
          ],
        ),
      );
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Text(
            '${loc.t('aiCastingResults')} (${_results.length})',
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.w700,
              color: isDark ? Colors.white : Colors.black87,
            ),
          ),
        ),
        const SizedBox(height: 8),
        Expanded(
          child: ListView.builder(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
            itemCount: _results.length,
            itemBuilder: (context, index) {
              final result = _results[index];
              return ActorCard(
                actor: result.actor,
                loc: AppLocalizations(
                    context.watch<LocaleProvider>().locale),
                matchPercent: result.matchPercent,
                onTap: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (_) =>
                          ActorDetailScreen(actor: result.actor),
                    ),
                  );
                },
              );
            },
          ),
        ),
      ],
    );
  }
}
