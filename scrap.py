# WAVE

# CAPEX solution
# per farm
# 
# (Development & Consent * Farm Rating) +
# (WEC Unit * Farm Rating) + 
# ((Mooring * Number of WECs) + (Foundations/Anchoring * Number of WECs) + (Distance to Grid * Export Cabling Cost) + (Intra-Array Cabling Cost * Number of WECs) + (Onshore Grid/H2 Connections * Farm Rating)
# ((Diving Work * Number of WECs) + (Vessel Costs) + (Fuel Costs) + (Number of WECs * F&M Installation Cost) + (Cabling Installation Cost * Distance to Grid) + (Cabling Installation Cost * Number of WECs) 

((150000 * "%Farm_MW.tif%") + 
(3116 * "%Farm_MW.tif%") + 
((500000 * "%NumberWECs%") + (35000 * "%NumberWECs%") + ("%Substations_Proxim_Raster_Clip%" * 288000) + (173000 * "%NumberWECs%") + (20000 * "%Farm_MW.tif%")) + 
((2500*"%NumberWECs%") + ("%NumberWECs%" * ((12+2*"%Port_Proxim_Raster_Clip%"/15)/24) * 10000) + ("%NumberWECs%"*(12+2*"%Port_Proxim_Raster_Clip%"/15)*100*0.5) + ("%NumberWECs%" * 100000) + (282000 * "%Substations_Proxim_Raster_Clip%") + (282000 * "%NumberWECs%"))) * ((1-0.12)**(math.log(150)/math.log(2)))

# OPEX Solution
# per farm
# ((Vessel Cost) * ((1 - Scaling Factor)**(Number of WECs / 2)) + (Equipment + Technicians + Fuel)) / Farm Capacity 

(("%NumberWECs%"*((1.8*(60+2*"%Port_Proxim_Raster_Clip%"/33)/24) *4000)) * ((1-0.18)**(math.log(52)/math.log(2)))) + (("%NumberWECs%"*1.8*10000) + ("%NumberWECs%"*1.8*((60+2*"%Port_Proxim_Raster_Clip%"/33)*100*0.5)) + ("%NumberWECs%"*1.8*5*100*60)) + (8* "%Farm_MW.tif%")

# DECEX Solution
# per farm
# (Installation Cost * Scaling Factor) * 0.88 

((2500*"%NumberWECs%") + ("%NumberWECs%" * ((12+2*"%Port_Proxim_Raster_Clip%"/15)/24) * 10000) + ("%NumberWECs%"*(12+2*"%Port_Proxim_Raster_Clip%"/15)*100*0.5) + ("%NumberWECs%" * 100000) + (282000 * "%Substations_Proxim_Raster_Clip%") + (282000 * "%NumberWECs%")) * ((1-0.12)**(math.log(150)/math.log(2))) * 0.88



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

