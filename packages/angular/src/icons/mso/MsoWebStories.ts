import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-web-stories",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWebStories {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M700-140v-680q28 0 44 14.5t16 45.5v560q0 31-16 45.5T700-140ZM140-80q-24.75 0-42.37-17.62T80-140v-680q0-24.75 17.63-42.37T140-880h400q24.75 0 42.38 17.63T600-820v680q0 24.75-17.62 42.38T540-80H140Zm720-121v-557q20 0 30 8.5t10 31.5v477q0 23-10 31.5t-30 8.5Zm-720 61h400v-680H140v680Zm0-680v680-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWebStories;
