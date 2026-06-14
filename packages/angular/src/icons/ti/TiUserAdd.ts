import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-user-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiUserAdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 14c1.38 0 2.63-0.56 3.54-1.460.9-0.9 1.46-2.15 1.46-3.53s-0.56-2.63-1.46-3.53c-0.9-0.9-2.15-1.46-3.54-1.46s-2.630.56-3.54 1.47c-0.90.9-1.46 2.15-1.46 3.54s0.56 2.63 1.46 3.54c0.910.91 2.15 1.47 3.54 1.47zM9 21c3.52 0 6-1 6-2 0-2-2.35-4-6-4-3.75 0-6 2-6 4 0 1 2.25 2 6 2zM21 12h-2v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1v2h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1h2v2c0 0.550.45 1 1 1s1-0.45 1-1v-2h2c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiUserAdd;
