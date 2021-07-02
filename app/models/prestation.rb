class Prestation < ApplicationRecord
  self.inheritance_column = "prestationtypecolumn"


  belongs_to :prestationtype, foreign_key: 'prestationtype_id', optional: true
  has_and_belongs_to_many :images, :join_table => :photosprestations
def myduration
time=Time.at(duration.to_i).strftime("%I %M").split(' ')   
hour=time[0].to_i
min=time[1].to_i
"#{hour} #{"hour".pluralize(hour)} #{min} #{"minute".pluralize(min)}"
end
end
