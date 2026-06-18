import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-minimax",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMinimax {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.43 3.92a0.860.86 0 1 0-1.72 0v14.24a2 2 0 0 1-4 0V9.02a0.860.86 0 1 0-1.72 0v3.87a2 2 0 0 1-4 0V11.49a0.570.57 0 0 1 1.14 0v1.4a0.860.86 0 0 0 1.72 0V9.02a2 2 0 0 1 4 0v9.13a0.860.86 0 0 0 1.72 0V3.92a2 2 0 1 1 4 0v11.79a0.570.57 0 1 1-1.14 0zm10.57 3.11a2 2 0 0 0-2 2v7.63a0.860.86 0 0 1-1.72 0V3.92a2 2 0 0 0-4 0v16.16a0.860.86 0 0 1-1.72 0V18.08a0.570.57 0 1 0-1.14 0v2a2 2 0 0 0 4 0V3.92a0.860.86 0 0 1 1.72 0v12.73a2 2 0 0 0 4 0V9.02a0.860.86 0 1 1 1.72 0v6.69a0.570.57 0 0 0 1.14 0V9.02a2 2 0 0 0-2-2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMinimax;
