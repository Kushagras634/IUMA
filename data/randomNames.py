import random
import csv
# Load first names from text file
with open('data/first_name.txt', 'r') as file:
    first_names = file.read().splitlines()

# Load last names from text file
with open('data/last_name.txt', 'r') as file:
    last_names = file.read().splitlines()

# Generate random names
num_names = 100 # Number of random names to generate
random_names = []
for i in range(num_names):
    first_name = random.choice(first_names)
    last_name = random.choice(last_names)
    random_name = f'{first_name} {last_name}'
    random_names.append(random_name)

# Print generated random names
with open('random_names.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Name'])
    writer.writerows([[name] for name in random_names])

print('Random names written to random_names.csv')