def group_employee_to_its_files(file_list):
    # Output list of each employee with their list of files
    employee_files_output = []

    # Map the employee name to its index inside the employee_files list
    employee_index_map = {}

    # Iterate through the input list and organize files
    for file_info in file_list:
        file_name, employee_name = list(file_info.items())[0]

        # If the employee name is not registered yet
        if employee_name not in employee_index_map:
            # Add the employee name with the file to the output
            employee_files_output.append({employee_name: [file_name]})

            # Map the employee name to its index inside the employee_files list
            employee_index_map[employee_name] = len(employee_files_output) - 1
        else:
            # If the employee name is already registered
            # Get its index from the employee_index_map
            index = employee_index_map[employee_name]

            # Get the employee and their files from the index
            employee_and_its_files = employee_files_output[index]

            # Add the new file to the employee
            employee_and_its_files[employee_name].append(file_name)

    return employee_files_output


input_files = [{'letter.txt': 'Richard'}, {'paper.pdf': 'Jack'}, {'test.py': 'Johnny'}, {'numbers.docx': 'Jack'}]

# Call the function and print the result
output_files = group_employee_to_its_files(input_files)
print(output_files)