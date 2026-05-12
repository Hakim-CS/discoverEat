# DiscoverEat — Web Application Design & Prototype Documentation
### Web Systems Development — Mini-Project
**Student:** Abdul Hakim NAZARI
**Date:** May 2026  
**Deadline:** June 7, 2026

---

## 1. Problem Description

### The Problem

Finding the right restaurant is rarely just about food — it's about **the experience matching the occasion**. Existing platforms like Google Maps, TripAdvisor, or Yelp are primarily location-centric: they answer "what's nearby?" but fail to answer "what's right for *tonight*?" 

A person planning a romantic anniversary dinner has completely different needs from someone organizing a team business lunch or a casual hangout with college friends. Generic search filters like "cuisine type" or "price range" don't capture the social context, atmosphere, or vibe of a dining experience.

### The Solution

**DiscoverEat** is an **occasion-based restaurant discovery web application** that reframes restaurant search around the *purpose of the visit* rather than just proximity or food type. Users select their dining occasion first — Date Night, Family Dinner, Business Meeting, Friends Hangout, or Special Celebration — and are then matched with restaurants curated and rated for that specific context.

This approach reduces decision fatigue, improves satisfaction with dining choices, and creates a more meaningful connection between users and restaurants.

---

## 2. Target Users

DiscoverEat targets two primary user groups:

### Primary Users — Diners
Adults aged 20–45 who dine out regularly and value experience alongside food quality. They want contextually relevant recommendations rather than generic lists. They are comfortable using mobile and web applications.

### Secondary Users — Restaurant Owners / Managers
Restaurant owners or managers who want to list their establishment on the platform, manage their profile, specify occasion types they cater to, and track user interest and engagement.

---

## 3. User Personas

---

### Persona 1: Sofia — The Social Planner

| Field | Details |
|---|---|
| **Name** | Sofia Kovač |
| **Age** | 27 |
| **Occupation** | Marketing Coordinator |
| **Location** | Ljubljana, Slovenia |
| **Tech Literacy** | High — uses apps daily |
| **Devices** | iPhone 14, MacBook Pro |

**Bio:**  
Sofia is a young professional who enjoys organizing group outings for her friend circle. She's frequently the "planner" in her social group and often needs to find restaurants that can accommodate 6–10 people in a relaxed, fun atmosphere. She books restaurants on her phone during lunch breaks.

**Goals:**
- Find restaurants that suit a specific social vibe (fun, casual, lively)
- Quickly compare a few good options to share in the group chat
- Avoid wasting time reading irrelevant reviews

**Pain Points:**
- Current apps show hundreds of results with no way to filter by "atmosphere"
- Can't tell from a listing whether a place is good for a big group of friends
- Reads 15 reviews before realizing the restaurant is too formal for her needs

**Scenario:**  
*"It's Friday afternoon. Sofia needs to find a place for 8 friends tonight — somewhere casual, fun, with shareable food. She opens DiscoverEat, taps 'Friends Hangout', and in under 2 minutes has 3 perfect options with group-friendly ratings and menus. She shares the link directly to the group chat."*

**Quote:** *"I just want to know if the vibe is right — not just the rating."*

---

### Persona 2: Marco — The Busy Executive

| Field | Details |
|---|---|
| **Name** | Marco Bianchi |
| **Age** | 42 |
| **Occupation** | Regional Sales Director |
| **Location** | Maribor, Slovenia |
| **Tech Literacy** | Medium — uses apps for productivity |
| **Devices** | Samsung Galaxy S24, Windows Laptop |

**Bio:**  
Marco travels frequently for work and regularly takes clients and colleagues out for business lunches and dinners. He needs venues that project professionalism — quiet enough for conversation, with good service and reliable food quality. He values efficiency and doesn't want to spend more than 3 minutes finding a restaurant.

**Goals:**
- Find restaurants with a professional, quiet atmosphere suitable for client meetings
- Access key info (menu, pricing, opening hours) quickly
- Make or check reservation availability

**Pain Points:**
- Difficult to filter for "business-appropriate" atmosphere on standard apps
- Doesn't trust star ratings that mix casual and formal dining contexts
- Often ends up in places that are too loud or casual for a business setting

