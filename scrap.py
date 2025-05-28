# WAVE

# CAPEX solution
# per farm
# 
# (Development & Consent * Farm Rating) +
# (WEC Unit * Farm Rating) + 
# (((Mooring Cost * Depth * Number of WECs) + (Foundations/Anchoring * Farm Rating) + (Distance to Grid * Export Cabling Cost) + (Intra-Array Cabling Cost * Number of WECs) + (Onshore Grid/H2 Connections * Farm Rating) + (Ops Base * Farm Rating) + (Offshore Substation * Farm Rating) + 
# ((Diving Work * Number of WECs) + ((WEC Install Vessel Mobilisation Costs and WEC Install Vessel Daily Costs and WEC Install Vessel Fuel Costs) + (F&M Install Vessel Mobilisation Costs and F&M Install Vessel Daily Costs and F&M Install Vessel Fuel Costs) + (Number of WECs * Mooring Installation Cost) + (Cabling Installation Cost * Distance to Grid) + (Cabling Installation Cost * Number of WECs) + (Onshore Installation * Farm Rating) + (Offshore Logistics * Farm Rating) + (Offshore Installation * Farm Rating[removed]) + (Other * Farm Rating [removed]) 


#105MW Farm Revised
(166000 * "%Farm_MW.tif%")  +  
((18000000 * "%Farm_MW.tif%") * ((1-0.15)**(math.log(140)/math.log(2)))) +  
((400 * "%int_bathy_se%" * (4*"%NumberWECs%")) + (727000 * "%Farm_MW.tif%") + ("%Substations_Proxim_Raster_Clip%" * 427000) + ((150 * "%NumberWECs%") * 256000) + (42000 * "%Farm_MW.tif%") + (4300 * "%Farm_MW.tif%")) +  
((3500 * "%NumberWECs%") + ((25000) + ("%NumberWECs%" * ((12+2*"%Port_Proxim_Raster_Clip%"/15)/24) * 12000) + ("%NumberWECs%"*(12+2*"%Port_Proxim_Raster_Clip%"/15)*100*0.6)) + ((62000) + ("%NumberWECs%" * ((48+2*"%Port_Proxim_Raster_Clip%"/22)/24) * 25000) + ("%NumberWECs%"*(48+2*"%Port_Proxim_Raster_Clip%"/22)*300*0.5)) + ("%NumberWECs%" * 142000) + (418000 * "%Substations_Proxim_Raster_Clip%") + (123 * 150 * "%NumberWECs%") + (42000 * "%Farm_MW.tif%") + (4300 * "%Farm_MW.tif%")) 

((("%OE_AEP.tif%") * ("%Int_Final_Av2.tif%"/100)) * 36)* 0.95

# OPEX Solution
# per farm
# ((Vessel Cost) * ((1 - Scaling Factor)**(Number of WECs / 2)) + (Equipment + Technicians + Fuel)) / Farm Capacity 
((10000) + ("%NumberWECs%"*((1.8*(12+2*"%Port_Proxim_Raster_Clip%"/33)/24) *5000))) + (("%NumberWECs%"*1.8*12000) + ("%NumberWECs%"*1.8*((12+2*"%Port_Proxim_Raster_Clip%"/33)*100*0.6)) + ("%NumberWECs%"*1.8*5*125*12)) + (10000 * "%Farm_MW.tif%")




# DECEX Solution
# per farm
# (Installation Cost * Scaling Factor) * 0.88 

#150MW Farm
((3500 * "%NumberWECs%") + ((25000) + ("%NumberWECs%" * ((12+2*"%Port_Proxim_Raster_Clip%"/15)/24) * 12000) + ("%NumberWECs%"*(12+2*"%Port_Proxim_Raster_Clip%"/15)*100*0.6)) + ((62000) + ("%NumberWECs%" * ((48+2*"%Port_Proxim_Raster_Clip%"/22)/24) * 25000) + ("%NumberWECs%"*(48+2*"%Port_Proxim_Raster_Clip%"/22)*300*0.5)) + ("%NumberWECs%" * 142000) + (418000 * "%Substations_Proxim_Raster_Clip%") + (123 * 150 * "%NumberWECs%") + (42000 * "%Farm_MW.tif%") + (4300 * "%Farm_MW.tif%")) * 0.88


# LCOE Solution
# per farm
(("%farmCAPEX.tif%") + ("%farmOPEX1.tif%" * ((1+0.05)**(math.log(25)/math.log(2)))) + ("%farmDECEX_discounted.tif%")) / ("%farmAEP%" * ((1+0.05)**(math.log(25)/math.log(2))))

