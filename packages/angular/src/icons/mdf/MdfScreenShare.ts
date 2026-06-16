import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-screen-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfScreenShare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 18c1.1 0 1.99-0.9 1.99-2L22 6a2 2 0 0 0-2-2H4c-1.11 0-2 0.89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.610.85-6 2.720.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfScreenShare;
