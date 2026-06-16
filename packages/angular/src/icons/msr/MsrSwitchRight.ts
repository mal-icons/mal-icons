import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-switch-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSwitchRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m615-333 147-147-147-147v294Zm-4 82q-14 14-32.5 6.5T560-272v-416q0-20 18.5-27.5T611-709l208 208q5 5 7 10t2 11q0 6-2 11t-7 10L611-251Zm-262 0L141-459q-5-5-7-10t-2-11q0-6 2-11t7-10l208-208q14-14 32.5-6.5T400-688v416q0 20-18.5 27.5T349-251Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSwitchRight;
