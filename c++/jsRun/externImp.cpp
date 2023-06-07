#include <emscripten.h>

extern "C" {
  extern void ex_imp();
}

int main() {
  ex_imp();
  return 1;
}