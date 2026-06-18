import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-intersect",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxIntersect {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 16h3v3c0 1.10.9 2 2 2h9c1.1 0 2-0.9 2-2v-9c0-1.1-0.9-2-2-2h-3V5c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v9c0 1.10.9 2 2 2zm9-2L14 10h0v4zM19 10l0 9H10v-3h4c1.1 0 2-0.9 2-2v-4h3zM5 5h9v3h-4c-1.1 0-2 0.9-2 2v4H5V5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxIntersect;
