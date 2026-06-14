import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-media-fast-forward",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiMediaFastForward {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.05 6.91c-0.32-0.31-0.76-0.51-1.25-0.51-0.99 0-1.80.81-1.8 1.8v9c0 0.990.81 1.8 1.8 1.80.49 0 0.93-0.19 1.25-0.51 2.38-2.31 5.95-5.79 5.95-5.79s-3.57-3.47-5.95-5.79zM6.05 6.91c-0.32-0.31-0.76-0.51-1.25-0.51-0.99 0-1.80.81-1.8 1.8v9c0 0.990.81 1.8 1.8 1.80.49 0 0.93-0.19 1.25-0.51 2.38-2.31 5.95-5.79 5.95-5.79s-3.57-3.47-5.95-5.79z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiMediaFastForward;
