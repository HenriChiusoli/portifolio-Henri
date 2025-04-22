cidade = input("digite a cidade: ")
meta = float(input("digite o valor da meta : "))

calculoOut = meta / 23
calculoNov = meta / 19
calculoDez = meta / 20

print(f"No mês de outubro, serão 23 dias úteis. Você deverá vender R$ {calculoOut:.3f} por dia na cidade de {cidade} para alcançar a meta de {meta:.3f} mil !  ")
print(f"No mês de novembro, serão 19 dias úteis. Você deverá vender R$ {calculoNov:.3f} por dia na cidade de {cidade} para alcançar a meta de {meta:.3f} mil ! ")
print(f"No mês de dezembro, serão 20 dias úteis. Você deverá vender R$ {calculoDez:.3f} por dia na cidade de {cidade} para alcançar a meta de {meta:.3f} mil ! ")