filename = "capture"
f = open("Assets/OBJ/" + filename + ".obj", "r")
f2 = open("Assets/OBJ/" + filename + ".json", "w")

vertexes = []
faces = []

r = f.readline()
while r:

  print(r[0:2])
  if r[0:2] == "v ":
    ar = r.split()
    ar.pop(0)
    ar = list( map((lambda x:round(float(x)*100, 2)), ar) ) 
    ar[2], ar[1] = ar[1], ar[2]
    vertexes.append(ar)

  if r[0:2] == "f ":
    ar = r.split()
    ar.pop(0)
    faces.append([])
    for x in ar:
      faces[-1].append( int(x.split('/')[0])-1 )
      
  r = f.readline()

f2.write('{\n')
f2.write('\t"vertices":\n\t\t' + str(vertexes).replace('], ', '],\n\t\t') + ',\n')
f2.write('\t"faces":\n\t\t ' + str(faces).replace('], ', '],\n\t\t')  + '\n')
f2.write('}')