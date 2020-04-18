import gspread
from oauth2client.service_account import ServiceAccountCredentials


f = open("Assets/OBJ/Abilities/abilities.json", 'w')

scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('Google Sheets/client_secret.json', scope)
client = gspread.authorize(creds)

sheet = client.open_by_key('1fm6ScV8RW_FDtyN0wsclMaFlkZgSoLkPeeBD9_D_odY').sheet1

count = 0

a = """
{
"""

for row in sheet.get_all_records()[1:]:
  
  a += """
  "%s": {
    "name": "%s",
    "description": "%s",
    "icon": "%s",
    "cooldown": "%s"
  },
  """ % (row["ID"], row["Name"], row["Description"], row["Icon"], row["Cooldown"])
  
a += """
}
"""

f.write(a)
f.close()