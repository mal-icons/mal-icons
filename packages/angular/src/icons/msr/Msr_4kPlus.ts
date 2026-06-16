import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-4k-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Msr_4kPlus {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M676-463v42.5q0 8.5 6 14.5t14 6q8 0 14-6t6-14.5V-463h48q7 0 11.5-5.14t4.5-12q0-6.86-4.5-11.36Q771-496 764-496h-48v-44q0-8-6-14t-14-6q-8 0-14 6t-6 14v44h-47q-7 0-11.5 4.5t-4.5 11.36q0 6.86 5.1 12T630-463h46Zm-156 13 77 82q2 2 17 8 16 0 22.5-15t-4.5-26l-74-79 74-80q11-11 4.5-25.5T614-600q-4.79 0-8.89 2-4.11 2-8.1 6l-77 82v-65q0-10.83-7.12-17.92-7.12-7.08-18-7.08Q484-600 477-592.92q-7 7.08-7 17.92v190q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q506-360 513-367.08q7-7.08 7-17.92v-65Zm-177 27v38q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q379-360 386-367.08q7-7.08 7-17.92v-38h15q10.83 0 17.92-7.12 7.08-7.12 7.08-18Q433-459 425.92-466q-7.08-7-17.92-7h-15v-102q0-10.83-7.12-17.92-7.12-7.08-18-7.08Q357-600 350-592.92q-7 7.08-7 17.92v102h-63v-102q0-10.83-7.12-17.92-7.12-7.08-18-7.08Q244-600 237-592.92q-7 7.08-7 17.92v127q0 10.83 7.08 17.92Q244.17-423 255-423h88ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Msr_4kPlus;
