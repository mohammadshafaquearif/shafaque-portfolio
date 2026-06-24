import { useEffect } from 'react';

const LINKEDIN_BADGE_SCRIPT = 'https://platform.linkedin.com/badges/js/profile.js';

export default function LinkedInBadge() {
  useEffect(() => {
    const scriptId = 'linkedin-badge-script';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = LINKEDIN_BADGE_SCRIPT;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="glass rounded-2xl p-4">
      <p className="mb-3 text-xs font-medium text-muted">LinkedIn Profile</p>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="mohammad-shafaque-arif"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://www.linkedin.com/in/mohammad-shafaque-arif?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mohammad Shafaque Arif
        </a>
      </div>
    </div>
  );
}
