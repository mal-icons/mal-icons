import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-woman",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWoman {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"4","r":"2"}],["path",{"d":"m16.45 14.63-2.52-6.32c-0.32-0.79-1.08-1.3-1.94-1.31-0.85 0-1.620.51-1.94 1.31l-2.52 6.32c-0.250.660.24 1.370.94 1.37H10v5c0 0.550.45 1 1 1h2c0.55 0 1-0.45 1-1v-5h1.53c0.7 0 1.19-0.710.92-1.37z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWoman;
