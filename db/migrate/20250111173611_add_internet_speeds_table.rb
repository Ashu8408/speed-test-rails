class AddInternetSpeedsTable < ActiveRecord::Migration[8.0]
  def change
    create_table :internet_speeds do |t|
      t.references :place, null: false, foreign_key: true, index: true
      t.decimal :download_speed, precision: 15, scale: 2, null: false
      t.string :download_units, null: false

      t.timestamps
    end
  end
end
