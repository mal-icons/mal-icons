import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-happy-beaming",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsHappyBeaming {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zM8 9c2.2 0 3 1.79 3 3H9c-0.01-0.45-0.19-1-1-1s-0.990.55-1 1.01L5 12c0-1.210.8-3 3-3zm4 9c-4 0-5-4-5-4h10s-1 4-5 4zm5-6c-0.01-0.45-0.19-1-1-1s-0.990.55-1 1.01L13 12c0-1.210.8-3 3-3s3 1.79 3 3h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsHappyBeaming;
