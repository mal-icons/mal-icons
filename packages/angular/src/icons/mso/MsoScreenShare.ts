import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-screen-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoScreenShare {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M333-387h60v-90q0-23.8 16.1-39.9Q425.2-533 449-533h81v70l100-100-100-100v70h-81q-48.33 0-82.17 33.83Q333-525.33 333-477v90ZM70-120q-12.75 0-21.37-8.68Q40-137.35 40-150.18 40-163 48.63-171.5T70-180h820q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T890-120H70Zm70-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h680q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H140v480Zm0 0v-480 480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoScreenShare;
