from os import name
import random
import json
import csv
import datetime
import os


def list_objects(modelClass):
    for item in modelClass.objects.all():
        print(item)


def populate_colleges(CollegeClass, jsonFilePath='./util/json/colleges.json'):
    """./util/json/colleges.json
        command: populate_colleges(College)
    """
    json_data = open(jsonFilePath, 'r')
    dict_data = json.load(json_data)

    for college in dict_data:
        col = CollegeClass(**college)
        col.save()


def populate_branch(BranchClass, College, jsonFilePath='./util/branches_data.json'):
    """./util/branches_data.json
    command: populate_branch(Branch, College)
    """
    json_data = open(jsonFilePath, 'r')
    dict_data = json.load(json_data)

    for item in dict_data:
        # del item["id"]
        # college_code = item["college"]
        del item["description"]
        branch = BranchClass(**item)
        branch.save()
        branch.colleges.add(College.objects.get(college_code='NITG'))
        # branch.save()


def populate_courses(CourseClass, CollegeClass, jsonFilePath):
    """./util/json/NITG_courses.json"""
    json_data = open(jsonFilePath, 'r')
    dict_data = json.load(json_data)

    for item in dict_data:
        del item["id"]
        college_code = item["college"]
        del item["college"]
        course = CourseClass(**item,
                             college=CollegeClass.objects.get(college_code=college_code))
        course.save()


"""
traverse through the list of subjects
conside row_1 and row_2
instance = Subject.objects.filter(college_code='MA100') 
if len(instance) == 0:
    Subject(subject, name)
    Subject.colleges.add(College.objects.get(college_code='NITG'))
    Subject.branchs.add(Branch.objects.filter(branch_code='NITG'))
    Subject.years.add(year.objects.filter(year='NITG'))
else:
    instance = instance[0]
    instance.colleges.add(College.objects.get(college_code='NITG'))
    instance.branchs.add(Branch.objects.filter(branch_code='NITG'))
    instance.years.add(year.objects.filter(year='NITG'))
    

"""


def populate_years(Year):
    """
    command:  populate_years(Year)
    """
    list_years = ['FIRST', 'SECOND', 'THIRD', 'FOURTH', ]
    for item in list_years:
        year = Year(year=item)
        year.save()


def populate_subjects(SubjectClass, CollegeClass, BranchClass, YearClass, jsonFilePath='./util/json/subjects/merged_subjects.json'):
    """./util/json/subjects/merged_subjects.json"""
    """json files dir: 
         ./util/json/subjects  
         command : populate_subjects(Subject, College, Branch, Year)    
    """
    current_dir = os.getcwd()
    os.chdir('./util/json/subjects')
    for file in os.listdir():
        json_data = open(file, 'r')
        dict_data = json.load(json_data)

        for item in dict_data:
            instance = SubjectClass.objects.filter(
                subject_code=item['subject_code'])
            if len(instance) == 0:
                college = item['college']
                college = CollegeClass.objects.get(college_code=college)
                sub = SubjectClass(
                    subject_code=item['subject_code'], name=item['name'])
                sub.save()
                sub.colleges.add(college)
                sub.branches.add(
                    *BranchClass.objects.filter(branch_code=item['branch']))
                sub.years.add(*YearClass.objects.filter(year=item['year']))
            else:
                college = item['college']
                college = CollegeClass.objects.get(college_code=college)
                instance = instance[0]
                instance.colleges.add(college)
                instance.branches.add(
                    *BranchClass.objects.filter(branch_code=item['branch']))
                instance.years.add(
                    *YearClass.objects.filter(year=item['year']))

    os.chdir(current_dir)


def populate_portions(PortionsClass, SubjectClass, CollegeClass, BranchClass, YearClass, jsonFilePath='./util/json/subjects/merged_subjects.json'):
    """./util/json/subjects/merged_subjects.json"""
    """json files dir: 
         ./util/json/subjects 

        populate_portions(Portion, Subject, College, Branch, Year)    
    """
    current_dir = os.getcwd()
    os.chdir('./util/json/subjects')
    for file in os.listdir():
        json_data = open(file, 'r')
        dict_data = json.load(json_data)

        for item in dict_data:
            instance = PortionsClass.objects.filter(link=item['portion_link'])
            if len(instance) == 0 or item['portion_link'] == '':
                college = item['college']
                college = CollegeClass.objects.get(college_code=college)
                por = PortionsClass(link=item['portion_link'])
                por.save()
                por.subjects.add(
                    *SubjectClass.objects.filter(subject_code=item['subject_code']))
                por.colleges.add(college)
                por.branches.add(
                    *BranchClass.objects.filter(branch_code=item['branch']))
                por.years.add(*YearClass.objects.filter(year=item['year']))

            else:
                college = item['college']
                college = CollegeClass.objects.get(college_code=college)
                instance = instance[0]
                instance.subjects.add(
                    *SubjectClass.objects.filter(subject_code=item['subject_code']))
                instance.colleges.add(college)
                instance.branches.add(
                    *BranchClass.objects.filter(branch_code=item['branch']))
                instance.years.add(
                    *YearClass.objects.filter(year=item['year']))

    os.chdir(current_dir)


