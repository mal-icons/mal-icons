import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-north-star-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcNorthStar16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.50.75a0.750.75 0 0 0-1.5 0v5.19L4.39 3.33a0.750.75 0 1 0-1.06 1.06L5.94 7H0.75a0.750.75 0 0 0 0 1.5h5.19l-2.61 2.61a0.750.75 0 1 0 1.06 1.06L7 9.56v5.19a0.750.75 0 0 0 1.5 0V9.56l2.61 2.61a0.750.75 0 1 0 1.06-1.06L9.56 8.5h5.19a0.750.75 0 0 0 0-1.5H9.56l2.61-2.61a0.750.75 0 0 0-1.06-1.06L8.5 5.94V0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcNorthStar16;
