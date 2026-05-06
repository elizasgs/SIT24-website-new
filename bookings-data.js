// ============================================================
// SIT24 — Bokningsdata
// Edita värdena här för att ändra bokningsfönstret + tider.
// ============================================================
window.bookingsData = {
    // Öppettider för bokning. End=18 betyder att sista slot är 17:00–18:00.
    bookingHours: { start: 8, end: 18 },

    // Slot-längd i minuter. 60 = 1h-slots.
    slotMinutes: 60,

    // Hur många veckor framåt kalendern visar lediga dagar.
    weeksAhead: 6,

    // Veckodagar som är bokningsbara. 0=sön, 1=mån, ..., 6=lör.
    // Just nu: alla dagar (mån–sön).
    bookableWeekdays: [0, 1, 2, 3, 4, 5, 6],

    // ============================================================
    // FRAMTIDA: arbetslängd per erbjudande (i minuter)
    // När du fyllt i listan kan vi blockera tider där det inte
    // finns plats kvar inom öppettiderna.
    // ============================================================
    serviceDurations: {
        // 'erb-1': 60,
        // 'erb-2': 90,
        // 'erb-3': 120,
    }
};