# NPV Solution
# per farm
((("%farmAEP%" * 410) * ((1+0.05)**(math.log(25)/math.log(2)))) - (("%farmCAPEX.tif%") + ("%farmOPEX1.tif%" * ((1+0.05)**(math.log(25)/math.log(2)))) + ("%farmDECEX_discounted.tif%"))) / 1000000


(((("%CP_AEP.tif%"*0.4)* ("%Int_Final_Av1 (2)%"/100)) * 500))* 0.90 

# TIDAL

# CAPEX solution
# per farm
# 
# (Development & Consent * Farm Rating) +
# (TEC Unit * Farm Rating) + 
# ((Mooring * Number of TECs) + (Foundations/Anchoring * Number of TECs) + (Distance to Grid * Export Cabling Cost) + (Intra-Array Cabling Cost * Number of TECs) + (Onshore Grid/H2 Connections * Farm Rating)
# ((Diving Work * Number of TECs) + (Vessel Costs) + (Fuel Costs) + (Number of TECs * F&M Installation Cost) + (Cabling Installation Cost * Distance to Grid) + (Cabling Installation Cost * Number of TECs) 

((150000 * "%Farm_MW.tif%") + 
(5930000 * "%NumberTECs%") + 
((500000 * "%NumberTECs%") + (35000 * "%NumberTECs%") + ("%Substations_Proxim_Raster_Clip%" * 288000) + (173000 * "%NumberTECs%") + (20000 * "%Farm_MW.tif%")) + 
((2500*"%NumberTECs%") + ("%NumberTECs%" * ((12+2*"%Port_Proxim_Raster_Clip%"/22)/24) * 20000) + ("%NumberTECs%"*(12+2*"%Port_Proxim_Raster_Clip%"/22)*300*0.5) + ("%NumberTECs%" * 100000) + (282000 * "%Substations_Proxim_Raster_Clip%") + (282000 * "%NumberTECs%"))) * ((1-0.19)**(math.log(12)/math.log(2)))

# OPEX Solution
# per farm
# ((Vessel Cost) * ((1 - Scaling Factor)**(Number of TECs / 2)) + (Equipment + Technicians + Fuel)) / Farm Capacity 

(("%NumberTECs%"*((1.8*(60+2*"%Port_Proxim_Raster_Clip%"/22)/24) *20000)) * ((1-0.18)**(math.log(8)/math.log(2)))) + (("%NumberTECs%"*1.8*10000) + ("%NumberTECs%"*1.8*((60+2*"%Port_Proxim_Raster_Clip%"/22)*300*0.5)) + ("%NumberTECs%"*1.8*5*100*60)) + (11* "%Farm_MW.tif%")

# DECEX Solution
# per farm
# (Installation Cost * Scaling Factor) * 0.88 

((2500*"%NumberTECs%") + ("%NumberTECs%" * ((12+2*"%Port_Proxim_Raster_Clip%"/22)/24) * 20000) + ("%NumberTECs%"*(12+2*"%Port_Proxim_Raster_Clip%"/22)*300*0.5) + ("%NumberTECs%" * 100000) + (282000 * "%Substations_Proxim_Raster_Clip%") + (282000 * "%NumberTECs%")) * ((1-0.19)**(math.log(12)/math.log(2))) * 0.88

((( "%farmAEP%" + "%farmAEP2_int%" + "%farmAEP3_int%" + "%farmAEP4_int%" + "%farmAEP5_int%" + "%farmAEP6_int%" + "%farmAEP7_int%" + "%farmAEP8_int%" + "%farmAEP9_int%" + "%farmAEP10_int%" + "%farmAEP11_int%" + "%farmAEP12_int%" + "%farmAEP13_int%" + "%farmAEP14_int%" + "%farmAEP15_int%" + "%farmAEP16_int%" + "%farmAEP17_int%" + "%farmAEP18_int%" + "%farmAEP19_int%" + "%farmAEP20_int%" + "%farmAEP21_int%" + "%farmAEP22_int%" + "%farmAEP23_int%" + "%farmAEP24_int%" + "%farmAEP25_int%") * (410)) - (("%farmCAPEX.tif%") + ("%farmOPEX1.tif%" + "%farmOPEX2_int%" + "%farmOPEX3_int%" + "%farmOPEX4_int%" + "%farmOPEX5_int%" + "%farmOPEX6_int%" + "%farmOPEX7_int%" + "%farmOPEX8_int%" + "%farmOPEX9_int%" + "%farmOPEX10int%" + "%farmOPEX11int%" + "%farmOPEX12int%" + "%farmOPEX13int%" + "%farmOPEX14int%" + "%farmOPEX15int%" + "%farmOPEX16int%" + "%farmOPEX17int%" + "%farmOPEX18int%" + "%farmOPEX19int%" + "%farmOPEX20int%" + "%farmOPEX21int%" + "%farmOPEX22int%" + "%farmOPEX23int%" + "%farmOPEX24int%" + "%farmOPEX25int%")+ ("%farmDECEX_discounted.tif%")))/1000000

  
((166000 * "%Farm_MW.tif%") + (2462545 * "%Farm_MW.tif%") + ((350 + "%int_bathy_se%") * (6 * "%NumberWECs%")) + (76203 * "%Farm_MW.tif%") + ("%Substations_Proxim_Raster_Clip%" * 754000) + ((1500 * "%NumberWECs%") * 220) + (42000 * "%Farm_MW.tif%") + (3909 * "%Farm_MW.tif%")) + ((3500 * "%NumberWECs%") + ((175000) + ("%NumberWECs%" * ((24+2 * "%Port_Proxim_Raster_Clip%"/9)/24) * 70000) + ("%NumberWECs%"*(12+2*"%Port_Proxim_Raster_Clip%"/9)*850*1.85)) + ((240000) + ("%NumberWECs%" * ((48+2*"%Port_Proxim_Raster_Clip%"/18)/24) * 960000) + ("%NumberWECs%"*(48+2*"%Port_Proxim_Raster_Clip%"/18)*1046*1.85)) + ("%NumberWECs%" * 76203) + (360738 * "%Substations_Proxim_Raster_Clip%") + (310 * 1500 * "%NumberWECs%") + (3909 * "%Farm_MW.tif%") + (304000 * "%Farm_MW.tif%")) 

