import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-edit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiEdit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.56 5.32l-2.88-2.88c-0.29-0.29-0.68-0.44-1.06-0.44-0.38 0-0.770.15-1.060.44l-3.56 3.56h-9c-0.55 0-1 0.45-1 1v13c0 0.550.45 1 1 1h13c0.55 0 1-0.45 1-1v-9l3.56-3.56c0.29-0.290.44-0.680.44-1.06s-0.15-0.77-0.44-1.06zm-10.06 9.35l-2.17-2.17 6.29-6.29 2.17 2.17-6.29 6.29zm-2.56-1.34l1.76 1.73-1.69-0.06-0.06-1.67zm7.06 5.67h-11v-11h6l-3.18 3.18c-0.290.29-0.480.81-0.63 1.29-0.160.5-0.19 1.06-0.19 1.47v3.06h3.06c0.41 0 1.11-0.1 1.57-0.290.46-0.190.9-0.35 1.19-0.64l3.18-3.07v6zm2.5-11.33l-2.17-2.17 1.29-1.29 2.17 2.17-1.29 1.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiEdit;
