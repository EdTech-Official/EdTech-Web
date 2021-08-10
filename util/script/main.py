import csv
import json
import os

UTIL_PATH = r'C:\X1_Enter\Web Development\community projects\EdTech-Web\util'
SUBJECTS_CSV_PATH = r'C:\X1_Enter\Web Development\community projects\EdTech-Web\util\csv\subjects'
SUBJECTS_JSON_PATH = r'C:\X1_Enter\Web Development\community projects\EdTech-Web\util\json\subjects'
GTIMETABLE_CSV_PATH = r'C:\X1_Enter\Web Development\community projects\EdTech-Web\util\csv\gtimetable'

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



def csv_merger(dirpath=SUBJECTS_CSV_PATH):
    os.chdir(dirpath)
    with open('./merged_subjects.csv', 'w', newline='') as writeFile:
        fieldnames = ['id', 'subject_code', 'name', 'college', 'branch', 'year', 'description', 'portion_link']
        csv_writer = csv.DictWriter(writeFile, fieldnames=fieldnames)
        csv_writer.writeheader()
        # files = os.listdir()
        for file in os.listdir():
            if file == 'merged_subjects.csv':
                continue
            with open(file, 'r') as readFile:
                csv_reader = csv.DictReader(readFile, fieldnames=fieldnames)
                # print(list(csv_reader)[1:])

                for row in list(csv_reader)[1:]:
                    csv_writer.writerow(row)

                # for j in range(len(rows)):
                #     csv_writer.writerow(rows[j])




if __name__ == '__main__':
    # convert_to_json_data("NITG_branches", "NITG_branches")
    # convert_to_json_data_subjects()
    # convert_to_json_data('merged_subjects.csv', 'merged_subjects.json', SUBJECTS_CSV_PATH)
    # csv_merger()
    convert_to_json_data('contributors.csv', 'contributors.json', os.path.join(UTIL_PATH, 'csv'))
    # pass