import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as Item } from './Item.vue';
export { default as ItemActions } from './ItemActions.vue';
export { default as ItemContent } from './ItemContent.vue';
export { default as ItemDescription } from './ItemDescription.vue';
export { default as ItemFooter } from './ItemFooter.vue';
export { default as ItemGroup } from './ItemGroup.vue';
export { default as ItemHeader } from './ItemHeader.vue';
export { default as ItemMedia } from './ItemMedia.vue';
export { default as ItemSeparator } from './ItemSeparator.vue';
export { default as ItemTitle } from './ItemTitle.vue';

export const itemVariants = cva(
  'group/item flex items-center border border-slate-200 border-transparent text-sm rounded-md transition-colors [a]:hover:bg-slate-100/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-slate-950 focus-visible:ring-slate-950 focus-visible:ring-1 dark:border-slate-800 dark:[a]:hover:bg-slate-800/50 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border-slate-200 dark:border-slate-800',
        muted: 'bg-slate-100/50 dark:bg-slate-800/50',
      },
      size: {
        default: 'p-4 gap-4',
        sm: 'py-3 px-4 gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export const itemMediaVariants = cva(
  'flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "size-8 border border-slate-200 rounded-sm bg-slate-100 [&_svg:not([class*='size-'])]:size-4 dark:border-slate-800 dark:bg-slate-800",
        image:
          'size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type ItemVariants = VariantProps<typeof itemVariants>;
export type ItemMediaVariants = VariantProps<typeof itemMediaVariants>;
