import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-card-travel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCardTravel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 6h-3V4c0-1.11-0.89-2-2-2H9c-1.11 0-2 0.89-2 2v2H4c-1.11 0-2 0.89-2 2v11c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V8c0-1.11-0.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V9c0-0.550.45-1 1-1h2v1c0 0.550.45 1 1 1s1-0.45 1-1V8h6v1c0 0.550.45 1 1 1s1-0.45 1-1V8h2c0.55 0 1 0.45 1 1v5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCardTravel;
