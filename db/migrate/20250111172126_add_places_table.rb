class AddPlacesTable < ActiveRecord::Migration[8.0]
  def change
    create_table :places do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false

      t.timestamps
    end
  end
end