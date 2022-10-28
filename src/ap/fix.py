from certifi import where


data = range(52, 3655)
for i in data:
  with open(f'{i}.html', 'r') as f:
    old_data = f.read()

  new_data = old_data.replace('spanclass', 'span class')

  with open(f'{i}.html', 'w') as f:
    f.write(new_data)

  i = i + 1
