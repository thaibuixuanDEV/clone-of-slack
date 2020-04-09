class AddDefaultValueToLastReadAtChatroomUser < ActiveRecord::Migration[6.0]
  def change
    change_column_default :chatroom_users, :last_read_at, Time.now
  end
end
