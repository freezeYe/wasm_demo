#include <emscripten.h>

extern "C" {

int EMSCRIPTEN_KEEPALIVE fib(int n)
{
    if (n <= 0)    //基本情况
        return 0;
    else if (n == 1) // 基本情况
        return 1;
    else
        return fib(n - 1) + fib(n - 2);
}

}