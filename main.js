console.log("Loaded");

overwolf.utils.getSystemInformation((info) => {
  if (info.success && info.systemInfo && info.systemInfo.CPU) {
    console.log(info.systemInfo.CPU);
  }
});
