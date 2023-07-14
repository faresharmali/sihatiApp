const timeSlots = () => {
    let slots: any = [];
    let start = 8;
    let end = 16;
    for (let i = start; i < end; i++) {
      slots.push(`${i}:00 - ${i}:30`);
      slots.push(`${i}:30 - ${i + 1}:00`);
    }
    return slots;
  };

  export const timeSlotsList = timeSlots();