import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-webcam-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsWebcamFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.64 11.09a0.50.5 0 0 1 0.36-0.15h2a0.50.5 0 0 1 0.360.15c0.180.180.390.350.60.5a7 7 0 0 0 0.750.46l0.010.01h0A0.50.5 0 0 1 10.5 13h-5a0.50.5 0 0 1-0.22-0.95l000.01-0.01a4 4 0 0 0 0.21-0.12 8 8 0 0 0 0.54-0.34c0.21-0.150.43-0.320.6-0.5M7 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0"}],["path",{"d":"M2 3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm6 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12.5 7a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsWebcamFill;
