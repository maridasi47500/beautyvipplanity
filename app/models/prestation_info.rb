class PrestationInfo < ApplicationRecord
  has_and_belongs_to_many :prestations, :join_table => :aboutprestations
  accepts_nested_attributes_for :prestations, allow_destroy: true
  has_many :images, through: :prestations
end
