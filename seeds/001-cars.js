
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate()
    
      // Inserts seed entries
     await knex('cars').insert([
        {VIN:"JH4KA3160kc018606", make:"Dodge", model:"Ram 1500", mileage:3200, transmission:"automatic", title:"clean" },
        {VIN:"5NPEC4AC5BH041176", make:"Hyundai", model:"Sante Fe", mileage:4000, transmission:"automatic", title:"clean"},
        {VIN:"2T1BR30E46C595221", make:"Jeep", model:"Gladiator", mileage:1200, transmission:"standard", title:"salvage"}
      ]);
    
};
