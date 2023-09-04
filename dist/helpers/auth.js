import { redirect } from 'react-router-dom';
import AuthenticationStorage from '../authentication_storage';
import { getPathFromRequest } from './path';

// Returns redirect if user is not authenticated otherwise null
export default function checkAuth(request) {
  // If not authenticated then navigate to authentication page
  if (!AuthenticationStorage.isAuthenticated()) {
    // Retrieving encoded pathname
    const encoded = getPathFromRequest(request);
    // Redirecting
    return redirect(`/authenticate?returnTo=${encoded}`);
  }
  return null;
}