import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-auto-awesome-motion",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAutoAwesomeMotion {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M380-80q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h440q24 0 42 18t18 42v440q0 24-18 42t-42 18H380Zm0-60h440v-440H380v440Zm-180-46v-514q0-24 18-42t42-18h514v60H260v514h-60ZM80-306v-514q0-24 18-42t42-18h514v60H140v514H80Zm300 166v-440 440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAutoAwesomeMotion;
