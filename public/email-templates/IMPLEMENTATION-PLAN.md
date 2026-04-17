# Welcome Email — Polish Version Implementation Plan

## Overview
Replace the German welcome/verification email (`willkommen-email.html`) with the Polish version (`welcome-email-pl.html`) for users registering on `app.finitopro.pl`.

## Files
- **Template (ready):** `public/email-templates/welcome-email-pl.html`
- **Original German:** `public/email-templates/willkommen-email.html`
- **Preview both:** open in browser to compare side by side

## Template Variables
The Polish template uses `{{VERIFICATION_URL}}` as placeholder. Replace with the actual verification token URL at send time.

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `{{VERIFICATION_URL}}` | Email verification link with token | `https://app.finitopro.pl/login?tk=abc123` |

## Changes from German Version

| Section | German (old) | Polish (new) |
|---------|-------------|--------------|
| Language | `lang="de"` | `lang="pl"` |
| Header subtitle | "Ihre ERP/CRM-Lösung für Handwerk & Service" | "Oprogramowanie all-in-one dla firm usługowych" |
| Welcome text | "Willkommen bei Finito! 👋" | "Witamy w Finito Pro!" |
| CTA button | "E-Mail verifizieren →" | "Potwierdź adres e-mail →" |
| Verification URL | `app.finitopro.ch/login?tk=XXXXX` | `{{VERIFICATION_URL}}` (use `app.finitopro.pl`) |
| Step 1 | "Firmendaten erfassen" | "Uzupełnij dane firmy" (logo, NIP, konto bankowe) |
| Step 2 | "Mitarbeiter einladen" | "Zaproś pracowników" |
| Step 3 | "Erstes Projekt anlegen" | "Utwórz pierwszy projekt" |
| Step 4 | "Rechnung erstellen" (with QR-Code) | "Wystaw pierwszą fakturę" (with KSeF, NO QR) |
| WhatsApp section | Swiss WhatsApp community link | **REMOVED** — replaced with trial info box (14 days free) |
| Support | "Chat in der App oder E-Mail" | "kontakt@finitopro.pl" with link |
| Footer | "SM Tech GmbH Swiss" | "OCTOLABS Sp. z o.o. \| SM Tech GmbH" |
| Copyright | "© 2026 SM Tech GmbH Swiss" | "© 2026 Finito Pro" |

## Backend Integration Steps

### 1. Load the template
```
// Read the HTML template file
const template = fs.readFileSync('email-templates/welcome-email-pl.html', 'utf-8');
```

### 2. Replace variables
```
const html = template.replace(/\{\{VERIFICATION_URL\}\}/g, verificationUrl);
```

### 3. Send via email service
```
await sendEmail({
  to: user.email,
  subject: 'Potwierdź swój adres e-mail — Finito Pro',
  html: html,
  from: 'Finito Pro <noreply@finitopro.pl>',
});
```

### 4. Locale detection
```
// Use Polish template for users registering on app.finitopro.pl
// Use German template for users registering on app.finitopro.ch
if (user.locale === 'pl' || user.registrationDomain === 'finitopro.pl') {
  template = 'welcome-email-pl.html';
} else {
  template = 'willkommen-email.html';
}
```

## Important Notes

1. **DO NOT** include Swiss QR-Code references — Polish market uses KSeF
2. **DO NOT** include WhatsApp community link — removed for PL
3. **DO NOT** use `partner@finitopro.pl` email — it doesn't exist
4. **DO NOT** mention "Swiss hosting" as a sales argument for PL market
5. **Verification URL domain** must be `app.finitopro.pl` (not `.ch`)
6. **Reply-to address:** `kontakt@finitopro.pl`
7. **Email subject line:** `Potwierdź swój adres e-mail — Finito Pro`

## Testing Checklist
- [ ] Email renders correctly in Gmail (web + mobile)
- [ ] Email renders correctly in Outlook (web + desktop)
- [ ] Email renders correctly in Apple Mail
- [ ] Verification button works (correct URL with token)
- [ ] "Copy link" fallback URL works
- [ ] Support email link (kontakt@finitopro.pl) works
- [ ] All Polish text is grammatically correct
- [ ] No German text remains
- [ ] No QR-Code references
- [ ] No WhatsApp references
- [ ] Footer shows OCTOLABS + SM Tech
- [ ] Mobile responsive (320px - 600px width)
