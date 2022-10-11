// NOTE "missing = false" was not a property in the given array, had to add it to the array during the project so that the missing package function would work - potentially add missing to the given data set or add an instruction for the students to add the property themselves

const packages = [
  {
    heavy: true,
    priority: false,
    fragile: false,
    to: "Harrington",
    trackingNumber: "1324kjs",
    missing: false,
  },
  {
    heavy: false,
    priority: true,
    fragile: true,
    to: "Mark",
    trackingNumber: "1325sdk",
    missing: false,
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    to: "Mick",
    trackingNumber: "jffd147",
    missing: false,
  },
  {
    heavy: false,
    priority: false,
    fragile: false,
    to: "Jake",
    trackingNumber: "acdc145",
    missing: false,
  },
  {
    heavy: true,
    priority: true,
    fragile: true,
    to: "Brittany",
    trackingNumber: "sdfsf4567",
    missing: false,
  },
  {
    heavy: false,
    priority: true,
    fragile: false,
    to: "Zach",
    trackingNumber: "8081baz",
    missing: false,
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    to: "Jeremy",
    trackingNumber: "suz2367",
    missing: false,
  },
];

// STUB random for-loop to remember how this works
// for (let i = 0; i < packages.length; i++) {
//   let package = packages[i];
//   console.log(package.to);
// }

let myPackages = packages;

// SECTION drawing packages to the page
function getPackages() {
  let template = "";
  myPackages.forEach(
    (p) =>
      (template += `
      <div class="row m-3 d-flex package-outline">
        <div class= "col-1 p-2">TO: </div>
        <div class= "col-5 p-2 text-light select" onclick= "selectPackage('${p.to}')">${p.to}</div>
        <div class= "col-1 p-2">ID: </div>
        <div class= "col-5 p-2 text-light">${p.trackingNumber}</div>
      </div>`)
  );
  // NOTE potential call out to remember to console.log stuff because I didn't do this originally
  console.log("these are the packages", myPackages);
  // NOTE call out to remember to use ID to link JS to HTML - making sure the ID's match on each page
  let packageElm = document.getElementById("packages");
  // console.log(packageElm, template);
  // @ts-ignore
  packageElm.innerHTML = template;
}
getPackages();

// SECTION finding package using filter
// NOTE is makes more sense to have this as step 3 instead of in step 1
function filterPackages(property) {
  // NOTE in the directions step 1 tells students to set up a button for each filter property, step 3 repeats the same direction - maybe instead of having the direction in both places, we remove it from step 1 and put all directions for filtering in step 3?
  console.log("filtering packages", property);
  // NOTE probably should make it more clear that this filter will show the packages where the property that is clicked match the property of the missing package (i.e. if the missing package has heavy = true, the other packages will have heavy = true, if the missing package has heavy = false, then the other packages shown will have heavy = false)
  let foundPackage = packages.find((p) => p.missing == true);
  // @ts-ignore
  myPackages = myPackages.filter((p) => p[property] == foundPackage[property]);
  getPackages();
}

// SECTION simulating a missing package using math.random and math.floor to get a random package
function missingPackage() {
  let missingPackage = packages[Math.floor(Math.random() * packages.length)];
  console.log("random missing package", missingPackage);
  // NOTE 'missing' was not a property on the original data set, potentially either add it to the data set to start or have an instruction that tells the students to add it that way this function will work
  missingPackage.missing = true;
}
missingPackage();

// SECTION function to select the missing package if the user finds it
function selectPackage(to) {
  // NOTE this was in the reference project but was not listed in the direction, maybe call out that students needs to create a button on their drawn packages that will give them the ability to 'select' the package they want to claim is missing, also maybe call out the idea of passing an argument (parameter?)
  let selectedPackage = packages.find((p) => p.to == to);
  console.log("selecting the missing package", to, selectedPackage);
  // @ts-ignore
  if (selectedPackage.missing == true) {
    window.alert(
      "You found the missing package! Find the next missing package."
    );
    location.reload();
  } else {
    window.alert("This is not the missing package, keep looking");
  }
}

// NOTE additional notes - for the stretch goals there was no example of either stretch goal, and add a timer was listen in both stretch goal 1 and stretch goal 3
