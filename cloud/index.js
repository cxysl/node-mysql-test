// const { cloud } = getApp();
deleteFile = async (context) => {
    const cloud = context.cloud;
    let fileId = "cloud://DED0C84DCDAF69396BDDC12D484B1DC7//PangMenZhengDao.ttf";
  let result;
  try {
    result = await cloud.file.deleteFile({ fileId });
  } catch (e) {
    console.log("e", e);
  }
  console.log("deleteFileResult", result);
  return "deleteFile";
};
deleteFile("cloud://DED0C84DCDAF69396BDDC12D484B1DC7//PangMenZhengDao.ttf");
