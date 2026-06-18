import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-directions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxDirections {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.78 13.88-2-2.5A1 1 0 0 0 19 11h-6V9h6c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2H5a1 1 0 0 0-0.780.38l-2 2.5a1 1 0 0 0 0 1.25l2 2.5A1 1 0 0 0 5 9h6v2H5c-1.1 0-2 0.9-2 2v3c0 1.10.9 2 2 2h6v4h2v-4h6a1 1 0 0 0 0.78-0.37l2-2.5a1 1 0 0 0 0-1.25zM4.28 5.5 5.48 4H19l0 3H5.48L4.28 5.5zM18.52 16H5v-3h13.52l1.2 1.5-1.2 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxDirections;
