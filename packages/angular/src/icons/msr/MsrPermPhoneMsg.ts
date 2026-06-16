import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-perm-phone-msg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPermPhoneMsg {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M521-512q-8 7-16.5 3.25T496-523v-281.65Q496-820 508-829.5t28.08-9.5h264.84q16.08 0 27.58 9.5t11.5 24.62V-627q0 17-11.21 28.5Q817.58-587 801-587H600l-79 75Zm35-267v132-132Zm0 132h224v-132H556v132Zm239 527q-122 0-242.5-60T336-336q-96-96-156-216.5T120-795q0-19.29 12.86-32.14T165-840h140q13.61 0 24.31 9.5Q340-821 343-805l27 126q2 14-0.5 25.5T359-634L259-533q56 93 125.5 162T542-254l95-98q10-11 23-15.5t26-1.5l119 26q15.31 3.38 25.16 15.19Q840-316 840-300v135q0 19.29-12.86 32.14T795-120ZM229-588l81-82-23-110H180q0 39 12 85.5T229-588Zm551 408v-107l-103-21-79 83q41 19 89 31t93 14Zm-182-45ZM229-588Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPermPhoneMsg;
