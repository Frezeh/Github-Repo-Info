export function Parse(dat: string) {
  let subData: string[] = [];
  const data = dat.split("\r\n");

  data.forEach((element) => {
    const splitData = element.split(/,(.*)/s);

    subData.push(splitData[1]);
  });

  return subData;
}
