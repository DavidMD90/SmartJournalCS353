import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { SignUpPage } from './pages/SignUp.tsx';
import Dashboard from './pages/Dashboard';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="clerk-header">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
      </div>
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route 
          path="/dashboard" 
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Login />
              </SignedOut>
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
