# 📧 Polish Welcome Email — Implementation Guide for Ivan

Hi Ivan! 👋

We've prepared a Polish version of the welcome/verification email for users registering on `app.finitopro.pl`. Below is everything you need to implement it.

---

## 📁 Where to find the files

**GitHub repository:** `worksmtechswiss-hub/Finito-PL-Website`

**Branch:** `main`

**Files:**
```
public/email-templates/
├── welcome-email-pl.html          ← Polish email template (READY)
├── willkommen-email.html           ← German email (existing, keep for .ch)
├── IMPLEMENTATION-PLAN.md          ← Full technical spec
└── README-FOR-IVAN.md              ← This file
```

### Quick download
```bash
# Clone or pull latest
git pull origin main

# Files are in:
# public/email-templates/welcome-email-pl.html
# public/email-templates/IMPLEMENTATION-PLAN.md
```

Or download directly from GitHub:
```
https://github.com/worksmtechswiss-hub/Finito-PL-Website/tree/main/public/email-templates
```

---

## 🔧 What to implement

### 1. Add locale-based email selection

When a user registers, check if they're on `finitopro.pl` or `finitopro.ch` and send the correct email:

```javascript
// Pseudo-code — adapt to your email service / framework
function getWelcomeEmailTemplate(user) {
  if (user.locale === 'pl' || user.domain === 'finitopro.pl') {
    return loadTemplate('welcome-email-pl.html');
  }
  // Default: German for .ch users
  return loadTemplate('willkommen-email.html');
}
```

### 2. Replace the template variable

The Polish template has one placeholder: `{{VERIFICATION_URL}}`

```javascript
const html = template.replaceAll('{{VERIFICATION_URL}}', verificationUrl);
// verificationUrl example: https://app.finitopro.pl/login?tk=abc123def456
```

### 3. Send the email

```javascript
await sendEmail({
  to: user.email,
  from: 'Finito Pro <noreply@finitopro.pl>',
  subject: 'Potwierdź swój adres e-mail — Finito Pro',
  html: html,
});
```

### 4. Email subject line
- **Polish:** `Potwierdź swój adres e-mail — Finito Pro`
- **German (existing):** `E-Mail-Adresse bestätigen — Finito Pro`

---

## ⚠️ Important — DO NOT include

| Rule | Reason |
|------|--------|
| No Swiss QR-Code references | QR invoices are CH-only, PL uses KSeF |
| No WhatsApp community link | Removed for PL market |
| No `partner@finitopro.pl` | This email doesn't exist |
| No `app.finitopro.ch` URLs | PL users must go to `app.finitopro.pl` |

---

## 📋 What changed vs German version

| Section | German | Polish |
|---------|--------|--------|
| Header | "Ihre ERP/CRM-Lösung für Handwerk & Service" | "Oprogramowanie all-in-one dla firm usługowych" |
| Welcome | "Willkommen bei Finito! 👋" | "Witamy w Finito Pro!" |
| Button | "E-Mail verifizieren →" | "Potwierdź adres e-mail →" |
| Step 1 | Firmendaten erfassen | Uzupełnij dane firmy (logo, NIP, konto) |
| Step 2 | Mitarbeiter einladen | Zaproś pracowników |
| Step 3 | Erstes Projekt anlegen | Utwórz pierwszy projekt |
| Step 4 | Rechnung mit QR-Code | Faktura z KSeF (**no QR**) |
| WhatsApp box | Swiss WhatsApp channel | **Replaced** with "14 dni za darmo" trial info |
| Support | "Chat in der App oder E-Mail" | kontakt@finitopro.pl |
| Footer | SM Tech GmbH Swiss | OCTOLABS Sp. z o.o. \| SM Tech GmbH |

---

## ✅ Testing checklist

Before going live, please verify:

- [ ] Email renders correctly in **Gmail** (web + mobile)
- [ ] Email renders correctly in **Outlook** (web + desktop)
- [ ] Email renders correctly in **Apple Mail**
- [ ] **Verification button** works → correct URL with token
- [ ] **Copy link** fallback works
- [ ] **kontakt@finitopro.pl** link works
- [ ] All text is in **Polish** (no German remaining)
- [ ] **No QR-Code** references anywhere
- [ ] **No WhatsApp** references
- [ ] Footer shows **OCTOLABS + SM Tech**
- [ ] Responsive on mobile (320px–600px)
- [ ] Verification URL uses `app.finitopro.pl` domain (not `.ch`)

---

## 💬 Questions?

Contact Kamil — kontakt@finitopro.pl

Thanks! 🚀
