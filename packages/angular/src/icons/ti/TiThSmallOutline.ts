import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-th-small-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiThSmallOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 16h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2zM6 9h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2zM6 2h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2zM13 16h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2zM13 9h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2zM13 2h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2zM20 16h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2zM20 9h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2zM20 2h-2c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm0 4h-2v-2h2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiThSmallOutline;
