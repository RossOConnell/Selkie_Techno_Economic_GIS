function collapseOrShowSelectionAid(){
    var optionsDiv = document.getElementById("collapsableSiteSelection");
    this.classList.toggle("active");
    if (optionsDiv.style.display === "none") {
      optionsDiv.style.display = "block";
    } else {
     optionsDiv.style.display = "none";
    }
}

function initialSetup() {
    $('#TermsAndConditions').modal({backdrop: 'static', keyboard: false});  
    $('#TermsAndConditions').modal('show');

    var collapseOptionDiv = document.getElementById("collapseOptionDiv");
    collapseOptionDiv.addEventListener("click", collapseOrShowSelectionAid);

};


function check_for_float(text, minimum, maximum) {


  let trimmed_text = text.trim();
  if (trimmed_text === "") {
      return " *";
  }
  let number = parseFloat(trimmed_text);
  if (isNaN(number)) {
      return " Numbers only";
  }
  if (number < minimum) {
      return " Min: " + minimum;
  }
  if (number > maximum) {
      return " Max: " + maximum;
  }
  return "";
}


function exportOptionDist() {
  var mylist = document.getElementById("myList");
  document.getElementById("defaultGrid").value = mylist.options[mylist.selectedIndex].value;
}

function exportOptionRating() {
  let defaultHiddenRating_error_message = check_for_float(defaultHiddenRating.value, 0, 50000000000);
  if (

      defaultHiddenRating_error_message

  ) {

      defaultHiddenRating_errors.innerHTML = defaultHiddenRating_error_message;

  } else {

      var defaultScale = document.getElementById("defaultScale");
      document.getElementById("defaultRating").value = parseFloat(defaultScale.options[defaultScale.selectedIndex].value) * parseFloat(defaultHiddenRating.value);

  }
}

function exportOptionFarmRating() {
  let defaultRating_error_message = check_for_float(defaultRating.value, 0, 50000000000);
  if (

      defaultRating_error_message

  ) {

      defaultRating_errors.innerHTML = defaultRating_error_message;

  } else {

      var defaultWec = document.getElementById("defaultWec");
      document.getElementById("defaultFarmRating").value = (parseFloat(defaultWec.value) * parseFloat(defaultRating.value)) / 1000;

  }
}

function exportOptionFarmRating2() {
  let defaultRating_error_message = check_for_float(defaultRating.value, 0, 50000000000);
  if (

      defaultRating_error_message

  ) {

      defaultRating_errors.innerHTML = defaultRating_error_message;

  } else {

      var defaultTec = document.getElementById("defaultTec");
      document.getElementById("defaultFarmRating").value = (parseFloat(defaultTec.value) * parseFloat(defaultRating.value));

  }
}

function exportOptionFarmRating3() {
  let defaultRating_error_message = check_for_float(defaultRating.value, 0, 50000000000);
  if (

      defaultRating_error_message

  ) {

      defaultRating_errors.innerHTML = defaultRating_error_message;

  } else {

      var defaultTec = document.getElementById("defaultTec");
      document.getElementById("defaultFarmRating").value = (parseFloat(defaultTec.value) * parseFloat(defaultRating.value));

  }
}




// function exportOptionVessel() {
//   var myListVessel = document.getElementById("myListVessel");
//   document.getElementById("defaultDPvh").value = myListVessel.options[myListVessel.selectedIndex].value;
// }


// function exportOptionTrench() {
//   var mylist3 = document.getElementById("myList3");
//   document.getElementById("defaultCableInstall").value = mylist3.options[mylist3.selectedIndex].value;
// }

function exportOptionElecPrice() {
  var myListElecPrice = document.getElementById("myListElecPrice");
  document.getElementById("defaultElecPrice").value = myListElecPrice.options[myListElecPrice.selectedIndex].value;
}

function exportOptionAvailability() {
  var myListAvailability = document.getElementById("myListAvailability");
  document.getElementById("defaultAv").value = myListAvailability.options[myListAvailability.selectedIndex].value;
}

function exportOptionInter() {
  var myListInter = document.getElementById("myListInter");
  document.getElementById("defaultCableInterCost").value = myListInter.options[myListInter.selectedIndex].value;
}


function exportOptionIntra() {
  var myListIntra = document.getElementById("myListIntra");
  document.getElementById("defaultCableIntraCost").value = myListIntra.options[myListIntra.selectedIndex].value;
}









//**************************** WAVE CALCULATIONS ****************************//





function calcAep1() {

  let defaultAep_error_message = check_for_float(defaultAep.value, 1, 100000000000);
  let defaultWec_error_message = check_for_float(defaultWec.value, 0, 1000);
  // let defaultEff_error_message = check_for_float(defaultEff.value, 0, 100);
  let defaultAv_error_message = check_for_float(defaultAv.value, 0, 100);
  let defaultWak_error_message = check_for_float(defaultWak.value, 0, 100);
  let defaultLin_error_message = check_for_float(defaultLin.value, 0, 100);





  if (

      defaultAep_error_message ||
      defaultWec_error_message || defaultAv_error_message || defaultWak_error_message || defaultLin_error_message

  ) {

      defaultAep_errors.innerHTML = defaultAep_error_message;
      defaultWec_errors.innerHTML = defaultWec_error_message;
      // defaultEff_errors.innerHTML = defaultEff_error_message;
      defaultAv_errors.innerHTML = defaultAv_error_message;
      defaultWak_errors.innerHTML = defaultWak_error_message;
      defaultLin_errors.innerHTML = defaultLin_error_message;

  } else {

      let wecsAep_Final = (parseFloat(defaultAep.value) * parseFloat(defaultScale.value)) * (parseFloat(defaultAv.value) / 100);
      let farmAep = (parseFloat(wecsAep_Final) * parseFloat(defaultWec.value)) - ((parseFloat(defaultLin.value) / 100) * parseFloat(wecsAep_Final)) - ((parseFloat(defaultWak.value) / 100) * parseFloat(wecsAep_Final));
      console.log("farmAep: " + farmAep);

      document.getElementById("totaep").value = farmAep.toFixed(0);

  }

}



// function exportOptionCapFact1() {
//     let defaultCapFact_error_message = check_for_float(defaultCapFact.value, 0, 50000000000);
//     if (

//         defaultCapFact_error_message

//     ) {

//         defaultCapFact_errors.innerHTML = defaultCapFact_error_message;

//     } else {

//         var totaep = document.getElementById("totaep");
//         var defaultFarmRating = document.getElementById("defaultFarmRating"); 
//         document.getElementById("defaultCapFact").value = (parseFloat(totaep.value) / (parseFloat(defaultFarmRating.value) * 8760)).toFixed(2);

//     }
// }




function calcCapex1() {

  let defaultWec_error_message = check_for_float(defaultWec.value, 0, 1000);

  let defaultRating_error_message = check_for_float(defaultRating.value, 0, 500000000);

  let defaultFarmRating_error_message = check_for_float(defaultFarmRating.value, 0, 500000000);

//   let defaultCapFact_error_message = check_for_float(defaultCapFact.value, 0, 500000000);

  let defaultPreDevCost_error_message = check_for_float(defaultPreDevCost.value, 0, 500000000);

  let defaultWecCost_error_message = check_for_float(defaultWecCost.value, 0, 500000000);

  let defaultDepth_error_message = check_for_float(defaultDepth.value, 0, 500000000);

  let defaultPort_error_message = check_for_float(defaultPort.value, 0, 500000000);


  let defaultMoor_error_message = check_for_float(defaultMoor.value, 0, 500000000);
  let defaultFound_error_message = check_for_float(defaultFound.value, 0, 500000000);
  let defaultCableInterLength_error_message = check_for_float(defaultCableInterLength.value, 0, 500000000);
  let defaultCableInterCost_error_message = check_for_float(defaultCableInterCost.value, 0, 500000000);
  let defaultCableIntraLength_error_message = check_for_float(defaultCableIntraLength.value, 0, 500000000);
  let defaultCableIntraCost_error_message = check_for_float(defaultCableIntraCost.value, 0, 500000000);
  let defaultOnElec_error_message = check_for_float(defaultOnElec.value, 0, 500000000);
  // let defaultOffSub_error_message = check_for_float(defaultOffSub.value, 0, 500000000);

  // let defaultDays_error_message = check_for_float(defaultDays.value, 0, 500000000);

  let defaultDPvmob_error_message = check_for_float(defaultDPvmob.value, 0, 500000000);
  let defaultDPvdr_error_message = check_for_float(defaultDPvdr.value, 0, 500000000);
  let defaultDPvfr_error_message = check_for_float(defaultDPvfr.value, 0, 500000000);
  let defaultDPvs_error_message = check_for_float(defaultDPvs.value, 0, 500000000);

  let defaultTugvmob_error_message = check_for_float(defaultTugvmob.value, 0, 500000000);
  let defaultTugvdr_error_message = check_for_float(defaultTugvdr.value, 0, 500000000);
  let defaultTugvfr_error_message = check_for_float(defaultTugvfr.value, 0, 500000000);
  let defaultTugvs_error_message = check_for_float(defaultTugvs.value, 0, 500000000);
  
  let defaultFmInstall_error_message = check_for_float(defaultFmInstall.value, 0, 500000000);
  let defaultDevicesPerVis_error_message = check_for_float(defaultDevicesPerVis.value, 0, 500000000);
  let defaultDw_error_message = check_for_float(defaultDw.value, 0, 500000000);
  let defaultHoursOnSite_error_message = check_for_float(defaultHoursOnSite.value, 0, 500000000);
  let defaultOffLog_error_message = check_for_float(defaultOffLog.value, 0, 500000000);
  let defaultArrayCableCost_error_message = check_for_float(defaultArrayCableCost.value, 0, 500000000);
  let defaultCableInstall_error_message = check_for_float(defaultCableInstall.value, 0, 500000000);
  let defaultDec_error_message = check_for_float(defaultDec.value, 0, 500000000);


  if (

      defaultWec_error_message ||

      defaultRating_error_message || defaultFarmRating_error_message ||

    //   defaultCapFact_error_message ||

      defaultPreDevCost_error_message ||

      defaultWecCost_error_message ||

      defaultDepth_error_message || 

      defaultPort_error_message || 

      defaultMoor_error_message || defaultFound_error_message || defaultFmInstall_error_message || 
      defaultCableInterLength_error_message || defaultCableInterCost_error_message || defaultCableIntraLength_error_message ||
      defaultCableIntraCost_error_message || defaultOnElec_error_message || // defaultOffSub_error_message ||

      // defaultDays_error_message || 

      defaultDPvmob_error_message || defaultDPvdr_error_message || defaultDPvfr_error_message || defaultDPvs_error_message || 
      defaultTugvmob_error_message || defaultTugvdr_error_message || defaultTugvfr_error_message || defaultTugvs_error_message ||

      defaultDevicesPerVis_error_message ||
      defaultDw_error_message || defaultHoursOnSite_error_message || defaultOffLog_error_message ||
      defaultArrayCableCost_error_message || defaultCableInstall_error_message ||

      defaultDec_error_message

  ) {

      defaultWec_errors.innerHTML = defaultWec_error_message;

      defaultRating_errors.innerHTML = defaultRating_error_message;
      defaultFarmRating_errors.innerHTML = defaultFarmRating_error_message;

    //   defaultCapFact_errors.innerHTML = defaultCapFact_error_message;

      defaultPreDevCost_errors.innerHTML = defaultPreDevCost_error_message;

      defaultWecCost_errors.innerHTML = defaultWecCost_error_message;

      defaultDepthCost_errors.innerHTML = defaultDepthCost_error_message;

      defaultPortCost_errors.innerHTML = defaultPortCost_error_message;

      defaultFmInstall_errors.innerHTML = defaultFmInstall_error_message;
      // defaultGen_errors.innerHTML = defaultGen_error_message;
      defaultMoor_errors.innerHTML = defaultMoor_error_message;
      defaultFound_errors.innerHTML = defaultFound_error_message;
      defaultCableInterLength_errors.innerHTML = defaultCableInterLength_error_message;
      defaultCableInterCost_errors.innerHTML = defaultCableInterCost_error_message;
      defaultCableIntraLength_errors.innerHTML = defaultCableIntraLength_error_message;
      defaultCableIntraCost_errors.innerHTML = defaultCableIntraCost_error_message;
      defaultOnElec_errors.innerHTML = defaultOnElec_error_message;
      // defaultOffSub_errors.innerHTML = defaultOffSub_error_message;

      // defaultDays_errors.innerHTML = defaultDays_error_message;

      defaultDPvdr_errors.innerHTML = defaultDPvdr_error_message;
      defaultDPvs_errors.innerHTML = defaultDPvs_error_message;
      defaultDPmob_errors.innerHTML = defaultDPmob_error_message;
      defaultDPvfr_errors.innerHTML = defaultDPvfr_error_message;

      defaultTugvh_errors.innerHTML = defaultTugvh_error_message;
      defaultTugvs_errors.innerHTML = defaultTugvs_error_message;
      defaultTugvmob_errors.innerHTML = defaultTugvmob_error_message;
      defaultTugvfr_errors.innerHTML = defaultTugvfr_error_message;

      defaultDevicesPerVis_errors.innerHTML = defaultDevicesPerVis_error_message;
      defaultDw_errors.innerHTML = defaultDw_error_message;
      defaultHoursOnSite_errors.innerHTML = defaultHoursOnSite_error_message;
      defaultOffLog_errors.innerHTML = defaultOffLog_error_message;
      defaultArrayCableCost_errors.innerHTML = defaultArrayCableCost_error_message;
      defaultCableInstall_errors.innerHTML = defaultCableInstall_error_message;

      defaultDec_error_message_errors.innerHTML = defaultDec_error_message_error_message;



  } else {

      // preliminary parameters 


      var predevCosts1 = parseFloat(defaultPreDevCost.value) * parseFloat(defaultFarmRating.value);
      var predevCosts = Math.round(predevCosts1);
      console.log("predevCosts: " + predevCosts);

      var deviceCosts1 = (parseFloat(defaultWecCost.value) * parseFloat(defaultFarmRating.value)) * ((1-0.15)**(Math.log(parseFloat(defaultWec.value))/Math.log(2)));
      var deviceCosts = Math.round(deviceCosts1);
      console.log("deviceCosts: " + deviceCosts);

      var plantCosts1 = (parseFloat(defaultMoor.value) * parseFloat(defaultDepth.value) * (4 * parseFloat(defaultWec.value))) + (parseFloat(defaultFound.value) * parseFloat(defaultFarmRating.value)) + (parseFloat(defaultCableInterLength.value) * parseFloat(defaultCableInterCost.value)) + (parseFloat(defaultCableIntraLength.value) * parseFloat(defaultCableIntraCost.value)) + (parseFloat(defaultOnElec.value) * parseFloat(defaultFarmRating.value)); // (parseFloat(defaultPto.value) + parseFloat(defaultGen.value) 
      var plantCosts = Math.round(plantCosts1);
      console.log("plantCosts: " + plantCosts);

      var installationCosts1 = 
      (parseFloat(defaultDw.value) * parseFloat(defaultWec.value)) + 
      ((parseFloat(defaultTugvmob.value)) + (parseFloat(defaultWec.value) * ((parseFloat(defaultHoursOnSite.value) + 2 * parseFloat(defaultPort.value) / parseFloat(defaultTugvs.value)) / 24) * parseFloat(defaultTugvdr.value)) + (parseFloat(defaultWec.value) * (parseFloat(defaultHoursOnSite.value) + 2 * parseFloat(defaultPort.value) / parseFloat(defaultTugvs.value)) * parseFloat(defaultTugvfr.value) * parseFloat(defaultFuelCost.value))) + 
      ((parseFloat(defaultDPvmob.value)) + (parseFloat(defaultWec.value) * ((parseFloat(defaultHoursOnSite.value) + 2 * parseFloat(defaultPort.value) / parseFloat(defaultDPvs.value)) / 24) * parseFloat(defaultDPvdr.value)) + (parseFloat(defaultWec.value) * (parseFloat(defaultHoursOnSite.value) + 2 * parseFloat(defaultPort.value) / parseFloat(defaultDPvs.value)) * parseFloat(defaultDPvfr.value) * parseFloat(defaultFuelCost.value))) +
      ((parseFloat(defaultFmInstall.value) * parseFloat(defaultWec.value)) + (parseFloat(defaultCableInterLength.value) * parseFloat(defaultCableInstall.value)) + (parseFloat(defaultCableIntraLength.value) * (parseFloat(defaultArrayCableCost.value))) + (parseFloat(defaultOnElec.value) * parseFloat(defaultFarmRating.value)) + (parseFloat(defaultOffLog.value) * parseFloat(defaultFarmRating.value)))
      
      var installationCosts = Math.round(installationCosts1);
      console.log("installationCosts: " + installationCosts);

      var CapEx_k1 = parseInt(predevCosts) + parseInt(deviceCosts) + parseInt(plantCosts) + parseInt(installationCosts);
      var CapEx_k = Math.round(CapEx_k1);
      console.log("CapEx_k: " + CapEx_k);

      let Decom_k = installationCosts * (defaultDec.value / 100);
      console.log(Decom_k);

      document.getElementById("totcapex").value = CapEx_k.toFixed(0);

      document.getElementById("totdecex").value = Decom_k.toFixed(0);

  }

}


function calcOpex1() {


    let defaultWec_error_message = check_for_float(defaultWec.value, 0, 1000);

    let defaultRating_error_message = check_for_float(defaultRating.value, 0, 500000000);
    let defaultFarmRating_error_message = check_for_float(defaultFarmRating.value, 0, 500000000);

    let defaultPort_error_message = check_for_float(defaultPort.value, 0, 500000000);
  
    let defaultCTVmob_error_message = check_for_float(defaultCTVmob.value, 0, 500000000);
    let defaultCTVvdr_error_message = check_for_float(defaultCTVvdr.value, 0, 500000000);
    let defaultCTVvfr_error_message = check_for_float(defaultCTVvfr.value, 0, 500000000);
    let defaultCTVvs_error_message = check_for_float(defaultCTVvs.value, 0, 500000000);

    let defaultRepairTime_error_message = check_for_float(defaultRepairTime.value, 0, 500000000);
    let defaultTechnicianCost_error_message = check_for_float(defaultTechnicianCost.value, 0, 500000000);
    let defaultNumberTechnicians_error_message = check_for_float(defaultNumberTechnicians.value, 0, 500000000);
    let defaultEquipCost_error_message = check_for_float(defaultEquipCost.value, 0, 500000000);
  
    let defaultFixedOam_error_message = check_for_float(defaultFixedOam.value, 0, 500000000);

  


  if (

      defaultWec_error_message ||

      defaultRating_error_message || defaultFarmRating_error_message ||

      defaultPort_error_message || 

      defaultCTVmob_error_message || defaultCTVvdr_error_message || defaultCTVvfr_error_message || defaultCTVvs_error_message ||

      defaultFixedOam_error_message || defaultRepairTime_error_message || defaultTechnicianCost_error_message || defaultNumberTechnicians_error_message || defaultEquipCost_error_message

  ) {

      defaultWec_errors.innerHTML = defaultWec_error_message;

      defaultRating_errors.innerHTML = defaultRating_error_message;
      defaultFarmRating_errors.innerHTML = defaultFarmRating_error_message;

      defaultPort_errors.innerHTML = defaultPort_error_message;

      defaultCTVvh_errors.innerHTML = defaultCTVvh_error_message;
      defaultCTVvs_errors.innerHTML = defaultCTVvs_error_message;
      defaultCTVmob_errors.innerHTML = defaultCTVmob_error_message;
      defaultCTVvfr_errors.innerHTML = defaultCTVvfr_error_message;

      defaultRepairTime_errors.innerHTML = defaultRepairTime_error_message;
      defaultTechnicianCost_errors.innerHTML = defaultTechnicianCost_error_message;
      defaultNumberTechnicians_errors.innerHTML = defaultNumberTechnicians_error_message;
      defaultEquipCost_errors.innerHTML = defaultEquipCost_error_message;

      defaultFixedOam_errors.innerHTML = defaultFixedOam_error_message;


  } else {

    let fixedOam = parseFloat(defaultFixedOam.value) * parseFloat(defaultFarmRating.value); 
    
    let varOam = 
    (((parseFloat(defaultCTVmob.value)) + (parseFloat(defaultWec.value) * ((1.8 * (parseFloat(defaultRepairTime.value) + 2 * parseFloat(defaultPort.value)/parseFloat(defaultCTVvs.value))/24) * parseFloat(defaultCTVvdr.value))))) +
    ((parseFloat(defaultWec.value) * 1.2 * parseFloat(defaultEquipCost.value)) + ((parseFloat(defaultWec.value) * 1.8 * ((parseFloat(defaultRepairTime.value) + 2 * parseFloat(defaultPort.value) /parseFloat(defaultCTVvs.value))) / 24 ) * parseFloat(defaultCTVvfr.value) * parseFloat(defaultFuelCost.value)) + 
    (parseFloat(defaultWec.value)  * 1.8 * parseFloat(defaultNumberTechnicians.value) * parseFloat(defaultTechnicianCost.value) * parseFloat(defaultRepairTime.value)))
    
    
    let OpEx_k = fixedOam + varOam;

    console.log("fixedOam: " + fixedOam);
    console.log("varOam: " + varOam);
    console.log("OpEx_k: " + OpEx_k);

    document.getElementById("totopex").value = OpEx_k.toFixed(0);

  }

}



function calc_te1() {

  console.log("calculate_lcoe1")

  let n = parseFloat(defaultProjectLife.value);
  let price = parseFloat(defaultElecPrice.value) / 100;
  let E = parseFloat(totaep.value);
  let opex = parseFloat(totopex.value);


  // Discounting OPEX and AEP


  let opexDiscounted = 0
  let sumOpexDiscounted = 0
  let E_Discounted = 0
  let sumEdiscounted = 0


  console.log(n);


  for (let yr = 1; yr < n; yr++) {

      console.log(yr);

      opexDiscounted = (parseFloat(opex)) / ((1 + (parseFloat(defaultDiscountRate.value) / 100)) ** yr);

      sumOpexDiscounted = sumOpexDiscounted + opexDiscounted;

      console.log("opexDiscounted " + opexDiscounted);




      E_Discounted = (parseFloat(E)) / ((1 + (parseFloat(defaultDiscountRate.value) / 100)) ** yr);

      sumEdiscounted = sumEdiscounted + E_Discounted;

      console.log("E_Discounted " + E_Discounted);

  }


  console.log("sumOpexDiscounted " + sumOpexDiscounted);
  console.log("sumEdiscounted " + sumEdiscounted);


  //Discounting DECEX

  let df = 1 / (1 + (parseFloat(defaultDiscountRate.value) / 100)) ** n;
  console.log("df: " + df);

  let decexDiscount = parseFloat(totdecex.value) + (parseFloat(totdecex.value) * parseFloat(df));
  console.log("decexDiscount: " + decexDiscount);


  // Totalling LCS Costs

  let LCS_oef = parseFloat(totcapex.value) + parseFloat(sumOpexDiscounted) + parseFloat(decexDiscount);
  console.log("LCS_oef: " + LCS_oef);


  // Totalling Benefits (for NPV)

  benefits = (parseFloat(sumEdiscounted)) * (parseFloat(price) * 1000);
  console.log("benefits " + benefits);


  // Calculate LCOE and NPV 

  LCOElong1 = parseFloat(LCS_oef) / parseFloat(sumEdiscounted);
  LCOElong2 = LCOElong1 / 10;
  NPVlong = parseFloat(benefits) - parseFloat(LCS_oef);

  LCOE1 = LCOElong1.toFixed(1);
  LCOE2 = LCOElong2.toFixed(1);
  NPV = NPVlong.toFixed(0);


  // Adding Project Name 

  let projectName = defaultProjectName.value;
  console.log("projectName: " + projectName);

  document.getElementById("projectname").value = projectName;


  //Assign the Results 

  lcoe1.value =
      LCOE1;

  lcoe2.value =
      LCOE2;

  npv.value =
      NPV;


}





//**************************** TIDAL CALCULATIONS ****************************//





function calcAep2() {

  let defaultAep_error_message = check_for_float(defaultAep.value, 1, 100000000000);
  let defaultSa_error_message = check_for_float(defaultSa.value, 1, 1000);
  let defaultTec_error_message = check_for_float(defaultTec.value, 0, 1000);
  let defaultEff_error_message = check_for_float(defaultEff.value, 0, 100);
  let defaultAv_error_message = check_for_float(defaultAv.value, 0, 100);
  // let defaultWak_error_message = check_for_float(defaultWak.value, 0, 100);
  // let defaultLin_error_message = check_for_float(defaultLin.value, 0, 100);





  if (

      defaultAep_error_message ||
      defaultSa_error_message || defaultTec_error_message || defaultEff_error_message || defaultAv_error_message // || defaultWak_error_message || defaultLin_error_message

  ) {

      defaultAep_errors.innerHTML = defaultAep_error_message;

      defaultSa_errors.innerHTML = defaultSa_error_message;
      defaultTec_errors.innerHTML = defaultTec_error_message;
      defaultEff_errors.innerHTML = defaultEff_error_message;
      defaultAv_errors.innerHTML = defaultAv_error_message;
      // defaultWak_errors.innerHTML = defaultWak_error_message;
      // defaultLin_errors.innerHTML = defaultLin_error_message;

  } else {

      let tecsAep = 0.5 * (((parseFloat(defaultAep.value) * 2) * parseFloat(defaultSa.value)) * (parseFloat(defaultEff.value) / 100));
      let tecsAep_Final = tecsAep * (parseFloat(defaultAv.value) / 100);
      let farmAep1 = parseFloat(tecsAep_Final) * parseFloat(defaultTec.value);
      let farmAep = farmAep1 - ((parseFloat(defaultLin.value) / 100) * parseFloat(farmAep1)) - ((parseFloat(defaultWak.value) / 100) * parseFloat(farmAep1));
      
      console.log("tecsAep: " + tecsAep);
      console.log("tecsAep_Final: " + tecsAep_Final);
      console.log("farmAep1: " + farmAep1);
      console.log("farmAep: " + farmAep);

      document.getElementById("totaep").value = farmAep.toFixed(0);

  }

}


// function exportOptionCapFact2() {
//     let defaultCapFact_error_message = check_for_float(defaultCapFact.value, 0, 50000000000);
//     if (

//         defaultCapFact_error_message

//     ) {

//         defaultCapFact_errors.innerHTML = defaultCapFact_error_message;

//     } else {

//         var totaep = document.getElementById("totaep");
//         var defaultFarmRating = document.getElementById("defaultFarmRating"); 
      
//         document.getElementById("defaultCapFact").value = (parseFloat(totaep.value) / (parseFloat(defaultFarmRating.value) * 8760)).toFixed(2);;

//     }
// }




