/* ════════════════════════════════════════════════════════════════════════
   PoolPics — single global version constant.

   Both admin.html and index.html load this file via
     <script src="version.js"></script>
   before their inline scripts run. The auto-update poller (in each HTML)
   fetches THIS file (not the HTML) and looks for the literal substring
   "APP_VERSION = '<target>'" — so a deploy only needs to bump the line
   below.

   Workflow on every deploy:
     1. Edit window.APP_VERSION here.
     2. UPDATE apa_core.apps SET version=$NEW WHERE app_name='PoolPics'.
     3. git push.

   Do NOT add a per-page APP_VERSION constant in admin.html / index.html —
   the whole point of this file is that there is exactly one source of
   truth. See feedback_admin_public_version_lockstep.md.
   ════════════════════════════════════════════════════════════════════════ */
window.APP_VERSION = '1.2';
