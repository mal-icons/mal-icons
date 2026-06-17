import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-badge-sd-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBadgeSdFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.34 5.97h-0.84v4.06h0.84c1.12 0 1.62-0.67 1.62-2.02 0-1.35-0.51-2.04-1.62-2.04"}],["path",{"d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.08 7.11c1.52 0 2.38-0.76 2.38-1.88 0-1.01-0.64-1.47-1.61-1.69l-0.93-0.22c-0.53-0.11-0.82-0.35-0.82-0.71 0-0.470.39-0.8 1.05-0.80.64 0 1.030.33 1.10.76h1.13c-0.06-0.92-0.85-1.69-2.22-1.69-1.32 0-2.240.72-2.24 1.82 0 0.910.59 1.45 1.52 1.66l0.930.22c0.620.140.920.360.920.78 0 0.49-0.390.83-1.130.83-0.71 0-1.15-0.34-1.23-0.81H2.76c0.050.950.79 1.75 2.32 1.75ZM8.31 11h2.19c1.81 0 2.68-1.11 2.68-3.01 0-1.89-0.86-2.98-2.68-2.98H8.31z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBadgeSdFill;