function calcCapex2() {


  let defaultRating_error_message = check_for_float(defaultRating.value, 0, 500000000);

  let defaultFarmRating_error_message = check_for_float(defaultFarmRating.value, 0, 500000000);

  // let defaultCapFact_error_message = check_for_float(defaultCapFact.value, 0, 500000000);

  let defaultPreDevCost_error_message = check_for_float(defaultPreDevCost.value, 0, 500000000);

  let defaultTecCost_error_message = check_for_float(defaultTecCost.value, 0, 500000000);

  // let defaultPto_error_message = check_for_float(defaultPto.value, 0, 500000000);
  // let defaultGen_error_message = check_for_float(defaultGen.value, 0, 500000000);
  let defaultMoor_error_message = check_for_float(defaultMoor.value, 0, 500000000);
  let defaultFound_error_message = check_for_float(defaultFound.value, 0, 500000000);
  let defaultCableInterLength_error_message = check_for_float(defaultCableInterLength.value, 0, 500000000);
  let defaultCableInterCost_error_message = check_for_float(defaultCableInterCost.value, 0, 500000000);
  let defaultCableIntraLength_error_message = check_for_float(defaultCableIntraLength.value, 0, 500000000);
  let defaultCableIntraCost_error_message = check_for_float(defaultCableIntraCost.value, 0, 500000000);
  let defaultOnElec_error_message = check_for_float(defaultOnElec.value, 0, 500000000);
  // let defaultOffSub_error_message = check_for_float(defaultOffSub.value, 0, 500000000);

  // let defaultDays_error_message = check_for_float(defaultDays.value, 0, 500000000);

  let defaultDPvmob_error_message = check_for_float(defaultDPvmob.value, 0, 500000000);
  let defaultDPvdr_error_message = check_for_float(defaultDPvdr.value, 0, 500000000);
  let defaultDPvfr_error_message = check_for_float(defaultDPvfr.value, 0, 500000000);
  let defaultDPvs_error_message = check_for_float(defaultDPvs.value, 0, 500000000);

  let defaultTugvmob_error_message = check_for_float(defaultTugvmob.value, 0, 500000000);
  let defaultTugvdr_error_message = check_for_float(defaultTugvdr.value, 0, 500000000);
  let defaultTugvfr_error_message = check_for_float(defaultTugvfr.value, 0, 500000000);
  let defaultTugvs_error_message = check_for_float(defaultTugvs.value, 0, 500000000);

  let defaultDevicesPerVis_error_message = check_for_float(defaultDevicesPerVis.value, 0, 500000000);
  let defaultDw_error_message = check_for_float(defaultDw.value, 0, 500000000);
  let defaultHoursOnSite_error_message = check_for_float(defaultHoursOnSite.value, 0, 500000000);
  let defaultOffLog_error_message = check_for_float(defaultOffLog.value, 0, 500000000);
  let defaultArrayCableCost_error_message = check_for_float(defaultArrayCableCost.value, 0, 500000000);
  let defaultCableInstall_error_message = check_for_float(defaultCableInstall.value, 0, 500000000);
  let defaultDec_error_message = check_for_float(defaultDec.value, 0, 500000000);


  if (

      defaultRating_error_message || defaultFarmRating_error_message ||

      // defaultCapFact_error_message ||

      defaultPreDevCost_error_message ||

      defaultTecCost_error_message ||

      defaultMoor_error_message || defaultFound_error_message || // defaultPto_error_message || defaultGen_error_message || 
      defaultCableInterLength_error_message || defaultCableInterCost_error_message || defaultCableIntraLength_error_message ||
      defaultCableIntraCost_error_message || defaultOnElec_error_message || // defaultOffSub_error_message ||

      // defaultDays_error_message || 
      defaultDPvmob_error_message || defaultDPvdr_error_message || defaultDPvfr_error_message || defaultDPvs_error_message || 
      defaultTugvmob_error_message || defaultTugvdr_error_message || defaultTugvfr_error_message || defaultTugvs_error_message ||
      defaultDevicesPerVis_error_message ||
      defaultDw_error_message || defaultHoursOnSite_error_message || defaultOffLog_error_message ||
      defaultArrayCableCost_error_message || defaultCableInstall_error_message ||

      defaultDec_error_message

  ) {

      defaultRating_errors.innerHTML = defaultRating_error_message;
      defaultFarmRating_errors.innerHTML = defaultFarmRating_error_message;

      // defaultCapFact_errors.innerHTML = defaultCapFact_error_message;

      defaultPreDevCost_errors.innerHTML = defaultPreDevCost_error_message;

      defaultTecCost_errors.innerHTML = defaultTecCost_error_message;

      // defaultPto_errors.innerHTML = defaultPto_error_message;
      // defaultGen_errors.innerHTML = defaultGen_error_message;
      defaultMoor_errors.innerHTML = defaultMoor_error_message;
      defaultFound_errors.innerHTML = defaultFound_error_message;
      defaultCableInterLength_errors.innerHTML = defaultCableInterLength_error_message;
      defaultCableInterCost_errors.innerHTML = defaultCableInterCost_error_message;
      defaultCableIntraLength_errors.innerHTML = defaultCableIntraLength_error_message;
      defaultCableIntraCost_errors.innerHTML = defaultCableIntraCost_error_message;
      defaultOnElec_errors.innerHTML = defaultOnElec_error_message;
      // defaultOffSub_errors.innerHTML = defaultOffSub_error_message;

      // defaultDays_errors.innerHTML = defaultDays_error_message;


      defaultDPvdr_errors.innerHTML = defaultDPvdr_error_message;
      defaultDPvs_errors.innerHTML = defaultDPvs_error_message;
      defaultDPmob_errors.innerHTML = defaultDPmob_error_message;
      defaultDPvfr_errors.innerHTML = defaultDPvfr_error_message;

      defaultTugvh_errors.innerHTML = defaultTugvh_error_message;
      defaultTugvs_errors.innerHTML = defaultTugvs_error_message;
      defaultTugvmob_errors.innerHTML = defaultTugvmob_error_message;
      defaultTugvfr_errors.innerHTML = defaultTugvfr_error_message;

      defaultDevicesPerVis_errors.innerHTML = defaultDevicesPerVis_error_message;
      defaultDw_errors.innerHTML = defaultDw_error_message;
      defaultHoursOnSite_errors.innerHTML = defaultHoursOnSite_error_message;
      defaultOffLog_errors.innerHTML = defaultOffLog_error_message;
      defaultArrayCableCost_errors.innerHTML = defaultArrayCableCost_error_message;
      defaultCableInstall_errors.innerHTML = defaultCableInstall_error_message;

      defaultDec_error_message_errors.innerHTML = defaultDec_error_message_error_message;



  } else {

      // preliminary parameters 

      var daysToSite = 2 * ((parseFloat(defaultPort.value)) / (parseFloat(defaultDPvs.value) * parseFloat(defaultHoursOnSite.value) * parseFloat(defaultDevicesPerVis.value))); //* (defaultDPvdr.value/1000000);
      console.log("daysToSite: " + daysToSite);

      var predevCosts1 = parseFloat(defaultPreDevCost.value) * parseFloat(defaultFarmRating.value);
      var predevCosts = Math.round(predevCosts1);
      console.log("predevCosts: " + predevCosts);

      var deviceCosts1 = parseFloat(defaultTecCost.value) * parseFloat(defaultTec.value);
      var deviceCosts = Math.round(deviceCosts1);
      console.log("deviceCosts: " + deviceCosts);

      var plantCosts1 = (parseFloat(defaultMoor.value) * parseFloat(defaultDepth.value)) + (parseFloat(defaultFound.value) * parseFloat(defaultFarmRating.value)) + (parseFloat(defaultCableInterLength.value) * parseFloat(defaultCableInterCost.value)) + (parseFloat(defaultCableIntraLength.value) * parseFloat(defaultCableIntraCost.value)) + (parseFloat(defaultOnElec.value) * parseFloat(defaultFarmRating.value)); // (parseFloat(defaultPto.value) + parseFloat(defaultGen.value) 
      var plantCosts = Math.round(plantCosts1);
      console.log("plantCosts: " + plantCosts);


      var installationCosts1 = (parseFloat(defaultDw.value) * parseFloat(defaultDays.value)) + ((parseFloat(defaultDays.value) + parseFloat(daysToSite)) * parseFloat(defaultDPvdr.value)) + (parseFloat(defaultDays.value) * parseFloat(defaultOffLog.value)) + (parseFloat(defaultArrayCableCost.value) * parseFloat(defaultCableInstall.value)); // 1000 is random capacity facto
      var installationCosts = Math.round(installationCosts1);
      console.log("installationCosts: " + installationCosts);

      var CapEx_k1 = parseInt(predevCosts) + parseInt(deviceCosts) + parseInt(plantCosts) + parseInt(installationCosts);
      var CapEx_k = Math.round(CapEx_k1);
      console.log("CapEx_k: " + CapEx_k);

      let Decom_k = installationCosts * (defaultDec.value / 100);
      console.log("Decom_k: " + Decom_k);

      document.getElementById("totcapex").value = CapEx_k.toFixed(0);

      document.getElementById("totdecex").value = Decom_k.toFixed(0);


  }

}


function calcOpex2() {

    let defaultTec_error_message = check_for_float(defaultTec.value, 0, 1000);

    let defaultRating_error_message = check_for_float(defaultRating.value, 0, 500000000);
    let defaultFarmRating_error_message = check_for_float(defaultFarmRating.value, 0, 500000000);
  
    let defaultCTVmob_error_message = check_for_float(defaultCTVmob.value, 0, 500000000);
    let defaultCTVvdr_error_message = check_for_float(defaultCTVvdr.value, 0, 500000000);
    let defaultCTVvfr_error_message = check_for_float(defaultCTVvfr.value, 0, 500000000);
    let defaultCTVvs_error_message = check_for_float(defaultCTVvs.value, 0, 500000000);
  
    let defaultFixedOam_error_message = check_for_float(defaultFixedOam.value, 0, 500000000);
    let defaultRepairTime_error_message = check_for_float(defaultRepairTime.value, 0, 500000000);
    let defaultTechnicianCost_error_message = check_for_float(defaultTechnicianCost.value, 0, 500000000);
    let defaultEquipCost_error_message = check_for_float(defaultEquipCost.value, 0, 500000000);




  if (

    defaultTec_error_message ||

    defaultRating_error_message || defaultFarmRating_error_message ||

    defaultCTVmob_error_message || defaultCTVvdr_error_message || defaultCTVvfr_error_message || defaultCTVvs_error_message ||

    defaultFixedOam_error_message || defaultRepairTime_error_message || defaultTechnicianCost_error_message || defaultEquipCost_error_message

  ) {

      defaultRating_errors.innerHTML = defaultRating_error_message;
      defaultFarmRating_errors.innerHTML = defaultFarmRating_error_message;

      defaultCTVvh_errors.innerHTML = defaultCTVvh_error_message;
      defaultCTVvs_errors.innerHTML = defaultCTVvs_error_message;
      defaultCTVmob_errors.innerHTML = defaultCTVmob_error_message;
      defaultCTVvfr_errors.innerHTML = defaultCTVvfr_error_message;

      defaultFixedOam_errors.innerHTML = defaultFixedOam_error_message;
      defaultRepairTime_errors.innerHTML = defaultRepairTime_error_message;
      defaultTechnicianCost_errors.innerHTML = defaultTechnicianCost_error_message;
      defaultEquipCost_errors.innerHTML = defaultEquipCost_error_message;


  } else {

      let fixedOam = parseFloat(defaultFixedOam.value) * parseFloat(defaultFarmRating.value);
      let varOam = parseFloat(defaultDw.value);
      let OpEx_k = fixedOam + varOam;

      console.log("fixedOam: " + fixedOam);
      console.log("varOam: " + varOam);
      console.log("OpEx_k: " + OpEx_k);

      document.getElementById("totopex").value = OpEx_k.toFixed(0);

  }

}


function calc_te2() {

  console.log("calculate_lcoe2")


  let n = parseFloat(defaultProjectLife.value);
  let price = parseFloat(defaultElecPrice.value) / 100;
  let E = parseFloat(totaep.value);
  let opex = parseFloat(totopex.value);


  // Discounting OPEX and AEP


  let opexDiscounted = 0
  let sumOpexDiscounted = 0
  let E_Discounted = 0
  let sumEdiscounted = 0


  console.log(n);


  for (let yr = 1; yr < n; yr++) {

      console.log(yr);

      opexDiscounted = (parseFloat(opex)) / ((1 + (parseFloat(defaultDiscountRate.value) / 100)) ** yr);

      sumOpexDiscounted = sumOpexDiscounted + opexDiscounted;

      console.log("opexDiscounted " + opexDiscounted);




      E_Discounted = (parseFloat(E)) / ((1 + (parseFloat(defaultDiscountRate.value) / 100)) ** yr);

      sumEdiscounted = sumEdiscounted + E_Discounted;

      console.log("E_Discounted " + E_Discounted);

  }


  console.log("sumOpexDiscounted " + sumOpexDiscounted);
  console.log("sumEdiscounted " + sumEdiscounted);


  //Discounting DECEX

  let df = 1 / (1 + (parseFloat(defaultDiscountRate.value) / 100)) ** n;
  console.log("df: " + df);

  let decexDiscount = parseFloat(totdecex.value) + (parseFloat(totdecex.value) * parseFloat(df));
  console.log("decexDiscount: " + decexDiscount);


  // Totalling LCS Costs

  let LCS_oef = parseFloat(totcapex.value) + parseFloat(sumOpexDiscounted) + parseFloat(decexDiscount);
  console.log("LCS_oef: " + LCS_oef);


  // Totalling Benefits (for NPV)

  benefits = (parseFloat(sumEdiscounted)) * (parseFloat(price) * 1000);
  console.log("benefits " + benefits);


  // Calculate LCOE and NPV 

  LCOElong1 = parseFloat(LCS_oef) / parseFloat(sumEdiscounted);
  LCOElong2 = LCOElong1 / 10;
  NPVlong = parseFloat(benefits) - parseFloat(LCS_oef);

  LCOE1 = LCOElong1.toFixed(1);
  LCOE2 = LCOElong2.toFixed(1);
  NPV = NPVlong.toFixed(0);


  // Adding Project Name 

  let projectName = defaultProjectName.value;
  console.log("projectName: " + projectName);

  document.getElementById("projectname").value = projectName;


  //Assign the Results 

  lcoe1.value =
      LCOE1;

  lcoe2.value =
      LCOE2;

  npv.value =
      NPV;


}










function calcAep3() {

    let defaultAep_error_message = check_for_float(defaultAep.value, 1, 100000000000);
    let defaultTec_error_message = check_for_float(defaultTec.value, 0, 1000);
    // let defaultEff_error_message = check_for_float(defaultEff.value, 0, 100);
    let defaultAv_error_message = check_for_float(defaultAv.value, 0, 100);
    let defaultWak_error_message = check_for_float(defaultWak.value, 0, 100);
    let defaultLin_error_message = check_for_float(defaultLin.value, 0, 100);
  
  
  
  
  
    if (
  
        defaultAep_error_message ||
        defaultTec_error_message || defaultAv_error_message || defaultWak_error_message || defaultLin_error_message
  
    ) {
  
        defaultAep_errors.innerHTML = defaultAep_error_message;
        defaultTec_errors.innerHTML = defaultTec_error_message;
        // defaultEff_errors.innerHTML = defaultEff_error_message;
        defaultAv_errors.innerHTML = defaultAv_error_message;
        defaultWak_errors.innerHTML = defaultWak_error_message;
        defaultLin_errors.innerHTML = defaultLin_error_message;
  
    } else {
  
        let tecsAep_Final = (parseFloat(defaultAep.value) * parseFloat(defaultScale.value)) * (parseFloat(defaultAv.value) / 100);
        let farmAep = (parseFloat(tecsAep_Final) * parseFloat(defaultTec.value)) - ((parseFloat(defaultLin.value) / 100) * parseFloat(tecsAep_Final)) - ((parseFloat(defaultWak.value) / 100) * parseFloat(tecsAep_Final));
        console.log("farmAep: " + farmAep);
  
        document.getElementById("totaep").value = farmAep.toFixed(0);
  
    }
  
  }


// function exportOptionCapFact3() {
//     let defaultCapFact_error_message = check_for_float(defaultCapFact.value, 0, 50000000000);
//     if (

//         defaultCapFact_error_message

//     ) {

//         defaultCapFact_errors.innerHTML = defaultCapFact_error_message;

//     } else {

//         var totaep = document.getElementById("totaep");
//         var defaultFarmRating = document.getElementById("defaultFarmRating"); 
//         document.getElementById("defaultCapFact").value = (parseFloat(totaep.value) / (parseFloat(defaultFarmRating.value) * 8760)).toFixed(2);;

//     }
// }


function calcCapex3() {

    let defaultTec_error_message = check_for_float(defaultTec.value, 0, 1000);

    let defaultRating_error_message = check_for_float(defaultRating.value, 0, 500000000);
  
    let defaultFarmRating_error_message = check_for_float(defaultFarmRating.value, 0, 500000000);
  
  //   let defaultCapFact_error_message = check_for_float(defaultCapFact.value, 0, 500000000);
  
    let defaultPreDevCost_error_message = check_for_float(defaultPreDevCost.value, 0, 500000000);
  
    let defaultTecCost_error_message = check_for_float(defaultTecCost.value, 0, 500000000);
  
    let defaultDepth_error_message = check_for_float(defaultDepth.value, 0, 500000000);
  
    let defaultPort_error_message = check_for_float(defaultPort.value, 0, 500000000);
  
  
    let defaultMoor_error_message = check_for_float(defaultMoor.value, 0, 500000000);
    let defaultFound_error_message = check_for_float(defaultFound.value, 0, 500000000);
    let defaultCableInterLength_error_message = check_for_float(defaultCableInterLength.value, 0, 500000000);
    let defaultCableInterCost_error_message = check_for_float(defaultCableInterCost.value, 0, 500000000);
    let defaultCableIntraLength_error_message = check_for_float(defaultCableIntraLength.value, 0, 500000000);
    let defaultCableIntraCost_error_message = check_for_float(defaultCableIntraCost.value, 0, 500000000);
    let defaultOnElec_error_message = check_for_float(defaultOnElec.value, 0, 500000000);
    // let defaultOffSub_error_message = check_for_float(defaultOffSub.value, 0, 500000000);
  
    // let defaultDays_error_message = check_for_float(defaultDays.value, 0, 500000000);
  
    let defaultDPvmob_error_message = check_for_float(defaultDPvmob.value, 0, 500000000);
    let defaultDPvdr_error_message = check_for_float(defaultDPvdr.value, 0, 500000000);
    let defaultDPvfr_error_message = check_for_float(defaultDPvfr.value, 0, 500000000);
    let defaultDPvs_error_message = check_for_float(defaultDPvs.value, 0, 500000000);
  
    let defaultTugvmob_error_message = check_for_float(defaultTugvmob.value, 0, 500000000);
    let defaultTugvdr_error_message = check_for_float(defaultTugvdr.value, 0, 500000000);
    let defaultTugvfr_error_message = check_for_float(defaultTugvfr.value, 0, 500000000);
    let defaultTugvs_error_message = check_for_float(defaultTugvs.value, 0, 500000000);
    
    let defaultFmInstall_error_message = check_for_float(defaultFmInstall.value, 0, 500000000);
    let defaultDevicesPerVis_error_message = check_for_float(defaultDevicesPerVis.value, 0, 500000000);
    let defaultDw_error_message = check_for_float(defaultDw.value, 0, 500000000);
    let defaultHoursOnSite_error_message = check_for_float(defaultHoursOnSite.value, 0, 500000000);
    let defaultOffLog_error_message = check_for_float(defaultOffLog.value, 0, 500000000);
    let defaultArrayCableCost_error_message = check_for_float(defaultArrayCableCost.value, 0, 500000000);
    let defaultCableInstall_error_message = check_for_float(defaultCableInstall.value, 0, 500000000);
    let defaultDec_error_message = check_for_float(defaultDec.value, 0, 500000000);
  
  
    if (
  
        defaultTec_error_message ||
  
        defaultRating_error_message || defaultFarmRating_error_message ||
  
      //   defaultCapFact_error_message ||
  
        defaultPreDevCost_error_message ||
  
        defaultTecCost_error_message ||
  
        defaultDepth_error_message || 
  
        defaultPort_error_message || 
  
        defaultMoor_error_message || defaultFound_error_message || defaultFmInstall_error_message || 
        defaultCableInterLength_error_message || defaultCableInterCost_error_message || defaultCableIntraLength_error_message ||
        defaultCableIntraCost_error_message || defaultOnElec_error_message || // defaultOffSub_error_message ||
  
        // defaultDays_error_message || 
  
        defaultDPvmob_error_message || defaultDPvdr_error_message || defaultDPvfr_error_message || defaultDPvs_error_message || 
        defaultTugvmob_error_message || defaultTugvdr_error_message || defaultTugvfr_error_message || defaultTugvs_error_message ||
  
        defaultDevicesPerVis_error_message ||
        defaultDw_error_message || defaultHoursOnSite_error_message || defaultOffLog_error_message ||
        defaultArrayCableCost_error_message || defaultCableInstall_error_message ||
  
        defaultDec_error_message
  
    ) {
  
        defaultTec_errors.innerHTML = defaultTec_error_message;
  
        defaultRating_errors.innerHTML = defaultRating_error_message;
        defaultFarmRating_errors.innerHTML = defaultFarmRating_error_message;
  
      //   defaultCapFact_errors.innerHTML = defaultCapFact_error_message;
  
        defaultPreDevCost_errors.innerHTML = defaultPreDevCost_error_message;
  
        defaultTecCost_errors.innerHTML = defaultTecCost_error_message;
  
        defaultDepthCost_errors.innerHTML = defaultDepthCost_error_message;
  
        defaultPortCost_errors.innerHTML = defaultPortCost_error_message;
  
        defaultFmInstall_errors.innerHTML = defaultFmInstall_error_message;
        // defaultGen_errors.innerHTML = defaultGen_error_message;
        defaultMoor_errors.innerHTML = defaultMoor_error_message;
        defaultFound_errors.innerHTML = defaultFound_error_message;
        defaultCableInterLength_errors.innerHTML = defaultCableInterLength_error_message;
        defaultCableInterCost_errors.innerHTML = defaultCableInterCost_error_message;
        defaultCableIntraLength_errors.innerHTML = defaultCableIntraLength_error_message;
        defaultCableIntraCost_errors.innerHTML = defaultCableIntraCost_error_message;
        defaultOnElec_errors.innerHTML = defaultOnElec_error_message;
        // defaultOffSub_errors.innerHTML = defaultOffSub_error_message;
  
        // defaultDays_errors.innerHTML = defaultDays_error_message;
  
        defaultDPvdr_errors.innerHTML = defaultDPvdr_error_message;
        defaultDPvs_errors.innerHTML = defaultDPvs_error_message;
        defaultDPmob_errors.innerHTML = defaultDPmob_error_message;
        defaultDPvfr_errors.innerHTML = defaultDPvfr_error_message;
  
        defaultTugvh_errors.innerHTML = defaultTugvh_error_message;
        defaultTugvs_errors.innerHTML = defaultTugvs_error_message;
        defaultTugvmob_errors.innerHTML = defaultTugvmob_error_message;
        defaultTugvfr_errors.innerHTML = defaultTugvfr_error_message;
  
        defaultDevicesPerVis_errors.innerHTML = defaultDevicesPerVis_error_message;
        defaultDw_errors.innerHTML = defaultDw_error_message;
        defaultHoursOnSite_errors.innerHTML = defaultHoursOnSite_error_message;
        defaultOffLog_errors.innerHTML = defaultOffLog_error_message;
        defaultArrayCableCost_errors.innerHTML = defaultArrayCableCost_error_message;
        defaultCableInstall_errors.innerHTML = defaultCableInstall_error_message;
  
        defaultDec_error_message_errors.innerHTML = defaultDec_error_message_error_message;
  
  
  
    } else {
  
        // preliminary parameters 
  
  
        var predevCosts1 = parseFloat(defaultPreDevCost.value) * parseFloat(defaultFarmRating.value);
        var predevCosts = Math.round(predevCosts1);
        console.log("predevCosts: " + predevCosts);
  
        var deviceCosts1 = (parseFloat(defaultTecCost.value) * parseFloat(defaultFarmRating.value));
        var deviceCosts = Math.round(deviceCosts1);
        console.log("deviceCosts: " + deviceCosts);
  
        var plantCosts1 = (parseFloat(defaultMoor.value) * parseFloat(defaultDepth.value) * (4 * parseFloat(defaultTec.value))) + (parseFloat(defaultFound.value) * parseFloat(defaultFarmRating.value)) + (parseFloat(defaultCableInterLength.value) * parseFloat(defaultCableInterCost.value)) + (parseFloat(defaultCableIntraLength.value) * parseFloat(defaultCableIntraCost.value)) + (parseFloat(defaultOnElec.value) * parseFloat(defaultFarmRating.value)); // (parseFloat(defaultPto.value) + parseFloat(defaultGen.value) 
        var plantCosts = Math.round(plantCosts1);
        console.log("plantCosts: " + plantCosts);
  
        var installationCosts1 = 
        (parseFloat(defaultDw.value) * parseFloat(defaultTec.value)) + 
        ((parseFloat(defaultTugvmob.value)) + (parseFloat(defaultTec.value) * ((parseFloat(defaultHoursOnSite.value) + 2 * parseFloat(defaultPort.value) / parseFloat(defaultTugvs.value)) / 24) * parseFloat(defaultTugvdr.value)) + (parseFloat(defaultTec.value) * (parseFloat(defaultHoursOnSite.value) + 2 * parseFloat(defaultPort.value) / parseFloat(defaultTugvs.value)) * parseFloat(defaultTugvfr.value) * parseFloat(defaultFuelCost.value))) + 
        ((parseFloat(defaultDPvmob.value)) + (parseFloat(defaultTec.value) * ((parseFloat(defaultHoursOnSite.value) + 2 * parseFloat(defaultPort.value) / parseFloat(defaultDPvs.value)) / 24) * parseFloat(defaultDPvdr.value)) + (parseFloat(defaultTec.value) * (parseFloat(defaultHoursOnSite.value) + 2 * parseFloat(defaultPort.value) / parseFloat(defaultDPvs.value)) * parseFloat(defaultDPvfr.value) * parseFloat(defaultFuelCost.value))) +
        ((parseFloat(defaultFmInstall.value) * parseFloat(defaultTec.value)) + (parseFloat(defaultCableInterLength.value) * parseFloat(defaultCableInstall.value)) + (parseFloat(defaultCableIntraLength.value) * (parseFloat(defaultArrayCableCost.value))) + (parseFloat(defaultOnElec.value) * parseFloat(defaultFarmRating.value)) + (parseFloat(defaultOffLog.value) * parseFloat(defaultFarmRating.value)))
        
        var installationCosts = Math.round(installationCosts1);
        console.log("installationCosts: " + installationCosts);
  
        var CapEx_k1 = (parseInt(predevCosts) + parseInt(deviceCosts) + parseInt(plantCosts) + parseInt(installationCosts)) * ((1-0.19)**(Math.log(parseFloat(defaultTec.value))/Math.log(2)));
        var CapEx_k = Math.round(CapEx_k1);
        console.log("CapEx_k: " + CapEx_k);
  
        let Decom_k = installationCosts * (defaultDec.value / 100);
        console.log(Decom_k);
  
        document.getElementById("totcapex").value = CapEx_k.toFixed(0);
  
        document.getElementById("totdecex").value = Decom_k.toFixed(0);
  
    }
  
  }


