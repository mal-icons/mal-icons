import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-star-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrStarHalf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19.65 9.04-4.84-0.42-1.89-4.45c-0.34-0.81-1.5-0.81-1.84 0L9.19 8.63l-4.830.41c-0.880.07-1.24 1.17-0.57 1.75l3.67 3.18-1.1 4.72c-0.20.860.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c0.760.46 1.69-0.22 1.49-1.08l-1.1-4.73 3.67-3.18c0.67-0.580.32-1.68-0.56-1.75zM12 15.4V6.1l1.71 4.04 4.380.38-3.32 2.88 1 4.28L12 15.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrStarHalf;
