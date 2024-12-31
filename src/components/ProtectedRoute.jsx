// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supaBaseClient';

const ProtectedRoute = ({ children }) => {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check authentication status
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        // Set up real-time listener for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Show loading state while checking auth
    if (loading) {
        return <div>Loading...</div>;
    }

    // Redirect to home if not authenticated
    if (!session) {
        return <Navigate to="/secret-login" replace />;
    }

    // Render the protected content if authenticated
    return children;
};

export default ProtectedRoute;