**Scenario:**  
*"Marco has a client visiting from Vienna next Tuesday at 13:00. He opens DiscoverEat on his phone, selects 'Business Meeting', picks a nearby restaurant with a 4.7 business atmosphere rating, checks the menu prices, and taps 'Make Reservation' — all in under 3 minutes."*

**Quote:** *"I need a place that says 'we take this seriously' without saying a word."*

---

## 4. Requirements

### 4.1 Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Users can browse restaurants without logging in (guest mode) | Must Have |
| FR-02 | Users can filter restaurants by occasion type (Date Night, Family, Business, Friends, Special Events) | Must Have |
| FR-03 | Users can search restaurants by name or keyword | Must Have |
| FR-04 | Users can search restaurants by city/location | Must Have |
| FR-05 | Users can view detailed restaurant profiles (name, cuisine, rating, hours, contact, menu, gallery) | Must Have |
| FR-06 | Users can add/remove restaurants from their Favorites list | Must Have |
| FR-07 | Users can register a new account with email and password | Must Have |
| FR-08 | Registered users can sign in and sign out | Must Have |
| FR-09 | Registered users can edit their profile information | Should Have |
| FR-10 | Restaurants display an interactive map showing their location | Should Have |
| FR-11 | Users can view a restaurant's full menu organized by category (Starters, Mains, Desserts) | Must Have |
| FR-12 | Users can view a photo gallery for each restaurant (with lightbox view) | Should Have |
| FR-13 | Restaurant owners can access a business portal to manage their listing | Could Have |
| FR-14 | Restaurants can be sorted by rating or name on the Discover page | Should Have |
| FR-15 | Featured restaurants are displayed in an auto-playing carousel on the home page | Should Have |

### 4.2 Non-Functional Requirements

| ID | Requirement | Category |
|---|---|---|
| NFR-01 | The application must be fully responsive and usable on mobile, tablet, and desktop screens | Usability |
| NFR-02 | Pages must load within 3 seconds on a standard broadband connection | Performance |
| NFR-03 | The UI must support both light and dark mode via system preference | Usability |
| NFR-04 | All interactive elements must have visible hover/focus states (accessibility) | Accessibility |
| NFR-05 | The application must work correctly in Chrome, Firefox, Safari, and Edge (latest versions) | Compatibility |
| NFR-06 | User authentication data must be handled securely (passwords not stored in plain text) | Security |
| NFR-07 | The codebase must follow TypeScript type safety standards | Maintainability |
| NFR-08 | The application must use semantic HTML for SEO and accessibility compliance | Accessibility |
| NFR-09 | All animations and transitions must complete within 300ms and not cause layout shift | Performance |

---

## 5. Use Case Model

### 5.1 Actors

| Actor | Description |
|---|---|
| **Guest User** | A visitor who has not registered or logged in |
| **Registered User** | A user with a verified account |
| **Restaurant Owner** | A business account holder who manages a restaurant listing |
| **System** | The DiscoverEat platform itself |

### 5.2 Use Case Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         DiscoverEat System                          │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────┐       │
│   │                                                         │       │
│   │   (UC-01) Browse Restaurants by Occasion                │       │
│   │   (UC-02) Search Restaurants by Name/Location           │       │
│   │   (UC-03) View Restaurant Detail                        │       │
│   │   (UC-04) View Restaurant Menu                          │       │
│   │   (UC-05) View Restaurant on Map                        │       │
│   │   (UC-06) Register Account                              │       │
│   │   (UC-07) Sign In / Sign Out                            │       │
│   │                                                         │       │
│   │   ══════════ Requires Login ══════════                  │       │
│   │   (UC-08) Save Restaurant to Favorites                  │       │
│   │   (UC-09) View Favorites List                           │       │
│   │   (UC-10) Edit User Profile                             │       │
│   │                                                         │       │
│   │   ══════════ Business Portal ══════════                 │       │
│   │   (UC-11) Manage Restaurant Listing                     │       │
│   │   (UC-12) View Listing Performance                      │       │
│   │                                                         │       │
│   └─────────────────────────────────────────────────────────┘       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Actors → Use Cases:

