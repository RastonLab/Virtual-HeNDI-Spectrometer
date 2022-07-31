export const imgSource = {
  lecture: "",
  "turbo-pump": "",
  "ion-gauge-1": "",
  "ion-gauge-2": "",
  "ion-gauge-3": "",
  "source-chamber": "",
  "doping-chamber": "",
  "detection-chamber": "",
  "diffusion-pump-2": "",
  "diffusion-pump-1": "",
  "rotary-pump": "",
  laser: "",
  stark: "",
  coldhead: "",
  salt: "",
  nozzle: "",
  needle: "",
  beam: "",
};

export const toolTips = {
  lecture: {
    title: "Lecture Bottle",
    text: "The analyte, in gas form, is stored here. It is leaked into the doping chamber via a leak valve ",
  },
  "turbo-pump": {
    title: "Turbomolecular Pump",
    text: 'Evacuates the Detection Chamber by means of an axial compressor which consists of a stack of fans that "push" molecules to the exhaust. The fans rotate at a frequency of ~1 kHz.',
  },
  "ion-gauge-1": {
    title: "Ion Gauge",
    text: "Pressure of the Detection Chamber, which is similar to that maintained at CERN (close to the vacuum found on the Moons surface).",
  },
  "ion-gauge-2": {
    title: "Ion Gauge",
    text: "Pressure of the Doping Chamber.",
  },
  "ion-gauge-3": {
    title: "Ion Gauge",
    text: "Pressure of the Source Chamber. It is relatively high due to the large amount of helium that flows through the nozzle.",
  },
  "source-chamber": {
    title: "Source Chamber",
    text: "This is where helium nanodroplets are formed.",
  },
  "doping-chamber": {
    title: "Doping Chamber",
    text: "This chamber is where the analyte molecules condense into the molecular beam.",
  },
  "detection-chamber": {
    title: "Detection Chamber",
    text: "Houses a mass spectrometer which is used to detect helium nanodroplets.",
  },
  "diffusion-pump-1": {
    title: "Diffusion Pump",
    text: "This chamber is where the analyte molecules condense into the molecular beam.",
  },
  "diffusion-pump-2": {
    title: "Diffusion Pump",
    text: "Houses a mass spectrometer which is used to detect helium nanodroplets.",
  },
  "rotary-pump": {
    title: "Rotary Pump",
    text: "Backs the turbo and diffusion pumps, which require a foreline pressure of <100 mTorr. The exhaust gas is directed to the rooftop.",
  },
  laser: {
    title: "Laser Symbol",
    text: 'The output from a narrow linewidth quantum cascade laser is overlapped with the helium nanodroplet beam. Before entering the vacuum chamber through the salt window, a small fraction of radiation is reflected to a power meter ("P") and wavemeter ("λ"); the mechanical chopper wheel modulates the laser beam at a frequency of ~100 Hz, which serves as the reference for the lock-in amplifier.',
  },
  stark: {
    title: "Stark Cell",
    text: "The Stark cell consists of two mirror-polished steel plates that are used to generate an electric field of up to 75 kV/cm. The electric field affects the rotation of the analyte based on its dipole moment.",
  },
  coldhead: {
    title: "Coldhead",
    text: "This is a large copper rod which is cooled to ~10 K by a closed-cycle cryostat",
  },
  salt: {
    title: "Salt Window",
    text: "This is a thin window (1-5 mm) that is transperant to infrared radiation. Typical materials are BaF₂, CaF₂, and ZnSe.",
  },
  nozzle: {
    title: "Nozzle",
    text: "The high pressure (>10 atm) helium gas which is precooled from thermal contact with the coldhead, is ejected from the nozzle into the vacuum chamber, where collisional cooling and condensation occurs. The resulting helium nanodroplets have an average size in excess of 1000 atoms, and a temperature of ~0.4 K, which renders them almost entirely superfluid.",
  },
  // TODO
  needle: {
    title: "Needle Valve",
    text: "Used for precise control of the flow of analyte molecules into the doping chamber.",
  },
  // TODO
  beam: {
    title: "Infrared Laser Beam",
    text: 'This overlaps with the helium nanodroplet beam. When resonant with a rovibrational transition of an analyte (e.g., R(0) of OCS), it can absorb a photon. This is followed by rapid relaxation, whereby the analyte transfers the rovibrational energy to the surrounding droplet, which results in the evaporation of helium (1 atom for every 5 cm⁻¹). This causes a decrease in the signal from the mass spectrometer. A "depletion" spectrum is generated by plotting the inverted signal against the wavenumber of the laser.',
  },
};
