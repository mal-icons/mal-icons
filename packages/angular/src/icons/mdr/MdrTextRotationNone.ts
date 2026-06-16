import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-text-rotation-none",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTextRotationNone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m20.65 17.65-1.79-1.79a0.50.5 0 0 0-0.860.35V17H6c-0.55 0-1 0.45-1 1s0.45 1 1 1h12v0.79c0 0.450.540.670.850.35l1.79-1.79c0.2-0.190.2-0.510.01-0.7zM9.5 11.8h5l0.66 1.6c0.150.360.50.60.890.60.69 0 1.15-0.710.88-1.34l-3.88-8.97C12.87 3.27 12.46 3 12 3c-0.46 0-0.870.27-1.050.69l-3.88 8.97c-0.270.630.2 1.340.89 1.340.39 0 0.74-0.240.89-0.6l0.65-1.6zM12 4.98 13.87 10h-3.74L12 4.98z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTextRotationNone;
