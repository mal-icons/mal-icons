import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-dining",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDining {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M318-193h50v-278q29-4 49.5-26.5t20.5-51.82V-703h-47v120h-22v-120h-46v120h-29v-120h-46v153.68q0 29.32 20 51.82t50 26.5v278Zm253 0h50v-266q35-14 55-49.9 20-35.9 20-84.1 0-57-27.7-95t-69.5-38Q557-726 530-688t-27 95q0 51 18 86t50 48v266ZM80-80v-800h800v800H80Zm60-60h680v-680H140v680Zm0 0v-680 680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDining;
