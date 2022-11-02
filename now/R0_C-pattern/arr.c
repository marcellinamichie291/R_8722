// sum 2 arr
#include <stddef.h>

long arr_plus_arr(const int *a, const int *b, size_t na, size_t nb)
{
  long total = 0;
  for(int i=0; i<na; i++) total += a[i];
  for(int i=0; i<nb; i++) total += b[i];
  return total;

  //long t = 0;
  //while (na--) t += *a++;
  //while (nb--) t += *b++;
  // return t;

}

// count positive el arr, sum neative el arr
void count_positives_sumnegatives
(
  int *values,
  size_t count,
  int *positivesCount,
  int *negativesSum
)
{
  for(size_t i = 0; i < count; i++)
  {
    if (values[i] > 0) *positivesCount += 1;
    else if (values[i] < 0) *negativesSum += values[i];
  }
  // for(int i=0; i<count; i++) {
  //   *positivesCount += values[i] > 0 ? 1 : 0;
  //   *negativesSum += values[i] < 0 ? values[i] : 0;
  // }
}