((30000) + ("%NumberWECs%"*((1.8*(12+2*"%Port_Proxim_Raster_Clip%"/33)/24) *6000))) + (("%NumberWECs%"*1.2*12000) + ("%NumberWECs%"*1.8*((12+2*"%Port_Proxim_Raster_Clip%"/33)*305*1.85)) + ("%NumberWECs%"*1.8*5*125*12)) + (45540 * "%Farm_MW.tif%") + (32000 * "%Farm_MW.tif%") 



((1033160 * "%Farm_MW.tif%") + (2462545 * "%Farm_MW.tif%") + ((350 * "%int_bathy_se%" * (6 * "%NumberWECs%")) + (76203 * "%Farm_MW.tif%") + ("%Substations_Proxim_Raster_Clip%" * 754000) + ((1500 * "%NumberWECs%") * 220) + (360173 * "%Farm_MW.tif%") + (3909 * "%Farm_MW.tif%") + (166000 * "%Farm_MW.tif%")) + ((3500 * "%NumberWECs%") + ((175000) + ("%NumberWECs%" * ((24+2 * "%Port_Proxim_Raster_Clip%"/9)/24) * 70000) + ("%NumberWECs%"*(12+2*"%Port_Proxim_Raster_Clip%"/9)*850*1.85)) + ((240000) + ("%NumberWECs%" * ((48+2*"%Port_Proxim_Raster_Clip%"/18)/24) * 960000) + ("%NumberWECs%"*(48+2*"%Port_Proxim_Raster_Clip%"/18)*1046*1.85)) + ("%NumberWECs%" * 76203) + (360738 * "%Substations_Proxim_Raster_Clip%") + (310 * 1500 * "%NumberWECs%") + (3909 * "%Farm_MW.tif%") + (304000 * "%Farm_MW.tif%"))) /  "%Farm_MW.tif%" 

(1033160 * "%Farm_MW.tif%") + (2462545 * "%Farm_MW.tif%") + ((350 * "%int_bathy_se%" * (6 * "%NumberWECs%")) + (76203 * "%Farm_MW.tif%") + ("%Substations_Proxim_Raster_Clip%" * 754000) + ((1500 * "%NumberWECs%") * 220) + (360173 * "%Farm_MW.tif%") + (3909 * "%Farm_MW.tif%") + (166000 * "%Farm_MW.tif%")) + ((3500 * "%NumberWECs%") + ((175000) + ("%NumberWECs%" * ((24+2 * "%Port_Proxim_Raster_Clip%"/9)/24) * 70000) + ("%NumberWECs%"*(12+2*"%Port_Proxim_Raster_Clip%"/9)*850*1.85)) + ((240000) + ("%NumberWECs%" * ((48+2*"%Port_Proxim_Raster_Clip%"/18)/24) * 960000) + ("%NumberWECs%"*(48+2*"%Port_Proxim_Raster_Clip%"/18)*1046*1.85)) + ("%NumberWECs%" * 76203) + (360738 * "%Substations_Proxim_Raster_Clip%") + (310 * 1500 * "%NumberWECs%") + (3909 * "%Farm_MW.tif%") + (304000 * "%Farm_MW.tif%")) 