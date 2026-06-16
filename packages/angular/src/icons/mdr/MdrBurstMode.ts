import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-burst-mode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBurstMode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 5c0.55 0 1 0.45 1 1v12c0 0.55-0.45 1-1 1s-1-0.45-1-1V6c0-0.550.45-1 1-1zm4 0c0.55 0 1 0.45 1 1v12c0 0.55-0.45 1-1 1s-1-0.45-1-1V6c0-0.550.45-1 1-1zm16 0H10c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1zM11.64 16.19l1.47-1.86c0.2-0.250.57-0.250.78-0.01l1.4 1.68 2.1-2.71c0.2-0.260.59-0.260.79 0l2.21 2.9c0.250.330.020.8-0.40.8h-7.96a0.490.49 0 0 1-0.39-0.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBurstMode;
