import csv
import json
import os

UTIL_PATH = r'C:\X1_Enter\Web Development\community projects\edtech_dj\util'
SUBJECTS_CSV_PATH = r'C:\X1_Enter\Web Development\community projects\edtech_dj\util\csv\subjects'
GTIMETABLE_CSV_PATH = r'C:\X1_Enter\Web Development\community projects\edtech_dj\util\csv\gtimetable'

os.chdir(UTIL_PATH)

def convert_to_json_data(csvFileName, jsonFileName, ROOT_DIR):
    os.chdir(ROOT_DIR)
    with open(csvFileName, 'r') as myFile:
        csv_reader = csv.DictReader(myFile)
        data = []
        for item in csv_reader:
            data.append(item)

        with open(jsonFileName, 'w') as myFile:
            json.dump(data, myFile, indent=4)


def convert_to_json_data_subjects():
    os.chdir(SUBJECTS_CSV_PATH)
    # print(os.listdir(SUBJECTS_CSV_PATH))
    for file in os.listdir():
        print(file)
        convert_to_json_data(file, os.path.splitext(file)[0]+'.json', SUBJECTS_CSV_PATH)



if __name__ == '__main__':
    # convert_to_json_data("NITG_branches", "NITG_branches")
    # convert_to_json_data_subjects()
    convert_to_json_data('NITG.csv', 'NITG.json', GTIMETABLE_CSV_PATH)