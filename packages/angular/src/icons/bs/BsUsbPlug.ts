import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-usb-plug",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsUsbPlug {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 0.5a0.50.5 0 0 1 0.5-0.5h4a0.50.5 0 0 1 0.50.5v4H6zM7 1v1h1V1zm2 0v1h1V1zM6 5a1 1 0 0 0-1 1v4.39c0 0.490.150.980.42 1.39l1.04 1.56c0.350.530.54 1.150.54 1.79 0 0.480.390.870.870.87h1.26c0.48 0 0.87-0.390.87-0.87 0-0.640.19-1.260.54-1.79l1.04-1.56A2.5 2.5 0 0 0 12 10.39V6a1 1 0 0 0-1-1zm0 1h5v4.39a1.5 1.5 0 0 1-0.250.83L9.71 12.78A4.2 4.2 0 0 0 9 15H8a4.2 4.2 0 0 0-0.71-2.22l-1.04-1.56A1.5 1.5 0 0 1 6 10.39z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsUsbPlug;
