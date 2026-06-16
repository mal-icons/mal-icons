import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-batch-prediction",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdBatchPrediction {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 8H7c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V10c0-1.1-0.9-2-2-2zm-4 12.5h-2V19h2v1.5zm0-2.5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 2-2.5 3.5-2.5 5zm5-11.5H6C6 5.67 6.67 5 7.5 5h9c0.83 0 1.50.67 1.5 1.5zm-1-3H7C7 2.67 7.67 2 8.5 2h7c0.83 0 1.50.67 1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdBatchPrediction;
