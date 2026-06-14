import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-waves",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiWaves {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 19c-1.34 0-2.68-0.51-3.71-1.53-1.27-1.26-3.32-1.26-4.59 0-0.390.39-1.020.39-1.41 0s-0.39-1.02 0-1.41c2.04-2.04 5.37-2.04 7.41 0 1.26 1.26 3.32 1.26 4.59 0 0.39-0.39 1.02-0.39 1.41 0s0.39 1.02 0 1.41c-1.02 1.02-2.36 1.53-3.71 1.53zM15 15c-1.34 0-2.68-0.51-3.71-1.53-1.27-1.26-3.32-1.26-4.59 0-0.390.39-1.020.39-1.41 0s-0.39-1.02 0-1.41c2.04-2.04 5.37-2.04 7.41 0 1.26 1.26 3.32 1.26 4.59 0 0.39-0.39 1.02-0.39 1.41 0s0.39 1.02 0 1.41c-1.02 1.02-2.36 1.53-3.71 1.53zM15 11c-1.34 0-2.68-0.51-3.71-1.53-1.27-1.26-3.32-1.26-4.59 0-0.390.39-1.020.39-1.41 0s-0.39-1.02 0-1.41c2.04-2.04 5.37-2.04 7.41 0 1.26 1.26 3.32 1.26 4.59 0 0.39-0.39 1.02-0.39 1.41 0s0.39 1.02 0 1.41c-1.02 1.02-2.36 1.53-3.71 1.53z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiWaves;
