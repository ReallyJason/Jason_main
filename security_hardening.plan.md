# Security Hardening Plan

## 1. Vulnerable/Outdated Components (OWASP A06:2021)
- **Status:** Currently 0 vulnerabilities found by `npm audit`.
- **Action:** Add a CI step to run `npm audit` regularly.

## 2. Broken Access Control & Identification/Authentication Failures (OWASP A01:2021, A07:2021)
- **Status:** Static portfolio, no backend auth observed.
- **Action:** If adding a backend (e.g., HiveFive), must implement JWT with secure flags (HttpOnly, Secure, SameSite).

## 3. Cryptographic Failures (OWASP A02:2021)
- **Status:** Static hosting.
- **Action:** Ensure deployment uses HTTPS (usually handled by provider like Vercel/Netlify). Set strict Transport-Security (HSTS) headers.

## 4. Cross-Site Scripting (XSS) (CWE-79)
- **Status:** React handles most XSS by default.
- **Action:** 
    - Verify no `dangerouslySetInnerHTML` is used.
    - Implement a Content Security Policy (CSP).

## 5. Security Misconfiguration (OWASP A05:2021)
- **Action:** Configure security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy).

## 6. Supply Chain Contamination (Emerging Threats)
- **Action:** Pin dependency versions or use a lockfile (already have `package-lock.json`).

## 7. Resource Exhaustion (Emerging Threats)
- **Action:** Implement rate limiting if a backend API is added.

## 8. Path Traversal & Injection (CWE-22, CWE-89)
- **Action:** Validate all user inputs if a contact form or search is added.