def populate_gtimetable(GtimetableClass, CollegeClass, BranchClass, YearClass, jsonFilePath='./util/json/gtimetable/NITG.json'):
    '''college, branch, year, gsheet_src
    command:
        populate_gtimetable(Gtimetable, College, Branch, Year)
    '''
    json_data = open(jsonFilePath, 'r')
    dict_data = json.load(json_data)

    for item in dict_data:

        if item['gsheet_src'] == "":
            del item['gsheet_src']
        else:
            item['gsheet_src'] = item['gsheet_src'].split('/')[-2]

        sheet = GtimetableClass(gsheet_src=item['gsheet_src'],
                                college=CollegeClass.objects.get(
                                    college_code='NITG'),
                                branch=BranchClass.objects.get(
                                    branch_code=item['branch']),
                                year=YearClass.objects.get(year=item['year'])
                                )
        sheet.save()


def populate_contributors(ContributorClass, jsonFilePath='./util/json/contributors.json'):
    """
        command:populate_contributors(Contributor)

    """
    json_data = open(jsonFilePath, 'r')
    dict_data = json.load(json_data)

    for item in dict_data:
        del item['id']
        contributor = ContributorClass(**item)
        contributor.save()


def populate_users(UserClass, jsonFilePath):
    json_data = open(jsonFilePath, 'r')
    dict_data = json.load(json_data)

    for item in dict_data:
        user = UserClass(**item)
        user.save()


def populate_textbooks(TextbookClass, CollegeClass, SubjectClass, BranchClass, YearClass, csvFilePath='./util/csv/textbook/textbooks.csv'):
    """./util/csv/textbook/textbooks.csv
    command:
        populate_textbooks(Textbook, College, Subject, Branch, Year)
    """
    csv_data = open(csvFilePath, 'r')
    fieldnames = ["id", "title", "author", "amazon_link", "is_affiliate_link",
                  "cover_image", "college", "subject", "branch", "year"]
    csv_reader = csv.DictReader(csv_data, fieldnames=fieldnames)

    for book in list(csv_reader)[1:]:
        textbook = TextbookClass(
            title=book['title'],
            author=book['author'],
            link=book['amazon_link'],
            is_affiliate_link=(book['is_affiliate_link'] == '1'),
            cover_image=book['cover_image']
        )
        textbook.save()

        for college in book['college'].split(';'):
            textbook.colleges.add(
                CollegeClass.objects.get(college_code=college))

        for subject in book['subject'].split(';'):
            textbook.subjects.add(
                *SubjectClass.objects.filter(subject_code=subject))

        for branch in book['branch'].split(';'):
            textbook.branches.add(
                *BranchClass.objects.filter(branch_code=branch))

        for year in book['year'].split(';'):
            textbook.years.add(*YearClass.objects.filter(year=year))

    csv_data.close()


def populate_lectures(LectureClass, SubjectClass, jsonFilePath):
    json_data = open(jsonFilePath, 'r')
    dict_data = json.load(json_data)

    for lec in dict_data:
        lecture = LectureClass(
            subject=SubjectClass.objects.get(subject_code=lec['subject']),
            start_time=datetime.datetime.strptime(
                lec['start_time'], '%H:%M:%S').time(),
            end_time=datetime.datetime.strptime(
                lec['end_time'], '%H:%M:%S').time(),
            teacher=lec['teacher']
        )
        lecture.save()


def populate_faculty(FacultyClass, BranchClass, CollegeClass, jsonFilePath='./util/json/faculty/nitgoa.json'):
    """
    command:
        populate_faculty(Faculty, Branch, College)

    """
    json_data = open(jsonFilePath, 'r')
    dict_data = json.load(json_data)

    for person in dict_data:
        prof = FacultyClass(
            name=person['name'],
            college=CollegeClass.objects.get(college_code='NITG'),
            designation=person['designation'],
            email=person['email'],
            phone_number=person['phone'],
            branch=BranchClass.objects.get(branch_code=person['branch_code'])
        )
        prof.save()


# def populate_colleges(CollegeClass, jsonFilePath):
#     json_data = open(jsonFilePath, 'r')
#     dict_data = json.load(json_data)


#     for college in dict_data:
#         description = f"""Institute Name : {college['full_name']}
# Address : {college['full_address']}
# Institute Type : {college['institute_type']}
# Established : {college['established']}"""

#         col = CollegeClass(
#             college_code = college['college_code'],
#             name = college['short_name'],
#             description = description,
#             location = college['location'],
#             college_image = college['college_image'],
#             link_image = college['college_logo_img']
#         )
#         col.save()


def populate_portion_list_for_nitgoa(Portion, Subject, College):
    for sub in Subject.objects.all():
        portion = Portion(
            subject=sub,
            college=College.objects.get(college_code='NITG'),
            link="https://drive.google.com/file/d/1MewBpDc6Y5_9-ZluGARQG04T75xhVjzV/view"
        )
        portion.save()
