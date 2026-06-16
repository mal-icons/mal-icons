import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-5k-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Msr_5kPlus {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M676-463v42.5q0 8.5 6 14.5t14 6q8 0 14-6t6-14.5V-463h48q7 0 11.5-5.14t4.5-12q0-6.86-4.5-11.36Q771-496 764-496h-48v-44q0-8-6-14t-14-6q-8 0-14 6t-6 14v44h-47q-7 0-11.5 4.5t-4.5 11.36q0 6.86 5.1 12T630-463h46Zm-160 13 77 82q2 2 17 8 16 0 22.5-15t-4.5-26l-74-79 74-80q11-11 4.5-25.5T610-600q-4.79 0-8.89 2-4.11 2-8.1 6l-77 82v-65q0-10.83-7.12-17.92-7.12-7.08-18-7.08Q480-600 473-592.92q-7 7.08-7 17.92v190q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q502-360 509-367.08q7-7.08 7-17.92v-65Zm-166 40h-92q-10.83 0-17.92 7.12-7.08 7.12-7.08 18Q233-374 240.08-367q7.08 7 17.92 7h108q14.45 0 24.23-9.49Q400-378.97 400-393v-70q0-14.02-9.77-23.51Q380.45-496 366-496h-83v-54h92q10.83 0 17.92-7.12 7.08-7.12 7.08-18Q400-586 392.92-593q-7.08-7-17.92-7H258q-10.83 0-17.92 7.08Q233-585.83 233-575v87q0 10.83 7.08 17.92Q247.17-463 258-463h92v53ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Msr_5kPlus;
