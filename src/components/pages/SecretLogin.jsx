import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supaBaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeMinimal } from '@supabase/auth-ui-shared';
import { Navigate } from 'react-router-dom';

function SecretLogin() {
    const [session, setSession] = useState(null)
    const [ipAllowed, setIpAllowed] = useState(null);

    useEffect(() => {
        fetch('/api/checkip')
            .then(response => {
                setIpAllowed(response.ok);
            })
            .catch(() => {
                setIpAllowed(false);
            });
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription?.unsubscribe()
    }, [])

    // Show loading state while checking IP
    if (ipAllowed === null) {
        return <div>Loading...</div>;
    }

    // Redirect if IP not allowed
    if (!ipAllowed) {
        return <Navigate to="/" replace />;
    }

    if (!session) {
        return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeMinimal }} />)
    }
    else {
        return <Navigate to="/secret-dashboard" replace />
    }
}

export default SecretLogin;