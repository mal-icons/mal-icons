import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-user-delete",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiUserDelete {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 14h-6c-0.55 0-1-0.45-1-1s0.45-1 1-1h6c0.55 0 1 0.45 1 1s-0.45 1-1 1zM14 9c0 1.38-0.56 2.63-1.46 3.54-0.90.91-2.15 1.47-3.54 1.47s-2.63-0.56-3.54-1.46c-0.9-0.9-1.46-2.15-1.46-3.53s0.56-2.63 1.46-3.53c0.91-0.9 2.15-1.46 3.54-1.46s2.630.56 3.54 1.47c0.90.9 1.46 2.15 1.46 3.54zM9 15c-3.75 0-6 2-6 4 0 1 2.25 2 6 2 3.52 0 6-1 6-2 0-2-2.35-4-6-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiUserDelete;