function calcOpex3() {


    let defaultTec_error_message = check_for_float(defaultTec.value, 0, 1000);

    let defaultRating_error_message = check_for_float(defaultRating.value, 0, 500000000);
    let defaultFarmRating_error_message = check_for_float(defaultFarmRating.value, 0, 500000000);

    let defaultPort_error_message = check_for_float(defaultPort.value, 0, 500000000);
  
    let defaultCTVmob_error_message = check_for_float(defaultCTVmob.value, 0, 500000000);
    let defaultCTVvdr_error_message = check_for_float(defaultCTVvdr.value, 0, 500000000);
    let defaultCTVvfr_error_message = check_for_float(defaultCTVvfr.value, 0, 500000000);
    let defaultCTVvs_error_message = check_for_float(defaultCTVvs.value, 0, 500000000);

    let defaultRepairTime_error_message = check_for_float(defaultRepairTime.value, 0, 500000000);
    let defaultTechnicianCost_error_message = check_for_float(defaultTechnicianCost.value, 0, 500000000);
    let defaultNumberTechnicians_error_message = check_for_float(defaultNumberTechnicians.value, 0, 500000000);
    let defaultEquipCost_error_message = check_for_float(defaultEquipCost.value, 0, 500000000);
  
    let defaultFixedOam_error_message = check_for_float(defaultFixedOam.value, 0, 500000000);

  


  if (

      defaultTec_error_message ||

      defaultRating_error_message || defaultFarmRating_error_message ||

      defaultPort_error_message || 

      defaultCTVmob_error_message || defaultCTVvdr_error_message || defaultCTVvfr_error_message || defaultCTVvs_error_message ||

      defaultFixedOam_error_message || defaultRepairTime_error_message || defaultTechnicianCost_error_message || defaultNumberTechnicians_error_message || defaultEquipCost_error_message

  ) {

      defaultTec_errors.innerHTML = defaultTec_error_message;

      defaultRating_errors.innerHTML = defaultRating_error_message;
      defaultFarmRating_errors.innerHTML = defaultFarmRating_error_message;

      defaultPort_errors.innerHTML = defaultPort_error_message;

      defaultCTVvh_errors.innerHTML = defaultCTVvh_error_message;
      defaultCTVvs_errors.innerHTML = defaultCTVvs_error_message;
      defaultCTVmob_errors.innerHTML = defaultCTVmob_error_message;
      defaultCTVvfr_errors.innerHTML = defaultCTVvfr_error_message;

      defaultRepairTime_errors.innerHTML = defaultRepairTime_error_message;
      defaultTechnicianCost_errors.innerHTML = defaultTechnicianCost_error_message;
      defaultNumberTechnicians_errors.innerHTML = defaultNumberTechnicians_error_message;
      defaultEquipCost_errors.innerHTML = defaultEquipCost_error_message;

      defaultFixedOam_errors.innerHTML = defaultFixedOam_error_message;


  } else {

    let fixedOam = parseFloat(defaultFixedOam.value) * parseFloat(defaultFarmRating.value); 
    
    let varOam = 
    (((parseFloat(defaultCTVmob.value)) + (parseFloat(defaultTec.value) * ((1.8 * (parseFloat(defaultRepairTime.value) + 2 * parseFloat(defaultPort.value)/parseFloat(defaultCTVvs.value))/24) * parseFloat(defaultCTVvdr.value))))) +
    ((parseFloat(defaultTec.value) * 1.2 * parseFloat(defaultEquipCost.value)) + ((parseFloat(defaultTec.value) * 1.8 * ((parseFloat(defaultRepairTime.value) + 2 * parseFloat(defaultPort.value) /parseFloat(defaultCTVvs.value))) / 24 ) * parseFloat(defaultCTVvfr.value) * parseFloat(defaultFuelCost.value)) + 
    (parseFloat(defaultTec.value)  * 1.8 * parseFloat(defaultNumberTechnicians.value) * parseFloat(defaultTechnicianCost.value) * parseFloat(defaultRepairTime.value)))
    
    
    let OpEx_k = fixedOam + varOam;

    console.log("fixedOam: " + fixedOam);
    console.log("varOam: " + varOam);
    console.log("OpEx_k: " + OpEx_k);

    document.getElementById("totopex").value = OpEx_k.toFixed(0);

  }

}



function calc_te3() {

    console.log("calculate_lcoe1")

    let n = parseFloat(defaultProjectLife.value);
    let price = parseFloat(defaultElecPrice.value) / 100;
    let E = parseFloat(totaep.value);
    let opex = parseFloat(totopex.value);
  
  
    // Discounting OPEX and AEP
  
  
    let opexDiscounted = 0
    let sumOpexDiscounted = 0
    let E_Discounted = 0
    let sumEdiscounted = 0
  
  
    console.log(n);
  
  
    for (let yr = 1; yr < n; yr++) {
  
        console.log(yr);
  
        opexDiscounted = (parseFloat(opex)) / ((1 + (parseFloat(defaultDiscountRate.value) / 100)) ** yr);
  
        sumOpexDiscounted = sumOpexDiscounted + opexDiscounted;
  
        console.log("opexDiscounted " + opexDiscounted);
  
  
  
  
        E_Discounted = (parseFloat(E)) / ((1 + (parseFloat(defaultDiscountRate.value) / 100)) ** yr);
  
        sumEdiscounted = sumEdiscounted + E_Discounted;
  
        console.log("E_Discounted " + E_Discounted);
  
    }
  
  
    console.log("sumOpexDiscounted " + sumOpexDiscounted);
    console.log("sumEdiscounted " + sumEdiscounted);
  
  
    //Discounting DECEX
  
    let df = 1 / (1 + (parseFloat(defaultDiscountRate.value) / 100)) ** n;
    console.log("df: " + df);
  
    let decexDiscount = parseFloat(totdecex.value) + (parseFloat(totdecex.value) * parseFloat(df));
    console.log("decexDiscount: " + decexDiscount);
  
  
    // Totalling LCS Costs
  
    let LCS_oef = parseFloat(totcapex.value) + parseFloat(sumOpexDiscounted) + parseFloat(decexDiscount);
    console.log("LCS_oef: " + LCS_oef);
  
  
    // Totalling Benefits (for NPV)
  
    benefits = (parseFloat(sumEdiscounted)) * (parseFloat(price) * 1000);
    console.log("benefits " + benefits);
  
  
    // Calculate LCOE and NPV 
  
    LCOElong1 = parseFloat(LCS_oef) / parseFloat(sumEdiscounted);
    LCOElong2 = LCOElong1 / 10;
    NPVlong = parseFloat(benefits) - parseFloat(LCS_oef);
  
    LCOE1 = LCOElong1.toFixed(1);
    LCOE2 = LCOElong2.toFixed(1);
    NPV = NPVlong.toFixed(0);
  
  
    // Adding Project Name 
  
    let projectName = defaultProjectName.value;
    console.log("projectName: " + projectName);
  
    document.getElementById("projectname").value = projectName;
  
  
    //Assign the Results 
  
    lcoe1.value =
        LCOE1;
  
    lcoe2.value =
        LCOE2;
  
    npv.value =
        NPV;
  
  
  }






require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/BasemapToggle",
  "esri/layers/GroupLayer",
  "esri/layers/FeatureLayer",
  "esri/widgets/LayerList",
  "esri/widgets/DistanceMeasurement2D",
  "esri/widgets/AreaMeasurement2D",
  "esri/Graphic",
  "esri/layers/TileLayer",
  "esri/layers/WMSLayer",
  "esri/layers/support/WMSSublayer",
  "esri/widgets/Sketch",
  "esri/layers/GraphicsLayer",
  "esri/widgets/Expand",
  "esri/request",
  "esri/layers/support/Field",
  "esri/rest/query",
  "esri/rest/support/Query"


], function (
  Map,
  MapView,
  BasemapToggle,
  GroupLayer,
  FeatureLayer,
  LayerList,
  DistanceMeasurement2D,
  AreaMeasurement2D,
  Graphic,
  TileLayer,
  WMSLayer,
  WMSSublayer,
  Sketch,
  GraphicsLayer,
  Expand,
  request,
  Field,
  query,
  Query



) {



  var activeWidget = null;

  const sitesUrl = "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/SiteSelectionCriteriaClip/FeatureServer/0" //Feature Layer rather than Feature Service


  var marineConservationZones = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/MCZ_UK/FeatureServer",
      title: "Marine Conservation Zones",
      visible: true,
      opacity: 0.25,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "yellow"
          }
      }
  });

  var marineSPAs = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/SPA_Coastal_and_Offshore_All/FeatureServer",
      title: "Coastal and Marine SPAs",
      visible: true,
      opacity: 0.25,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "mediumorchid"
          }
      }
  });

  var marineSACs = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/SAC_Coastal_and_Offshore_All/FeatureServer",
      title: "Coastal and Marine SACs",
      visible: true,
      opacity: 0.25,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "salmon"
          }
      }
  });

  var protectedSitesGroupLayer = new GroupLayer({
      title: "Protected Areas",
      visible: false,
      visibilityMode: "inclusive",
      layers: [marineConservationZones, marineSPAs, marineSACs]
  });

  var environmentGroupLayer = new GroupLayer({
      title: "Environment",
      visible: true,
      visibilityMode: "inclusive",
      layers: [protectedSitesGroupLayer],
  });



  var excavatableToShore = new TileLayer({
      url: "https://tiles.arcgis.com/tiles/59pPgTnLCRBan6mn/arcgis/rest/services/Excavating_Classification/MapServer",
      title: "Excavatable to Shore",
      visible: false,
      opacity: 0.8,
      maxScale: 100,
      listMode: "hide-children",
      popupEnabled: true
  });



  var seabedSubstrate = new TileLayer({
      url: "https://tiles.arcgis.com/tiles/59pPgTnLCRBan6mn/arcgis/rest/services/Folk_7_Classification/MapServer",
      title: "Substrate",
      visible: false,
      opacity: 0.8,
      listMode: "hide-children",
      popupEnabled: true
  });

  var bottomGroupLayer = new GroupLayer({
      title: "Seabed",
      visible: true,
      visibilityMode: "inclusive",
      layers: [excavatableToShore, seabedSubstrate],
  });



  var bathyContour = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Bathymetry_Contours/FeatureServer",
      title: "Depth Contours (m)",
      visible: true,
      labelingInfo:
      {
          symbol: {
              type: "text",  // autocasts as new TextSymbol()
              color: "black",
              haloColor: "white",
              haloSize: 1,
          },
          labelExpressionInfo: {
              expression: "$feature.Contour"
          },
          labelPosition: "parallel",
      },
      opacity: 1,
      listMode: "hide-children",
      minScale: 2000000,
      popupEnabled: true,
  });


  var bathyLayer = new TileLayer({
      url: "https://tiles.arcgis.com/tiles/59pPgTnLCRBan6mn/arcgis/rest/services/EMODnet_Bathymetry/MapServer",
      title: "Water Depth",
      visible: true,
      opacity: 0.5,
      listMode: "hide-children",
      maxScale: 0,
      popupEnabled: true
  });

  var depthGroupLayer = new GroupLayer({
      title: "Bathymetry",
      visible: false,
      visibilityMode: "inclusive",
      layers: [bathyContour, bathyLayer],
  });




  var seabedGroupLayer = new GroupLayer({
      title: "Subsurface",
      visible: true,
      visibilityMode: "inclusive",
      layers: [bottomGroupLayer, depthGroupLayer],
  });


  var ferryRoutes = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Ferryroutes_SelkieSeas/FeatureServer",
      title: "Ferry Routes",
      visible: false,
      opacity: 1,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-line",
              color: "dodgerblue",
          }
      }
  });


  var fishingDensity = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Fish_poly_10pc/FeatureServer",
      title: "Fishing Vessel Density (AIS)",
      visible: false,
      opacity: 0.75,
  });



  var shippingDensity = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Ship_poly_10pc/FeatureServer",
      title: "Shipping Traffic Density (AIS)",
      visible: false,
      opacity: 0.75,
  });

  var tSs = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Traffic_Seperation_Scheme/FeatureServer",
      title: "Traffic Seperation Scheme (TSS)",
      visible: false,
  });



  var trafficGroupLayer = new GroupLayer({
      title: "Marine Traffic",
      visible: true,
      visibilityMode: "inclusive",
      layers: [ferryRoutes, fishingDensity, shippingDensity, tSs],
  });



  // var eireTerritorialSea = new FeatureLayer({
  //     url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/IRL_Territorial_Sea/FeatureServer",
  //     title: "Ireland's Territorial Seas",
  //     visible: true,
  //     opacity: 1,
  //     renderer: {
  //         type: "simple",
  //         symbol: {
  //             type: "simple-line",
  //             color: "#283747",
  //         }
  //     }
  // });

  // var ukTerritorialSea = new FeatureLayer({
  //     url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/UK_Territorial_Sea/FeatureServer",
  //     title: "UK's Territorial Seas",
  //     visible: true,
  //     opacity: 1,
  //     renderer: {
  //         type: "simple",
  //         symbol: {
  //             type: "simple-line",
  //             color: "#283747",
  //         }
  //     }
  // });

  // var isleOfManTerritorialSea = new FeatureLayer({
  //     url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Isle_of_Man_territorial_sea/FeatureServer",
  //     title: "Isle of Man's Territorial Seas",
  //     visible: true,
  //     opacity: 1,
  //     renderer: {
  //         type: "simple",
  //         symbol: {
  //             type: "simple-line",
  //             color: "#283747",
  //         }
  //     }
  // });

  // var marinePlanAreaWales = new FeatureLayer({
  //     url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/WAL_MPA/FeatureServer",
  //     title: "Wales' Marine Plan Area",
  //     visible: false,
  //     opacity: 1,
  //     renderer: {
  //         type: "simple",
  //         symbol: {
  //             type: "simple-line",
  //             color: "orange",
  //         }
  //     }
  // });

  // var marinePlanAreaIreland = new FeatureLayer({
  //     url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/IRL_MPA/FeatureServer",
  //     title: "Ireland's Marine Plan Area",
  //     visible: false,
  //     opacity: 1,
  //     renderer: {
  //         type: "simple",
  //         symbol: {
  //             type: "simple-line",
  //             color: "orange",
  //         }
  //     }
  // });

  var selkieTerritorialSeas = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/12NM_Limits_SelkieArea/FeatureServer",
      title: "Territorial Seas (12NM Limit)",
      visible: true,
      opacity: 1,
  });


  var selkieArea = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/EU_IRL_WAL_Region/FeatureServer",
      title: "Selkie Project Regions",
      visible: false,
      opacity: 0.5,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "teal",
              outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "yellow",
                  width: "1.25px",
              }
          }
      }
  });



  var localSeaAreas = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/SelkieSeaAreas/FeatureServer",
      title: "Local Sea Areas",
      visible: false,
      opacity: 0.15,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "teal",
              outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "yellow",
                  width: "1.25px",
              }
          }
      }
  });




  var eezUkandIrl = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/EEZ_IRL_and_UK/FeatureServer",
      title: "EEZ Limits (Eire and UK)",
      visible: true,
      opacity: 1,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "transparent",
              outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "red",
                  width: "1px"
              }
          }
      }
  });

  var selkieStudyArea = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Study_Area/FeatureServer",
      title: "Selkie Study Area",
      visible: true,
      opacity: 1,
  });

  var oredpAssessmentZones = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/OREDP_Assessment_Zone/FeatureServer",
      title: "Ireland's OREDP Assessment Zones",
      visible: false,
      opacity: 1,
  });



  var administrativGroupLayer = new GroupLayer({
      title: "Administrative",
      visible: true,
      visibilityMode: "inclusive",
      layers: [oredpAssessmentZones, localSeaAreas, selkieArea, selkieStudyArea, selkieTerritorialSeas, eezUkandIrl],
  });



  var ukWindDeploymentSite = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/WindSiteAgreements_EnglandWalesAndNI_TheCrownEstate/FeatureServer",
      title: "UK Wind Power Lease Areas",
      visible: false,
      opacity: 0.8,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "transparent",
              outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "coral",
                  width: "1px"
              }
          }
      }
  });


  var irlWindDeploymentSite = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/windfarm_update2021/FeatureServer",
      title: "Ireland Wind Energy Projects",
      visible: false,
      opacity: 0.8,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "transparent",
              outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "crimson",
                  width: "1px"
              }
          }
      },
      popupTemplate: {
          title: "Planned Green H2 Production Plant",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Name",
                          label: "Name",
                      },
                      {
                          fieldName: "Location",
                          label: "Location",
                      },
                      {
                          fieldName: "Type",
                          label: "Type",
                      },
                      {
                          fieldName: "Capacity",
                          label: "Capacity",
                      },
                      {
                          fieldName: "Developer",
                          label: "Developer",
                      },
                      {
                          fieldName: "Link",
                          label: "Source Link",
                      }
                  ]
              }
          ]
      }
  });

  var ukWaveDeploymentSite = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Offshore_Wave_Site_Agreements_England_Wales__NI/FeatureServer",
      title: "UK Wave Energy Site Agreements",
      visible: false,
      opacity: 0.8,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "transparent",
              outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "seagreen",
                  width: "1px"
              }
          }
      }
  });

  var ukTidalDeploymentSite = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Offshore_Tidal_Stream_Site_Agreements_England_Wales__NI/FeatureServer",
      title: "UK Tidal Stream Site Agreements",
      visible: false,
      opacity: 0.8,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "transparent",
              outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "blueviolet",
                  width: "1px"
              }
          }
      }
  });

  var galwayBayTestSite = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Galway_Bay_1_4_Scale_Test_Site_Boundary/FeatureServer",
      title: "SmartBay 1/4 scale Wave Energy Test Site",
      visible: false,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "transparent",
              outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "orange",
                  width: "1px"
              }
          }
      }
  });

  var galwayBayTestSiteCableRoute = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Galway_Bay_1_4_Scale_Test_Site_Cable_Route/FeatureServer",
      title: "SmartBay Cable Route",
      visible: false,
      opacity: 1,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-line",
              color: "red",
          }
      }
  });

//   var westWaveDeploymentSite = new FeatureLayer({
//       url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/WestWave_WEC_deployment_zone/FeatureServer",
//       title: "WestWave - Proposed Deployment Site (Dormant)",
//       visible: false,
//       renderer: {
//           type: "simple",
//           symbol: {
//               type: "simple-fill",
//               color: "transparent",
//               outline: {
//                   // autocasts as new SimpleLineSymbol()
//                   color: "steelblue",
//                   width: "1px"
//               }
//           }
//       }
//   });

//   var westWaveCableCorridor = new FeatureLayer({
//       url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/WestWave_cable_corridor_zone/FeatureServer",
//       title: "WestWave - Proposed Cable Route Corridor (Dormant)",
//       visible: false,
//       renderer: {
//           type: "simple",
//           symbol: {
//               type: "simple-fill",
//               color: "transparent",
//               outline: {
//                   // autocasts as new SimpleLineSymbol()
//                   color: "green",
//                   width: "1px"
//               }
//           }
//       }
//   });

//   var westernStarWaveDeploymentSite = new FeatureLayer({
//       url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/WesternStarWEC/FeatureServer",
//       title: "Western Star WEC Project",
//       visible: false,
//       opacity: 1,
//   });


  var ametsDeploymentSite = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Atlantic_Marine_Energy_Test_Site_Boundary/FeatureServer",
      title: "AMETS - Deployment Site",
      visible: false,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "transparent",
              outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "steelblue",
                  width: "1px"
              }
          }
      }
  });

  var ametsCableCorridor = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Atlantic_Marine_Energy_Test_Site_Cable_Route/FeatureServer",
      title: "AMETS - Cable Route Corridor",
      visible: false,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-fill",
              color: "transparent",
              outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: "green",
                  width: "1px"
              }
          }
      }
  });



  var oreInfrastructureGroupLayer = new GroupLayer({
      title: "Sites of Interest",
      visible: true,
      visibilityMode: "inclusive",
      layers: [irlWindDeploymentSite, ukWindDeploymentSite, ukWaveDeploymentSite, ukTidalDeploymentSite, galwayBayTestSiteCableRoute, galwayBayTestSite, ametsCableCorridor, ametsDeploymentSite],
  });




  var cableRoutes = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/SubseaCables_Eire_and_UK/FeatureServer",
      title: "Sub-Sea Cable Routes",
      visible: false,
      opacity: 1,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-line",
              color: "red",
          }
      }
  });

  var roadNetwork = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Roadnetwork_Eire_and_UK/FeatureServer",
      title: "Major Road Network",
      visible: false,
      opacity: 1,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-line",
              color: "seagreen",
          }
      }
  });

  var railNetwork = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Railnetwork_Eire_and_UK/FeatureServer",
      title: "Rail Network",
      visible: false,
      opacity: 1,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-line",
              color: "darkgoldenrod",
          }
      }
  });

  var airportsIrlUk = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Airfields_Eire_and_UK/FeatureServer",
      title: "Airports",
      visible: false,
      opacity: 1,
      renderer: {
          type: "simple",
          symbol: {
              type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
              color: "mediumpurple",
              outline: {
                  color: [255, 255, 255, 0.7],
                  width: 0.5
              },
              size: 7.5
          }
      }
  });

  var greenHydrogenDistance = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/H2_Proxim_clip/FeatureServer",
      title: "Green H2 Proximity",
      visible: false,
      opacity: 0.5,
      popupTemplate: {
          title: "Distance to H2 Plant (km)",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "distance",
                          label: "Distance (km)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });



  var greenHydrogenPlantsSelkie = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Future_H2_Production_Plant/FeatureServer",
      title: "Planned Green H2 Production Plants",
      visible: true,
      popupTemplate: {
          title: "Planned Green H2 Production Plant",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Name",
                          label: "Name",
                      },
                      {
                          fieldName: "Location",
                          label: "Location",
                      },
                      {
                          fieldName: "Capcity",
                          label: "Capacity",
                      },
                      {
                          fieldName: "Start",
                          label: "Start",
                      },
                      {
                          fieldName: "Source",
                          label: "Data Source",
                      }
                  ]
              }
          ]
      }
  });

  var hydrogenGroupLayer = new GroupLayer({
      title: "H2",
      visible: false,
      visibilityMode: "inclusive",
      layers: [greenHydrogenDistance, greenHydrogenPlantsSelkie],
  });

  var coastalSubstationsIrlUKDistance = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/SubstationsProximity_shp/FeatureServer",
      title: "Substation Proximity",
      visible: false,
      opacity: 0.5,
      popupTemplate: {
          title: "Distance from Substation (km)",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "distance",
                          label: "Distance (km)",
                          format: {
                              digitSeparator: true,
                              places: 0
                          }
                      }
                  ]
              }
          ]
      }
  });



  var coastalSubstationsIrlUK = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Substation/FeatureServer",
      title: "Coastal Substations (≥ 110 kV)",
      visible: true,
      popupTemplate: {
          title: "Coastal Substation",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Substati_1",
                          label: "Name",
                      },
                      {
                          fieldName: "OPERATING_",
                          label: "Operating kV",
                          format: {
                              digitSeparator: true,
                              places: 0
                          }
                      },
                      {
                          fieldName: "dataAccess",
                          label: "Data Source",
                      }
                  ]
              }
          ]
      }
  });



  var gridGroupLayer = new GroupLayer({
      title: "Grid",
      visible: false,
      visibilityMode: "inclusive",
      layers: [coastalSubstationsIrlUKDistance, coastalSubstationsIrlUK],
  });


  var mrePortsDistance = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/MRE_Ports_Proxim_shp/FeatureServer",
      title: "ORE Port Proximity",
      visible: false,
      opacity: 0.5,
      popupTemplate: {
          title: "ORE Port Proximity",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "gridcode",
                          label: "Distance to Port (km)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });


  var mrePorts = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/ORE_Port/FeatureServer",
      title: "ORE Ports",
      visible: true,
      popupTemplate: {
          title: "ORE Port",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Port_Name",
                          label: "Name",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var portsGroupLayer = new GroupLayer({
      title: "Ports",
      visible: false,
      visibilityMode: "inclusive",
      layers: [mrePortsDistance, mrePorts],
  });

  var infrastructureGroupLayer = new GroupLayer({
      title: "Infrastructure",
      visible: true,
      visibilityMode: "inclusive",
      layers: [roadNetwork, railNetwork, cableRoutes, airportsIrlUk, hydrogenGroupLayer, gridGroupLayer, portsGroupLayer],
  });




  var swhWinter = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_SWH_Winter_Selkie/FeatureServer",
      title: "Hs Winter Mean",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Winter Mean",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_Signi",
                          label: "Significant Wave Height (m)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var swhSpring = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_SWH_Spring_Selkie/FeatureServer",
      title: "Hs Spring Mean",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Spring Mean",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_Signi",
                          label: "Significant Wave Height (m)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var swhSummer = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_SWH_Summer_Selkie/FeatureServer",
      title: "Hs Summer Mean",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Summer Mean",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_Signi",
                          label: "Significant Wave Height (m)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var swhAutumn = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_SWH_Autumn_Selkie/FeatureServer",
      title: "Hs Autumn Mean",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Autumn Mean",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_Signi",
                          label: "Significant Wave Height (m)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });





  var mwpWinter = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_T10_Winter_Selkie/FeatureServer",
      title: "Te Winter Mean",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Winter Mean",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_Spect",
                          label: "Wave Period (s)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var mwpSpring = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_T10_Spring_Erase/FeatureServer",
      title: "Te Spring Mean",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Spring Mean",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_Spect",
                          label: "Wave Period (s)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var mwpSummer = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_T10_Summer_Selkie/FeatureServer",
      title: "Te Summer Mean",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Summer Mean",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_Spect",
                          label: "Wave Period (s)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var mwpAutumn = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_T10_Autumn_Selkie/FeatureServer",
      title: "Te Autumn Mean",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Autumn Mean",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_Spect",
                          label: "Wave Period (s)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var swhGroupLayer = new GroupLayer({
      title: "Significant Wave Height (m)",
      visible: true,
      visibilityMode: "inclusive",
      layers: [swhWinter, swhAutumn, swhSummer, swhSpring],
  });

  var mwpGroupLayer = new GroupLayer({
      title: "Wave Period (s)",
      visible: true,
      visibilityMode: "inclusive",
      layers: [mwpWinter, mwpAutumn, mwpSummer, mwpSpring],
  });


  var wavesGroupLayer = new GroupLayer({
      title: "Waves",
      visible: true,
      visibilityMode: "inclusive",
      layers: [mwpGroupLayer, swhGroupLayer],
  });



  
  var wsWinter = new FeatureLayer({
    url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_T10_Winter_Selkie/FeatureServer",
    title: "Winter Mean Wind Speed",
    visible: false,
    opacity: 0.75,
    popupTemplate: {
        title: "Winter Mean",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "Mean_Spect",
                        label: "Wave Period (s)",
                        format: {
                            digitSeparator: true,
                            places: 2
                        }
                    }
                ]
            }
        ]
    }
});

