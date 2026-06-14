import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-th-list-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiThListOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 18c0.55 0 1 0.45 1 1s-0.45 1-1 1h-7c-0.55 0-1-0.45-1-1s0.45-1 1-1h7m0-2h-7c-1.65 0-3 1.35-3 3s1.35 3 3 3h7c1.65 0 3-1.35 3-3s-1.35-3-3-3zM19 11c0.55 0 1 0.45 1 1s-0.45 1-1 1h-7c-0.55 0-1-0.45-1-1s0.45-1 1-1h7m0-2h-7c-1.65 0-3 1.35-3 3s1.35 3 3 3h7c1.65 0 3-1.35 3-3s-1.35-3-3-3zM19 4c0.55 0 1 0.45 1 1s-0.45 1-1 1h-7c-0.55 0-1-0.45-1-1s0.45-1 1-1h7m0-2h-7c-1.65 0-3 1.35-3 3s1.35 3 3 3h7c1.65 0 3-1.35 3-3s-1.35-3-3-3zM6 16h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2zM6 9h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2zM6 2h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiThListOutline;
