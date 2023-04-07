const doctor = [
  {
    "name": "Dr. Arvind Singh",
    "email": "arvind.singh@example.com",
    "password": "pass@123",
    "mobile": "+91-9876543210",
    "gender": "Male",
    "address": {
      "street": "25A, Rani Bagh",
      "houseNumber": "Block D, 201",
      "city": "New Delhi",
      "state": "Delhi"
    },
    "specialization": "Orthopedics",
    "experience": 12,
    "registrationNumber": "MCI123456",
    "clinicName": "Singh Ortho Clinic",
    "clinicAddress": {
      "street": "G-12, Rohini",
      "houseNumber": "Sector 9, 2nd Floor",
      "city": "New Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Kavita Sharma",
    "email": "kavita.sharma@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543211",
    "gender": "Female",
    "address": {
      "street": "1, Ashok Vihar",
      "houseNumber": "Block C, 301",
      "city": "Gurgaon",
      "state": "Haryana"
    },
    "specialization": "Gynecology",
    "experience": 10,
    "registrationNumber": "MCI789012",
    "clinicName": "Sharma Gyno Clinic",
    "clinicAddress": {
      "street": "2nd Floor, Sector 15",
      "houseNumber": "Sector 15A, Plot 6",
      "city": "Gurgaon",
      "state": "Haryana"
    }
  },
  {
    "name": "Dr. Ravi Kumar",
    "email": "ravikumar@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543212",
    "gender": "Male",
    "address": {
      "street": "12, Raja Park",
      "houseNumber": "Block B, 501",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "Cardiology",
    "experience": 15,
    "registrationNumber": "MCI345678",
    "clinicName": "Kumar Cardiac Clinic",
    "clinicAddress": {
      "street": "15A, JLN Marg",
      "houseNumber": "Sector 2, 1st Floor",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Dr. Priya Sharma",
    "email": "priyasharma@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543213",
    "gender": "Female",
    "address": {
      "street": "5, Civil Lines",
      "houseNumber": "Block D, 202",
      "city": "Kanpur",
      "state": "Uttar Pradesh"
    },
    "specialization": "Dermatology",
    "experience": 8,
    "registrationNumber": "MCI890123",
    "clinicName": "Sharma Skin Clinic",
    "clinicAddress": {
      "street": "34, Mall Road",
      "houseNumber": "Ground Floor",
      "city": "Kanpur",
      "state": "Uttar Pradesh"
    }
  },
  {
    "name": "Dr. Rajeev Gupta",
    "email": "rajeevgupta@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543214",
    "gender": "Male",
    "address": {
      "street": "8, Gandhi Nagar",
      "houseNumber": "Block A, 101",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Pediatrics",
    "experience": 20,
    "registrationNumber": "MCI567890",
    "clinicName": "Gupta Child Care Clinic",
    "clinicAddress": {
      "street": "1, Preet Vihar",
      "houseNumber": "Sector 9, 2nd Floor",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Anjali Verma",
    "email": "anjaliverma@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543201",
    "gender": "Female",
    "address": {
      "street": "23, Civil Lines",
      "houseNumber": "Block C, 302",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    },
    "specialization": "Gynecology",
    "experience": 12,
    "registrationNumber": "MCI234567",
    "clinicName": "Verma Maternity Clinic",
    "clinicAddress": {
      "street": "12, Hazratganj",
      "houseNumber": "2nd Floor",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    }
  },
  {
    "name": "Dr. Amit Patel",
    "email": "amitpatel@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543202",
    "gender": "Male",
    "address": {
      "street": "45, Gopalpura Bypass",
      "houseNumber": "Block D, 501",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "Orthopedics",
    "experience": 10,
    "registrationNumber": "MCI678901",
    "clinicName": "Patel Bone & Joint Clinic",
    "clinicAddress": {
      "street": "28, JLN Marg",
      "houseNumber": "1st Floor, Mansarovar",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Dr. Deepika Singh",
    "email": "deepikasingh@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543203",
    "gender": "Female",
    "address": {
      "street": "10, Ashok Nagar",
      "houseNumber": "Block B, 101",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Ophthalmology",
    "experience": 7,
    "registrationNumber": "MCI123456",
    "clinicName": "Singh Eye Care Center",
    "clinicAddress": {
      "street": "15, Lajpat Nagar",
      "houseNumber": "1st Floor",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Aarav Singh",
    "email": "aaravsingh@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543203",
    "gender": "Male",
    "address": {
      "street": "10, Ashok Nagar",
      "houseNumber": "Block B, 101",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Cardiology",
    "experience": 5,
    "registrationNumber": "MCI123456",
    "clinicName": "Singh Heart Care Center",
    "clinicAddress": {
      "street": "15, Lajpat Nagar",
      "houseNumber": "1st Floor",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Aarya Sharma",
    "email": "aaryasharma@example.com",
    "password": "!myp@ssword!",
    "mobile": "+91-9876543203",
    "gender": "Female",
    "address": {
      "street": "10, Ashok Nagar",
      "houseNumber": "Block B, 101",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Dermatology",
    "experience": 8,
    "registrationNumber": "MCI123456",
    "clinicName": "Sharma Skin Care Center",
    "clinicAddress": {
      "#street": "15, Lajpat Nagar",
      "#houseNumber": "1st Floor",
      "#city": "Delhi",
      "#state": "Delhi"
    }
  },
  {
    "name": "Dr. Aarav Sharma",
    "email": "aaravsharma@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543203",
    "gender": "Male",
    "address": {
      "street": "10, Ashok Nagar",
      "houseNumber": "Block B, 101",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Dentistry",
    "experience": 6,
    "registrationNumber": "MCI123456",
    "clinicName": "Sharma Dental Clinic",
    "clinicAddress": {
      "street": "15, Lajpat Nagar",
      "houseNumber": "1st Floor",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Sandeep Verma",
    "email": "sandeepverma@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543216",
    "gender": "Male",
    "address": {
      "street": "18, Sector 56",
      "houseNumber": "Block E, 302",
      "city": "Gurgaon",
      "state": "Haryana"
    },
    "specialization": "Orthopedics",
    "experience": 10,
    "registrationNumber": "MCI345678",
    "clinicName": "Verma Ortho Clinic",
    "clinicAddress": {
      "street": "22, MG Road",
      "houseNumber": "1st Floor",
      "city": "Gurgaon",
      "state": "Haryana"
    }
  },
  {
    "name": "Dr. Sneha Patel",
    "email": "snehapatel@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543217",
    "gender": "Female",
    "address": {
      "street": "7, Satellite Road",
      "houseNumber": "Block B, 501",
      "city": "Ahmedabad",
      "state": "Gujarat"
    },
    "specialization": "Ophthalmology",
    "experience": 5,
    "registrationNumber": "MCI890123",
    "clinicName": "Patel Eye Care Clinic",
    "clinicAddress": {
      "street": "12, Drive-in Road",
      "houseNumber": "1st Floor",
      "city": "Ahmedabad",
      "state": "Gujarat"
    }
  },
  {
    "name": "Dr. Alok Singhania",
    "email": "aloksinghania@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543218",
    "gender": "Male",
    "address": {
      "street": "32, Civil Lines",
      "houseNumber": "Block D, 202",
      "city": "Indore",
      "state": "Madhya Pradesh"
    },
    "specialization": "Dentistry",
    "experience": 7,
    "registrationNumber": "MCI567890",
    "clinicName": "Singhania Dental Clinic",
    "clinicAddress": {
      "street": "44, MG Road",
      "houseNumber": "Ground Floor",
      "city": "Indore",
      "state": "Madhya Pradesh"
    }
  },
  {
    "name": "Dr. Rohit Sharma",
    "email": "rohitsharma@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543220",
    "gender": "Male",
    "address": {
      "street": "14, Janakpuri",
      "houseNumber": "Block A, 601",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Cardiology",
    "experience": 12,
    "registrationNumber": "MCI345678",
    "clinicName": "Sharma Cardiac Care",
    "clinicAddress": {
      "street": "20, Rajouri Garden",
      "houseNumber": "2nd Floor",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Priya Sharma",
    "email": "priyasharma@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543221",
    "gender": "Female",
    "address": {
      "street": "9, Adarsh Nagar",
      "houseNumber": "Block B, 301",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "Dermatology",
    "experience": 8,
    "registrationNumber": "MCI890123",
    "clinicName": "Sharma Skin Care Clinic",
    "clinicAddress": {
      "street": "15, Mansarovar",
      "houseNumber": "1st Floor",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Dr. Ananya Dasgupta",
    "email": "ananyadasgupta@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543222",
    "gender": "Female",
    "address": {
      "street": "6, Salt Lake",
      "houseNumber": "Block C, 101",
      "city": "Kolkata",
      "state": "West Bengal"
    },
    "specialization": "Gynecology",
    "experience": 15,
    "registrationNumber": "MCI567890",
    "clinicName": "Dasgupta Women's Clinic",
    "clinicAddress": {
      "street": "10, Park Street",
      "houseNumber": "Ground Floor",
      "city": "Kolkata",
      "state": "West Bengal"
    }
  },
  {
    "name": "Dr. Deepak Patel",
    "email": "deepakpatel@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543224",
    "gender": "Male",
    "address": {
      "street": "17, New Colony",
      "houseNumber": "Block E, 401",
      "city": "Mumbai",
      "state": "Maharashtra"
    },
    "specialization": "Orthopedics",
    "experience": 7,
    "registrationNumber": "MCI678901",
    "clinicName": "Patel Ortho Care",
    "clinicAddress": {
      "street": "25, Bandra West",
      "houseNumber": "3rd Floor",
      "city": "Mumbai",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Nidhi Singh",
    "email": "nidhisingh@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543225",
    "gender": "Female",
    "address": {
      "street": "12, Green Park",
      "houseNumber": "Block F, 301",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Pediatrics",
    "experience": 9,
    "registrationNumber": "MCI456789",
    "clinicName": "Singh Kids Clinic",
    "clinicAddress": {
      "street": "18, Hauz Khas",
      "houseNumber": "Ground Floor",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Rahul Desai",
    "email": "rahuldesai@example.com",
    "password": "myp@ssword",
    "mobile": "+91-9876543226",
    "gender": "Male",
    "address": {
      "street": "5, Koregaon Park",
      "houseNumber": "Block G, 201",
      "city": "Pune",
      "state": "Maharashtra"
    },
    "specialization": "Ophthalmology",
    "experience": 11,
    "registrationNumber": "MCI012345",
    "clinicName": "Desai Eye Care",
    "clinicAddress": {
      "street": "8, FC Road",
      "houseNumber": "1st Floor",
      "city": "Pune",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Priya Sharma",
    "email": "priyasharma@example.com",
    "password": "myp@ssword123",
    "mobile": "+91-9876543210",
    "gender": "Female",
    "address": {
      "street": "12, MG Road",
      "houseNumber": "Flat 302",
      "city": "Mumbai",
      "state": "Maharashtra"
    },
    "specialization": "Dermatology",
    "experience": 7,
    "registrationNumber": "MCI567890",
    "clinicName": "Sharma Skin Clinic",
    "clinicAddress": {
      "street": "15, Bandra West",
      "houseNumber": "Ground Floor",
      "city": "Mumbai",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Amit Patel",
    "email": "amitpatel@example.com",
    "password": "myp@ssword456",
    "mobile": "+91-9876543234",
    "gender": "Male",
    "address": {
      "street": "3, Ashram Road",
      "houseNumber": "Apartment 501",
      "city": "Ahmedabad",
      "state": "Gujarat"
    },
    "specialization": "Cardiology",
    "experience": 15,
    "registrationNumber": "MCI234567",
    "clinicName": "Patel Heart Care",
    "clinicAddress": {
      "street": "10, SG Highway",
      "houseNumber": "2nd Floor",
      "city": "Ahmedabad",
      "state": "Gujarat"
    }
  },
  {
    "name": "Dr. Sunita Singh",
    "email": "sunitasingh@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543201",
    "gender": "Female",
    "address": {
      "street": "7, Civil Lines",
      "houseNumber": "Bungalow A-12",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Gynecology",
    "experience": 10,
    "registrationNumber": "MCI345678",
    "clinicName": "Singh Maternity Clinic",
    "clinicAddress": {
      "street": "20, Lajpat Nagar",
      "houseNumber": "Basement",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Rajesh Kumar",
    "email": "rajeshkumar@example.com",
    "password": "myp@ssword234",
    "mobile": "+91-9876543245",
    "gender": "Male",
    "address": {
      "street": "45, MG Road",
      "houseNumber": "Flat 701",
      "city": "Kolkata",
      "state": "West Bengal"
    },
    "specialization": "Orthopedics",
    "experience": 12,
    "registrationNumber": "MCI456789",
    "clinicName": "Kumar Ortho Care",
    "clinicAddress": {
      "street": "30, Park Street",
      "houseNumber": "3rd Floor",
      "city": "Kolkata",
      "state": "West Bengal"
    }
  },
  {
    "name": "Dr. Rohit Verma",
    "email": "rohitverma@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543278",
    "gender": "Male",
    "address": {
      "street": "14, Sector 5",
      "houseNumber": "Flat 1203",
      "city": "Chandigarh",
      "state": "Punjab"
    },
    "specialization": "Dentistry",
    "experience": 8,
    "registrationNumber": "MCI678901",
    "clinicName": "Verma Dental Care",
    "clinicAddress": {
      "street": "25, Sector 17",
      "houseNumber": "1st Floor",
      "city": "Chandigarh",
      "state": "Punjab"
    }
  },

  {
    "name": "Dr. Priyanka Gupta",
    "email": "priyankagupta@example.com",
    "password": "myp@ssword890",
    "mobile": "+91-9876543265",
    "gender": "Female",
    "address": {
      "street": "8, Green Park",
      "houseNumber": "Apartment B-4",
      "city": "New Delhi",
      "state": "Delhi"
    },
    "specialization": "Pediatrics",
    "experience": 11,
    "registrationNumber": "MCI789012",
    "clinicName": "Gupta Child Care",
    "clinicAddress": {
      "street": "12, Hauz Khas",
      "houseNumber": "Ground Floor",
      "city": "New Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Mohan Sharma",
    "email": "mohansharma@example.com",
    "password": "myp@ssword123",
    "mobile": "+91-9876543291",
    "gender": "Male",
    "address": {
      "street": "17, Bapu Nagar",
      "houseNumber": "Flat 602",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "Neurology",
    "experience": 13,
    "registrationNumber": "MCI890123",
    "clinicName": "Sharma Neuro Clinic",
    "clinicAddress": {
      "street": "20, Tonk Road",
      "houseNumber": "1st Floor",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Dr. Anika Sharma",
    "email": "anikasharma@example.com",
    "password": "myp@ssword123",
    "mobile": "+91-9876543210",
    "gender": "Female",
    "address": {
      "street": "4567, MG Road",
      "houseNumber": "Apt 789",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Dentistry",
    "experience": 8,
    "registrationNumber": "MCI67890",
    "clinicName": "Sharma Dental Clinic",
    "clinicAddress": {
      "street": "7890, Janakpuri",
      "houseNumber": "Suite 901",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Rajat Patel",
    "email": "rajatpatel@example.com",
    "password": "myp@ssword456",
    "mobile": "+91-9876543211",
    "gender": "Male",
    "address": {
      "street": "5678, SG Highway",
      "houseNumber": "Block C, 301",
      "city": "Ahmedabad",
      "state": "Gujarat"
    },
    "specialization": "Pediatrics",
    "experience": 10,
    "registrationNumber": "MCI78901",
    "clinicName": "Patel Child Care Clinic",
    "clinicAddress": {
      "street": "8901, Satellite Road",
      "houseNumber": "Floor 2",
      "city": "Ahmedabad",
      "state": "Gujarat"
    }
  },
  {
    "name": "Dr. Priya Singh",
    "email": "priyasingh@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543212",
    "gender": "Female",
    "address": {
      "street": "6789, Ashok Nagar",
      "houseNumber": "Apt 567",
      "city": "Mumbai",
      "state": "Maharashtra"
    },
    "specialization": "Dermatology",
    "experience": 12,
    "registrationNumber": "MCI89012",
    "clinicName": "Singh Skin Clinic",
    "clinicAddress": {
      "street": "9012, Bandra West",
      "houseNumber": "Suite 345",
      "city": "Mumbai",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Arjun Gupta",
    "email": "arjungupta@example.com",
    "password": "myp@ssword234",
    "mobile": "+91-9876543213",
    "gender": "Male",
    "address": {
      "street": "7890, Civil Lines",
      "houseNumber": "Block B, 201",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "Oncology",
    "experience": 15,
    "registrationNumber": "MCI90123",
    "clinicName": "Gupta Oncology Center",
    "clinicAddress": {
      "street": "1234, Raja Park",
      "houseNumber": "Floor 3",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Dr. Rohit Kapoor",
    "email": "rohitkapoor@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543215",
    "gender": "Male",
    "address": {
      "street": "5678, Rajouri Garden",
      "houseNumber": "Block D, 501",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Orthopedics",
    "experience": 9,
    "registrationNumber": "MCI56789",
    "clinicName": "Kapoor Ortho Care",
    "clinicAddress": {
      "street": "7890, Janpath",
      "houseNumber": "Suite 701",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Kavita Reddy",
    "email": "kavitareddy@example.com",
    "password": "myp@ssword234",
    "mobile": "+91-9876543216",
    "gender": "Female",
    "address": {
      "street": "6789, Indiranagar",
      "houseNumber": "Apt 456",
      "city": "Bangalore",
      "state": "Karnataka"
    },
    "specialization": "Gynecology",
    "experience": 11,
    "registrationNumber": "MCI67890",
    "clinicName": "Reddy Women's Clinic",
    "clinicAddress": {
      "street": "9012, MG Road",
      "houseNumber": "Suite 567",
      "city": "Bangalore",
      "state": "Karnataka"
    }
  },
  {
    "name": "Dr. Manish Singh",
    "email": "manishsingh@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543217",
    "gender": "Male",
    "address": {
      "street": "7890, Malviya Nagar",
      "houseNumber": "Block A, 301",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "Cardiology",
    "experience": 14,
    "registrationNumber": "MCI78901",
    "clinicName": "Singh Heart Care",
    "clinicAddress": {
      "street": "1234, Tonk Road",
      "houseNumber": "Floor 2",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Dr. Ritu Verma",
    "email": "rituverma@example.com",
    "password": "myp@ssword890",
    "mobile": "+91-9876543218",
    "gender": "Female",
    "address": {
      "street": "8901, Kalyan Nagar",
      "houseNumber": "Apt 567",
      "city": "Bangalore",
      "state": "Karnataka"
    },
    "specialization": "Psychiatry",
    "experience": 13,
    "registrationNumber": "MCI89012",
    "clinicName": "Verma Psychiatry Clinic",
    "clinicAddress": {
      "street": "4567, Whitefield",
      "houseNumber": "Suite 678",
      "city": "Bangalore",
      "state": "Karnataka"
    }
  },
  {
    "name": "Dr. Neha Sharma",
    "email": "nehasharma@example.com",
    "password": "myp@ssword345",
    "mobile": "+91-9876543220",
    "gender": "Female",
    "address": {
      "street": "2345, Gomti Nagar",
      "houseNumber": "Apt 789",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    },
    "specialization": "Dermatology",
    "experience": 8,
    "registrationNumber": "MCI90123",
    "clinicName": "Sharma Skin Care",
    "clinicAddress": {
      "street": "5678, Hazratganj",
      "houseNumber": "Suite 890",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    }
  },
  {
    "name": "Dr. Aniket Patel",
    "email": "aniketpatel@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543221",
    "gender": "Male",
    "address": {
      "street": "3456, Satellite",
      "houseNumber": "Block B, 401",
      "city": "Ahmedabad",
      "state": "Gujarat"
    },
    "specialization": "Pediatrics",
    "experience": 10,
    "registrationNumber": "MCI23456",
    "clinicName": "Patel Child Care",
    "clinicAddress": {
      "street": "6789, Drive-in Road",
      "houseNumber": "Floor 3",
      "city": "Ahmedabad",
      "state": "Gujarat"
    }
  },
  {
    "name": "Dr. Priya Sharma",
    "email": "priyasharma@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543222",
    "gender": "Female",
    "address": {
      "street": "4567, Aundh",
      "houseNumber": "Apt 123",
      "city": "Pune",
      "state": "Maharashtra"
    },
    "specialization": "Dentistry",
    "experience": 12,
    "registrationNumber": "MCI34567",
    "clinicName": "Sharma Dental Clinic",
    "clinicAddress": {
      "street": "7890, Shivajinagar",
      "houseNumber": "Suite 234",
      "city": "Pune",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Sanjay Gupta",
    "email": "sanjaygupta@example.com",
    "password": "myp@ssword890",
    "mobile": "+91-9876543223",
    "gender": "Male",
    "address": {
      "street": "5678, Lajpat Nagar",
      "houseNumber": "Block D, 201",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "ENT",
    "experience": 15,
    "registrationNumber": "MCI45678",
    "clinicName": "Gupta ENT Clinic",
    "clinicAddress": {
      "street": "9012, Green Park",
      "houseNumber": "Floor 2",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Arjun Singh",
    "email": "arjunsingh@example.com",
    "password": "myp@ssword123",
    "mobile": "+91-9876543225",
    "gender": "Male",
    "address": {
      "street": "1234, Rajendra Nagar",
      "houseNumber": "Flat 567",
      "city": "Patna",
      "state": "Bihar"
    },
    "specialization": "Orthopedics",
    "experience": 9,
    "registrationNumber": "MCI56789",
    "clinicName": "Singh Ortho Care",
    "clinicAddress": {
      "street": "5678, Boring Road",
      "houseNumber": "Floor 2",
      "city": "Patna",
      "state": "Bihar"
    }
  },
  {
    "name": "Dr. Maya Sharma",
    "email": "mayasharma@example.com",
    "password": "myp@ssword456",
    "mobile": "+91-9876543226",
    "gender": "Female",
    "address": {
      "street": "2345, Raja Park",
      "houseNumber": "Block C, 301",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "Gynecology",
    "experience": 14,
    "registrationNumber": "MCI67890",
    "clinicName": "Sharma Women's Clinic",
    "clinicAddress": {
      "street": "6789, C-Scheme",
      "houseNumber": "Suite 456",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Dr. Rajesh Gupta",
    "email": "rajeshgupta@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543227",
    "gender": "Male",
    "address": {
      "street": "3456, Madhapur",
      "houseNumber": "Apt 789",
      "city": "Hyderabad",
      "state": "Telangana"
    },
    "specialization": "Cardiology",
    "experience": 17,
    "registrationNumber": "MCI78901",
    "clinicName": "Gupta Heart Care",
    "clinicAddress": {
      "street": "7890, Jubilee Hills",
      "houseNumber": "Floor 3",
      "city": "Hyderabad",
      "state": "Telangana"
    }
  },
  {
    "name": "Dr. Meera Verma",
    "email": "meeraverm@example.com",
    "password": "myp@ssword890",
    "mobile": "+91-9876543228",
    "gender": "Female",
    "address": {
      "street": "4567, Aliganj",
      "houseNumber": "Block B, 201",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    },
    "specialization": "Psychiatry",
    "experience": 11,
    "registrationNumber": "MCI89012",
    "clinicName": "Verma Mind Care",
    "clinicAddress": {
      "street": "9012, Hazratganj",
      "houseNumber": "Suite 234",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    }
  },
  {
    "name": "Dr. Nisha Patel",
    "email": "nishapatel@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543230",
    "gender": "Female",
    "address": {
      "street": "6789, Thaltej",
      "houseNumber": "Block D, 301",
      "city": "Ahmedabad",
      "state": "Gujarat"
    },
    "specialization": "Dermatology",
    "experience": 8,
    "registrationNumber": "MCI90123",
    "clinicName": "Patel Skin Care",
    "clinicAddress": {
      "street": "0123, Satellite",
      "houseNumber": "Floor 2",
      "city": "Ahmedabad",
      "state": "Gujarat"
    }
  },
  {
    "name": "Dr. Sanjay Reddy",
    "email": "sanjayreddy@example.com",
    "password": "myp@ssword678",
    "mobile": "+91-9876543231",
    "gender": "Male",
    "address": {
      "street": "7890, Jubilee Hills",
      "houseNumber": "Flat 567",
      "city": "Hyderabad",
      "state": "Telangana"
    },
    "specialization": "Pediatrics",
    "experience": 12,
    "registrationNumber": "MCI23456",
    "clinicName": "Reddy Children's Clinic",
    "clinicAddress": {
      "street": "2345, Banjara Hills",
      "houseNumber": "Suite 678",
      "city": "Hyderabad",
      "state": "Telangana"
    }
  },
  {
    "name": "Dr. Priya Singhania",
    "email": "priyasinghania@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543232",
    "gender": "Female",
    "address": {
      "street": "8901, Koregaon Park",
      "houseNumber": "Block E, 401",
      "city": "Pune",
      "state": "Maharashtra"
    },
    "specialization": "Obstetrics",
    "experience": 15,
    "registrationNumber": "MCI34567",
    "clinicName": "Singhania Maternity Clinic",
    "clinicAddress": {
      "street": "3456, Kalyani Nagar",
      "houseNumber": "Floor 3",
      "city": "Pune",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Deepak Sharma",
    "email": "deepaksharma@example.com",
    "password": "myp@ssword890",
    "mobile": "+91-9876543233",
    "gender": "Male",
    "address": {
      "street": "9012, Shastri Nagar",
      "houseNumber": "Block A, 201",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "ENT",
    "experience": 10,
    "registrationNumber": "MCI45678",
    "clinicName": "Sharma ENT Care",
    "clinicAddress": {
      "street": "4567, Vaishali Nagar",
      "houseNumber": "Suite 234",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Dr. Rajeev Kumar",
    "email": "rajeevkumar@example.com",
    "password": "myp@ssword456",
    "mobile": "+91-9876543235",
    "gender": "Male",
    "address": {
      "street": "2345, Gomti Nagar",
      "houseNumber": "Block C, 201",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    },
    "specialization": "Cardiology",
    "experience": 14,
    "registrationNumber": "MCI56789",
    "clinicName": "Kumar Heart Care",
    "clinicAddress": {
      "street": "5678, Hazratganj",
      "houseNumber": "Floor 2",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    }
  },
  {
    "name": "Dr. Anjali Sharma",
    "email": "anjalisharma@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543236",
    "gender": "Female",
    "address": {
      "street": "3456, DLF Phase 3",
      "houseNumber": "Flat 567",
      "city": "Gurgaon",
      "state": "Haryana"
    },
    "specialization": "Gynecology",
    "experience": 11,
    "registrationNumber": "MCI67890",
    "clinicName": "Sharma Women's Clinic",
    "clinicAddress": {
      "street": "6789, Golf Course Road",
      "houseNumber": "Suite 123",
      "city": "Gurgaon",
      "state": "Haryana"
    }
  },
  {
    "name": "Dr. Vikram Singh",
    "email": "vikramsingh@example.com",
    "password": "myp@ssword012",
    "mobile": "+91-9876543237",
    "gender": "Male",
    "address": {
      "street": "4567, Civil Lines",
      "houseNumber": "Block D, 301",
      "city": "Allahabad",
      "state": "Uttar Pradesh"
    },
    "specialization": "Orthopedics",
    "experience": 9,
    "registrationNumber": "MCI78901",
    "clinicName": "Singh Ortho Care",
    "clinicAddress": {
      "street": "7890, MG Marg",
      "houseNumber": "Floor 2",
      "city": "Allahabad",
      "state": "Uttar Pradesh"
    }
  },
  {
    "name": "Dr. Aisha Khan",
    "email": "aishakhan@example.com",
    "password": "myp@ssword234",
    "mobile": "+91-9876543238",
    "gender": "Female",
    "address": {
      "street": "5678, Bandra West",
      "houseNumber": "Flat 567",
      "city": "Mumbai",
      "state": "Maharashtra"
    },
    "specialization": "Dentistry",
    "experience": 7,
    "registrationNumber": "MCI89012",
    "clinicName": "Khan Dental Care",
    "clinicAddress": {
      "street": "8901, Andheri East",
      "houseNumber": "Suite 234",
      "city": "Mumbai",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Meera Gupta",
    "email": "meeragupta@example.com",
    "password": "myp@ssword123",
    "mobile": "+91-9876543240",
    "gender": "Female",
    "address": {
      "street": "7890, Rajouri Garden",
      "houseNumber": "Flat 789",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Dermatology",
    "experience": 12,
    "registrationNumber": "MCI90123",
    "clinicName": "Gupta Skin Clinic",
    "clinicAddress": {
      "street": "9012, Karol Bagh",
      "houseNumber": "Suite 345",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Sanjay Mishra",
    "email": "sanjaymishra@example.com",
    "password": "myp@ssword456",
    "mobile": "+91-9876543241",
    "gender": "Male",
    "address": {
      "street": "8901, Boring Road",
      "houseNumber": "Block F, 501",
      "city": "Patna",
      "state": "Bihar"
    },
    "specialization": "Pediatrics",
    "experience": 15,
    "registrationNumber": "MCI01234",
    "clinicName": "Mishra Children's Clinic",
    "clinicAddress": {
      "street": "0123, Fraser Road",
      "houseNumber": "Floor 3",
      "city": "Patna",
      "state": "Bihar"
    }
  },
  {
    "name": "Dr. Nisha Sharma",
    "email": "nishasharma@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543242",
    "gender": "Female",
    "address": {
      "street": "9012, Jubilee Hills",
      "houseNumber": "Flat 567",
      "city": "Hyderabad",
      "state": "Telangana"
    },
    "specialization": "Psychiatry",
    "experience": 10,
    "registrationNumber": "MCI34567",
    "clinicName": "Sharma Psychiatry Clinic",
    "clinicAddress": {
      "street": "2345, Banjara Hills",
      "houseNumber": "Suite 678",
      "city": "Hyderabad",
      "state": "Telangana"
    }
  },
  {
    "name": "Dr. Rohit Verma",
    "email": "rohitverma@example.com",
    "password": "myp@ssword012",
    "mobile": "+91-9876543243",
    "gender": "Male",
    "address": {
      "street": "0123, Sushant Lok",
      "houseNumber": "Block G, 201",
      "city": "Gurugram",
      "state": "Haryana"
    },
    "specialization": "ENT",
    "experience": 8,
    "registrationNumber": "MCI67890",
    "clinicName": "Verma ENT Clinic",
    "clinicAddress": {
      "street": "3456, DLF Cyber City",
      "houseNumber": "Floor 2",
      "city": "Gurugram",
      "state": "Haryana"
    }
  },
  {
    "name": "Dr. Rahul Sharma",
    "email": "rahulsharma@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543245",
    "gender": "Male",
    "address": {
      "street": "5678, Kormangala",
      "houseNumber": "Block C, 301",
      "city": "Bengaluru",
      "state": "Karnataka"
    },
    "specialization": "Cardiology",
    "experience": 14,
    "registrationNumber": "MCI34567",
    "clinicName": "Sharma Heart Care",
    "clinicAddress": {
      "street": "7890, Indiranagar",
      "houseNumber": "Suite 456",
      "city": "Bengaluru",
      "state": "Karnataka"
    }
  },
  {
    "name": "Dr. Neha Patel",
    "email": "nehapatel@example.com",
    "password": "myp@ssword890",
    "mobile": "+91-9876543246",
    "gender": "Female",
    "address": {
      "street": "6789, Satellite",
      "houseNumber": "Flat 123",
      "city": "Ahmedabad",
      "state": "Gujarat"
    },
    "specialization": "Dentistry",
    "experience": 9,
    "registrationNumber": "MCI78901",
    "clinicName": "Patel Dental Clinic",
    "clinicAddress": {
      "street": "8901, Navrangpura",
      "houseNumber": "Floor 2",
      "city": "Ahmedabad",
      "state": "Gujarat"
    }
  },
  {
    "name": "Dr. Vivek Kumar",
    "email": "vivekkumar@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543247",
    "gender": "Male",
    "address": {
      "street": "5678, Gomti Nagar",
      "houseNumber": "Block D, 201",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    },
    "specialization": "Orthopedics",
    "experience": 11,
    "registrationNumber": "MCI23456",
    "clinicName": "Kumar Ortho Care",
    "clinicAddress": {
      "street": "6789, Hazratganj",
      "houseNumber": "Suite 789",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    }
  },
  {
    "name": "Dr. Anjali Rajput",
    "email": "anjalirajput@example.com",
    "password": "myp@ssword012",
    "mobile": "+91-9876543248",
    "gender": "Female",
    "address": {
      "street": "0123, Whitefield",
      "houseNumber": "Flat 567",
      "city": "Bengaluru",
      "state": "Karnataka"
    },
    "specialization": "Gynecology",
    "experience": 13,
    "registrationNumber": "MCI56789",
    "clinicName": "Rajput Women's Clinic",
    "clinicAddress": {
      "street": "2345, Marathahalli",
      "houseNumber": "Floor 3",
      "city": "Bengaluru",
      "state": "Karnataka"
    }
  },
  {
    "name": "Dr. Aisha Khanna",
    "email": "aishakhanna@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543250",
    "gender": "Female",
    "address": {
      "street": "5678, Malad West",
      "houseNumber": "Block B, 301",
      "city": "Mumbai",
      "state": "Maharashtra"
    },
    "specialization": "Dermatology",
    "experience": 10,
    "registrationNumber": "MCI67890",
    "clinicName": "Khanna Skin Clinic",
    "clinicAddress": {
      "street": "7890, Andheri East",
      "houseNumber": "Suite 456",
      "city": "Mumbai",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Rohit Sharma",
    "email": "rohitsharma@example.com",
    "password": "myp@ssword890",
    "mobile": "+91-9876543251",
    "gender": "Male",
    "address": {
      "street": "6789, Rajouri Garden",
      "houseNumber": "Flat 123",
      "city": "New Delhi",
      "state": "Delhi"
    },
    "specialization": "Pediatrics",
    "experience": 12,
    "registrationNumber": "MCI12345",
    "clinicName": "Sharma Child Care",
    "clinicAddress": {
      "street": "8901, Janakpuri",
      "houseNumber": "Floor 2",
      "city": "New Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Sneha Gupta",
    "email": "snehagupta@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543252",
    "gender": "Female",
    "address": {
      "street": "5678, JP Nagar",
      "houseNumber": "Block D, 201",
      "city": "Bengaluru",
      "state": "Karnataka"
    },
    "specialization": "Psychiatry",
    "experience": 9,
    "registrationNumber": "MCI23456",
    "clinicName": "Gupta Mental Health Clinic",
    "clinicAddress": {
      "street": "6789, BTM Layout",
      "houseNumber": "Suite 789",
      "city": "Bengaluru",
      "state": "Karnataka"
    }
  },
  {
    "name": "Dr. Prateek Singh",
    "email": "prateeksingh@example.com",
    "password": "myp@ssword012",
    "mobile": "+91-9876543253",
    "gender": "Male",
    "address": {
      "street": "0123, Viman Nagar",
      "houseNumber": "Flat 567",
      "city": "Pune",
      "state": "Maharashtra"
    },
    "specialization": "ENT",
    "experience": 11,
    "registrationNumber": "MCI56789",
    "clinicName": "Singh ENT Clinic",
    "clinicAddress": {
      "street": "2345, Kalyani Nagar",
      "houseNumber": "Floor 3",
      "city": "Pune",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Aniket Patel",
    "email": "aniketpatel@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543255",
    "gender": "Male",
    "address": {
      "street": "5678, Vastrapur",
      "houseNumber": "Block C, 201",
      "city": "Ahmedabad",
      "state": "Gujarat"
    },
    "specialization": "Orthopedics",
    "experience": 8,
    "registrationNumber": "MCI98765",
    "clinicName": "Patel Bone & Joint Clinic",
    "clinicAddress": {
      "street": "6789, Navrangpura",
      "houseNumber": "Suite 789",
      "city": "Ahmedabad",
      "state": "Gujarat"
    }
  },
  {
    "name": "Dr. Snehal Joshi",
    "email": "snehaljoshi@example.com",
    "password": "myp@ssword890",
    "mobile": "+91-9876543256",
    "gender": "Female",
    "address": {
      "street": "6789, MG Road",
      "houseNumber": "Flat 123",
      "city": "Bengaluru",
      "state": "Karnataka"
    },
    "specialization": "Gynecology",
    "experience": 14,
    "registrationNumber": "MCI54321",
    "clinicName": "Joshi Women's Clinic",
    "clinicAddress": {
      "street": "8901, Indiranagar",
      "houseNumber": "Floor 2",
      "city": "Bengaluru",
      "state": "Karnataka"
    }
  },
  {
    "name": "Dr. Vishal Singh",
    "email": "vishalsingh@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543257",
    "gender": "Male",
    "address": {
      "street": "5678, Vaishali Nagar",
      "houseNumber": "Block B, 301",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "Dentistry",
    "experience": 7,
    "registrationNumber": "MCI65432",
    "clinicName": "Singh Dental Care",
    "clinicAddress": {
      "street": "6789, Jhotwara",
      "houseNumber": "Suite 456",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Dr. Priya Sharma",
    "email": "priyasharma@example.com",
    "password": "myp@ssword012",
    "mobile": "+91-9876543258",
    "gender": "Female",
    "address": {
      "street": "0123, Baner",
      "houseNumber": "Flat 567",
      "city": "Pune",
      "state": "Maharashtra"
    },
    "specialization": "Dermatology",
    "experience": 6,
    "registrationNumber": "MCI98765",
    "clinicName": "Sharma Skin Clinic",
    "clinicAddress": {
      "street": "2345, Wakad",
      "houseNumber": "Floor 3",
      "city": "Pune",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Neha Shah",
    "email": "nehashah@example.com",
    "password": "myp@ssword456",
    "mobile": "+91-9876543260",
    "gender": "Female",
    "address": {
      "street": "4567, Thane West",
      "houseNumber": "Flat 789",
      "city": "Mumbai",
      "state": "Maharashtra"
    },
    "specialization": "Pediatrics",
    "experience": 10,
    "registrationNumber": "MCI54321",
    "clinicName": "Shah Children's Clinic",
    "clinicAddress": {
      "street": "5678, Mulund",
      "houseNumber": "Suite 890",
      "city": "Mumbai",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Varun Patel",
    "email": "varunpatel@example.com",
    "password": "myp@ssword678",
    "mobile": "+91-9876543261",
    "gender": "Male",
    "address": {
      "street": "6789, Satellite",
      "houseNumber": "Block D, 201",
      "city": "Ahmedabad",
      "state": "Gujarat"
    },
    "specialization": "Cardiology",
    "experience": 12,
    "registrationNumber": "MCI01234",
    "clinicName": "Patel Heart Care",
    "clinicAddress": {
      "street": "7890, Navrangpura",
      "houseNumber": "Floor 2",
      "city": "Ahmedabad",
      "state": "Gujarat"
    }
  },
  {
    "name": "Dr. Shruti Singh",
    "email": "shrutisingh@example.com",
    "password": "myp@ssword890",
    "mobile": "+91-9876543262",
    "gender": "Female",
    "address": {
      "street": "0123, Whitefield",
      "houseNumber": "Flat 456",
      "city": "Bengaluru",
      "state": "Karnataka"
    },
    "specialization": "Psychiatry",
    "experience": 9,
    "registrationNumber": "MCI98765",
    "clinicName": "Singh Mind Care",
    "clinicAddress": {
      "street": "2345, Marathahalli",
      "houseNumber": "Suite 678",
      "city": "Bengaluru",
      "state": "Karnataka"
    }
  },
  {
    "name": "Dr. Akash Sharma",
    "email": "akashsharma@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543263",
    "gender": "Male",
    "address": {
      "street": "5678, Mansarovar",
      "houseNumber": "Block B, 301",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "ENT",
    "experience": 11,
    "registrationNumber": "MCI65432",
    "clinicName": "Sharma Ear Nose Throat Clinic",
    "clinicAddress": {
      "street": "6789, Malviya Nagar",
      "houseNumber": "Floor 3",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Mr. Ankit Singh",
    "email": "ankitsingh@example.com",
    "password": "myp@ssword123",
    "mobile": "+91-9876543201",
    "gender": "Male",
    "address": {
      "street": "1234, Civil Lines",
      "houseNumber": "Flat 456",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Cardiology",
    "experience": 8,
    "registrationNumber": "MCI12345",
    "clinicName": "Singh Cardiac Clinic",
    "clinicAddress": {
      "street": "5678, Rajouri Garden",
      "houseNumber": "Floor 2",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Ms. Neha Sharma",
    "email": "nehasharma@example.com",
    "password": "myp@ssword456",
    "mobile": "+91-9876543202",
    "gender": "Female",
    "address": {
      "street": "2345, Kalyani Nagar",
      "houseNumber": "Flat 789",
      "city": "Pune",
      "state": "Maharashtra"
    },
    "specialization": "Dermatology",
    "experience": 12,
    "registrationNumber": "MCI67890",
    "clinicName": "Sharma Skin Care Clinic",
    "clinicAddress": {
      "street": "7890, Aundh",
      "houseNumber": "Floor 1",
      "city": "Pune",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Rajesh Kumar",
    "email": "rajeshkumar@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543203",
    "gender": "Male",
    "address": {
      "street": "4567, MG Road",
      "houseNumber": "Flat 123",
      "city": "Bengaluru",
      "state": "Karnataka"
    },
    "specialization": "Orthopedics",
    "experience": 15,
    "registrationNumber": "MCI34567",
    "clinicName": "Kumar Ortho Clinic",
    "clinicAddress": {
      "street": "8901, Indiranagar",
      "houseNumber": "Floor 2",
      "city": "Bengaluru",
      "state": "Karnataka"
    }
  },
  {
    "name": "Mr. Rahul Singh",
    "email": "rahulsingh@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543205",
    "gender": "Male",
    "address": {
      "street": "3456, Gomti Nagar",
      "houseNumber": "Flat 901",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    },
    "specialization": "Ophthalmology",
    "experience": 7,
    "registrationNumber": "MCI23456",
    "clinicName": "Singh Eye Clinic",
    "clinicAddress": {
      "street": "6789, Hazratganj",
      "houseNumber": "Floor 2",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    }
  },
  {
    "name": "Ms. Priya Sharma",
    "email": "priyasharma@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543206",
    "gender": "Female",
    "address": {
      "street": "4567, Model Town",
      "houseNumber": "Flat 123",
      "city": "Delhi",
      "state": "Delhi"
    },
    "specialization": "Dentistry",
    "experience": 9,
    "registrationNumber": "MCI78901",
    "clinicName": "Sharma Dental Care",
    "clinicAddress": {
      "street": "7890, Rohini",
      "houseNumber": "Floor 1",
      "city": "Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Dr. Suresh Kumar",
    "email": "sureshkumar@example.com",
    "password": "myp@ssword901",
    "mobile": "+91-9876543207",
    "gender": "Male",
    "address": {
      "street": "5678, Kankarbagh",
      "houseNumber": "Flat 567",
      "city": "Patna",
      "state": "Bihar"
    },
    "specialization": "Pediatrics",
    "experience": 13,
    "registrationNumber": "MCI34567",
    "clinicName": "Kumar Child Care Clinic",
    "clinicAddress": {
      "street": "8901, Boring Road",
      "houseNumber": "Floor 2",
      "city": "Patna",
      "state": "Bihar"
    }
  },
  {
    "name": "Ms. Ritu Gupta",
    "email": "ritugupta@example.com",
    "password": "myp@ssword234",
    "mobile": "+91-9876543208",
    "gender": "Female",
    "address": {
      "street": "6789, Vaishali Nagar",
      "houseNumber": "Flat 890",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "Psychiatry",
    "experience": 11,
    "registrationNumber": "MCI56789",
    "clinicName": "Gupta Mental Health Clinic",
    "clinicAddress": {
      "street": "1234, C-Scheme",
      "houseNumber": "Floor 3",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Ms. Shreya Patel",
    "email": "shreyapatel@example.com",
    "password": "myp@ssword456",
    "mobile": "+91-9876543210",
    "gender": "Female",
    "address": {
      "street": "8901, Paldi",
      "houseNumber": "Flat 234",
      "city": "Ahmedabad",
      "state": "Gujarat"
    },
    "specialization": "Gynecology",
    "experience": 8,
    "registrationNumber": "MCI45678",
    "clinicName": "Patel Women's Clinic",
    "clinicAddress": {
      "street": "5678, Navrangpura",
      "houseNumber": "Floor 1",
      "city": "Ahmedabad",
      "state": "Gujarat"
    }
  },
  {
    "name": "Dr. Anuj Sharma",
    "email": "anujsharma@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543211",
    "gender": "Male",
    "address": {
      "street": "1234, Malad",
      "houseNumber": "Flat 567",
      "city": "Mumbai",
      "state": "Maharashtra"
    },
    "specialization": "Orthopedics",
    "experience": 12,
    "registrationNumber": "MCI56789",
    "clinicName": "Sharma Ortho Care",
    "clinicAddress": {
      "street": "4567, Andheri",
      "houseNumber": "Floor 2",
      "city": "Mumbai",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Ms. Rashi Khanna",
    "email": "rashikhanna@example.com",
    "password": "myp@ssword012",
    "mobile": "+91-9876543212",
    "gender": "Female",
    "address": {
      "street": "2345, Koregaon Park",
      "houseNumber": "Flat 789",
      "city": "Pune",
      "state": "Maharashtra"
    },
    "specialization": "Dermatology",
    "experience": 10,
    "registrationNumber": "MCI67890",
    "clinicName": "Khanna Skin Clinic",
    "clinicAddress": {
      "street": "5678, Camp",
      "houseNumber": "Floor 3",
      "city": "Pune",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Dr. Sameer Khan",
    "email": "sameerkhan@example.com",
    "password": "myp@ssword345",
    "mobile": "+91-9876543213",
    "gender": "Male",
    "address": {
      "street": "3456, Banjara Hills",
      "houseNumber": "Flat 901",
      "city": "Hyderabad",
      "state": "Telangana"
    },
    "specialization": "Cardiology",
    "experience": 15,
    "registrationNumber": "MCI78901",
    "clinicName": "Khan Heart Care",
    "clinicAddress": {
      "street": "6789, Jubilee Hills",
      "houseNumber": "Floor 2",
      "city": "Hyderabad",
      "state": "Telangana"
    }
  },
  {
    "name": "Dr. Rajiv Kumar",
    "email": "rajivkumar@example.com",
    "password": "myp@ssword234",
    "mobile": "+91-9876543215",
    "gender": "Male",
    "address": {
      "street": "5678, Janakpuri",
      "houseNumber": "Flat 456",
      "city": "New Delhi",
      "state": "Delhi"
    },
    "specialization": "Pediatrics",
    "experience": 9,
    "registrationNumber": "MCI89012",
    "clinicName": "Kumar Pediatrics Clinic",
    "clinicAddress": {
      "street": "7890, Dwarka",
      "houseNumber": "Floor 1",
      "city": "New Delhi",
      "state": "Delhi"
    }
  },
  {
    "name": "Ms. Priya Singh",
    "email": "priyasingh@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543216",
    "gender": "Female",
    "address": {
      "street": "6789, Marathahalli",
      "houseNumber": "Flat 567",
      "city": "Bengaluru",
      "state": "Karnataka"
    },
    "specialization": "Ophthalmology",
    "experience": 7,
    "registrationNumber": "MCI90123",
    "clinicName": "Singh Eye Care",
    "clinicAddress": {
      "street": "1234, Koramangala",
      "houseNumber": "Floor 2",
      "city": "Bengaluru",
      "state": "Karnataka"
    }
  },
  {
    "name": "Dr. Ashish Gupta",
    "email": "ashishgupta@example.com",
    "password": "myp@ssword678",
    "mobile": "+91-9876543217",
    "gender": "Male",
    "address": {
      "street": "7890, Vaishali",
      "houseNumber": "Flat 678",
      "city": "Ghaziabad",
      "state": "Uttar Pradesh"
    },
    "specialization": "Dentistry",
    "experience": 11,
    "registrationNumber": "MCI01234",
    "clinicName": "Gupta Dental Care",
    "clinicAddress": {
      "street": "5678, Indirapuram",
      "houseNumber": "Floor 3",
      "city": "Ghaziabad",
      "state": "Uttar Pradesh"
    }
  },
  {
    "name": "Ms. Anamika Sharma",
    "email": "anamikasharma@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543218",
    "gender": "Female",
    "address": {
      "street": "8901, Malviya Nagar",
      "houseNumber": "Flat 789",
      "city": "Jaipur",
      "state": "Rajasthan"
    },
    "specialization": "Psychiatry",
    "experience": 10,
    "registrationNumber": "MCI34567",
    "clinicName": "Sharma Psychiatry Clinic",
    "clinicAddress": {
      "street": "6789, Raja Park",
      "houseNumber": "Floor 2",
      "city": "Jaipur",
      "state": "Rajasthan"
    }
  },
  {
    "name": "Dr. Sneha Patel",
    "email": "snehapatel@example.com",
    "password": "myp@ssword345",
    "mobile": "+91-9876543220",
    "gender": "Female",
    "address": {
      "street": "5678, Parel",
      "houseNumber": "Flat 456",
      "city": "Mumbai",
      "state": "Maharashtra"
    },
    "specialization": "Dermatology",
    "experience": 8,
    "registrationNumber": "MCI67890",
    "clinicName": "Patel Skin Clinic",
    "clinicAddress": {
      "street": "7890, Bandra",
      "houseNumber": "Floor 3",
      "city": "Mumbai",
      "state": "Maharashtra"
    }
  },
  {
    "name": "Mr. Arjun Singh",
    "email": "arjunsingh@example.com",
    "password": "myp@ssword567",
    "mobile": "+91-9876543221",
    "gender": "Male",
    "address": {
      "street": "6789, Anna Nagar",
      "houseNumber": "Flat 567",
      "city": "Chennai",
      "state": "Tamil Nadu"
    },
    "specialization": "Orthopedics",
    "experience": 12,
    "registrationNumber": "MCI23456",
    "clinicName": "Singh Ortho Care",
    "clinicAddress": {
      "street": "1234, T Nagar",
      "houseNumber": "Floor 2",
      "city": "Chennai",
      "state": "Tamil Nadu"
    }
  },
  {
    "name": "Dr. Nisha Sharma",
    "email": "nishasharma@example.com",
    "password": "myp@ssword678",
    "mobile": "+91-9876543222",
    "gender": "Female",
    "address": {
      "street": "7890, Gomti Nagar",
      "houseNumber": "Flat 678",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    },
    "specialization": "Obstetrics and Gynecology",
    "experience": 9,
    "registrationNumber": "MCI78901",
    "clinicName": "Sharma Women's Clinic",
    "clinicAddress": {
      "street": "5678, Hazratganj",
      "houseNumber": "Floor 1",
      "city": "Lucknow",
      "state": "Uttar Pradesh"
    }
  },
  {
    "name": "Ms. Anuj Kapoor",
    "email": "anujkapoor@example.com",
    "password": "myp@ssword789",
    "mobile": "+91-9876543223",
    "gender": "Male",
    "address": {
      "street": "8901, Sushant Lok",
      "houseNumber": "Flat 789",
      "city": "Gurugram",
      "state": "Haryana"
    },
    "specialization": "Cardiology",
    "experience": 15,
    "registrationNumber": "MCI45678",
    "clinicName": "Kapoor Heart Clinic",
    "clinicAddress": {
      "street": "6789, DLF Phase 3",
      "houseNumber": "Floor 2",
      "city": "Gurugram",
      "state": "Haryana"
    }
  }
]

export default doctor