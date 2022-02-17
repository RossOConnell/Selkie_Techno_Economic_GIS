
function calc_te2() {
    console.log("calculate_lcoe2")


    // define the site information

    let defaultAep_error_message = check_for_float(defaultAep.value, 1, 100000000000);
    let defaultPort_error_message = check_for_float(defaultPort.value, 1, 5000);
    let defaultGrid_error_message = check_for_float(defaultGrid.value, 1, 5000);
    let defaultDepth_error_message = check_for_float(defaultDepth.value, 1, 5000);


    // define the technical  information

    let defaultSa_error_message = check_for_float(defaultSa.value, 1, 1000);
    let defaultTec_error_message = check_for_float(defaultTec.value, 0, 100);
    let defaultEff_error_message = check_for_float(defaultEff.value, 0, 100);
    let defaultAv_error_message = check_for_float(defaultAv.value, 0, 100);
    let defaultWak_error_message = check_for_float(defaultWak.value, 0, 100);
    let defaultLin_error_message = check_for_float(defaultLin.value, 0, 100);


    // define the project information

    let defaultProjectLife_error_message = check_for_float(defaultProjectLife.value, 1, 100);
    let defaultDiscountRate_error_message = check_for_float(defaultDiscountRate.value, 0, 100);
    // let defaultElecPrice_error_message = check_for_float(defaultElecPrice.value, 1, 100);


    // define the CAPEX

    let defaultResCost_error_message = check_for_float(defaultResCost.value, 0, 500000000);
    let defaultEnvCost_error_message = check_for_float(defaultEnvCost.value, 0, 500000000);
    let defaultCertCost_error_message = check_for_float(defaultCertCost.value, 0, 500000000);

    let defaultTecCost_error_message = check_for_float(defaultTecCost.value, 0, 500000000);

    let defaultPto_error_message = check_for_float(defaultPto.value, 0, 500000000);
    let defaultGen_error_message = check_for_float(defaultGen.value, 0, 500000000);
    let defaultMoor_error_message = check_for_float(defaultMoor.value, 0, 500000000);
    let defaultFound_error_message = check_for_float(defaultFound.value, 0, 500000000);
    let defaultCableInterLength_error_message = check_for_float(defaultCableInterLength.value, 0, 500000000);
    let defaultCableInterCost_error_message = check_for_float(defaultCableInterCost.value, 0, 500000000);
    let defaultOnElec_error_message = check_for_float(defaultOnElec.value, 0, 500000000);
    let defaultOffSub_error_message = check_for_float(defaultOffSub.value, 0, 500000000);

    let defaultDays_error_message = check_for_float(defaultDays.value, 0, 500000000);
    let defaultVh_error_message = check_for_float(defaultVh.value, 0, 500000000);
    let defaultVs_error_message = check_for_float(defaultVs.value, 0, 500000000);
    let defaultDevicesPerVis_error_message = check_for_float(defaultDevicesPerVis.value, 0, 500000000);
    let defaultDw_error_message = check_for_float(defaultDw.value, 0, 500000000);
    let defaultWorkDay_error_message = check_for_float(defaultWorkDay.value, 0, 500000000);
    let defaultCtLength_error_message = check_for_float(defaultCtLength.value, 0, 500000000);
    let defaultCtCost_error_message = check_for_float(defaultCtCost.value, 0, 500000000);

    // preliminary parameters 

    let daysToSite = 2 * ((defaultPort.value) / (defaultVs.value * defaultDay.value * defaultDevices.value)) * defaultVh.value;

    // CAPEX

    let predevCosts = defaultResCost + defaultEnvCost + defaultCertCost;
    let deviceCosts = deviceCosts;
    let plantCosts = defaultPto + defaultGen + defaultMoor + defaultFound + defaultCableInterLength + defaultOnElec + defaultOffSub;
    let installationCosts = 2 * ((defaultDays + daysToSite) * defaultVh.value + defaultCableIntraLength * (defaultCableIntraCost)); // / farmCapacity?

    let CapEx_k = predevCosts + deviceCosts + plantCosts + installationCosts;






    // define the OPEX

    let defaultFixedOam_error_message = check_for_float(defaultFixedOam.value, 0, 500000000);
    let defaultFees_error_message = check_for_float(defaultFees.value, 0, 500000000);
    let defaultVarOam_error_message = check_for_float(defaultVarOam.value, 0, 500000000);

    // OPEX

    let OpEx_k = defaultFixedOam.value + defaultFees.value + ((defaultPort.value) * defaultVarOam.value / 100);







    // define the DECEX

    let defaultDec_error_message = check_for_float(defaultDec.value, 0, 100);

    // DECEX

    let Decom_k = installationCosts * defaultDec.value;






    // LCS

    let LCS_oef = CapEx_k + OpEx_k + Decom_k








    // AEP

    let tecsAep = 0.5 * ((defaultAep.value * 2) * (defaultSa.value)(defaultEff.value / 100));
    let tecsAEP = tecsAEP * (defaultAv.value / 100);
    let E = tecsAep - ((defaultLin.value / 100) * tecsAEP) - ((defaultWak.value / 100) * tecsAEP);







    // LCOE and NPV 


    let rate = defaultDiscountRate.value / 100;

    let periods = defaultProjectLife.value;



    let numerator = 0

    let denominator = 0



    let n = Math.round(periods);

    console.log(n);

    // for (i in range(1, n + 1));
    // console.log(i);
    // top = top + (defaultCap.value + defaultOam.value + defaultDec.value) / (1 + r) ** i;

    // btm = btm + E / (1 + r) ** i;

    // LCOE = top / btm;
    // console.log(LCOE)

    for (let i = 1; i < n + 1; i++) {

        console.log(i);

        numerator = numerator + (LCS_oef) / (1 + rate) ** i;

        denominator = denominator + E / (1 + rate) ** i;

    }

    LCOE = numerator / denominator;


    // let pwf = Math.pow((1 + defaultDiscountRate.value), -1) * defaultProjectLife.value;
    // let pv = defaultElecPrice.value * pwf;



    if (

        defaultAep_error_message || defaultPort_error_message || defaultGrid_error_message || defaultDepth_message ||

        defaultSa_message || defaultTec_error_message || defaultEff_error_message || defaultAv_error_message || defaultWak_error_message ||
        defaultLin_error_message ||

        defaultResCost_error_message || defaultEnvCost_error_message || defaultCertCost_error_message ||

        defaultTecCost_error_message ||

        defaultPto_error_message || defaultGen_error_message || defaultMoor_error_message || defaultFound_error_message ||
        defaultCableInterLength_error_message || defaultCableInterCost_error_message || defaultOnElec_error_message ||
        defaultOffSub_error_message ||

        defaultDays_error_message || defaultVh_error_message || defaultVs_error_message || defaultDevicesPerVis_error_message ||
        defaultDw_error_message || defaultWorkDay_error_message || defaultCtLength_error_message || defaultCtCost_error_message ||

        defaultFixedOam_error_message || defaultFees_error_message || defaultVarOam_error_message ||

        defaultDec_error_message

    ) {



        defaultAep_errors.innerHTML = defaultAep_error_message;
        defaultPort_errors.innerHTML = defaultPort_error_message;
        defaultGrid_errors.innerHTML = defaultGrid_error_message;
        defaultDepth_errors.innerHTML = defaultDepth_error_message;

        defaultSa_errors.innerHTML = defaultSa_error_message;
        defaultTec_errors.innerHTML = defaultTec_error_message;
        defaultEff_errors.innerHTML = defaultEff_error_message;
        defaultAv_errors.innerHTML = defaultAv_error_message;
        defaultWak_errors.innerHTML = defaultWak_error_message;
        defaultLin_errors.innerHTML = defaultLin_error_message;

        defaultProjectLife_errors.innerHTML = defaultProjectLife_error_message;
        defaultDiscountRate_errors.innerHTML = defaultDiscountRate_error_message;
        // defaultElecPrice_errors.innerHTML = defaultElecPrice_error_message;

        defaultResCost_errors.innerHTML = defaultResCost_error_message;
        defaultEnvCost_errors.innerHTML = defaultEnvCost_error_message;
        defaultCertCost_errors.innerHTML = defaultCertCost_error_message;

        defaultTecCost_errors.innerHTML = defaultTecCost_error_message;

        defaultPto_errors.innerHTML = defaultPto_error_message;
        defaultGen_errors.innerHTML = defaultGen_error_message;
        defaultMoor_errors.innerHTML = defaultMoor_error_message;
        defaultFound_errors.innerHTML = defaultFound_error_message;
        defaultCableInterLength_errors.innerHTML = defaultCableInterLength_error_message;
        defaultCableInterCost_errors.innerHTML = defaultCableInterCost_error_message;
        defaultOnElec_errors.innerHTML = defaultOnElec_error_message;
        defaultOffSub_errors.innerHTML = defaultOffSub_error_message;

        defaultDays_errors.innerHTML = defaultDays_error_message;
        defaultVh_errors.innerHTML = defaultVh_error_message;
        defaultVs_errors.innerHTML = defaultVs_error_message;
        defaultDevicesPerVis_errors.innerHTML = defaultDevicesPerVis_error_message;
        defaultDw_errors.innerHTML = defaultDw_error_message;
        defaultWorkDay_errors.innerHTML = defaultWorkDay_error_message;
        defaultCtLength_errors.innerHTML = defaultCtLength_error_message;
        defaultCtCost_errors.innerHTML = defaultCtCost_error_message;

        defaultFixedOam_errors.innerHTML = defaultFixedOam_error_message;
        defaultFees_errors.innerHTML = defaultFees_error_message;
        defaultVarOam_errors.innerHTML = defaultVarOam_error_message;

        defaultDec_error_message_errors.innerHTML = defaultDec_error_message_error_message;



    } else {

        lcoe.value =
            LCOE;

        // (E * (defaultElecPrice.value * pv)) - ((defaultCap.value) + (defaultOam.value) + (defaultDec.value));

        npv.value =
            LCOE;

    }
}