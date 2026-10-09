'use client';

import React, { useSyncExternalStore, useMemo } from 'react';
import NavbarSticky from '@/components/NavbarSticky';
import Header from '@/components/Header';
import TableOfContents from '@/components/TableOfContents';
import SectionChallenge from '@/components/SectionChallenge';
import SectionCustomization from '@/components/SectionCustomization';
import SectionTestingPublishing from '@/components/SectionTestingPublishing';
import SectionSubmissionGrading from '@/components/SectionSubmissionGrading';
import Footer from '@/components/Footer';
import { CHECKLIST_ITEMS, checklistStore } from '@/lib/checklist-store';

export default function HomePage() {
  const rawState = useSyncExternalStore(
    checklistStore.subscribe,
    checklistStore.getSnapshot,
    checklistStore.getServerSnapshot
  );

  const checkedState = useMemo(() => {
    try {
      const parsed = JSON.parse(rawState);
      if (Array.isArray(parsed) && parsed.length === CHECKLIST_ITEMS.length) {
        return parsed as boolean[];
      }
    } catch {
      // ignore
    }
    return Array(CHECKLIST_ITEMS.length).fill(false);
  }, [rawState]);

  const checkedCount = checkedState.filter(Boolean).length;
  const totalCount = CHECKLIST_ITEMS.length;

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky modern navbar with live reading progress and checklist indicator */}
      <NavbarSticky checkedCount={checkedCount} totalCount={totalCount} />

      {/* Central content container (max ~1100px, 16px padding on mobile, 24px on desktop) */}
      <main className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <Header />
        <TableOfContents />
        <SectionChallenge />
        <SectionCustomization />
        <SectionTestingPublishing />
        <SectionSubmissionGrading />
        <Footer />
      </main>
    </div>
  );
}
