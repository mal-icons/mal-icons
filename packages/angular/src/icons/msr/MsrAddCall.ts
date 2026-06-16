import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-add-call",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAddCall {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M678.83-526Q666-526 657.5-534.62T649-556v-98h-98q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T551-714h98v-98q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T709-812v98h98q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T807-654h-98v98q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM795-120q-122 0-242.5-60T336-336q-96-96-156-216.5T120-795q0-19.29 12.86-32.14T165-840h140q13.61 0 24.31 9.5Q340-821 343-805l27 126q2 14-0.5 25.5T359-634L259-533q56 93 125.5 162T542-254l95-98q10-11 23-15.5t26-1.5l119 26q15.31 3.38 25.16 15.19Q840-316 840-300v135q0 19.29-12.86 32.14T795-120ZM229-588l81-82-23-110H180q0 39 12 85.5T229-588Zm551 408v-107l-103-21-79 83q41 19 89 31t93 14Zm-182-45ZM229-588Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAddCall;