var wsSpring = new FeatureLayer({
    url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_T10_Spring_Erase/FeatureServer",
    title: "Spring Mean Wind Speed",
    visible: false,
    opacity: 0.75,
    popupTemplate: {
        title: "Spring Mean",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "Mean_Spect",
                        label: "Wave Period (s)",
                        format: {
                            digitSeparator: true,
                            places: 2
                        }
                    }
                ]
            }
        ]
    }
});

var wsSummer = new FeatureLayer({
    url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_T10_Summer_Selkie/FeatureServer",
    title: "Summer Mean Wind Speed",
    visible: false,
    opacity: 0.75,
    popupTemplate: {
        title: "Summer Mean",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "Mean_Spect",
                        label: "Wave Period (s)",
                        format: {
                            digitSeparator: true,
                            places: 2
                        }
                    }
                ]
            }
        ]
    }
});

var wsAutumn = new FeatureLayer({
    url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/NWS_T10_Autumn_Selkie/FeatureServer",
    title: "Autumn Mean Wind Speed",
    visible: false,
    opacity: 0.75,
    popupTemplate: {
        title: "Autumn Mean",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "Mean_Spect",
                        label: "Wave Period (s)",
                        format: {
                            digitSeparator: true,
                            places: 2
                        }
                    }
                ]
            }
        ]
    }
});



var windGroupLayer = new GroupLayer({
    title: "Wind",
    visible: true,
    visibilityMode: "inclusive",
    layers: [],
});



  var maxSpcv = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Max_SPCV/FeatureServer",
      title: "Maximum Spring Peak Current Velocity (m/s)",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Maximum Spring Peak Current Velocity (m/s)",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Max_SPCV_m",
                          label: "Velocity (m/s)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var meanSpcv = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Mean_SPCV/FeatureServer",
      title: "Mean Spring Peak Current Velocity (m/s)",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Mean Spring Peak Current Velocity (m/s)",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_SPCV_",
                          label: "Velocity (m/s)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var meanPcv = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Mean_PCV/FeatureServer",
      title: "Mean Peak Current Velocity (m/s)",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Mean Peak Current Velocity (m/s)",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_PCV_m",
                          label: "Velocity (m/s)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var meanNpcv = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Mean_NPCV/FeatureServer",
      title: "Mean Neap Peak Current Velocity (m/s)",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Mean Neap Peak Current Velocity (m/s)",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_NPCV_",
                          label: "Velocity (m/s)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var maxPcv = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Max_PCV/FeatureServer",
      title: "Maximum Peak Current Velocity (m/s)",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Maximum Peak Current Velocity (m/s)",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Mean_PCV_m",
                          label: "Velocity (m/s)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });
  
  var maxNpcv = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Max_NPCV/FeatureServer",
      title: "Maximum Neap Peak Current Velocity (m/s)",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Maximum Neap Peak Current Velocity (m/s)",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Max_NPCV_m",
                          label: "Velocity (m/s)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });





  var tidesGroupLayer = new GroupLayer({
      title: "Currents",
      visible: true,
      visibilityMode: "inclusive",
      layers: [maxSpcv, maxNpcv, maxPcv, meanSpcv, meanNpcv, meanPcv],
  });










  // var liveWav = new WMSLayer({
  //     url: "https://nrt.cmems-du.eu/thredds/wms/MetO-NWS-WAV-hi",
  //     title: "Waves",
  //     popupEnabled: true,
  //     sublayers: [
  //         {
  //             name: "VTM10",
  //             title: "Wave Period (s)",
  //             visible: false,
  //             opacity: 0.75,
  //             useViewTime: true,
  //             legendEnabled: true,
  //             legendUrl: "http://nrt.cmems-du.eu/thredds/wms/MetO-NWS-WAV-hi?REQUEST=GetLegendGraphic&LAYER=VTM10&PALETTE=rainbow",
  //             queryable: true,
  //             popupEnabled: true
  //         },
  //         {
  //             name: "VHM0",
  //             title: "Significant Wave Height (m)",
  //             visible: false,
  //             opacity: 0.75,
  //             legendEnabled: true,
  //             legendUrl: "http://nrt.cmems-du.eu/thredds/wms/MetO-NWS-WAV-hi?REQUEST=GetLegendGraphic&LAYER=VHM0&PALETTE=rainbow",
  //             queryable: true,
  //             popupEnabled: true
  //         }

  //     ]

  // });

  // var liveCur = new WMSLayer({
  //     url: "https://nrt.cmems-du.eu/thredds/wms/MetO-NWS-PHY-hi-SSC",
  //     title: "Currents",
  //     sublayers: [
  //         {
  //             name: "sea_water_velocity",
  //             title: "Ocean Current Velocity (m/s)",
  //             visible: false,
  //             opacity: 0.75,
  //             legendEnabled: true,
  //             legendUrl: "http://nrt.cmems-du.eu/thredds/wms/MetO-NWS-PHY-qh-SSC?REQUEST=GetLegendGraphic&LAYER=sea_water_velocity&PALETTE=rainbow"
  //         }

  //     ]

  // });


  // var liveDataGroupLayer = new GroupLayer({
  //     title: "Live Data",
  //     visible: true,
  //     visibilityMode: "inclusive",
  //     layers: [liveCur, liveWav],
  // });




  var oceanographyGroupLayer = new GroupLayer({
      title: "Oceanography",
      visible: true,
      visibilityMode: "inclusive",
      layers: [tidesGroupLayer, wavesGroupLayer],
  });


  var meanAnnualWaveResourceSelkie = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Mean_theoretical_wave_power_NWS/FeatureServer",
      title: "Mean Annual Wave Energy (kW/m)",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Theoretical Wave Energy Resource",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Wave_Power",
                          label: "Mean Annual Power (kW/m)",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });


  var waveGroupLayer = new GroupLayer({
      title: "Wave Energy",
      visible: true,
      visibilityMode: "inclusive",
      layers: [meanAnnualWaveResourceSelkie],
  });





  var annualTp = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Total_TPP/FeatureServer",
      title: "Annual Tidal Energy (Wh/m²)",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Annual Tidal Energy",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Total_TPP",
                          label: "Wh/m²",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var annualStp = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Total_STPP/FeatureServer",
      title: "Annual Spring Tidal Energy (Wh/m²)",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Annual Spring Tidal Energy",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Total_STPP",
                          label: "Wh/m²",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var annualNtp = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Total_NTPP_Clip/FeatureServer",
      title: "Annual Neap Tidal Energy (Wh/m²)",
      visible: false,
      opacity: 0.75,
      popupTemplate: {
          title: "Annual Neap Tidal Energy",
          content: [
              {
                  type: "fields",
                  fieldInfos: [
                      {
                          fieldName: "Total_NTPP",
                          label: "Wh/m²",
                          format: {
                              digitSeparator: true,
                              places: 2
                          }
                      }
                  ]
              }
          ]
      }
  });

  var tideGroupLayer = new GroupLayer({
      title: "Tidal Energy",
      visible: true,
      visibilityMode: "inclusive",
      layers: [annualStp, annualNtp, annualTp],
  });



  var resourceGroupLayer = new GroupLayer({
      title: "Ocean Energy Resources",
      visible: true,
      visibilityMode: "inclusive",
      layers: [tideGroupLayer, waveGroupLayer],
  });




  var template1 = {

      title: '<h2 style="color:black; font-size: 16px">Techno-Economic Calculator</h2>',
      outFields: ['GRIDCODE_1', 'gridcode', 'distance_p', 'distance_g', 'distance_h', 'Rating', 'depth', 'Avail'], // <-specify features that are referenced in content
      content:

          buildPopupContent1 // <- no (), it will parase the fields to the function that are specified in outFields
  };


  var aepGeneric = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Generic_WEC_Power_Matrix_AEP/FeatureServer",
      title: "Generic",
      visible: false,
      opacity: 0.75,
      listMode: "hide-children",
      popupTemplate: template1
  });


  var aepOceanEnergy = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/OceanEnergy_WEC_Power_Matrix_AEP/FeatureServer",
      title: "OWC",
      visible: false,
      opacity: 0.75,
      listMode: "hide-children",
      popupTemplate: template1
  });


  var aepCorPower = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/CorPower_WEC_Power_Matrix_AEP/FeatureServer",
      title: "Point Absorber",
      visible: false,
      opacity: 0.75,
      listMode: "hide-children",
      popupTemplate: template1
  });


//   var aepPontoon = new FeatureLayer({
//       url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Pontoon_WEC_Power_Matrix_AEP/FeatureServer",
//       title: "Pontoon",
//       visible: false,
//       opacity: 0.75,
//       listMode: "hide-children",
//       popupTemplate: template1
//   });


//   var aepLanglee = new FeatureLayer({
//       url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Langlee_WEC_Power_Matrix_AEP/FeatureServer",
//       title: "Langlee",
//       visible: false,
//       opacity: 0.75,
//       listMode: "hide-children",
//       popupTemplate: template1
//   });


//   var aepWaveBob = new FeatureLayer({
//       url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/WaveBob_WEC_Power_Matrix_AEP/FeatureServer",
//       title: "Wavebob",
//       visible: false,
//       opacity: 0.75,
//       listMode: "hide-children",
//       popupTemplate: template1
//   });


//   var aepAWS = new FeatureLayer({
//       url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/AWS_WEC_Power_Matrix_AEP/FeatureServer",
//       title: "AWS",
//       visible: false,
//       opacity: 0.75,
//       listMode: "hide-children",
//       popupTemplate: template1
//   });


//   var aepWaveDragon = new FeatureLayer({
//       url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/WaveDragon_WEC_Power_Matrix_AEP/FeatureServer",
//       title: "Wave Dragon",
//       visible: false,
//       opacity: 0.75,
//       listMode: "hide-children",
//       popupTemplate: template1
//   });


  var aepPelamis = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Pelamis_WEC_Power_Matrix_AEP/FeatureServer",
      title: "Attenuator",
      visible: false,
      opacity: 0.75,
      listMode: "hide-children",
      popupTemplate: template1
  });


//   var aepAquaBuoy = new FeatureLayer({
//       url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/AquaBuoy_WEC_Power_Matrix_AEP/FeatureServer",
//       title: "AquaBuoy",
//       visible: false,
//       opacity: 0.75,
//       listMode: "hide-children",
//       popupTemplate: template1
//   });


//   var aepOyster = new FeatureLayer({
//       url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Oyster_WEC_Power_Matrix_AEP/FeatureServer",
//       title: "Oyster",
//       visible: false,
//       opacity: 0.75,
//       listMode: "hide-children",
//       popupTemplate: template1
//   });


var lcoeGeneric = new FeatureLayer({
    url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/GEN105_LCOE/FeatureServer",
    title: "Generic LCOE",
    visible: false,
    opacity: 0.75,
    listMode: "hide-children",
    popupTemplate: template1
});


var lcoeOwc = new FeatureLayer({
    url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/OWC105_LCOE/FeatureServer",
    title: "OWC LCOE",
    visible: false,
    opacity: 0.75,
    listMode: "hide-children",
    popupTemplate: template1
});


var lcoeAtt = new FeatureLayer({
    url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/ATT105_LCOE/FeatureServer",
    title: "Attenuator LCOE",
    visible: false,
    opacity: 0.75,
    listMode: "hide-children",
    popupTemplate: template1
});

