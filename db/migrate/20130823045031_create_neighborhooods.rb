class CreateNeighborhooods < ActiveRecord::Migration
  def change
    create_table :neighborhooods do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end