import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-minigun",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMinigun {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M66.79 194.23v38.18h95.23v52.21h31.42c-1.6 52-10.98 87.32-23.33 109.21-6.95 12.31-14.56 20.39-22.42 25.32-21.22-11.84-39.07-38.88-39.07-71.01h-18.69c0 53.26 38.99 97.64 82.57 96.08 21.79-0.78 43.44-14.21 58.67-41.21 14.59-25.86 24.16-64.12 25.75-118.39h23.34v-90.39H66.79zm347.11 3.92v17.96H298.96v45.2H413.9v17.96h18.69v-17.96h23.53v17.96h18.69v-17.96h19.43v-45.2H474.81v-17.96h-18.69v17.96h-23.53v-17.96h-18.69zm-395.22 52.95v83.87H143.34v-83.88H18.68zm193.47 33.52h26.08c-1.6 52-10.98 87.32-23.33 109.21-12.94 22.94-28.18 31.18-43.06 31.71-4.080.14-8.24-0.4-12.36-1.53 8.79-2.51 17.46-8.28 25.58-18.690.45-0.760.9-1.53 1.34-2.31 14.59-25.86 24.16-64.12 25.75-118.39zM45.16 348.13c0 53.26 38.99 97.64 82.56 96.08 2.98-0.11 5.95-0.46 8.91-1.04-23.16-4.28-43.78-21.11-56.31-44.45-9.9-13.49-16.48-31.11-16.48-50.6h-18.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMinigun;
