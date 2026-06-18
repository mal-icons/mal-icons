import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-google",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlGoogle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.28 10.36h-8.33v3.45h4.79c-0.45 2.19-2.31 3.45-4.79 3.45a5.27 5.27 0 0 1-5.28-5.28 5.27 5.27 0 0 1 5.28-5.28c1.26 0 2.40.45 3.29 1.18l2.6-2.6c-1.58-1.38-3.61-2.23-5.89-2.23a8.91 8.91 0 0 0-8.93 8.93 8.91 8.91 0 0 0 8.93 8.93c4.47 0 8.53-3.25 8.53-8.93 0-0.53-0.08-1.1-0.2-1.62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlGoogle;
