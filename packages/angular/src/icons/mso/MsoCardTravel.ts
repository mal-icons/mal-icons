import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-card-travel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCardTravel {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-277v97h680v-97H140Zm153-443v-100q0-24 18-42t42-18h253q24 0 42 18t18 42v100h154q24 0 42 18t18 42v480q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h153ZM140-385h680v-275H666v75h-60v-75H353v75h-60v-75H140v275Zm213-335h253v-100H353v100ZM140-180v-480 75-75 75-75 480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCardTravel;