[Guest User]        → UC-01, UC-02, UC-03, UC-04, UC-05, UC-06, UC-07
[Registered User]   → All Guest UCs + UC-08, UC-09, UC-10
[Restaurant Owner]  → UC-07, UC-11, UC-12
```

### 5.3 Key Use Case Descriptions

#### UC-01: Browse Restaurants by Occasion
- **Actor:** Guest User / Registered User  
- **Precondition:** User is on the Home or Discover page  
- **Main Flow:**  
  1. User sees occasion category buttons (Date Night, Family, Business, Friends, Special Events)  
  2. User clicks an occasion  
  3. System filters and displays restaurants tagged with that occasion  
  4. User sees restaurant cards with name, photo, rating, and location  
- **Postcondition:** Filtered list of restaurants is shown  

#### UC-03: View Restaurant Detail
- **Actor:** Guest User / Registered User  
- **Precondition:** User sees a restaurant card  
- **Main Flow:**  
  1. User clicks on a restaurant card  
  2. System navigates to the restaurant detail page  
  3. User sees hero photo carousel, name, rating, cuisine type, price range  
  4. User can browse menu tabs (Starters, Mains, Desserts)  
  5. User can view photo gallery with lightbox  
  6. User can toggle the interactive map to see location  
  7. User can click "Make Reservation" or "Call Restaurant"  
- **Postcondition:** User has full information about the restaurant  

#### UC-08: Save Restaurant to Favorites
- **Actor:** Registered User  
- **Precondition:** User is signed in and viewing a restaurant detail  
- **Main Flow:**  
  1. User clicks the Heart (♥) icon on the restaurant detail page  
  2. System adds the restaurant to the user's Favorites  
  3. Heart icon fills with color as visual confirmation (microinteraction)  
  4. User can view all favorites on the `/favorites` page  
- **Alternative Flow:** If user is not signed in, system prompts sign-in  
- **Postcondition:** Restaurant is added to user's saved favorites  

---

## 6. Design Trends Used

### Trend 1: Responsive / Mobile-First Design

**What it is:**  
The UI is built using Tailwind CSS with a mobile-first approach — every layout is designed for small screens first, then progressively enhanced for larger viewports using responsive breakpoints (`md:`, `lg:`).

**Why selected for DiscoverEat:**  
Restaurant discovery is a highly mobile use case. Users typically search for a restaurant while they are *already out* — standing on a street corner, sitting in a cab, or deciding last-minute in a social setting. If the app doesn't work flawlessly on mobile, it fails its core use case. Sofia (Persona 1) books on her phone during her lunch break. Marco (Persona 2) checks options while commuting.

**How it improves UX:**  
- The navigation bar collapses to a hamburger menu on mobile  
- Restaurant card grids switch from 3-column (desktop) to 1-column (mobile)  
- Occasion filter buttons are full-width and easily tappable on touch screens  
- Search bar is always accessible and optimized for touch input  

---

### Trend 2: Microinteractions

**What it is:**  
Microinteractions are small, contained animations that respond to user actions — providing feedback, guiding attention, or adding delight without disrupting the flow.

**Why selected for DiscoverEat:**  
Restaurant discovery involves a lot of browsing and evaluating. Microinteractions make the experience feel *alive and responsive* rather than static, which increases trust and engagement. For a platform where "feel" and "vibe" matter, the UI's own feel must reflect care and quality.

**Examples in DiscoverEat:**  
- **Occasion filter cards** scale up with `hover:scale-105` and change border color on hover — giving instant feedback on selection  
- **Heart / Favorite button** transitions from outline to filled on click — a satisfying confirmation of saving  
- **Hero section scroll indicator** — an animated bouncing dot tells users there's more content below  
- **Menu item photos** fade on hover with `hover:opacity-80 transition-opacity` — inviting clicks  
- **Auto-playing carousel** on Discover page rotates through featured restaurants with smooth transitions  
- **Card shadows** elevate on hover with `hover:shadow-md transition-shadow`  

**How it improves UX:**  
Microinteractions prevent users from being unsure if their action was registered. Each click or tap receives a visual acknowledgment, reducing confusion and increasing confidence in the interface.

---

### Trend 3: Bold Typography + Visual Hierarchy

**What it is:**  
Using large, confident type sizes and a clear visual hierarchy to guide the user's eye and communicate brand personality. Headlines dominate, subtitles support, and body text informs — each at a distinct scale.

**Why selected for DiscoverEat:**  
Food is emotional. The language used to describe dining experiences needs to feel aspirational and enticing. Bold typography (e.g., `text-6xl font-bold` hero headline: *"Discover Perfect Dining Experiences"*) creates an immediate impression of quality and confidence — matching the premium restaurant experiences the platform represents.

**How it improves UX:**  
- The hero headline immediately communicates the platform's value proposition  
- Clear section headings ("Find Restaurants by Occasion", "Featured Restaurants") orient users without requiring instructions  
- Gradient text on the hero headline (`bg-gradient-primary bg-clip-text text-transparent`) creates a modern, premium aesthetic  
- Consistent font weight hierarchy (bold headings → semibold labels → regular body) allows users to scan content quickly  

---

## 7. Design Evolution

### Phase 1 — Initial Concept

**Idea:** A simple restaurant search where users filter by food type.  
**Problem discovered:** This was no different from existing apps. The differentiator had to be something more meaningful.  
**Decision:** Pivot to occasion-based filtering as the core concept.

---

### Phase 2 — First Design Concepts (Wireframes)

**Focus:** Map out key screens and user flows.  
**Key screens defined:**  
1. Home/Landing page with search + occasion shortcuts  
2. Discover/Browse page with filter sidebar and restaurant grid  
3. Restaurant Detail page  
4. Sign In / Register  
5. Favorites  
6. User Profile  

**Problem discovered:** Initial wireframes had the search bar and occasion filters on separate pages — users had to navigate twice to find a restaurant.  
**Decision:** Merged the search bar and occasion buttons into a single Hero section on the home page.

---

### Phase 3 — Mockup & Improved Design

**Focus:** Apply real design decisions — colors, typography, components.  
**Key changes:**  
- Adopted shadcn/ui component library for consistent, accessible components  
- Chose a warm primary color palette to evoke food and hospitality  
- Added a full-screen hero image background with gradient overlay for visual impact  
- Introduced the occasion filter as large interactive cards with icons, not just text links  

**Problem discovered:** The restaurant detail page was text-heavy. Users couldn't quickly scan it.  
**Decision:** Added a photo carousel at the top, tabbed menu organization, and moved key info (hours, phone) into a sidebar.

---

### Phase 4 — Interactive Prototype (Current State)

**Built with:** React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui  
**Key features implemented:**  
- Fully navigable multi-page application  
- Working occasion filter on both Home and Discover pages  
- Restaurant detail page with photo carousel, tabbed menu, image lightbox, and map toggle  
- Favorites toggle with heart button state  
- User authentication flow (Register/Sign In)  
- Editable user profile  
- Business owner portal page  
- Responsive layout across all breakpoints  

**What improved over time:**  
- Added the animated scroll indicator to the hero section after user testing revealed users didn't scroll past the hero  
- Moved the occasion tag buttons into the hero section after realizing users expected them immediately on load  
- Restructured the Discover page to have a persistent filter sidebar rather than a dropdown — this made filtering feel more like exploration than task completion  

---

## 8. Summary

DiscoverEat addresses a genuine gap in the restaurant discovery market: the absence of occasion-based, context-aware recommendations. By centering the user experience around the *purpose of the dining event* rather than just cuisine type or location, it creates a more relevant and satisfying experience for its core users.

The application was developed through a structured design process: starting from a problem definition, moving through persona creation and requirements gathering, progressing through wireframes and mockups, and arriving at a fully interactive frontend prototype. Three modern design trends — responsive/mobile-first design, microinteractions, and bold typography — were selected specifically because they align with the mobile-heavy usage context and the emotional nature of dining experiences.

The result is a prototype that is not only functional but demonstrates a clear, justified design rationale at every stage.
