var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var Reading = new Schema({
  evidence:                   {id: ObjectId},
  kayitli_secmen:             Number,
  oy_kullanan_secmen:         Number,
  kanunen_oy_kullanan_secmen: Number,
  toplam_oy_kullanan_secmen:  Number,
  gecerli_oy:                 Number,
  itirazli_gecerli_oy:        Number,
  toplam_gecerli_oy:          Number,
  gecersiz_oy:                Number,
  results:                    [{
                                id: ObjectId,       // Candidate.id
                                party: String,
                                person: String,
                                type: String,       // sandık türü
                                votes: Number
                              }],
  flag:                       {type: Number, default: 0},
  resolved:                   {type: Boolean, default: false},
  user:                       {type: String, default: 'Anon'},
  created_at:                 {type: Date, default: Date.now},
  updated_at:                 {type: Date, default: Date.now}
});

module.exports = mongoose.model('Reading', Reading);