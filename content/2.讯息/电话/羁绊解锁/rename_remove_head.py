import os
import datetime

def remove_head_from_filenames(folder_path):
    target_date = datetime.date(2026, 5, 5)
    renamed_count = 0

    for filename in os.listdir(folder_path):
        if not filename.endswith('.md'):
            continue

        if '_head' not in filename:
            continue

        file_path = os.path.join(folder_path, filename)

        # 获取文件修改时间
        mtime = os.path.getmtime(file_path)
        file_date = datetime.date.fromtimestamp(mtime)

        if file_date != target_date:
            continue

        # 构造新文件名：去掉 _head
        new_filename = filename.replace('_head', '')
        new_file_path = os.path.join(folder_path, new_filename)

        # 避免重复处理（如果新文件名已存在，跳过）
        if os.path.exists(new_file_path):
            print(f"警告：目标文件 {new_filename} 已存在，跳过 {filename}")
            continue

        os.rename(file_path, new_file_path)
        print(f"已重命名：{filename} -> {new_filename}")
        renamed_count += 1

    print(f"\n处理完成，共重命名 {renamed_count} 个文件。")

if __name__ == "__main__":
    target_folder = r"F:\bq\_website\mywebsite\content\2.讯息\电话\羁绊解锁"  # 请修改为实际文件夹路径
    remove_head_from_filenames(target_folder)