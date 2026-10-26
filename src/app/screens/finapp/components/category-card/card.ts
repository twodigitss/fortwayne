import { CommonModule, CurrencyPipe } from "@angular/common";
import { Component, input, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'category-card',
  imports: [
    CommonModule,
    CurrencyPipe,
  ],
  template: `
  <section class="flex flex-col w-50 gap-4 || bg-white rounded-xl || p-4 ">
        <div #CategoriesCardTopSide class="flex items-start justify-between">

          <section #LabelIconAndAmount class="flex flex-col gap-0 items-start justify-center">
            <span #LabelAndIcon class="flex gap-2 ">
              <svg #CCIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-salad w-5 h-5">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1" />
                <path d="M18.5 11c.351 -1.017 .426 -2.236 .5 -3.714v-1.286h-2.256c-2.83 0 -4.616 .804 -5.64 2.076" />
                <path d="M5.255 11.008a12.204 12.204 0 0 1 -.255 -2.008v-1h1.755c.98 0 1.801 .124 2.479 .35" />
                <path d="M8 8l1 -4l4 2.5" />
                <path d="M13 11v-.5a2.5 2.5 0 1 0 -5 0v.5" />
              </svg>
              <p #CCLabel class="text-base" >{{ CategoryName() }}</p>
            </span>
            <p class="text-lg font-semibold"> {{ CategoryLimitCents() | currency }} </p>
          </section>

          <div #CCProgressbar class="relative size-7">
            <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <!-- Background Circle -->
              <circle cx="18" cy="18" r="14" fill="none" class="stroke-current text-gray-800/10 " stroke-width="6"></circle>
              <!-- Progress Circle -->
              <circle cx="18" cy="18" r="14" fill="none" class="stroke-current text-[#B0F0A3] " stroke-width="6" stroke-dasharray="100" stroke-dashoffset="65" stroke-linecap="round"></circle>
            </svg>
          </div>
        </div>

        <p class="text-sm text-[#6c6c6c]"> Spent: {{ CategorySpentCents() | currency }} </p>
      </section>
      `
})
export class CategoryCard {
  CategoryName = input<string>('');
  CategoryLimitCents = input<string>('');
  CategorySpentCents = input<string>('');

}
