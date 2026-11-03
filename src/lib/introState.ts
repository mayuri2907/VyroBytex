// Module-level in-memory state tracking cinematic intro visibility across SPA routes
let hasSeenIntroSession = false;

export function isCinematicIntroActive(): boolean {
  return !hasSeenIntroSession;
}

export function markCinematicIntroSeen(): void {
  hasSeenIntroSession = true;
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('vyro:intro-completed'));
  }
}
