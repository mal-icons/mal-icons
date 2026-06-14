import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-th-large-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiThLargeOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 2h-5c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-5c0-1.1-0.9-2-2-2zm0 7h-5v-5h5v5zM20 2h-5c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-5c0-1.1-0.9-2-2-2zm0 7h-5v-5h5v5zM9 13h-5c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-5c0-1.1-0.9-2-2-2zm0 7h-5v-5h5v5zM20 13h-5c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-5c0-1.1-0.9-2-2-2zm0 7h-5v-5h5v5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiThLargeOutline;
