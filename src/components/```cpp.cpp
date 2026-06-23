#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

int main() {
	unordered_map<int, string> tabla;
	for(int i = 0; i < 8; i++) {
		tabla[i] = string("Elemento ") + to_string(i);
	}
    
	cout << "Factor de carga: " << tabla.load_factor() << endl;
	cout << "Tamaño de la tabla: " << tabla.bucket_count() << endl;
    
	tabla.rehash(20); // fuerza rehash a 20 posiciones
    
	cout << "Nuevo tamaño de la tabla: " << tabla.bucket_count() << endl;
	return 0;
}