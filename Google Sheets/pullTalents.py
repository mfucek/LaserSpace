import gspread
from oauth2client.service_account import ServiceAccountCredentials


f = open("Assets/OBJ/Abilities/talents.json", 'w')

scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('Google Sheets/client_secret.json', scope)
client = gspread.authorize(creds)

sheet = client.open_by_key('1fm6ScV8RW_FDtyN0wsclMaFlkZgSoLkPeeBD9_D_odY').get_worksheet(1)

a = """
{
"""

count = 0

for y in range(1, 9):
  row = sheet.row_values(y * 2 - 1)
  for x in range(len(row)-1):
    if (row[x] != ""):
      count += 1
      a += """
  "%s": {
    "abilityID": "%s",
    "parentID": [%s],
    "col": "%s",
    "row": "%s"
  },
""" % (count, row[x], '"' + sheet.cell(y * 2, x + 1).value.replace(",", '", "') + '"', x, y)
      print(a)

a += """
}
"""

print(a)

f.write(a)
f.close()

# Should make it sort by row!!!