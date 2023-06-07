#include <emscripten.h>

EM_JS(int, callEM_JS, (int x, int y), {
  console.log('EM_JS I received: ' + [x, y]);
  return x + y
});

int main() {
    emscripten_run_script("console.log('hello world!')");

    int value = callEM_JS(10, 11);
    
    EM_ASM({
      console.log('EM_ASM I received: ' + $0);
    }, 100);
    return 0;
}