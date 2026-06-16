import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-call-quality",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCallQuality {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M755-80q-122 0-242.5-60T296-296q-96-96-156-216.5T80-755q0-19.29 12.86-32.14T125-800h140q13.61 0 24.31 9.5Q300-781 303-765l27 126q2 14-0.5 25.5T319-594L219-493q56 93 125.5 162T502-214l95-98q10-11 23-15.5t26-1.5l119 26q15.31 3.38 25.16 15.19Q800-276 800-260v135q0 19.29-12.86 32.14T755-80ZM189-548l81-82-23-110H140q0 39 12 85.5T189-548Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM189-548Zm369 363Zm131.89-315Q611-500 555.5-555.61t-55.5-134.5Q500-769 555.61-824.5t134.5-55.5Q769-880 824.5-824.39t55.5 134.5Q880-611 824.39-555.5t-134.5 55.5Zm0.11-70q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCallQuality;
