import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-train-front-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTrainFrontFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.620.52C8.650.02 7.350.02 5.380.52c-0.920.23-1.980.77-2.78 1.22C1.57 2.32 1 3.43 1 4.58V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V4.58c0-1.15-0.56-2.26-1.6-2.85-0.8-0.45-1.85-0.99-2.78-1.22ZM6.5 2h3a0.50.5 0 0 1 0 1h-3a0.50.5 0 0 1 0-1m-2 2h7A1.5 1.5 0 0 1 13 5.5v2A1.5 1.5 0 0 1 11.5 9h-7A1.5 1.5 0 0 1 3 7.5v-2A1.5 1.5 0 0 1 4.5 4m0.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2M4 5.5a0.50.5 0 0 1 0.5-0.5h3v3h-3a0.50.5 0 0 1-0.5-0.5zM8.5 8V5h3a0.50.5 0 0 1 0.50.5v2a0.50.5 0 0 1-0.50.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTrainFrontFill;