var lcoePa = new FeatureLayer({
    url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/PA105_LCOE/FeatureServer",
    title: "Point Absorber LCOE",
    visible: false,
    opacity: 0.75,
    listMode: "hide-children",
    popupTemplate: template1
});



  function buildPopupContent1(feature) {


      console.log("buildPopupContent1")



      let div = document.createElement("div");

      var attributes = feature.graphic.attributes // <- The attribute information is here



      div.innerHTML =
  
          '<table><tr><td><u>Site Information</u></td></tr>' +
          '<tr><td><i title = "The annual average energy that this WEC will produce at the site you have selected.">Annual Energy (per device): </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultAep" id="defaultAep" style="width: 6em" value="' + attributes.gridcode + '" min=1 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultAep_errors"><i> MWh </i></span></td></tr>' +
          '<tr><td><i title = "The euclidean distance to the nearest ORE port (see ORE Ports layer for reference). Use measure tool to override this value for greater accuracy if desired.">Distance to Port:   </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultPort" id="defaultPort" style="width: 5em" value="' + attributes.distance_p + '" min=1 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultPort_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "The euclidean distance to the nearest existing grid, or Planned H2 poroduction plant (see ORE Ports layer for reference). Use measure tool to override this value for greater accuracy if desired.">Distance to <select class="esri-widget" name="myList" id="myList" onchange="exportOptionDist(); calcAep1(); calcCapex1(); calcOpex1()"><option value="' + attributes.distance_g + '" selected>Grid</option><option value="' + attributes.distance_h + '">H2</option></select>:</i></td><td><input type="number" title = "Value is based on the site you have selected." id="defaultGrid" style="width: 5em" value="' + attributes.distance_g + '" min=1 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultGrid_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "The depth to seabed at the site you have selected based on EMODnet bathymetry data.">Depth to Seabed:   </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultDepth" id="defaultDepth" style="width: 5em" value="' + attributes.depth + '" readonly min=1 /><span id="defaultDepth_errors"><i> m </i></span></td></tr></table>' + '<BR>' +

          '<table><tr><td><u>Project Information</u></td></tr>' +
          '<tr><td><i title = "Choose a name for your project.">Project Name: </i><td><input type="text" title = "It is mandatory to enter a project name." name="defaultProjectName" id="defaultProjectName" style="width: 10em" value="" onchange="calcAep1(); calcCapex1(); calcOpex1()"/></td></tr>' +
          '<tr><td><i title = "The number of years it is expected that the project will be operational.">Project Life: </i><td><input type="number" title ="Default value reference: Têtu and Fernandez Chozas (2021)." name="defaultProjectLife" id="defaultProjectLife" style="width: 4em" value="25" min=1 max=100 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultProjectLife_errors"><i> yrs </i></span></td></tr>' +
          '<tr><td><i title = "The discount rate refers to the interest rate used to determine the present value of future cash flows.">Discount Rate: </i><td><input type="number" title = "Default value reference: N/A." name="defaultDiscountRate" id="defaultDiscountRate" style="width: 4em" value="10" min=1 max=50 onchange="calcAep1(); calcCapex1(); calcOpex1()" /><span id="defaultDiscountRate_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "The electricity price at the project start date. Value given is for 2022."> Electricity Price <select class="esri-widget" name="myListElecPrice" id="myListElecPrice" onchange="exportOptionElecPrice(); calcAep1(); calcCapex1(); calcOpex1()"><option value="43" selected>IRL</option><option value="39">U.K.</option></select>: </i><td><input type="number" title = "Default value references: Electric Ireland (2022) and UK Government (2022)." name="defaultElecPrice" id="defaultElecPrice" style="width: 4em" value="43" min=1 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultElecPrice_errors"><i> c/kWh </i></span></td></tr></table>' + '<BR>' +



          '<table><tr><td><u>Technical Information</u></td></tr>' +
          // '<tr><td><i>WEC Efficiency: </i><td><input type="number" name="defaultEff" id="defaultEff" style="width: 5em" value="40" min=1 max=100 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultEff_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "Availability is defined as the amount of time the device is on hand to produce power and is affected by a number of factors including device reliability and the ability of the device to be accessed for maintenance.">WEC Availability <td><input type="number" title = "Value is based on the site you have selected considering CTV operational limits of 1.5m Hs and 20m/s wind speed")." name="defaultAv" id="defaultAv" style="width: 5em" value="' + attributes.Avail + '" min=1 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultAv_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "The number of Wave Energy Converters to be deployed.">Number of WECs: </i><td><input type="number" title = "Default reference value: N/A." name="defaultWec" id="defaultWec" style="width: 5em" value="' + Math.round(105 / (attributes.Rating/1000)) + '" min=1 max=1000 onchange="exportOptionFarmRating(); calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultWec_errors"><i> units </i></span></td></tr>' +
          '<tr><td><i title = "The scale of the device.">Scale: <td><select class="esri-widget" name="defaultScale" id="defaultScale" onchange="exportOptionRating(); exportOptionFarmRating(); calcAep1(); calcCapex1(); calcOpex1()"><option value="1">1:1</option><option value="0.5">1:2</option><option value="0.25">1:4</option></select></td></tr>' +
          '<tr><td><i title = "This is the power rating (highest power output) of the device you have selected.">Device Rating: </i><td><input type="number" title = "Value is based on the device you have selected." name="defaultRating" id="defaultRating" style="width: 5em" value="' + attributes.Rating + '" min=1 onchange="calcAep1(); calcCapex1(); calcOpex1(); exportOptionFarmRating()"/><span id="defaultRating_errors"><i> kW </i></span></td></tr>' +
          '<tr><td><i title = "This is the total power rating for the farm.">Farm Rating: </i><td><input type="number" title = "Value is based on the device and number of WECs you have selected." name="defaultFarmRating" id="defaultFarmRating" style="width: 5em" value="105" min=1 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultFarmRating_errors"><i> MW </i></span></td></tr>' +
          '<tr><td><i title = "Losses due to array/wake interference within the farm.">Array/Wake Losses (IA): </i><td><input type="number" title = "Default reference value: N/A." name="defaultWak" id="defaultWak" style="width: 5em" value="2.5" min=0 max=100 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultWak_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "Losses incurred during transmission of electricity to export.">Line Losses (IA): </i><td><input type="number" title = "Default reference value: N/A." name="defaultLin" id="defaultLin" style="width: 5em" value="2.5" min=0 max=100 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultLin_errors"><i> % </i></span></td></tr>' +
          // '<tr><td><i title = "The average power output divided by the maximum power capability.">Capacity Factor: </i><td><input type="number" title = "Value is based on your previous inputs." name="defaultCapFact" id="defaultCapFact" style="width: 5em" value="0" readonly min=1 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultCapFact_errors"><i></i></span></td></tr>' +
          '<tr><td><input type="number" name="defaultHiddenRating" id="defaultHiddenRating" style="display:none;" value="' + attributes.Rating + '" min=1 max=100 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultHiddenRating_errors"></span></td></tr></table>' + '<BR>' +
          



          '<table><tr><td><u>CAPEX</u></td></tr>' +

          '<tr><td><i><u>Pre-Development</u></i></td>' +
          '<tr><td><i title = "Costs incurred before anything is put in the water. This includes environmental surveys, seabed surveys, development services, etc.">Development & Consent: </i><td><input type="number" title = "ORE Catapult (2022)." name="defaultPreDevCost" id="defaultPreDevCost" style="width: 6em" value="135000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultPreDevCost_errors"><i> €/MW </i></span></td></tr>' +

          '<tr><td><i><u>Device</u></i></td>' +
          '<tr><td><i title = "The cost of each Wave Energy Converter (structure and prime mover).">Wec Unit: </i><td><input type="number" title = "Default value reference: N/A." name="defaultWecCost" id="defaultWecCost" style="width: 6em" value="18000000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultWecCost_errors"><i> €/MW </i></span></td></tr>' +

          '<tr><td><i><u>Plant</u></i></td></tr>' +
          '<tr><td><i title = "Cost of plant for mooring each WEC.">Mooring: </i><td><input type="number" title = "Default value reference: Harris, Johanning and Wolfram (2004)." name="defaultMoor" id="defaultMoor" style="width: 6em" value="400" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultMoor_errors"><i> €/m </i></span></td></tr>' +
          '<tr><td><i title = "Cost of plant for foundations and anchoring at seabed.">Foundations/Anchoring: </i><td><input type="number" title = "Default value reference: Têtu and Fernandez Chozas (2021)." name="defaultFound" id="defaultFound" style="width: 6em" value="727000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultFound_errors"><i> €/MW </i></span></td></tr>' +
          '<tr><td><i title = "Length of cabling to point of export (i.e. grid/H2). Use measure tool to override this value for greater accuracy if desired.">Export Cabling Length: </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultCableInterLength" id="defaultCableInterLength" style="width: 6em" value="' + attributes.distance_g + '" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultCableInterLength_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "Cost of cabling to point of export (i.e. grid/H2).">Export Cabling Cost <select class="esri-widget" title = "Default value reference: OConnor et al. (2013)." name="myListInter" id="myListInter" onchange="exportOptionInter(); calcAep1(); calcCapex1(); calcOpex1()"><option value="87000">20 kV</option><option value="256000">38 kV</option><option value="427000" selected>110 kV</option></select>:</i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultCableInterCost" id="defaultCableInterCost" style="width: 6em" value="427000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultCableInterCost_errors"><i> €/km </i></span></td></tr>' +
          '<tr><td><i title = "Length of cabling within the farm.">Intra-Array Cabling Length: </i><td><input type="number" title = "Default reference value: N/A." name="defaultCableIntraLength" id="defaultCableIntraLength" style="width: 6em" value="' + Math.round(0.15 * (105 / (attributes.Rating/1000))) + '" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultCableIntraLength_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "Cost of cabling within the farm.">Intra-Array Cabling Cost <select class="esri-widget" name="myListIntra" id="myListIntra" onchange="exportOptionIntra(); calcAep1(); calcCapex1(); calcOpex1()"><option value="87000">20 kV</option><option value="256000" selected>38 kV</option><option value="427000">110 kV</option></select>: </i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultCableIntraCost" id="defaultCableIntraCost" style="width: 6em" value="256000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultCableIntraCost_errors"><i> €/km </i></span></td></tr>' +
          '<tr><td><i title = "Costs associted with connecting to onshore infrastructure for export.">Onshore Grid/H2 Connections: </i><td><input type="number" title = "Default value reference: ORE Catapult (2022)." name="defaultOnElec" id="defaultOnElec" style="width: 6em" value="42000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultOnElec_errors"><i> €/MW </i></span></td></tr>' +
          // '<tr><td><i>Offshore Substation (IA): </i><td><input type="number" name="defaultOffSub" id="defaultOffSub" style="width: 6em" value="1125000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultOffSub_errors"><i> €/MW </i></span></td></tr>' +

          '<tr><td><i><u>Installation and Commissioning</u></i></td></tr>' +
          // '<tr><td><i title = "Number of days required to install each WEC.">Installation Days: </i><td><input type="number" title = "Default reference value: N/A." name="defaultDays" id="defaultDays" style="width: 6em" value="1" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultDays_errors"><i> /WEC </i></span></td></tr>' +
          
          '<tr><td><i title = "Mobilisation Cost of DP vessel.">DP Vessel Mobilisation: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvmob" id="defaultDPvmob" style="width: 6em" value="62000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultDPvmob_errors"><i> € </i></span></td></tr>' +
          '<tr><td><i title = "Cost of DP vessel per day.">DP Vessel Day Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvdr" id="defaultDPvdr" style="width: 6em" value="25000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultDPvdr_errors"><i> €/Day </i></span></td></tr>' +
          '<tr><td><i title = "Fuel Consumption of DP vessel.">DP Vessel Fuel Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvfr" id="defaultDPvfr" style="width: 6em" value="300" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultDPvfr_errors"><i> L/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Speed of DP vessel.">DP Vessel Speed: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvs" id="defaultDPvs" style="width: 6em" value="33" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultDPvs_errors"><i> km/h </i></span></td></tr>' +
          
          '<tr><td><i title = "Mobilisation Cost of Tug vessel.">Tug Vessel Mobilisation: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvmob" id="defaultTugvmob" style="width: 6em" value="12500" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultTugvmob_errors"><i> € </i></span></td></tr>' +
          '<tr><td><i title = "Cost of Tug vessel per day.">Tug Vessel Day Rate </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvdr" id="defaultTugvdr" style="width: 6em" value="6000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultTugvdr_errors"><i> €/Day </i></span></td></tr>' +
          '<tr><td><i title = "Fuel Consumption of Tug vessel.">Tug Vessel Fuel Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvfr" id="defaultTugvfr" style="width: 6em" value="50" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultTugvfr_errors"><i> L/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Speed of Tug vessel.">Tug Vessel Speed: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvs" id="defaultTugvs" style="width: 6em" value="15" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultTugvs_errors"><i> km/h </i></span></td></tr>' +
          
          '<tr><td><i title = "Cost of fuel at project start year.">Fuel Cost: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultFuelCost" id="defaultFuelCost" style="width: 6em" value="0.60" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultFuelCost_errors"><i> €/L </i></span></td></tr>' +

          '<tr><td><i title = "The number of WECs that can be brought to site in a single day.">Devices Delivered Per Day: </i><td><input type="number" title = "Default reference value: N/A." name="defaultDevicesPerVis" id="defaultDevicesPerVis" style="width: 6em" value="1" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultDevicesPerVis_errors"><i> units </i></span></td></tr>' +
          '<tr><td><i title = "Length of time on site for each installation.">Hours on site </i><td><input type="number" title = "Default value reference: Selkie." name="defaultHoursOnSite" id="defaultHoursOnSite" style="width: 6em" value="24" min=1 max=24 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultHoursOnSite_errors"><i> hours </i></span></td></tr>' +
          
          '<tr><td><i title = "Any diving work required during the installation phase.">Diving Work: </i><td><input type="number" title = "Default value reference: BIMEP (2018)." name="defaultDw" id="defaultDw" style="width: 6em" value="3500" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultDw_errors"><i> €/MW </i></span></td></tr>' +
          '<tr><td><i title = "Cost of installing the moorings for each device.">Mooring Installation Cost: </i><td><input type="number" name="defaultFmInstall" id="defaultFmInstall" style="width: 6em" value="142000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultFmInstall_errors"><i> €/WEC </i></span></td></tr>' +
          '<tr><td><i title = "Cost of offshore logistics including those associated with costs associated with met-ocean forecasting, marine coordination and sea-based support.">Offshore Logistics: </i><td><input type="number" title = "Default value reference: ORE Catapult (2022)." name="defaultOffLog" id="defaultOffLog" style="width: 6em" value="4300" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultOffLog_errors"><i> €/MW </i></span></td></tr>' +
          '<tr><td><i title = "Cost of installing the cabling to point of export (i.e. grid/H2).">Export Cabling Installation Cost: </i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultCableInstall" id="defaultCableInstall" style="width: 6em" value="282000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultCableInstall_errors"><i> €/km </i></span></td></tr>' +
          '<tr><td><i title = "Cost of cabling to be installed within the farm.">Array Cable Installation Cost: </i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultArrayCableCost" id="defaultArrayCableCost" style="width: 6em" value="123000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultArrayCableCost_errors"><i> €/km </i></span></td></tr></table>' + '<BR>' + 
          // '<tr><td><select class="esri-widget" name="myList3" id="myList3" onchange="exportOptionTrench(); calcAep1(); calcCapex1(); calcOpex1()"><option value="418000" selected>trenched</option><option value="148000">untrenched</option><option value="1392000">rock coverage</option></select></td></tr></table>' + '<BR>' +


          '<table><tr><td><u>OPEX</u></td></tr>' +
        
          '<tr><td><i title = "Mobilisation Cost of CTV vessel.">CTV Vessel Mobilisation: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVmob" id="defaultCTVmob" style="width: 6em" value="10000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultCTVmob_errors"><i> € </i></span></td></tr>' +
          '<tr><td><i title = "Cost of CTV vessel per day.">CTV Vessel Day Rate </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVvdr" id="defaultCTVvdr" style="width: 6em" value="5000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultCTVvdr_errors"><i> €/Day </i></span></td></tr>' +
          '<tr><td><i title = "Fuel Consumption of CTV vessel.">CTV Vessel Fuel Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVvfr" id="defaultCTVvfr" style="width: 6em" value="100" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultCTVvfr_errors"><i> L/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Speed of CTV vessel.">CTV Vessel Speed: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVvs" id="defaultCTVvs" style="width: 6em" value="35" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultCTVvs_errors"><i> km/h </i></span></td></tr>' +
          
          '<tr><td><i title = "Average time to repair each device.">Repair time: </i><td><input type="number" title = "Default value reference: Selkie." name="defaultRepairTime" id="defaultRepairTime" style="width: 6em" value="12" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultRepairTime_errors"><i> Hrs </i></span></td>' +
          '<tr><td><i title = "Cost (per hour) of each repair technician">Technician Cost: </i><td><input type="number" title = "Default value reference: Selkie." name="defaultTechnicianCost" id="defaultTechnicianCost" style="width: 6em" value="125" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultTechnicianCost_errors"><i> €/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Average number of technicians required for repair">Number of Technicians: </i><td><input type="number" title = "Default value reference: Selkie." name="defaultNumberTechnicians" id="defaultNumberTechnicians" style="width: 6em" value="5" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultNumberTechnicians_errors"><i> Person(s) </i></span></td></tr>' + 
          '<tr><td><i title = "Cost of equipment for repair">Equipment cost: </i><td><input type="number" title = "Default value reference: Selkie." name="defaultEquipCost" id="defaultEquipCost" style="width: 6em" value="12000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultEquipCost_errors"><i> €/Repair </i></span></td></tr>' + 
           

          
          '<tr><td><i title = "All project operation and maintenance expenses regardless of the energy produced.">Fixed O&M: </i><td><input type="number" title = "Default value reference: Allan, Gilmartin, McGregor and Swales (2011)." name="defaultFixedOam" id="defaultFixedOam" style="width: 6em" value="10000" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultFixedOam_errors"><i> €/MW </i></span></td></table>' + '<BR>' +


          '<table><tr><td><u>DECEX</u></td></tr>' +
          '<tr><td><i title = "Costs associated with dismantling the farm at end of life.">Decommissioning: </i><td><input type="number" title = "Default value reference: Opera (2019)." name="defaultDec" id="defaultDec" style="width: 4em" value="88" min=1 max=50000000000 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultDec_errors"><i> % of installation </i></span></td></tr></table>' + '<BR>' + '<BR>' + 

          '<table><tr><td><u>TOTALS*</u></td></tr>' +
          '<tr><td><i title = "Total Annual Energy Production.">Tot. AEP: </i><td><input type="number" title = "Value is based on your previous inputs."  name="totaep" id="totaep" style="width: 9em"><span><i> MWh/yr </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Total Capital Expenditure.">Tot. CAPEX: </i><td><input type="number" title = "Value is based on your previous inputs." name="totcapex" id="totcapex" style="width: 9em"><span><i> € </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Total Annual Operation and Maintenance Expenditure.">Tot. OPEX: </i><td><input type="number" title = "Value is based on your previous inputs." name="totopex" id="totopex" style="width: 9em" <span><i> €/yr </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Total Decomissioning Expenditutre.">Tot. DECEX: </i><td><input type="number" title = "Value is based on your previous inputs." name="totdecex" id="totdecex" style="width: 9em" <span><i> € </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Discounting will be applied on calculation after clicking Enter.">*undiscounted</i></td></tr></table>' + '<BR>' +


          '<div id="calculate_lcoe1"><button onclick="calc_te1()">Enter</button></div>' + '<BR>' +
          '<button></div>' +


          '<table><tr><td><i title = "The name of the project.">Project: </i><td><input type="text" title = "Value is based on your previous inputs." name="projectname" id="projectname" style="width: 10em" disabled /></td></tr>' +
          '<tr><td><i title = "Levelised Cost of Energy (LCOE) in Euro.">LCOE (€): </i><td><input type="text" title = "Value is based on your previous inputs." name="lcoe1" id="lcoe1" style="width: 7em" disabled /><i> €/MWh </i></td></tr>' +
          '<tr><td><i title = "Levelised Cost of Energy (LCOE) in Cents.">LCOE (c): </i><td><input type="text" title = "Value is based on your previous inputs." name="lcoe2" id="lcoe2" style="width: 7em" disabled /><i> c/kWh </i></td></tr>' +
          '<tr><td><i title = "Net Present Value (NPV) in Euro.">NPV: </i><td><input type="text" title = "Value is based on your previous inputs." name="npv" id="npv" style="width: 9em" disabled /><i> € </i></td></tr></table><BR>'


      return div;

  }


  var pmatrixGroupLayer = new GroupLayer({
      title: "Power Matrix - AEP",
      visible: true,
      visibilityMode: "inclusive",
      layers: [aepGeneric, aepPelamis, aepOceanEnergy, aepCorPower],
  });

  var lcoeGroupLayer = new GroupLayer({
    title: "Precalculated LCOE",
    visible: true,
    visibilityMode: "inclusive",
    layers: [lcoeGeneric, lcoeAtt, lcoeOwc, lcoePa],
});

  var wavGroupLayer = new GroupLayer({
      title: "Wave Energy",
      visible: true,
      visibilityMode: "inclusive",
      layers: [pmatrixGroupLayer],
  });









  var template2 = {

      title: '<h2 style="color:black; font-size: 16px">Techno-Economic Calculator</h2>',
      outFields: ['MWh_per_m2', 'distance_p', 'distance_g', 'distance_h', 'depth', 'Avail'], // <-specify features that are referenced in content
      content:

          buildPopupContent2 // <- no (), it will parase the fields to the function that are specified in outFields
  };


  var aepTidal = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/Total_TPP/FeatureServer",
      title: "Annual Tidal Energy (MWh/m²)",
      visible: false,
      opacity: 0.75,
      listMode: "hide-children",
      popupTemplate: template2
  });


  function buildPopupContent2(feature) {


      console.log("buildPopupContent2")



      let div = document.createElement("div");

      var attributes = feature.graphic.attributes // <- The attribute information is here



      div.innerHTML =

      

          '<table><tr><td><u>Site Information</u></td></tr>' +
          '<tr><td><i title = "The annual average energy theoretically available at the site you have selected.">Annual Energy: </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultAep" id="defaultAep" style="width: 6em" value="' + attributes.MWh_per_m2.toFixed(3) + '" min=1 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultAep_errors"><i> MWh/m² </i></span></td></tr>' +
          '<tr><td><i title = "The euclidean distance to the nearest ORE port (see ORE Ports layer for reference). Use measure tool to override this value for greater accuracy if desired.">Distance to Port:   </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultPort" id="defaultPort" style="width: 5em" value="' + attributes.distance_p + '" min=1 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultPort_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "The euclidean distance to the nearest existing grid, or Planned H2 poroduction plant (see ORE Ports layer for reference). Use measure tool to override this value for greater accuracy if desired.">Distance to <select class="esri-widget" name="myList" id="myList" onchange="exportOptionDist(); calcAep2(); calcCapex2(); calcOpex2()"><option value="' + attributes.distance_g + '" selected>Grid</option><option value="' + attributes.distance_h + '">H2</option></select>:</i></td><td><input type="number" title = "Value is based on the site you have selected." id="defaultGrid" style="width: 5em" value="' + attributes.distance_g + '" min=1 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultGrid_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "The depth to seabed at the site you have selected based on EMODnet bathymetry data.">Depth to Seabed:   </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultDepth" id="defaultDepth" style="width: 5em" value="' + attributes.depth + '" readonly min=1/><span id="defaultDepth_errors"><i> m </i></span></td></tr></table>' + '<BR>' +

          '<table><tr><td><u>Project Information</u></td></tr>' +
          '<tr><td><i title = "Choose a name for your project.">Project Name: </i><td><input type="text" title = "It is mandatory to enter a project name." name="defaultProjectName" id="defaultProjectName" style="width: 10em" value="" onchange="calcAep2(); calcCapex2(); calcOpex2()"/></td></tr>' +
          '<tr><td><i title = "The number of years it is expected that the project will be operational.">Project Life: </i><td><input type="number" title = "Default value reference: Coles (2021)." name="defaultProjectLife" id="defaultProjectLife" style="width: 4em" value="25" min=1 max=100 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultProjectLife_errors"><i> yrs </i></span></td></tr>' +
          '<tr><td><i title = "The discount rate refers to the interest rate used to determine the present value of future cash flows.">Discount Rate: </i><td><input type="number" title = "Default value reference: McAuliffe, Noonan and Murphy (2021)." name="defaultDiscountRate" id="defaultDiscountRate" style="width: 4em" value="5" min=1 max=50 onchange="calcAep2(); calcCapex2(); calcOpex2()" /><span id="defaultDiscountRate_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "The electricity price at the project start date. Value given is for 2022.">Electricity Price <select class="esri-widget" name="myListElecPrice" id="myListElecPrice" onchange="exportOptionElecPrice(); calcAep2(); calcCapex2(); calcOpex2()"><option value="43" selected>IRL</option><option value="39">U.K.</option></select>: </i><td><input type="number" title = "Default value references: Electric Ireland (2022) and UK Government (2022)." name="defaultElecPrice" id="defaultElecPrice" style="width: 4em" value="43" min=1 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultElecPrice_errors"><i> c/kWh </i></span></td></tr></table>' + '<BR>' +



          '<table><tr><td><u>Technical Information</u></td></tr>' +
          '<tr><td><i title = "The swept area of the Tidal Energy Converter(s) to be deployed.">TEC Swept Area: </i><td><input type="number" title = "Default value reference: Coles (2021)." name="defaultSa" id="defaultSa" style="width: 5em" value="254.5" min=1 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultSa_errors"><i> m² </i></span></td></tr>' +
          '<tr><td><i title = "The efficiency of the Tidal Energy Converter is the primary energy absorbed by the device as a perentage of the theoretical energy resource available to it at the site you have selected.">TEC Efficiency: </i><td><input type="number" title = "Default value reference: Hagerman et al. (2016)." name="defaultEff" id="defaultEff" style="width: 5em" value="40" min=1 max=100 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultEff_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "Availability is defined as the amount of time the device is on hand to produce power and is affected by a number of factors including device reliability and the ability of the device to be accessed for maintenance.">TEC Availability <td><input type="number" title = "Value is based on the site you have selected considering CTV operational limits of 1.5m Hs and 20m/s wind speed")." name="defaultAv" id="defaultAv" style="width: 5em" value="' + attributes.Avail + '" min=1 onchange="calcAep1(); calcCapex1(); calcOpex1()"/><span id="defaultAv_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "The number of Tidal Energy Converters to be deployed.">Number of TECs: </i><td><input type="number" title = "Default value reference: Coles (2021)." name="defaultTec" id="defaultTec" style="width: 5em" value="50" min=1 max=1000 onchange="exportOptionFarmRating2(); calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultTec_errors"><i> units </i></span></td></tr>' +
          '<tr><td><i title = "This is the power rating (highest power output) of the device you have selected.">Device Rating: </i><td><input type="number" title = "Value is based on the device you have selected." name="defaultRating" id="defaultRating" style="width: 5em" value="1.5" min=1 onchange="calcAep2(); calcCapex2(); calcOpex2(); exportOptionFarmRating2()"/><span id="defaultRating_errors"><i> MW </i></span></td></tr>' +
          '<tr><td><i title = "This is the total power rating for the farm.">Farm Rating: </i><td><input type="number" title = "Value is based on the device and number of TECs you have selected." name="defaultFarmRating" id="defaultFarmRating" style="width: 5em" value="' + (attributes.Rating * 50) / 1000 + '" min=1 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultFarmRating_errors"><i> MW </i></span></td></tr>' +
          '<tr><td><i title = "Losses due to array/wake interference within the farm.">Array/Wake Losses: </i><td><input type="number" title = "Default reference value: N/A." name="defaultWak" id="defaultWak" style="width: 5em" value="5" min=0 max=100 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultWak_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "Losses incurred during transmission of electricity to export.">Line Losses: </i><td><input type="number" title = "Default reference value: N/A." name="defaultLin" id="defaultLin" style="width: 5em" value="5" min=0 max=100 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultLin_errors"><i> % </i></span></td></tr>' +
          //'<tr><td><i title = "The average power output divided by the maximum power capability.">Capacity Factor: </i><td><input type="number" title = "Value is based on your previous inputs." name="defaultCapFact" id="defaultCapFact" style="width: 5em" value="0" readonly min=1 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultCapFact_errors"><i></i></span></td></tr>' +
          '<tr><td><input type="number" name="defaultHiddenRating" id="defaultHiddenRating" style="display:none;" value="' + attributes.Rating + '" min=1 max=100 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultHiddenRating_errors"></span></td></tr></table>' + '<BR>' + '<BR>' +


          '<table><tr><td><u>CAPEX</u></td></tr>' +

          '<tr><td><i><u>Pre-Development</u></i></td>' +
          '<tr><td><i title = "Costs incurred before anything is put in the water. This includes environmental surveys, seabed surveys, development services, etc.">Development & Consent: </i><td><input type="number" title = "Default value reference: ORE Catapult (2022)." name="defaultPreDevCost" id="defaultPreDevCost" style="width: 6em" value="135000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultPreDevCost_errors"><i> €/MW </i></span></td></tr>' +

          '<tr><td><i><u>Device</u></i></td>' +
          '<tr><td><i title = "The cost of each Tidal Energy Converter.">TEC Unit: </i><td><input type="number" title = "Default value reference: Coles (2021)." name="defaultTecCost" id="defaultTecCost" style="width: 6em" value="5260000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultTecCost_errors"><i> €/TEC </i></span></td></tr>' +

          '<tr><td><i><u>Plant</u></i></td></tr>' +
          '<tr><td><i title = "Cost of plant for mooring each TEC.">Mooring: </i><td><input type="number" title = "Default value reference: Harris, Johanning and Wolfram (2004)." name="defaultMoor" id="defaultMoor" style="width: 6em" value="400" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultMoor_errors"><i> €/m </i></span></td></tr>' +
          '<tr><td><i title = "Cost of plant for foundations and anchoring at seabed.">Foundations/Anchoring: </i><td><input type="number" title = "Default value reference: Têtu and Fernandez Chozas (2021)." name="defaultFound" id="defaultFound" style="width: 6em" value="727000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultFound_errors"><i> €/MW </i></span></td></tr>' +
          '<tr><td><i title = "Length of cabling to point of export (i.e. grid/H2). Use measure tool to override this value for greater accuracy if desired.">Export Cabling Length: </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultCableInterLength" id="defaultCableInterLength" style="width: 6em" value="' + attributes.distance_g + '" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultCableInterLength_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "Cost of cabling to point of export (i.e. grid/H2).">Export Cabling Cost <select class="esri-widget" title = "Default value reference: OConnor et al. (2013)." name="myListInter" id="myListInter" onchange="exportOptionInter(); calcAep2(); calcCapex2(); calcOpex2()"><option value="87000">20 kV</option><option value="256000">38 kV</option><option value="427000" selected>110 kV</option></select>:</i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultCableInterCost" id="defaultCableInterCost" style="width: 6em" value="427000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultCableInterCost_errors"><i> €/km </i></span></td></tr>' +
          '<tr><td><i title = "Length of cabling within the farm.">Intra-Array Cabling Length: </i><td><input type="number" title = "Default reference value: N/A." name="defaultCableIntraLength" id="defaultCableIntraLength" style="width: 6em" value="1" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultCableIntraLength_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "Cost of cabling within the farm.">Intra-Array Cabling Cost <select class="esri-widget" name="myListIntra" id="myListIntra" onchange="exportOptionIntra(); calcAep2(); calcCapex2(); calcOpex2()"><option value="87000">20 kV</option><option value="256000" selected>38 kV</option><option value="427000">110 kV</option></select>: </i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultCableIntraCost" id="defaultCableIntraCost" style="width: 6em" value="256000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultCableIntraCost_errors"><i> €/km </i></span></td></tr>' +
          '<tr><td><i title = "Costs associted with connecting to onshore infrastructure for export.">Onshore Grid/H2 Connections: </i><td><input type="number" title = "Default value reference: ORE Catapult (2022)." name="defaultOnElec" id="defaultOnElec" style="width: 6em" value="42000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultOnElec_errors"><i> €/MW </i></span></td></tr>' +
          // '<tr><td><i>Offshore Substation (IA): </i><td><input type="number" name="defaultOffSub" id="defaultOffSub" style="width: 6em" value="1125000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultOffSub_errors"><i> €/MW </i></span></td></tr>' +

          '<tr><td><i><u>Installation and Commissioning</u></i></td></tr>' +
          // '<tr><td><i title = "Number of days required to install each TEC.">Installation Days: </i><td><input type="number" title = "Default reference value: N/A." name="defaultDays" id="defaultDays" style="width: 6em" value="2" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultDays_errors"><i> /TEC </i></span></td></tr>' +
          '<tr><td><i title = "Length of working day during installation phase.">Working Day: </i><td><input type="number" title = "Default value reference: BIMEP (2018)." name="defaultHoursOnSite" id="defaultHoursOnSite" style="width: 6em" value="24" min=1 max=24 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultHoursOnSite_errors"><i> hours </i></span></td></tr>' +
          
          '<tr><td><i title = "Mobilisation Cost of DP vessel.">DP Vessel Mobilisation: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvmob" id="defaultDPvmob" style="width: 6em" value="62000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultDPvmob_errors"><i> € </i></span></td></tr>' +
          '<tr><td><i title = "Cost of DP vessel per day.">DP Vessel Day Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvdr" id="defaultDPvdr" style="width: 6em" value="25000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultDPvdr_errors"><i> €/Day </i></span></td></tr>' +
          '<tr><td><i title = "Fuel Consumption of DP vessel.">DP Vessel Fuel Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvfr" id="defaultDPvfr" style="width: 6em" value="300" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultDPvfr_errors"><i> L/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Speed of DP vessel.">DP Vessel Speed: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvs" id="defaultDPvs" style="width: 6em" value="33" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultDPvs_errors"><i> km/h </i></span></td></tr>' +
          
          '<tr><td><i title = "Mobilisation Cost of Tug vessel.">Tug Vessel Mobilisation: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvmob" id="defaultTugvmob" style="width: 6em" value="12500" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultTugvmob_errors"><i> € </i></span></td></tr>' +
          '<tr><td><i title = "Cost of Tug vessel per day.">Tug Vessel Day Rate </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvdr" id="defaultTugvdr" style="width: 6em" value="6000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultTugvdr_errors"><i> €/Day </i></span></td></tr>' +
          '<tr><td><i title = "Fuel Consumption of Tug vessel.">Tug Vessel Fuel Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvfr" id="defaultTugvfr" style="width: 6em" value="50" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultTugvfr_errors"><i> L/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Speed of Tug vessel.">Tug Vessel Speed: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvs" id="defaultTugvs" style="width: 6em" value="15" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultTugvs_errors"><i> km/h </i></span></td></tr>' +
          
          '<tr><td><i title = "Cost of fuel at project start year.">Fuel Cost: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultFuelCost" id="defaultFuelCost" style="width: 6em" value="0.60" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultFuelCost_errors"><i> €/L </i></span></td></tr>' +
          
          '<tr><td><i title = "The number of TECs that can be brought to site in a single day.">Devices Delivered Per Day: </i><td><input type="number" title = "Default reference value: N/A." name="defaultDevicesPerVis" id="defaultDevicesPerVis" style="width: 6em" value="1" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultDevicesPerVis_errors"><i> units </i></span></td></tr>' +
          '<tr><td><i title = "Length of time on site for each installation.">Hours on site </i><td><input type="number" title = "Default value reference: Selkie." name="defaultHoursOnSite" id="defaultHoursOnSite" style="width: 6em" value="24" min=1 max=24 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultHoursOnSite_errors"><i> hours </i></span></td></tr>' +
          
          '<tr><td><i title = "Any diving work required during the installation phase.">Diving Work: </i><td><input type="number" title = "Default value reference: BIMEP (2018)." name="defaultDw" id="defaultDw" style="width: 6em" value="3500" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultDw_errors"><i> €/MW </i></span></td></tr>' +
          '<tr><td><i title = "Cost of installing the moorings for each device.">Mooring Installation Cost: </i><td><input type="number" name="defaultFmInstall" id="defaultFmInstall" style="width: 6em" value="142000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultFmInstall_errors"><i> €/WEC </i></span></td></tr>' +
          '<tr><td><i title = "Cost of offshore logistics including those associated with costs associated with met-ocean forecasting, marine coordination and sea-based support.">Offshore Logistics: </i><td><input type="number" title = "Default value reference: ORE Catapult (2022)." name="defaultOffLog" id="defaultOffLog" style="width: 6em" value="4300" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultOffLog_errors"><i> €/MW </i></span></td></tr>' +
          '<tr><td><i title = "Cost of installing the cabling to point of export (i.e. grid/H2).">Export Cabling Installation Cost: </i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultCableInstall" id="defaultCableInstall" style="width: 6em" value="282000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultCableInstall_errors"><i> €/km </i></span></td></tr>' +
          '<tr><td><i title = "Cost of cabling to be installed within the farm. Use measure tool to override this value for greater accuracy if desired.">Array Cable Installation Cost: </i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultArrayCableCost" id="defaultArrayCableCost" style="width: 6em" value="148000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultArrayCableCost_errors"><i> €/km </i></span></td></tr></table>' + '<BR>' + 
          // '<tr><td><select class="esri-widget" name="myList3" id="myList3" onchange="exportOptionTrench(); calcAep2(); calcCapex2(); calcOpex2()"><option value="418000" selected>trenched</option><option value="148000">untrenched</option><option value="1392000">rock coverage</option></select></td></tr></table>' + '<BR>' +


          '<table><tr><td><u>OPEX</u></td></tr>' +

          '<tr><td><i title = "Mobilisation Cost of CTV vessel.">CTV Vessel Mobilisation: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVmob" id="defaultCTVmob" style="width: 6em" value="10000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultCTVmob_errors"><i> € </i></span></td></tr>' +
          '<tr><td><i title = "Cost of CTV vessel per day.">CTV Vessel Day Rate </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVvdr" id="defaultCTVvdr" style="width: 6em" value="5000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultCTVvdr_errors"><i> €/Day </i></span></td></tr>' +
          '<tr><td><i title = "Fuel Consumption of CTV vessel.">CTV Vessel Fuel Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVvfr" id="defaultCTVvfr" style="width: 6em" value="100" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultCTVvfr_errors"><i> L/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Speed of CTV vessel.">CTV Vessel Speed: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVvs" id="defaultCTVvs" style="width: 6em" value="35" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultCTVvs_errors"><i> km/h </i></span></td></tr>' +
          
          '<tr><td><i title = "Average time to repair each device.">Repair time: </i><td><input type="number" title = "Default value reference: Selkie." name="defaultRepairTime" id="defaultRepairTime" style="width: 6em" value="12" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultRepairTime_errors"><i> Hrs </i></span></td>' +
          '<tr><td><i title = "Cost (per hour) of each repair technician">Technician Cost: </i><td><input type="number" title = "Default value reference: Selkie." name="defaultTechnicianCost" id="defaultTechnicianCost" style="width: 6em" value="125" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultTechnicianCost_errors"><i> €/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Cost of equipment for repair">Equipment cost: </i><td><input type="number" title = "Default value reference: Selkie." name="defaultEquipCost" id="defaultEquipCost" style="width: 6em" value="5" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultEquipCost_errors"><i> €/Repair </i></span></td></tr>' + 

          '<tr><td><i title = "All project operation and maintenance expenses regardless of the energy produced.">Fixed O&M: </i><td><input type="number" title = "Default value reference: Allan, Gilmartin, McGregor and Swales (2011)." name="defaultFixedOam" id="defaultFixedOam" style="width: 6em" value="10000" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultFixedOam_errors"><i> €/MW </i></span></td></table>' + '<BR>' +


          '<table><tr><td><u>DECEX</u></td></tr>' +
          '<tr><td><i title = "Costs associated with dismantling the farm at end of life.">Decommissioning: </i><td><input type="number" title = "Default value reference: Opera (2019)." name="defaultDec" id="defaultDec" style="width: 4em" value="88" min=1 max=50000000000 onchange="calcAep2(); calcCapex2(); calcOpex2()"/><span id="defaultDec_errors"><i> % of installation </i></span></td></tr></table>' +

          '<table><tr><td><u>TOTALS*</u></td></tr>' +
          '<tr><td><i title = "Total Annual Energy Production.">Tot. AEP: </i><td><input type="number" title = "Value is based on your previous inputs."  name="totaep" id="totaep" style="width: 9em"><span><i> MWh/yr </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Total Capital Expenditure.">Tot. CAPEX: </i><td><input type="number" title = "Value is based on your previous inputs." name="totcapex" id="totcapex" style="width: 9em"><span><i> € </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Total Annual Operation and Maintenance Expenditure.">Tot. OPEX: </i><td><input type="number" title = "Value is based on your previous inputs." name="totopex" id="totopex" style="width: 9em" <span><i> €/yr </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Total Decomissioning Expenditutre.">Tot. DECEX: </i><td><input type="number" title = "Value is based on your previous inputs." name="totdecex" id="totdecex" style="width: 9em" <span><i> € </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Discounting will be applied on calculation after clicking Enter.">*undiscounted</i></td></tr></table>' + '<BR>' +


          '<div id="calculate_lcoe2"><button onclick="calc_te2()">Enter</button></div>' + '<BR>' +
          '<button></div>' +


          '<table><tr><td><i title = "The name of the project.">Project: </i><td><input type="text" title = "Value is based on your previous inputs." name="projectname" id="projectname" style="width: 10em" disabled /></td></tr>' +
          '<tr><td><i title = "Levelised Cost of Energy (LCOE) in Euro.">LCOE (€): </i><td><input type="text" title = "Value is based on your previous inputs." name="lcoe1" id="lcoe1" style="width: 7em" disabled /><i> €/MWh </i></td></tr>' +
          '<tr><td><i title = "Levelised Cost of Energy (LCOE) in Cents.">LCOE (c): </i><td><input type="text" title = "Value is based on your previous inputs." name="lcoe2" id="lcoe2" style="width: 7em" disabled /><i> c/kWh </i></td></tr>' +
          '<tr><td><i title = "Net Present Value (NPV) in Euro.">NPV: </i><td><input type="text" title = "Value is based on your previous inputs." name="npv" id="npv" style="width: 9em" disabled /><i> € </i></td></tr></table><BR>'



      return div;

  }






  var template3 = {

      title: '<h2 style="color:black; font-size: 16px">Techno-Economic Calculator</h2>',
      outFields: ['gridcode', 'distance_p', 'distance_g', 'distance_h', 'Rating', 'depth', 'Avail'], // <-specify features that are referenced in content
      content:

          buildPopupContent3 // <- no (), it will parase the fields to the function that are specified in outFields
  };

  var aepAtlantis2000 = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/PTEC_Atlantis2000_SJ/FeatureServer",
      title: "Fixed Bottom 2MW",
      visible: false,
      opacity: 0.75,
      listMode: "hide-children",
      popupTemplate: template3
  });

  var aepAtlantis1700 = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/PTEC_Atlantis1700_SJ/FeatureServer",
      title: "Fixed Bottom 1.7MW",
      visible: false,
      opacity: 0.75,
      listMode: "hide-children",
      popupTemplate: template3
  });

  var aepAtlantis1500 = new FeatureLayer({
      url: "https://services6.arcgis.com/59pPgTnLCRBan6mn/arcgis/rest/services/PTEC_Atlantis1500_SJ/FeatureServer",
      title: "Fixed Bottom 1.5MW",
      visible: false,
      opacity: 0.75,
      listMode: "hide-children",
      popupTemplate: template3
  });


  function buildPopupContent3(feature) {


      console.log("buildPopupContent3")



      let div = document.createElement("div");

      var attributes = feature.graphic.attributes // <- The attribute information is here



      div.innerHTML =
  
          '<table><tr><td><u>Site Information</u></td></tr>' +
          '<tr><td><i title = "The annual average energy that this TEC will produce at the site you have selected.">Annual Energy (per device): </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultAep" id="defaultAep" style="width: 6em" value="' + attributes.gridcode + '" min=1 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultAep_errors"><i> MWh </i></span></td></tr>' +
          '<tr><td><i title = "The euclidean distance to the nearest ORE port (see ORE Ports layer for reference). Use measure tool to override this value for greater accuracy if desired.">Distance to Port:   </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultPort" id="defaultPort" style="width: 5em" value="' + attributes.distance_p + '" min=1 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultPort_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "The euclidean distance to the nearest existing grid, or Planned H2 poroduction plant (see ORE Ports layer for reference). Use measure tool to override this value for greater accuracy if desired.">Distance to <select class="esri-widget" name="myList" id="myList" onchange="exportOptionDist(); calcAep3(); calcCapex3(); calcOpex3()"><option value="' + attributes.distance_g + '" selected>Grid</option><option value="' + attributes.distance_h + '">H2</option></select>:</i></td><td><input type="number" title = "Value is based on the site you have selected." id="defaultGrid" style="width: 5em" value="' + attributes.distance_g + '" min=1 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultGrid_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "The depth to seabed at the site you have selected based on EMODnet bathymetry data.">Depth to Seabed:   </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultDepth" id="defaultDepth" style="width: 5em" value="' + attributes.depth + '" readonly min=1 /><span id="defaultDepth_errors"><i> m </i></span></td></tr></table>' + '<BR>' +

          '<table><tr><td><u>Project Information</u></td></tr>' +
          '<tr><td><i title = "Choose a name for your project.">Project Name: </i><td><input type="text" title = "It is mandatory to enter a project name." name="defaultProjectName" id="defaultProjectName" style="width: 10em" value="" onchange="calcAep3(); calcCapex3(); calcOpex3()"/></td></tr>' +
          '<tr><td><i title = "The number of years it is expected that the project will be operational.">Project Life: </i><td><input type="number" title ="Default value reference: Têtu and Fernandez Chozas (2021)." name="defaultProjectLife" id="defaultProjectLife" style="width: 4em" value="25" min=1 max=100 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultProjectLife_errors"><i> yrs </i></span></td></tr>' +
          '<tr><td><i title = "The discount rate refers to the interest rate used to determine the present value of future cash flows.">Discount Rate: </i><td><input type="number" title = "Default value reference: N/A." name="defaultDiscountRate" id="defaultDiscountRate" style="width: 4em" value="10" min=1 max=50 onchange="calcAep3(); calcCapex3(); calcOpex3()" /><span id="defaultDiscountRate_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "The electricity price at the project start date. Value given is for 2022."> Electricity Price <select class="esri-widget" name="myListElecPrice" id="myListElecPrice" onchange="exportOptionElecPrice(); calcAep3(); calcCapex3(); calcOpex3()"><option value="43" selected>IRL</option><option value="39">U.K.</option></select>: </i><td><input type="number" title = "Default value references: Electric Ireland (2022) and UK Government (2022)." name="defaultElecPrice" id="defaultElecPrice" style="width: 4em" value="43" min=1 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultElecPrice_errors"><i> c/kWh </i></span></td></tr></table>' + '<BR>' +



          '<table><tr><td><u>Technical Information</u></td></tr>' +
          // '<tr><td><i>TEC Efficiency: </i><td><input type="number" name="defaultEff" id="defaultEff" style="width: 5em" value="40" min=1 max=100 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultEff_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "Availability is defined as the amount of time the device is on hand to produce power and is affected by a number of factors including device reliability and the ability of the device to be accessed for maintenance.">TEC Availability <td><input type="number" title = "Value is based on the site you have selected considering CTV operational limits of 1.5m Hs and 20m/s wind speed")." name="defaultAv" id="defaultAv" style="width: 5em" value="' + attributes.Avail + '" min=1 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultAv_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "The number of Wave Energy Converters to be deployed.">Number of TECs: </i><td><input type="number" title = "Default reference value: N/A." name="defaultTec" id="defaultTec" style="width: 5em" value="' + Math.round(105 / (attributes.Rating/1000)) + '" min=1 max=1000 onchange="exportOptionFarmRating(); calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultTec_errors"><i> units </i></span></td></tr>' +
          '<tr><td><i title = "The scale of the device.">Scale: <td><select class="esri-widget" name="defaultScale" id="defaultScale" onchange="exportOptionRating(); exportOptionFarmRating(); calcAep3(); calcCapex3(); calcOpex3()"><option value="1">1:1</option><option value="0.5">1:2</option><option value="0.25">1:4</option></select></td></tr>' +
          '<tr><td><i title = "This is the power rating (highest power output) of the device you have selected.">Device Rating: </i><td><input type="number" title = "Value is based on the device you have selected." name="defaultRating" id="defaultRating" style="width: 5em" value="' + attributes.Rating + '" min=1 onchange="calcAep3(); calcCapex3(); calcOpex3(); exportOptionFarmRating()"/><span id="defaultRating_errors"><i> kW </i></span></td></tr>' +
          '<tr><td><i title = "This is the total power rating for the farm.">Farm Rating: </i><td><input type="number" title = "Value is based on the device and number of TECs you have selected." name="defaultFarmRating" id="defaultFarmRating" style="width: 5em" value="105" min=1 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultFarmRating_errors"><i> MW </i></span></td></tr>' +
          '<tr><td><i title = "Losses due to array/wake interference within the farm.">Array/Wake Losses (IA): </i><td><input type="number" title = "Default reference value: N/A." name="defaultWak" id="defaultWak" style="width: 5em" value="2.5" min=0 max=100 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultWak_errors"><i> % </i></span></td></tr>' +
          '<tr><td><i title = "Losses incurred during transmission of electricity to export.">Line Losses (IA): </i><td><input type="number" title = "Default reference value: N/A." name="defaultLin" id="defaultLin" style="width: 5em" value="2.5" min=0 max=100 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultLin_errors"><i> % </i></span></td></tr>' +
          // '<tr><td><i title = "The average power output divided by the maximum power capability.">Capacity Factor: </i><td><input type="number" title = "Value is based on your previous inputs." name="defaultCapFact" id="defaultCapFact" style="width: 5em" value="0" readonly min=1 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultCapFact_errors"><i></i></span></td></tr>' +
          '<tr><td><input type="number" name="defaultHiddenRating" id="defaultHiddenRating" style="display:none;" value="' + attributes.Rating + '" min=1 max=100 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultHiddenRating_errors"></span></td></tr></table>' + '<BR>' +
          



          '<table><tr><td><u>CAPEX</u></td></tr>' +

          '<tr><td><i><u>Pre-Development</u></i></td>' +
          '<tr><td><i title = "Costs incurred before anything is put in the water. This includes environmental surveys, seabed surveys, development services, etc.">Development & Consent: </i><td><input type="number" title = "ORE Catapult (2022)." name="defaultPreDevCost" id="defaultPreDevCost" style="width: 6em" value="135000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultPreDevCost_errors"><i> €/MW </i></span></td></tr>' +

          '<tr><td><i><u>Device</u></i></td>' +
          '<tr><td><i title = "The cost of each Wave Energy Converter (structure and prime mover).">TEC Unit: </i><td><input type="number" title = "Default value reference: N/A." name="defaultTecCost" id="defaultTecCost" style="width: 6em" value="18000000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultTecCost_errors"><i> €/MW </i></span></td></tr>' +

          '<tr><td><i><u>Plant</u></i></td></tr>' +
          '<tr><td><i title = "Cost of plant for mooring each TEC.">Mooring: </i><td><input type="number" title = "Default value reference: Harris, Johanning and Wolfram (2004)." name="defaultMoor" id="defaultMoor" style="width: 6em" value="400" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultMoor_errors"><i> €/m </i></span></td></tr>' +
          '<tr><td><i title = "Cost of plant for foundations and anchoring at seabed.">Foundations/Anchoring: </i><td><input type="number" title = "Default value reference: Têtu and Fernandez Chozas (2021)." name="defaultFound" id="defaultFound" style="width: 6em" value="727000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultFound_errors"><i> €/MW </i></span></td></tr>' +
          '<tr><td><i title = "Length of cabling to point of export (i.e. grid/H2). Use measure tool to override this value for greater accuracy if desired.">Export Cabling Length: </i><td><input type="number" title = "Value is based on the site you have selected." name="defaultCableInterLength" id="defaultCableInterLength" style="width: 6em" value="' + attributes.distance_g + '" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultCableInterLength_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "Cost of cabling to point of export (i.e. grid/H2).">Export Cabling Cost <select class="esri-widget" title = "Default value reference: OConnor et al. (2013)." name="myListInter" id="myListInter" onchange="exportOptionInter(); calcAep3(); calcCapex3(); calcOpex3()"><option value="87000">20 kV</option><option value="256000">38 kV</option><option value="427000" selected>110 kV</option></select>:</i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultCableInterCost" id="defaultCableInterCost" style="width: 6em" value="427000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultCableInterCost_errors"><i> €/km </i></span></td></tr>' +
          '<tr><td><i title = "Length of cabling within the farm.">Intra-Array Cabling Length: </i><td><input type="number" title = "Default reference value: N/A." name="defaultCableIntraLength" id="defaultCableIntraLength" style="width: 6em" value="' + Math.round(0.15 * (105 / (attributes.Rating/1000))) + '" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultCableIntraLength_errors"><i> km </i></span></td></tr>' +
          '<tr><td><i title = "Cost of cabling within the farm.">Intra-Array Cabling Cost <select class="esri-widget" name="myListIntra" id="myListIntra" onchange="exportOptionIntra(); calcAep3(); calcCapex3(); calcOpex3()"><option value="87000">20 kV</option><option value="256000" selected>38 kV</option><option value="427000">110 kV</option></select>: </i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultCableIntraCost" id="defaultCableIntraCost" style="width: 6em" value="256000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultCableIntraCost_errors"><i> €/km </i></span></td></tr>' +
          '<tr><td><i title = "Costs associted with connecting to onshore infrastructure for export.">Onshore Grid/H2 Connections: </i><td><input type="number" title = "Default value reference: ORE Catapult (2022)." name="defaultOnElec" id="defaultOnElec" style="width: 6em" value="42000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultOnElec_errors"><i> €/MW </i></span></td></tr>' +
          // '<tr><td><i>Offshore Substation (IA): </i><td><input type="number" name="defaultOffSub" id="defaultOffSub" style="width: 6em" value="1125000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultOffSub_errors"><i> €/MW </i></span></td></tr>' +

          '<tr><td><i><u>Installation and Commissioning</u></i></td></tr>' +
          // '<tr><td><i title = "Number of days required to install each TEC.">Installation Days: </i><td><input type="number" title = "Default reference value: N/A." name="defaultDays" id="defaultDays" style="width: 6em" value="1" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultDays_errors"><i> /TEC </i></span></td></tr>' +
          
          '<tr><td><i title = "Mobilisation Cost of DP vessel.">DP Vessel Mobilisation: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvmob" id="defaultDPvmob" style="width: 6em" value="62000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultDPvmob_errors"><i> € </i></span></td></tr>' +
          '<tr><td><i title = "Cost of DP vessel per day.">DP Vessel Day Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvdr" id="defaultDPvdr" style="width: 6em" value="25000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultDPvdr_errors"><i> €/Day </i></span></td></tr>' +
          '<tr><td><i title = "Fuel Consumption of DP vessel.">DP Vessel Fuel Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvfr" id="defaultDPvfr" style="width: 6em" value="300" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultDPvfr_errors"><i> L/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Speed of DP vessel.">DP Vessel Speed: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultDPvs" id="defaultDPvs" style="width: 6em" value="33" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultDPvs_errors"><i> km/h </i></span></td></tr>' +
          
          '<tr><td><i title = "Mobilisation Cost of Tug vessel.">Tug Vessel Mobilisation: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvmob" id="defaultTugvmob" style="width: 6em" value="12500" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultTugvmob_errors"><i> € </i></span></td></tr>' +
          '<tr><td><i title = "Cost of Tug vessel per day.">Tug Vessel Day Rate </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvdr" id="defaultTugvdr" style="width: 6em" value="6000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultTugvdr_errors"><i> €/Day </i></span></td></tr>' +
          '<tr><td><i title = "Fuel Consumption of Tug vessel.">Tug Vessel Fuel Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvfr" id="defaultTugvfr" style="width: 6em" value="50" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultTugvfr_errors"><i> L/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Speed of Tug vessel.">Tug Vessel Speed: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultTugvs" id="defaultTugvs" style="width: 6em" value="15" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultTugvs_errors"><i> km/h </i></span></td></tr>' +
          
          '<tr><td><i title = "Cost of fuel at project start year.">Fuel Cost: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultFuelCost" id="defaultFuelCost" style="width: 6em" value="0.60" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultFuelCost_errors"><i> €/L </i></span></td></tr>' +

          '<tr><td><i title = "The number of TECs that can be brought to site in a single day.">Devices Delivered Per Day: </i><td><input type="number" title = "Default reference value: N/A." name="defaultDevicesPerVis" id="defaultDevicesPerVis" style="width: 6em" value="1" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultDevicesPerVis_errors"><i> units </i></span></td></tr>' +
          '<tr><td><i title = "Length of time on site for each installation.">Hours on site </i><td><input type="number" title = "Default value reference: Selkie." name="defaultHoursOnSite" id="defaultHoursOnSite" style="width: 6em" value="24" min=1 max=24 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultHoursOnSite_errors"><i> hours </i></span></td></tr>' +
          
          '<tr><td><i title = "Any diving work required during the installation phase.">Diving Work: </i><td><input type="number" title = "Default value reference: BIMEP (2018)." name="defaultDw" id="defaultDw" style="width: 6em" value="3500" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultDw_errors"><i> €/MW </i></span></td></tr>' +
          '<tr><td><i title = "Cost of installing the moorings for each device.">Mooring Installation Cost: </i><td><input type="number" name="defaultFmInstall" id="defaultFmInstall" style="width: 6em" value="142000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultFmInstall_errors"><i> €/TEC </i></span></td></tr>' +
          '<tr><td><i title = "Cost of offshore logistics including those associated with costs associated with met-ocean forecasting, marine coordination and sea-based support.">Offshore Logistics: </i><td><input type="number" title = "Default value reference: ORE Catapult (2022)." name="defaultOffLog" id="defaultOffLog" style="width: 6em" value="4300" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultOffLog_errors"><i> €/MW </i></span></td></tr>' +
          '<tr><td><i title = "Cost of installing the cabling to point of export (i.e. grid/H2).">Export Cabling Installation Cost: </i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultCableInstall" id="defaultCableInstall" style="width: 6em" value="282000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultCableInstall_errors"><i> €/km </i></span></td></tr>' +
          '<tr><td><i title = "Cost of cabling to be installed within the farm.">Array Cable Installation Cost: </i><td><input type="number" title = "Default value reference: OConnor et al. (2013)." name="defaultArrayCableCost" id="defaultArrayCableCost" style="width: 6em" value="123000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultArrayCableCost_errors"><i> €/km </i></span></td></tr></table>' + '<BR>' + 
          // '<tr><td><select class="esri-widget" name="myList3" id="myList3" onchange="exportOptionTrench(); calcAep3(); calcCapex3(); calcOpex3()"><option value="418000" selected>trenched</option><option value="148000">untrenched</option><option value="1392000">rock coverage</option></select></td></tr></table>' + '<BR>' +


          '<table><tr><td><u>OPEX</u></td></tr>' +
        
          '<tr><td><i title = "Mobilisation Cost of CTV vessel.">CTV Vessel Mobilisation: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVmob" id="defaultCTVmob" style="width: 6em" value="10000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultCTVmob_errors"><i> € </i></span></td></tr>' +
          '<tr><td><i title = "Cost of CTV vessel per day.">CTV Vessel Day Rate </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVvdr" id="defaultCTVvdr" style="width: 6em" value="5000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultCTVvdr_errors"><i> €/Day </i></span></td></tr>' +
          '<tr><td><i title = "Fuel Consumption of CTV vessel.">CTV Vessel Fuel Rate: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVvfr" id="defaultCTVvfr" style="width: 6em" value="100" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultCTVvfr_errors"><i> L/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Speed of CTV vessel.">CTV Vessel Speed: </i><td><input type="number" title  = "Default value reference: Selkie." name="defaultCTVvs" id="defaultCTVvs" style="width: 6em" value="35" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultCTVvs_errors"><i> km/h </i></span></td></tr>' +
          
          '<tr><td><i title = "Average time to repair each device.">Repair time: </i><td><input type="number" title = "Default value reference: Selkie." name="defaultRepairTime" id="defaultRepairTime" style="width: 6em" value="12" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultRepairTime_errors"><i> Hrs </i></span></td>' +
          '<tr><td><i title = "Cost (per hour) of each repair technician">Technician Cost: </i><td><input type="number" title = "Default value reference: Selkie." name="defaultTechnicianCost" id="defaultTechnicianCost" style="width: 6em" value="125" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultTechnicianCost_errors"><i> €/Hr </i></span></td></tr>' +
          '<tr><td><i title = "Average number of technicians required for repair">Number of Technicians: </i><td><input type="number" title = "Default value reference: Selkie." name="defaultNumberTechnicians" id="defaultNumberTechnicians" style="width: 6em" value="5" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultNumberTechnicians_errors"><i> Person(s) </i></span></td></tr>' + 
          '<tr><td><i title = "Cost of equipment for repair">Equipment cost: </i><td><input type="number" title = "Default value reference: Selkie." name="defaultEquipCost" id="defaultEquipCost" style="width: 6em" value="12000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultEquipCost_errors"><i> €/Repair </i></span></td></tr>' + 
           

          
          '<tr><td><i title = "All project operation and maintenance expenses regardless of the energy produced.">Fixed O&M: </i><td><input type="number" title = "Default value reference: Allan, Gilmartin, McGregor and Swales (2011)." name="defaultFixedOam" id="defaultFixedOam" style="width: 6em" value="10000" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultFixedOam_errors"><i> €/MW </i></span></td></table>' + '<BR>' +


          '<table><tr><td><u>DECEX</u></td></tr>' +
          '<tr><td><i title = "Costs associated with dismantling the farm at end of life.">Decommissioning: </i><td><input type="number" title = "Default value reference: Opera (2019)." name="defaultDec" id="defaultDec" style="width: 4em" value="88" min=1 max=50000000000 onchange="calcAep3(); calcCapex3(); calcOpex3()"/><span id="defaultDec_errors"><i> % of installation </i></span></td></tr></table>' + '<BR>' + '<BR>' + 

          '<table><tr><td><u>TOTALS*</u></td></tr>' +
          '<tr><td><i title = "Total Annual Energy Production.">Tot. AEP: </i><td><input type="number" title = "Value is based on your previous inputs."  name="totaep" id="totaep" style="width: 9em"><span><i> MWh/yr </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Total Capital Expenditure.">Tot. CAPEX: </i><td><input type="number" title = "Value is based on your previous inputs." name="totcapex" id="totcapex" style="width: 9em"><span><i> € </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Total Annual Operation and Maintenance Expenditure.">Tot. OPEX: </i><td><input type="number" title = "Value is based on your previous inputs." name="totopex" id="totopex" style="width: 9em" <span><i> €/yr </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Total Decomissioning Expenditutre.">Tot. DECEX: </i><td><input type="number" title = "Value is based on your previous inputs." name="totdecex" id="totdecex" style="width: 9em" <span><i> € </i></span></td></tr>' + '<BR>' +
          '<tr><td><i title = "Discounting will be applied on calculation after clicking Enter.">*undiscounted</i></td></tr></table>' + '<BR>' +


          '<div id="calculate_lcoe1"><button onclick="calc_te3()">Enter</button></div>' + '<BR>' +
          '<button></div>' +


          '<table><tr><td><i title = "The name of the project.">Project: </i><td><input type="text" title = "Value is based on your previous inputs." name="projectname" id="projectname" style="width: 10em" disabled /></td></tr>' +
          '<tr><td><i title = "Levelised Cost of Energy (LCOE) in Euro.">LCOE (€): </i><td><input type="text" title = "Value is based on your previous inputs." name="lcoe1" id="lcoe1" style="width: 7em" disabled /><i> €/MWh </i></td></tr>' +
          '<tr><td><i title = "Levelised Cost of Energy (LCOE) in Cents.">LCOE (c): </i><td><input type="text" title = "Value is based on your previous inputs." name="lcoe2" id="lcoe2" style="width: 7em" disabled /><i> c/kWh </i></td></tr>' +
          '<tr><td><i title = "Net Present Value (NPV) in Euro.">NPV: </i><td><input type="text" title = "Value is based on your previous inputs." name="npv" id="npv" style="width: 9em" disabled /><i> € </i></td></tr></table><BR>'


      return div;

  }


  var pcurveGroupLayer = new GroupLayer({
      title: "Power Curve - AEP",
      visible: true,
      visibilityMode: "inclusive",
      layers: [aepAtlantis1500, aepAtlantis1700, aepAtlantis2000],
  });


  
  var tidGroupLayer = new GroupLayer({
      title: "Tidal Energy",
      visible: true,
      visibilityMode: "inclusive",
      layers: [pcurveGroupLayer],
  });



  var teGroupLayer = new GroupLayer({
      title: "Techno-Economics",
      visible: true,
      visibilityMode: "inclusive",
      layers: [tidGroupLayer, wavGroupLayer],
  });



  var resultsLayer = new GraphicsLayer({
      title: "Suitable Sites",
      listMode: "show"
  });

  const params = new Query({
      returnGeometry: true,
      outFields: ["*"]
  });


  var graphicsLayer = new GraphicsLayer({
      title: "User-Drawn Feature",
      listMode: "show"
  });

  var userGroupLayer = new GroupLayer({
      title: "User-Defined Sites",
      visible: true,
      visibilityMode: "inclusive",
      layers: [resultsLayer, graphicsLayer],
  });


  var map = new Map({
      basemap: "oceans",
      layers: [teGroupLayer, userGroupLayer, resourceGroupLayer, oceanographyGroupLayer, seabedGroupLayer, oreInfrastructureGroupLayer, infrastructureGroupLayer, trafficGroupLayer, environmentGroupLayer, administrativGroupLayer]
  });

  var view = new MapView({
      container: "viewDiv",
      map: map,
      ui: {
          components: ["attribution"]
      },
      center: [-7, 52.50],
      zoom: 6,
      padding: {
          top: 85
      }
  });

  view.when(function () {
      view.ui.add("optionsDiv", "bottom-right");
      document.getElementById("doBtn").addEventListener("click", doQuery);
  });

  const attributeName0 = document.getElementById("attSelect0"); //you need unique variables for each input field
  const expressionSign0 = document.getElementById("signSelect0");
  const value0 = document.getElementById("valSelect0");

  const attributeName1 = document.getElementById("attSelect1");
  const expressionSign1 = document.getElementById("signSelect1");
  const value1 = document.getElementById("valSelect1");

  const attributeName2 = document.getElementById("attSelect2");
  const expressionSign2 = document.getElementById("signSelect2");
  const value2 = document.getElementById("valSelect2");

  const attributeName3 = document.getElementById("attSelect3");
  const expressionSign3 = document.getElementById("signSelect3");
  // const value3 = document.getElementById("valSelect3");


  function sqlStatement() {
      var selected = [];
      for (var option of document.getElementById('valSelect3').options) {
          if (option.selected) {
              selected.push(option.value);
          }
      }
  
      var sqlString = ""

      for (var option in selected) {
          if (option == 0){
              sqlString += "("
          }
          
          if (option != 0){
              sqlString += " OR "
          }
          sqlString += attributeName3.value + expressionSign3.value + selected[option];

          if (option == selected.length - 1){
              sqlString += ")"
          }
          
      }


      return sqlString
  }



  function doQuery() {

      

      resultsLayer.removeAll();

      let sqlString = sqlStatement()
      params.where = attributeName0.value + expressionSign0.value + value0.value + " AND " + attributeName1.value + expressionSign1.value + value1.value + " AND " + attributeName2.value + expressionSign2.value + value2.value + " AND " + sqlString; //combine all the attributes to one big SQL valid query
      console.log(params.where)
      query.executeQueryJSON(sitesUrl, params).then(getResults).catch(promiseRejected);
  }

  function getResults(response) {
      console.log(response)
      const siteResults = response.features.map(function (feature) {

          feature.symbol = { //specify the symbol
              type: "simple-fill",
              outline: {
                  width: "0px"
              },
              opacity: 0.8,
              color: [0, 0, 0, 0.29]
          }
          return feature //return the feature
      });



      resultsLayer.addMany(siteResults);



      view.goTo(siteResults).then(function () {

      }).catch(function (error) {
          if (error.name != "AbortError") {
              console.error(error);
          }
      });

  }



  // Called each time the promise is rejected
  function promiseRejected(error) {
      console.error("Promise rejected: ", error.message);
  };




  var basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "hybrid"
  });



  var coordsWidget = document.createElement("div");
  coordsWidget.id = "coordsWidget";
  coordsWidget.className = "esri-widget esri-component";
  coordsWidget.style.padding = "7px 15px 5px";
  coordsWidget.style.backgroundColor = "white";




  function showCoordinates(pt) {
      var coords = "Lat/Lon " + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3);
      coordsWidget.innerHTML = coords;
  }

  view.watch(["stationary"], function () {
      showCoordinates(view.center);
  });

  //*** Add event to show mouse coordinates on click and move ***//
  view.on(["pointer-down", "pointer-move"], function (evt) {
      showCoordinates(view.toMap({ x: evt.x, y: evt.y }));
  });



  function defineActions(event) {

      var item = event.item;

      if ((item.layer.name != "VHM0") && (item.layer.name != "VTM10") && (item.layer.name != "sea_water_velocity") && (item.layer.type != "group") && (item.layer.type != "graphics")) {
          item.panel = {
              content: "legend",
              open: false
          }
      }


      if ((item.layer.type != "group") && (item.layer.type != "graphics")) {

          item.actionsSections = [
              [
                  {
                      title: "Go to full extent",
                      className: "esri-icon-zoom-out-fixed",
                      id: "full-extent"
                  },
                  {
                      title: "Layer information",
                      className: "esri-icon-description",
                      id: "information"
                  }
              ],
              [
                  {
                      title: "Increase opacity",
                      className: "esri-icon-up",
                      id: "increase-opacity"
                  },
                  {
                      title: "Decrease opacity",
                      className: "esri-icon-down",
                      id: "decrease-opacity"
                  }
              ]
          ];
      }

      if (item.layer.type === "tile") {

          item.actionsSections = [
              [
                  {
                      title: "Go to full extent",
                      className: "esri-icon-zoom-out-fixed",
                      id: "full-extent"
                  },
                  {
                      title: "Layer information",
                      className: "esri-icon-description",
                      id: "information"
                  }
              ]
          ];
      }
  }






  view.when(function () {

      var sketch = new Sketch({
          layer: graphicsLayer,
          view: view,
          snappingOptions: {  // autocasts as SnappingOptions()
              enabled: true, // snapping will be on by default
              // feature snapping will be enabled on the GraphicsLayer
              featureSources: [{ layer: graphicsLayer }]
          },
          visibleElements: {
              createTools: {
                  circle: false,
                  rectangle: false
              },
              selectionTools: {
                  "lasso-selection": false,
                  "rectangle-selection": false
              },
              undoRedoMenu: false,
              settingsMenu: false
          }
      })

      // Create the LayerList widget with the associated actions
      // and add it to the top-right corner of the view.
      var layerList = new LayerList({
          view: view,
          listItemCreatedFunction: defineActions
      });

      // executes for each ListItem in the LayerList

      // Event listener that fires each time an action is triggered

      layerList.on("trigger-action", function (event) {
          // The layer visible in the view at the time of the trigger.


          // Capture the action id.
          var id = event.action.id;

          if ((id === "full-extent") && (event.item.layer.title === "Marine Conservation Zones")) {  // <---- The item variable was not defined as a global variable and hence couldn't be used to compare the name. Use the event instead.
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(marineConservationZones.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Marine Conservation Zones")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=866227b062d841e7983d4908404dfe03");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Marine Conservation Zones")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (marineConservationZones.opacity < 1) {
                  marineConservationZones.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Marine Conservation Zones")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (marineConservationZones.opacity > 0) {
                  marineConservationZones.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Coastal and Marine SPAs")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(marineSPAs.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Coastal and Marine SPAs")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=89fa258e46cd47528c6ca3c000f8a3a2");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Coastal and Marine SPAs")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (marineSPAs.opacity < 1) {
                  marineSPAs.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Coastal and Marine SPAs")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (marineSPAs.opacity > 0) {
                  marineSPAs.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Coastal and Marine SACs")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(marineSACs.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Coastal and Marine SACs")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=f380baa78c8548d88f903b2059303cca");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Coastal and Marine SACs")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (marineSACs.opacity < 1) {
                  marineSACs.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Coastal and Marine SACs")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (marineSACs.opacity > 0) {
                  marineSACs.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "Excavatable to Shore")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(excavatableToShore.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Excavatable to Shore")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=76266a1bebe348feb8ad758e17dce1fa");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Excavatable to Shore")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (excavatableToShore.opacity < 1) {
                  excavatableToShore.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Excavatable to Shore")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (excavatableToShore.opacity > 0) {
                  excavatableToShore.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Substrate")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(seabedSubstrate.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Substrate")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=46d5221a84644f09bbd2b0a54cf0722f");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Substrate")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (seabedSubstrate.opacity < 1) {
                  seabedSubstrate.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Substrate")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (seabedSubstrate.opacity > 0) {
                  seabedSubstrate.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Water Depth")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(bathyLayer.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Water Depth")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=2022fe30f48645a18a7b4d23ee3b7765");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Water Depth")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (bathyLayer.opacity < 1) {
                  bathyLayer.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Water Depth")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (bathyLayer.opacity > 0) {
                  bathyLayer.opacity -= 0.25;
              }
          }


          else if ((id === "full-extent") && (event.item.layer.title === "Depth Contours (m)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(bathyContour.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Depth Contours (m)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=bb90268620f74fe2b97d6378248eb755");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Depth Contours (m)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (bathyContour.opacity < 1) {
                  bathyContour.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Depth Contours (m)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (bathyContour.opacity > 0) {
                  bathyContour.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "Ferry Routes")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(ferryRoutes.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Ferry Routes")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=f254fffa74da44a7ac61e169fdd763c7");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Ferry Routes")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (ferryRoutes.opacity < 1) {
                  ferryRoutes.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Ferry Routes")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (ferryRoutes.opacity > 0) {
                  ferryRoutes.opacity -= 0.25;
              }
          }






          else if ((id === "full-extent") && (event.item.layer.title === "Fishing Vessel Density (AIS)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(fishingDensity.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Fishing Vessel Density (AIS)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=8c6e1094bff744ecaac0912b2064d759");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Fishing Vessel Density (AIS)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (fishingDensity.opacity < 1) {
                  fishingDensity.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Fishing Vessel Density (AIS)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (fishingDensity.opacity > 0) {
                  fishingDensity.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "Shipping Traffic Density (AIS)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(shippingDensity.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Shipping Traffic Density (AIS)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=d965a463d367486da301bb126f65e28f");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Shipping Traffic Density (AIS)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (shippingDensity.opacity < 1) {
                  shippingDensity.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Shipping Traffic Density (AIS)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (shippingDensity.opacity > 0) {
                  shippingDensity.opacity -= 0.25;
              }
          }



          else if ((id === "full-extent") && (event.item.layer.title === "Traffic Seperation Scheme (TSS)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(tSs.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Traffic Seperation Scheme (TSS)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=6821136c5b00489793fffc2596bd900e");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Traffic Seperation Scheme (TSS)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (tSs.opacity < 1) {
                  tSs.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Traffic Seperation Scheme (TSS)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (tSs.opacity > 0) {
                  tSs.opacity -= 0.25;
              }
          }











          else if ((id === "full-extent") && (event.item.layer.title === "Selkie Project Regions")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(selkieArea.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Selkie Project Regions")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=67a08e2a9ed34f6cbdc6e227adbf0b6c");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Selkie Project Regions")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (selkieArea.opacity < 1) {
                  selkieArea.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Selkie Project Regions")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (selkieArea.opacity > 0) {
                  selkieArea.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Local Sea Areas")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(localSeaAreas.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Local Sea Areas")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=81f05e87a42e493988248c66e2677175");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Local Sea Areas")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (localSeaAreas.opacity < 1) {
                  localSeaAreas.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Local Sea Areas")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (localSeaAreas.opacity > 0) {
                  localSeaAreas.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "Territorial Seas (12NM Limit)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(selkieTerritorialSeas.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Territorial Seas (12NM Limit)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=2c50a8443c2d477881d8d05b22889923");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Territorial Seas (12NM Limit)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (selkieTerritorialSeas.opacity < 1) {
                  selkieTerritorialSeas.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Territorial Seas (12NM Limit)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (selkieTerritorialSeas.opacity > 0) {
                  selkieTerritorialSeas.opacity -= 0.25;
              }
          }



          else if ((id === "full-extent") && (event.item.layer.title === "EEZ Limits (Eire and UK)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(eezUkandIrl.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "EEZ Limits (Eire and UK)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=4893160eac90469baee4c3a27af6cecd");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "EEZ Limits (Eire and UK)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (eezUkandIrl.opacity < 1) {
                  eezUkandIrl.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "EEZ Limits (Eire and UK)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (eezUkandIrl.opacity > 0) {
                  eezUkandIrl.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Selkie Study Area")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(selkieStudyArea.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Selkie Study Area")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=a17a1335d38c4d9fbb3c6b651eb36f63");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Selkie Study Area")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (selkieStudyArea.opacity < 1) {
                  selkieStudyArea.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Selkie Study Area")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (selkieStudyArea.opacity > 0) {
                  selkieStudyArea.opacity -= 0.25;
              }
          }


          else if ((id === "full-extent") && (event.item.layer.title === "Ireland's OREDP Assessment Zones")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(oredpAssessmentZones.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Ireland's OREDP Assessment Zones")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=d0e6f26b10f84dce8c5aef6d97ae22df");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Ireland's OREDP Assessment Zones")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (oredpAssessmentZones.opacity < 1) {
                  oredpAssessmentZones.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Ireland's OREDP Assessment Zones")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (oredpAssessmentZones.opacity > 0) {
                  oredpAssessmentZones.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "UK Wind Power Lease Areas")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(ukWindDeploymentSite.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "UK Wind Power Lease Areas")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=b12e1978ca044dc3b474747c405fac70");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "UK Wind Power Lease Areas")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (ukWindDeploymentSite.opacity < 1) {
                  ukWindDeploymentSite.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "UK Wind Power Lease Areas")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (ukWindDeploymentSite.opacity > 0) {
                  ukWindDeploymentSite.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "UK Wave Energy Site Agreements")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(ukWaveDeploymentSite.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "UK Wave Energy Site Agreements")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=c7b727cb0a7345a890fd5eaa0a33f05e");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "UK Wave Energy Site Agreements")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (ukWaveDeploymentSite.opacity < 1) {
                  ukWaveDeploymentSite.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "UK Wave Energy Site Agreements")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (ukWaveDeploymentSite.opacity > 0) {
                  ukWaveDeploymentSite.opacity -= 0.25;
              }
          }






          else if ((id === "full-extent") && (event.item.layer.title === "UK Tidal Stream Site Agreements")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(ukTidalDeploymentSite.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "UK Tidal Stream Site Agreements")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=697e749bf305499a8bd800624dea3841");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "UK Tidal Stream Site Agreements")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (ukTidalDeploymentSite.opacity < 1) {
                  ukTidalDeploymentSite.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "UK Tidal Stream Site Agreements")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (ukTidalDeploymentSite.opacity > 0) {
                  ukTidalDeploymentSite.opacity -= 0.25;
              }
          }






          else if ((id === "full-extent") && (event.item.layer.title === "SmartBay 1/4 scale Wave Energy Test Site")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(galwayBayTestSite.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "SmartBay 1/4 scale Wave Energy Test Site")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=722a5e8665a94a3d9427adbafd1ea065");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "SmartBay 1/4 scale Wave Energy Test Site")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (galwayBayTestSite.opacity < 1) {
                  galwayBayTestSite.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "SmartBay 1/4 scale Wave Energy Test Site")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (galwayBayTestSite.opacity > 0) {
                  galwayBayTestSite.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "SmartBay Cable Route")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(galwayBayTestSiteCableRoute.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "SmartBay Cable Route")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=4b918bbee7f346bab7802fcd803598d8");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "SmartBay Cable Route")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (galwayBayTestSiteCableRoute.opacity < 1) {
                  galwayBayTestSiteCableRoute.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "SmartBay Cable Route")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (galwayBayTestSiteCableRoute.opacity > 0) {
                  galwayBayTestSiteCableRoute.opacity -= 0.25;
              }
          }






        //   else if ((id === "full-extent") && (event.item.layer.title === "WestWave - Proposed Deployment Site")) {
        //       // if the full-extent action is triggered then navigate
        //       // to the full extent of the visible layer
        //       view.goTo(westWaveDeploymentSite.fullExtent).catch(function (error) {
        //           if (error.name != "AbortError") {
        //               console.error(error);
        //           }
        //       });
        //   } else if ((id === "information") && (event.item.layer.title === "WestWave - Proposed Deployment Site")) {
        //       // if the information action is triggered, then
        //       // open the item details page of the service layer
        //       window.open(westWaveDeploymentSite.url);
        //   } else if ((id === "increase-opacity") && (event.item.layer.title === "WestWave - Proposed Deployment Site")) {
        //       // if the increase-opacity action is triggered, then
        //       // increase the opacity of the GroupLayer by 0.25

        //       if (westWaveDeploymentSite.opacity < 1) {
        //           westWaveDeploymentSite.opacity += 0.25;
        //       }
        //   } else if ((id === "decrease-opacity") && (event.item.layer.title === "WestWave - Proposed Deployment Site")) {
        //       // if the decrease-opacity action is triggered, then
        //       // decrease the opacity of the GroupLayer by 0.25

        //       if (westWaveDeploymentSite.opacity > 0) {
        //           westWaveDeploymentSite.opacity -= 0.25;
        //       }
        //   }





        //   else if ((id === "full-extent") && (event.item.layer.title === "WestWave - Proposed Cable Route Corridor")) {
        //       // if the full-extent action is triggered then navigate
        //       // to the full extent of the visible layer
        //       view.goTo(westWaveCableCorridor.fullExtent).catch(function (error) {
        //           if (error.name != "AbortError") {
        //               console.error(error);
        //           }
        //       });
        //   } else if ((id === "information") && (event.item.layer.title === "WestWave - Proposed Cable Route Corridor")) {
        //       // if the information action is triggered, then
        //       // open the item details page of the service layer
        //       window.open(westWaveCableCorridor.url);
        //   } else if ((id === "increase-opacity") && (event.item.layer.title === "WestWave - Proposed Cable Route Corridor")) {
        //       // if the increase-opacity action is triggered, then
        //       // increase the opacity of the GroupLayer by 0.25

        //       if (westWaveCableCorridor.opacity < 1) {
        //           westWaveCableCorridor.opacity += 0.25;
        //       }
        //   } else if ((id === "decrease-opacity") && (event.item.layer.title === "WestWave - Proposed Cable Route Corridor")) {
        //       // if the decrease-opacity action is triggered, then
        //       // decrease the opacity of the GroupLayer by 0.25

        //       if (westWaveCableCorridor.opacity > 0) {
        //           westWaveCableCorridor.opacity -= 0.25;
        //       }
        //   }


        //   else if ((id === "full-extent") && (event.item.layer.title === "Western Star WEC Project")) {
        //       // if the full-extent action is triggered then navigate
        //       // to the full extent of the visible layer
        //       view.goTo(westernStarWaveDeploymentSite.fullExtent).catch(function (error) {
        //           if (error.name != "AbortError") {
        //               console.error(error);
        //           }
        //       });
        //   } else if ((id === "information") && (event.item.layer.title === "Western Star WEC Project")) {
        //       // if the information action is triggered, then
        //       // open the item details page of the service layer
        //       window.open(westernStarWaveDeploymentSite.url);
        //   } else if ((id === "increase-opacity") && (event.item.layer.title === "Western Star WEC Project")) {
        //       // if the increase-opacity action is triggered, then
        //       // increase the opacity of the GroupLayer by 0.25

        //       if (westernStarWaveDeploymentSite.opacity < 1) {
        //           westernStarWaveDeploymentSite.opacity += 0.25;
        //       }
        //   } else if ((id === "decrease-opacity") && (event.item.layer.title === "Western Star WEC Project")) {
        //       // if the decrease-opacity action is triggered, then
        //       // decrease the opacity of the GroupLayer by 0.25

        //       if (westernStarWaveDeploymentSite.opacity > 0) {
        //           westernStarWaveDeploymentSite.opacity -= 0.25;
        //       }
        //   }



          else if ((id === "full-extent") && (event.item.layer.title === "Ireland Wind Energy Projects")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(irlWindDeploymentSite.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Ireland Wind Energy Projects")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=8d6774ea558549cfaa657c4736ab9ab9");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Ireland Wind Energy Projects")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (irlWindDeploymentSite.opacity < 1) {
                  irlWindDeploymentSite.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Ireland Wind Energy Projects")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (irlWindDeploymentSite.opacity > 0) {
                  irlWindDeploymentSite.opacity -= 0.25;
              }
          }



          else if ((id === "full-extent") && (event.item.layer.title === "AMETS - Deployment Site")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(ametsDeploymentSite.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "AMETS - Deployment Site")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=fa1230e504df4e1d9bef8b7b7cc38b59");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "AMETS - Deployment Site")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (ametsDeploymentSite.opacity < 1) {
                  ametsDeploymentSite.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "AMETS - Deployment Site")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (ametsDeploymentSite.opacity > 0) {
                  ametsDeploymentSite.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "AMETS - Cable Route Corridor")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(ametsCableCorridor.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "AMETS - Cable Route Corridor")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=26a02a12bd66472a849e2522521eb931");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "AMETS - Cable Route Corridor")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (ametsCableCorridor.opacity < 1) {
                  ametsCableCorridor.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "AMETS - Cable Route Corridor")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (ametsCableCorridor.opacity > 0) {
                  ametsCableCorridor.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "Sub-Sea Cable Routes")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(cableRoutes.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Sub-Sea Cable Routes")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=efa2403e8f3542088fb6f5177a561ee0");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Sub-Sea Cable Routes")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (cableRoutes.opacity < 1) {
                  cableRoutes.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Sub-Sea Cable Routes")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (cableRoutes.opacity > 0) {
                  cableRoutes.opacity -= 0.25;
              }
          }






          else if ((id === "full-extent") && (event.item.layer.title === "Major Road Network")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(roadNetwork.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Major Road Network")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=3cca9644c34b4899b9178a6ba0584887");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Major Road Network")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (roadNetwork.opacity < 1) {
                  roadNetwork.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Major Road Network")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (roadNetwork.opacity > 0) {
                  roadNetwork.opacity -= 0.25;
              }
          }



          else if ((id === "full-extent") && (event.item.layer.title === "Rail Network")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(railNetwork.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Rail Network")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=628721cf5e4040f1929c6ccc62a28f55");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Rail Network")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (railNetwork.opacity < 1) {
                  railNetwork.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Rail Network")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (railNetwork.opacity > 0) {
                  railNetwork.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "Airports")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(airportsIrlUk.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Airports")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=d64ca9bb44814804a3d20d8f97ecafdb");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Airports")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (airportsIrlUk.opacity < 1) {
                  airportsIrlUk.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Airports")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (airportsIrlUk.opacity > 0) {
                  airportsIrlUk.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "Substation Proximity")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(coastalSubstationsIrlUKDistance.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Substation Proximity")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=286854bafe45462697bebaf7d5eeb23b");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Substation Proximity")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (coastalSubstationsIrlUKDistance.opacity < 1) {
                  coastalSubstationsIrlUKDistance.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Substation Proximity")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (coastalSubstationsIrlUKDistance.opacity > 0) {
                  coastalSubstationsIrlUKDistance.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Coastal Substations (≥ 110 kV)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(coastalSubstationsIrlUK.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Coastal Substations (≥ 110 kV)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=2c2a4a6631e94508bdc399d405cd0f1f");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Coastal Substations (≥ 110 kV)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (coastalSubstationsIrlUK.opacity < 1) {
                  coastalSubstationsIrlUK.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Coastal Substations (≥ 110 kV)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (coastalSubstationsIrlUK.opacity > 0) {
                  coastalSubstationsIrlUK.opacity -= 0.25;
              }
          }



          else if ((id === "full-extent") && (event.item.layer.title === "ORE Port Proximity")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(mrePortsDistance.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "ORE Port Proximity")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=e8cdc488c80a4c67b8ed5c9fe9e8e687");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "ORE Port Proximity")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (mrePortsDistance.opacity < 1) {
                  mrePortsDistance.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "ORE Port Proximity")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (mrePortsDistance.opacity > 0) {
                  mrePortsDistance.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "ORE Ports")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(mrePorts.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "ORE Ports")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=2b665fad15044705b05c388931b8f2be");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "ORE Ports")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (mrePorts.opacity < 1) {
                  mrePorts.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "ORE Ports")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (mrePorts.opacity > 0) {
                  mrePorts.opacity -= 0.25;
              }
          }



          else if ((id === "full-extent") && (event.item.layer.title === "Green H2 Proximity")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(greenHydrogenDistance.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Green H2 Proximity")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=87e9294bdaf1417f853cc818c014f8cb");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Green H2 Proximity")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (greenHydrogenDistance.opacity < 1) {
                  greenHydrogenDistance.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Green H2 Proximity")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (greenHydrogenDistance.opacity > 0) {
                  greenHydrogenDistance.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Planned Green H2 Production Plants")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(greenHydrogenPlantsSelkie.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Planned Green H2 Production Plants")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=d9e9d1120f0c49c08de045f064bad69d");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Planned Green H2 Production Plants")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (greenHydrogenPlantsSelkie.opacity < 1) {
                  greenHydrogenPlantsSelkie.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Planned Green H2 Production Plants")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (greenHydrogenPlantsSelkie.opacity > 0) {
                  greenHydrogenPlantsSelkie.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Hs Winter Mean")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(swhWinter.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Hs Winter Mean")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=9f5674d21a4a45e9973f12d1e3d24a52");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Hs Winter Mean")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (swhWinter.opacity < 1) {
                  swhWinter.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Hs Winter Mean")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (swhWinter.opacity > 0) {
                  swhWinter.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Hs Spring Mean")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(swhSpring.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Hs Spring Mean")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=c4a4a288d3c24ee4ade8816bd59ba31d");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Hs Spring Mean")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (swhSpring.opacity < 1) {
                  swhSpring.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Hs Spring Mean")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (swhSpring.opacity > 0) {
                  swhSpring.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Hs Summer Mean")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(swhSummer.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Hs Summer Mean")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=9f5674d21a4a45e9973f12d1e3d24a52");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Hs Summer Mean")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (swhSummer.opacity < 1) {
                  swhSummer.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Hs Summer Mean")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (swhSummer.opacity > 0) {
                  swhSummer.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "Hs Autumn Mean")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(swhAutumn.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Hs Autumn Mean")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=80f5c85c1b7145f7b3acb0a2d4cf60ef");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Hs Autumn Mean")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (swhAutumn.opacity < 1) {
                  swhAutumn.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Hs Autumn Mean")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (swhAutumn.opacity > 0) {
                  swhAutumn.opacity -= 0.25;
              }
          }





          else if ((id === "full-extent") && (event.item.layer.title === "Te Winter Mean")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(mwpWinter.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Te Winter Mean")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=8655dea05ed44c0094f461cf045ea95b");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Te Winter Mean")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (mwpWinter.opacity < 1) {
                  mwpWinter.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Te Winter Mean")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (mwpWinter.opacity > 0) {
                  mwpWinter.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Te Spring Mean")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(mwpSpring.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Te Spring Mean")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=671eb347999e49fb8c4387564bbf749c");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Te Spring Mean")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (mwpSpring.opacity < 1) {
                  mwpSpring.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Te Spring Mean")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (mwpSpring.opacity > 0) {
                  mwpSpring.opacity -= 0.25;
              }
          }



          else if ((id === "full-extent") && (event.item.layer.title === "Te Summer Mean")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(mwpSummer.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Te Summer Mean")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=6341c30306744301aec6217936d24eb3");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Te Summer Mean")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (mwpSummer.opacity < 1) {
                  mwpSummer.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Te Summer Mean")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (mwpSummer.opacity > 0) {
                  mwpSummer.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Te Autumn Mean")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(mwpAutumn.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Te Autumn Mean")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=56b022714b044329bb3badcfb4f0111b");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Te Autumn Mean")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (mwpAutumn.opacity < 1) {
                  mwpAutumn.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Te Autumn Mean")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (mwpAutumn.opacity > 0) {
                  mwpAutumn.opacity -= 0.25;
              }
          }



          else if ((id === "full-extent") && (event.item.layer.title === "Maximum Spring Peak Current Velocity (m/s)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(maxSpcv.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Maximum Spring Peak Current Velocity (m/s)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=26dc9660093a4294ba1f19241bdd1f29");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Maximum Spring Peak Current Velocity (m/s)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (maxSpcv.opacity < 1) {
                  maxSpcv.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Maximum Spring Peak Current Velocity (m/s)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (maxSpcv.opacity > 0) {
                  maxSpcv.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Mean Spring Peak Current Velocity (m/s)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(meanSpcv.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Mean Spring Peak Current Velocity (m/s)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=f58711ab708245c099330e7c6211d5be");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Mean Spring Peak Current Velocity (m/s)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (meanSpcv.opacity < 1) {
                  meanSpcv.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Mean Spring Peak Current Velocity (m/s)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (meanSpcv.opacity > 0) {
                  meanSpcv.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Mean Peak Current Velocity (m/s)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(meanPcv.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Mean Peak Current Velocity (m/s)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=cc0d788b3d304c4ca93afe0899b30194");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Mean Peak Current Velocity (m/s)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (meanPcv.opacity < 1) {
                  meanPcv.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Mean Peak Current Velocity (m/s)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (meanPcv.opacity > 0) {
                  meanPcv.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Mean Neap Peak Current Velocity (m/s)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(meanNpcv.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Mean Neap Peak Current Velocity (m/s)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=57baed578c234145a80aeeacd695f0cc");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Mean Neap Peak Current Velocity (m/s)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (meanNpcv.opacity < 1) {
                  meanNpcv.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Mean Neap Peak Current Velocity (m/s)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (meanNpcv.opacity > 0) {
                  meanNpcv.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Maximum Peak Current Velocity (m/s)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(maxPcv.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Maximum Peak Current Velocity (m/s)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=d0f023f3b63b4538b5105121b025a9b4");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Maximum Peak Current Velocity (m/s)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (maxPcv.opacity < 1) {
                  maxPcv.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Maximum Peak Current Velocity (m/s)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (maxPcv.opacity > 0) {
                  maxPcv.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Maximum Neap Peak Current Velocity (m/s)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(maxNpcv.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Maximum Neap Peak Current Velocity (m/s)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=e28c4935beaf4c43aa86beda30a52dbe");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Maximum Neap Peak Current Velocity (m/s)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (maxNpcv.opacity < 1) {
                  maxNpcv.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Maximum Neap Peak Current Velocity (m/s)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (maxNpcv.opacity > 0) {
                  maxNpcv.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Waves")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(liveWav.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Waves")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open(liveWav.url);
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Waves")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (liveWav.opacity < 1) {
                  liveWav.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Waves")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (liveWav.opacity > 0) {
                  liveWav.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Currents")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(liveCur.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Currents")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open(liveCur.url);
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Currents")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (liveCur.opacity < 1) {
                  liveCur.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Currents")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (liveCur.opacity > 0) {
                  liveCur.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Mean Annual Wave Energy (kW/m)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(meanAnnualWaveResourceSelkie.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Mean Annual Wave Energy (kW/m)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=9c1c755a71174208a31829a038dc39df");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Mean Annual Wave Energy (kW/m)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (meanAnnualWaveResourceSelkie.opacity < 1) {
                  meanAnnualWaveResourceSelkie.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Mean Annual Wave Energy (kW/m)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (meanAnnualWaveResourceSelkie.opacity > 0) {
                  meanAnnualWaveResourceSelkie.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Annual Tidal Energy (Wh/m²)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(annualTp.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Annual Tidal Energy (Wh/m²)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=c43501531bc54148a2391a30a5b56c2d");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Annual Tidal Energy (Wh/m²)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (annualTp.opacity < 1) {
                  annualTp.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Annual Tidal Energy (Wh/m²)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (annualTp.opacity > 0) {
                  annualTp.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Annual Spring Tidal Energy (Wh/m²)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(annualStp.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Annual Spring Tidal Energy (Wh/m²)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=331408c4fcce41e191213603c2bd4537");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Annual Spring Tidal Energy (Wh/m²)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (annualStp.opacity < 1) {
                  annualStp.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Annual Spring Tidal Energy (Wh/m²)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (annualStp.opacity > 0) {
                  annualStp.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Annual Neap Tidal Energy (Wh/m²)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(annualNtp.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Annual Neap Tidal Energy (Wh/m²)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=9af10ee213de4f58a7be9f96ce06a4c9");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Annual Neap Tidal Energy (Wh/m²)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (annualNtp.opacity < 1) {
                  annualNtp.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Annual Neap Tidal Energy (Wh/m²)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (annualNtp.opacity > 0) {
                  annualNtp.opacity -= 0.25;
              }
          }











          else if ((id === "full-extent") && (event.item.layer.title === "Generic")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(aepGeneric.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Generic")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=7a121ef377f54accab0fe6ad8e43b806");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Generic")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (aepGeneric.opacity < 1) {
                  aepGeneric.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Generic")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (aepGeneric.opacity > 0) {
                  aepGeneric.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "OWC")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(aepOceanEnergy.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "OWC")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=df66eb91bcbe450681b27c8fcc524c1a");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "OWC")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (aepOceanEnergy.opacity < 1) {
                  aepOceanEnergy.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "OWC")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (aepOceanEnergy.opacity > 0) {
                  aepOceanEnergy.opacity -= 0.25;
              }
          }




          else if ((id === "full-extent") && (event.item.layer.title === "Point Absorber")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo("https://marei.maps.arcgis.com/home/item.html?id=e2eda83e65994cf6999ac1a541033dee").catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Point Absorber")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=e2eda83e65994cf6999ac1a541033dee");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Point Absorber")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (aepCorPower.opacity < 1) {
                  aepCorPower.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Point Absorber")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (aepCorPower.opacity > 0) {
                  aepCorPower.opacity -= 0.25;
              }
          }




        //   else if ((id === "full-extent") && (event.item.layer.title === "Pontoon")) {
        //       // if the full-extent action is triggered then navigate
        //       // to the full extent of the visible layer
        //       view.goTo(aepPontoon.fullExtent).catch(function (error) {
        //           if (error.name != "AbortError") {
        //               console.error(error);
        //           }
        //       });
        //   } else if ((id === "information") && (event.item.layer.title === "Pontoon")) {
        //       // if the information action is triggered, then
        //       // open the item details page of the service layer
        //       window.open(aepPontoon.url);
        //   } else if ((id === "increase-opacity") && (event.item.layer.title === "Pontoon")) {
        //       // if the increase-opacity action is triggered, then
        //       // increase the opacity of the GroupLayer by 0.25

        //       if (aepPontoon.opacity < 1) {
        //           aepPontoon.opacity += 0.25;
        //       }
        //   } else if ((id === "decrease-opacity") && (event.item.layer.title === "Pontoon")) {
        //       // if the decrease-opacity action is triggered, then
        //       // decrease the opacity of the GroupLayer by 0.25

        //       if (aepPontoon.opacity > 0) {
        //           aepPontoon.opacity -= 0.25;
        //       }
        //   }




        //   else if ((id === "full-extent") && (event.item.layer.title === "Langlee")) {
        //       // if the full-extent action is triggered then navigate
        //       // to the full extent of the visible layer
        //       view.goTo(aepLanglee.fullExtent).catch(function (error) {
        //           if (error.name != "AbortError") {
        //               console.error(error);
        //           }
        //       });
        //   } else if ((id === "information") && (event.item.layer.title === "Langlee")) {
        //       // if the information action is triggered, then
        //       // open the item details page of the service layer
        //       window.open(aepLanglee.url);
        //   } else if ((id === "increase-opacity") && (event.item.layer.title === "Langlee")) {
        //       // if the increase-opacity action is triggered, then
        //       // increase the opacity of the GroupLayer by 0.25

        //       if (aepLanglee.opacity < 1) {
        //           aepLanglee.opacity += 0.25;
        //       }
        //   } else if ((id === "decrease-opacity") && (event.item.layer.title === "Langlee")) {
        //       // if the decrease-opacity action is triggered, then
        //       // decrease the opacity of the GroupLayer by 0.25

        //       if (aepLanglee.opacity > 0) {
        //           aepLanglee.opacity -= 0.25;
        //       }
        //   }




        //   else if ((id === "full-extent") && (event.item.layer.title === "Wavebob")) {
        //       // if the full-extent action is triggered then navigate
        //       // to the full extent of the visible layer
        //       view.goTo(aepWaveBob.fullExtent).catch(function (error) {
        //           if (error.name != "AbortError") {
        //               console.error(error);
        //           }
        //       });
        //   } else if ((id === "information") && (event.item.layer.title === "Wavebob")) {
        //       // if the information action is triggered, then
        //       // open the item details page of the service layer
        //       window.open(aepWaveBob.url);
        //   } else if ((id === "increase-opacity") && (event.item.layer.title === "Wavebob")) {
        //       // if the increase-opacity action is triggered, then
        //       // increase the opacity of the GroupLayer by 0.25

        //       if (aepWaveBob.opacity < 1) {
        //           aepWaveBob.opacity += 0.25;
        //       }
        //   } else if ((id === "decrease-opacity") && (event.item.layer.title === "Wavebob")) {
        //       // if the decrease-opacity action is triggered, then
        //       // decrease the opacity of the GroupLayer by 0.25

        //       if (aepWaveBob.opacity > 0) {
        //           aepWaveBob.opacity -= 0.25;
        //       }
        //   }




        //   else if ((id === "full-extent") && (event.item.layer.title === "AWS")) {
        //       // if the full-extent action is triggered then navigate
        //       // to the full extent of the visible layer
        //       view.goTo(aepAWS.fullExtent).catch(function (error) {
        //           if (error.name != "AbortError") {
        //               console.error(error);
        //           }
        //       });
        //   } else if ((id === "information") && (event.item.layer.title === "AWS")) {
        //       // if the information action is triggered, then
        //       // open the item details page of the service layer
        //       window.open(aepAWS.url);
        //   } else if ((id === "increase-opacity") && (event.item.layer.title === "AWS")) {
        //       // if the increase-opacity action is triggered, then
        //       // increase the opacity of the GroupLayer by 0.25

        //       if (aepAWS.opacity < 1) {
        //           aepAWS.opacity += 0.25;
        //       }
        //   } else if ((id === "decrease-opacity") && (event.item.layer.title === "AWS")) {
        //       // if the decrease-opacity action is triggered, then
        //       // decrease the opacity of the GroupLayer by 0.25

        //       if (aepAWS.opacity > 0) {
        //           aepAWS.opacity -= 0.25;
        //       }
        //   }




        //   else if ((id === "full-extent") && (event.item.layer.title === "Wave Dragon")) {
        //       // if the full-extent action is triggered then navigate
        //       // to the full extent of the visible layer
        //       view.goTo(aepWaveDragon.fullExtent).catch(function (error) {
        //           if (error.name != "AbortError") {
        //               console.error(error);
        //           }
        //       });
        //   } else if ((id === "information") && (event.item.layer.title === "Wave Dragon")) {
        //       // if the information action is triggered, then
        //       // open the item details page of the service layer
        //       window.open(aepWaveDragon.url);
        //   } else if ((id === "increase-opacity") && (event.item.layer.title === "Wave Dragon")) {
        //       // if the increase-opacity action is triggered, then
        //       // increase the opacity of the GroupLayer by 0.25

        //       if (aepWaveDragon.opacity < 1) {
        //           aepWaveDragon.opacity += 0.25;
        //       }
        //   } else if ((id === "decrease-opacity") && (event.item.layer.title === "Wave Dragon")) {
        //       // if the decrease-opacity action is triggered, then
        //       // decrease the opacity of the GroupLayer by 0.25

        //       if (aepWaveDragon.opacity > 0) {
        //           aepWaveDragon.opacity -= 0.25;
        //       }
        //   }




          else if ((id === "full-extent") && (event.item.layer.title === "Attenuator")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(aepPelamis.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Attenuator")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=b7936cec6c2542449378a1d2017eaa14");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Attenuator")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (aepPelamis.opacity < 1) {
                  aepPelamis.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Attenuator")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (aepPelamis.opacity > 0) {
                  aepPelamis.opacity -= 0.25;
              }
          }




        //   else if ((id === "full-extent") && (event.item.layer.title === "AquaBuoy")) {
        //       // if the full-extent action is triggered then navigate
        //       // to the full extent of the visible layer
        //       view.goTo(aepAquaBuoy.fullExtent).catch(function (error) {
        //           if (error.name != "AbortError") {
        //               console.error(error);
        //           }
        //       });
        //   } else if ((id === "information") && (event.item.layer.title === "AquaBuoy")) {
        //       // if the information action is triggered, then
        //       // open the item details page of the service layer
        //       window.open(aepAquaBuoy.url);
        //   } else if ((id === "increase-opacity") && (event.item.layer.title === "AquaBuoy")) {
        //       // if the increase-opacity action is triggered, then
        //       // increase the opacity of the GroupLayer by 0.25

        //       if (aepAquaBuoy.opacity < 1) {
        //           aepAquaBuoy.opacity += 0.25;
        //       }
        //   } else if ((id === "decrease-opacity") && (event.item.layer.title === "AquaBuoy")) {
        //       // if the decrease-opacity action is triggered, then
        //       // decrease the opacity of the GroupLayer by 0.25

        //       if (aepAquaBuoy.opacity > 0) {
        //           aepAquaBuoy.opacity -= 0.25;
        //       }
        //   }




        //   else if ((id === "full-extent") && (event.item.layer.title === "Oyster")) {
        //       // if the full-extent action is triggered then navigate
        //       // to the full extent of the visible layer
        //       view.goTo(aepOyster.fullExtent).catch(function (error) {
        //           if (error.name != "AbortError") {
        //               console.error(error);
        //           }
        //       });
        //   } else if ((id === "information") && (event.item.layer.title === "Oyster")) {
        //       // if the information action is triggered, then
        //       // open the item details page of the service layer
        //       window.open(aepOyster.url);
        //   } else if ((id === "increase-opacity") && (event.item.layer.title === "Oyster")) {
        //       // if the increase-opacity action is triggered, then
        //       // increase the opacity of the GroupLayer by 0.25

        //       if (aepOyster.opacity < 1) {
        //           aepOyster.opacity += 0.25;
        //       }
        //   } else if ((id === "decrease-opacity") && (event.item.layer.title === "Oyster")) {
        //       // if the decrease-opacity action is triggered, then
        //       // decrease the opacity of the GroupLayer by 0.25

        //       if (aepOyster.opacity > 0) {
        //           aepOyster.opacity -= 0.25;
        //       }
        //   }


        else if ((id === "full-extent") && (event.item.layer.title === "OWC LCOE")) {
            // if the full-extent action is triggered then navigate
            // to the full extent of the visible layer
            view.goTo(lcoeOwc.fullExtent).catch(function (error) {
                if (error.name != "AbortError") {
                    console.error(error);
                }
            });
        } else if ((id === "information") && (event.item.layer.title === "OWC LCOE")) {
            // if the information action is triggered, then
            // open the item details page of the service layer
            window.open("https://marei.maps.arcgis.com/home/item.html?id=c922274bc4f543a49700645a6977e16b");
        } else if ((id === "increase-opacity") && (event.item.layer.title === "OWC LCOE")) {
            // if the increase-opacity action is triggered, then
            // increase the opacity of the GroupLayer by 0.25

            if (lcoeOwc.opacity < 1) {
                lcoeOwc.opacity += 0.25;
            }
        } else if ((id === "decrease-opacity") && (event.item.layer.title === "OWC LCOE")) {
            // if the decrease-opacity action is triggered, then
            // decrease the opacity of the GroupLayer by 0.25

            if (lcoeOwc.opacity > 0) {
                lcoeOwc.opacity -= 0.25;
            }
        }


        else if ((id === "full-extent") && (event.item.layer.title === "Point Absorber LCOE")) {
            // if the full-extent action is triggered then navigate
            // to the full extent of the visible layer
            view.goTo(lcoePa.fullExtent).catch(function (error) {
                if (error.name != "AbortError") {
                    console.error(error);
                }
            });
        } else if ((id === "information") && (event.item.layer.title === "Point Absorber LCOE")) {
            // if the information action is triggered, then
            // open the item details page of the service layer
            window.open("https://marei.maps.arcgis.com/home/item.html?id=df75b4def2b4431cb6f0a3d772d87bd8");
        } else if ((id === "increase-opacity") && (event.item.layer.title === "Point Absorber LCOE")) {
            // if the increase-opacity action is triggered, then
            // increase the opacity of the GroupLayer by 0.25

            if (lcoePa.opacity < 1) {
                lcoePa.opacity += 0.25;
            }
        } else if ((id === "decrease-opacity") && (event.item.layer.title === "Point Absorber LCOE")) {
            // if the decrease-opacity action is triggered, then
            // decrease the opacity of the GroupLayer by 0.25

            if (lcoePa.opacity > 0) {
                lcoePa.opacity -= 0.25;
            }
        }


        else if ((id === "full-extent") && (event.item.layer.title === "Attenuator LCOE")) {
            // if the full-extent action is triggered then navigate
            // to the full extent of the visible layer
            view.goTo(lcoeAtt.fullExtent).catch(function (error) {
                if (error.name != "AbortError") {
                    console.error(error);
                }
            });
        } else if ((id === "information") && (event.item.layer.title === "Attenuator LCOE")) {
            // if the information action is triggered, then
            // open the item details page of the service layer
            window.open("https://marei.maps.arcgis.com/home/item.html?id=5371b5a51db7430cb468811355c4a9eb");
        } else if ((id === "increase-opacity") && (event.item.layer.title === "Attenuator LCOE")) {
            // if the increase-opacity action is triggered, then
            // increase the opacity of the GroupLayer by 0.25

            if (lcoeAtt.opacity < 1) {
                lcoeAtt.opacity += 0.25;
            }
        } else if ((id === "decrease-opacity") && (event.item.layer.title === "Attenuator LCOE")) {
            // if the decrease-opacity action is triggered, then
            // decrease the opacity of the GroupLayer by 0.25

            if (lcoeAtt.opacity > 0) {
                lcoeAtt.opacity -= 0.25;
            }
        }


        else if ((id === "full-extent") && (event.item.layer.title === "Generic LCOE")) {
            // if the full-extent action is triggered then navigate
            // to the full extent of the visible layer
            view.goTo(lcoeGeneric.fullExtent).catch(function (error) {
                if (error.name != "AbortError") {
                    console.error(error);
                }
            });
        } else if ((id === "information") && (event.item.layer.title === "Generic LCOE")) {
            // if the information action is triggered, then
            // open the item details page of the service layer
            window.open("https://marei.maps.arcgis.com/home/item.html?id=4bcb0bc6b3ac4167822a4fee0af2aeca");
        } else if ((id === "increase-opacity") && (event.item.layer.title === "Generic LCOE")) {
            // if the increase-opacity action is triggered, then
            // increase the opacity of the GroupLayer by 0.25

            if (lcoeGeneric.opacity < 1) {
                lcoeGeneric.opacity += 0.25;
            }
        } else if ((id === "decrease-opacity") && (event.item.layer.title === "Generic LCOE")) {
            // if the decrease-opacity action is triggered, then
            // decrease the opacity of the GroupLayer by 0.25

            if (lcoeGeneric.opacity > 0) {
                lcoeGeneric.opacity -= 0.25;
            }
        }




          else if ((id === "full-extent") && (event.item.layer.title === "Annual Tidal Energy (MWh/m²)")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(aepTidal.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Annual Tidal Energy (MWh/m²)")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open(aepTidal.url);
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Annual Tidal Energy (MWh/m²)")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (aepTidal.opacity < 1) {
                  aepTidal.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Annual Tidal Energy (MWh/m²)")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (aepTidal.opacity > 0) {
                  aepTidal.opacity -= 0.25;
              }
          }



          else if ((id === "full-extent") && (event.item.layer.title === "Fixed Bottom 2MW")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(aepAtlantis2000.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Fixed Bottom 2MW")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=a6e475ef14194938b93af62aad064a76");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Fixed Bottom 2MW")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (aepAtlantis2000.opacity < 1) {
                  aepAtlantis2000.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Fixed Bottom 2MW")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (aepAtlantis2000.opacity > 0) {
                  aepAtlantis2000.opacity -= 0.25;
              }
          }


          else if ((id === "full-extent") && (event.item.layer.title === "Fixed Bottom 1.7MW")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(aepAtlantis1700.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Fixed Bottom 1.7MW")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=aa9df8f4bc4e41808727cce661876090");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Fixed Bottom 1.7MW")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (aepAtlantis1700.opacity < 1) {
                  aepAtlantis1700.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Fixed Bottom 1.7MW")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (aepAtlantis1700.opacity > 0) {
                  aepAtlantis1700.opacity -= 0.25;
              }
          }


          else if ((id === "full-extent") && (event.item.layer.title === "Fixed Bottom 1.5MW")) {
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              view.goTo(aepAtlantis1500.fullExtent).catch(function (error) {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });
          } else if ((id === "information") && (event.item.layer.title === "Fixed Bottom 1.5MW")) {
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open("https://marei.maps.arcgis.com/home/item.html?id=3da97b98e5094ae6a279d08081db013b");
          } else if ((id === "increase-opacity") && (event.item.layer.title === "Fixed Bottom 1.5MW")) {
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25

              if (aepAtlantis1500.opacity < 1) {
                  aepAtlantis1500.opacity += 0.25;
              }
          } else if ((id === "decrease-opacity") && (event.item.layer.title === "Fixed Bottom 1.5MW")) {
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25

              if (aepAtlantis1500.opacity > 0) {
                  aepAtlantis1500.opacity -= 0.25;
              }
          }




          // else if ((id === "full-extent") && (event.item.layer.title === "User-Drawn Feature")) {
          //     // if the full-extent action is triggered then navigate
          //     // to the full extent of the visible layer
          //     view.goTo(graphicsLayer.fullExtent).catch(function (error) {
          //         if (error.name != "AbortError") {
          //             console.error(error);
          //         }
          //     });
          // } else if ((id === "information") && (event.item.layer.title === "User-Drawn Feature")) {
          //     // if the information action is triggered, then
          //     // open the item details page of the service layer
          //     window.open(graphicsLayer.url);
          // } else if ((id === "increase-opacity") && (event.item.layer.title === "User-Drawn Feature")) {
          //     // if the increase-opacity action is triggered, then
          //     // increase the opacity of the GroupLayer by 0.25

          //     if (graphicsLayer.opacity < 1) {
          //         graphicsLayer.opacity += 0.25;
          //     }
          // } else if ((id === "decrease-opacity") && (event.item.layer.title === "User-Drawn Feature")) {
          //     // if the decrease-opacity action is triggered, then
          //     // decrease the opacity of the GroupLayer by 0.25

          //     if (graphicsLayer.opacity > 0) {
          //         graphicsLayer.opacity -= 0.25;
          //     }
          // }



      });


      document.getElementById("distanceButton").addEventListener("click", function () {
          setActiveWidget(null);
          if (!this.classList.contains("active")) {
              setActiveWidget("distance");
          } else {
              setActiveButton(null);
          }
      });

      document.getElementById("areaButton").addEventListener("click", function () {
          setActiveWidget(null);
          if (!this.classList.contains("active")) {
              setActiveWidget("area");
          } else {
              setActiveButton(null);
          }
      });

      function setActiveWidget(type) {
          switch (type) {
              case "distance":
                  activeWidget = new DistanceMeasurement2D({
                      view: view
                  });

                  // skip the initial 'new measurement' button
                  activeWidget.viewModel.start();

                  view.ui.add(activeWidget, "top-left");
                  setActiveButton(document.getElementById("distanceButton"));
                  break;
              case "area":
                  activeWidget = new AreaMeasurement2D({
                      view: view
                  });

                  // skip the initial 'new measurement' button
                  activeWidget.viewModel.start();

                  view.ui.add(activeWidget, "top-left");
                  setActiveButton(document.getElementById("areaButton"));
                  break;
              case null:
                  if (activeWidget) {
                      view.ui.remove(activeWidget);
                      activeWidget.destroy();
                      activeWidget = null;
                  }
                  break;
          }
      }

      function setActiveButton(selectedButton) {
          // focus the view to activate keyboard shortcuts for sketching
          view.focus();
          var elements = document.getElementsByClassName("active");
          for (var i = 0; i < elements.length; i++) {
              elements[i].classList.remove("active");
          }
          if (selectedButton) {
              selectedButton.classList.add("active");
          }
      }


      const portalUrl = "https://www.arcgis.com";

      document.getElementById("uploadForm").addEventListener("change", (event) => {
          const fileName = event.target.value.toLowerCase();

          if (fileName.indexOf(".zip") !== -1) {//is file a zip - if not notify user
              generateFeatureCollection(fileName);
          }
          else {
              document.getElementById('upload-status').innerHTML = '<p style="color:red">Add shapefile as .zip file</p>';
          }
      });

      const fileForm = document.getElementById("mainWindow");

      const expand = new Expand({
          expandIconClass: "esri-icon-upload",
          view: view,
          content: fileForm,
      });



      view.ui.add(sketch, "top-left");
      view.ui.add("toolbar", "top-left");
      view.ui.add(expand, "top-left");
      view.ui.add(basemapToggle, "top-left");
      view.ui.add(layerList, "top-right");
      view.ui.add("optionsDiv", "bottom-left");
      view.ui.add(coordsWidget, "bottom-left");



      function generateFeatureCollection(fileName) {
          let name = fileName.split(".");
          // Chrome adds c:\fakepath to the value - we need to remove it
          name = name[0].replace("c:\\fakepath\\", "");

          document.getElementById('upload-status').innerHTML = '<b>Loading </b>' + name;

          // define the input params for generate see the rest doc for details
          // https://developers.arcgis.com/rest/users-groups-and-items/generate.htm
          const params = {
              'name': name,
              'targetSR': view.spatialReference,
              'maxRecordCount': 17435,
              'enforceInputFileSizeLimit': true,
              'enforceOutputJsonSizeLimit': true
          };

          // generalize features to 10 meters for better performance
          params.generalize = true;
          params.maxAllowableOffset = 10;
          params.reducePrecision = true;
          params.numberOfDigitsAfterDecimal = 0;

          const myContent = {
              'filetype': 'shapefile',
              'publishParameters': JSON.stringify(params),
              'f': 'json',
              'listMode': 'hide'
          };

          // use the REST generate operation to generate a feature collection from the zipped shapefile
          request(portalUrl + '/sharing/rest/content/features/generate', {
              query: myContent,
              body: document.getElementById('uploadForm'),
              responseType: 'json'
          })
              .then((response) => {
                  const layerName = response.data.featureCollection.layers[0].layerDefinition.name;
                  document.getElementById('upload-status').innerHTML = '<b>Loaded: </b>' + layerName;
                  addShapefileToMap(response.data.featureCollection);
              })
              .catch(errorHandler);
      }

      function errorHandler(error) {
          document.getElementById('upload-status').innerHTML =
              "<p style='color:red;max-width: 500px;'>" + error.message + "</p>";
      }

      function addShapefileToMap(featureCollection) {
          // add the shapefile to the map and zoom to the feature collection extent
          // if you want to persist the feature collection when you reload browser, you could store the
          // collection in local storage by serializing the layer using featureLayer.toJson()
          // see the 'Feature Collection in Local Storage' sample for an example of how to work with local storage
          let sourceGraphics = [];

          const layers = featureCollection.layers.map((layer) => {

              const graphics = layer.featureSet.features.map((feature) => {
                  return Graphic.fromJSON(feature);
              })
              sourceGraphics = sourceGraphics.concat(graphics);
              const featureLayer = new FeatureLayer({
                  objectIdField: "FID",
                  listMode: "hide",
                  source: graphics,

                  fields: layer.layerDefinition.fields.map((field) => {
                      return Field.fromJSON(field);
                  })
              });
              return featureLayer;
              // associate the feature with the popup on click to enable highlight and zoom to
          });
          map.addMany(layers);
          view.goTo(sourceGraphics)
              .catch((error) => {
                  if (error.name != "AbortError") {
                      console.error(error);
                  }
              });

          document.getElementById('upload-status').innerHTML = "";
      }

  });

});