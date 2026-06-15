import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-magnifier-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlMagnifierAdd {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1014.62 969.04L731.59 684.27c60.61-72.4 97.09-165.76 97.09-267.71C828.68 186.5 643.180 413.130S-3.41 186.5-3.41 416.54 183.08 833.09 413.13 833.09c105.01 0 200.67-38.96 273.7-103.07l282.53 284.3c12.5 12.5 32.77 12.5 45.25 0 12.51-12.51 12.51-32.770.02-45.28zM412.59 768c-193.55 0-352-158.45-352-352s158.45-352 352-352 352 158.45 352 352-158.45 352-352 352zm160-384h-128v-128c0-17.66-14.34-32-32-32s-32 14.34-32 32v128h-128c-17.66 0-32 14.34-32 32s14.34 32 32 32h128v128c0 17.66 14.34 32 32 32s32-14.34 32-32v-128h128c17.66 0 32-14.34 32-32s-14.32-32-32-32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlMagnifierAdd;
