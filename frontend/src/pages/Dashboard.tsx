import { useState } from 'react';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import { JournalForm } from '../components/JournalForm';
import { JournalList } from '../components/JournalList';
import { StatsAndAchievements } from '../components/StatsAndAchievements';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useUser();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleEntryCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <>
      <SignedIn>
        <div className="app">
          <header className="app-header">
            <div className="header-content">
              <h1>SmartJournal</h1>
              <div className="user-info">
                <span className="user-greeting">
                  Welcome, <strong>{user?.firstName || user?.username}</strong>
                </span>
              </div>
            </div>
          </header>

          <main className="app-main">
            <div className="main-content">
              <div className="left-column">
                <JournalForm onEntryCreated={handleEntryCreated} />
              </div>

              <div className="right-column">
                <StatsAndAchievements refreshTrigger={refreshTrigger} />
                <JournalList refreshTrigger={refreshTrigger} />
              </div>
            </div>
          </main>

          <footer className="app-footer">
            <p>SmartJournal - Track your gratitude journey</p>
          </footer>
        </div>
      </SignedIn>
      <SignedOut>
        <Navigate to="/sign-in" replace />
      </SignedOut>
    </>
  );
}