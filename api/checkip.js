// api/auth/ip.js
import ipRangeCheck from 'ip-range-check';

export default function handler(req, res) {
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.headers['x-real-ip'];
    const allowedIps = process.env.ALLOWED_IPS?.split(',') || [];
    console.log(allowedIps);
    console.log(ip);

    const isAllowed = ip && allowedIps.some(allowedIp => ipRangeCheck(ip, allowedIp));

    if (!isAllowed) {
        return res.status(403).json({ error: 'Forbidden' });
    }

    res.status(200).json({ allowed: true });
}