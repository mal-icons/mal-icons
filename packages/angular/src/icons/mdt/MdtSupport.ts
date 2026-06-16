import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-support",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSupport {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.3 7.32 9.13 4.54a7.98 7.98 0 0 0-4.59 4.59l2.78 1.15c0.51-1.38 1.6-2.46 2.98-2.96zm-2.98 6.4-2.78 1.15c0.81 2.1 2.48 3.78 4.59 4.59l1.17-2.78a4.98 4.98 0 0 1-2.98-2.96zm9.35-3.45 2.78-1.15a8.01 8.01 0 0 0-4.58-4.58l-1.15 2.78c1.370.51 2.45 1.58 2.95 2.95zm0.01 3.44a5 5 0 0 1-2.95 2.97l1.15 2.78c2.1-0.81 3.77-2.48 4.58-4.58l-2.78-1.17z","opacity":".3"}],["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.87 2.54c2.10.81 3.77 2.48 4.58 4.58l-2.78 1.15a4.98 4.98 0 0 0-2.95-2.94l1.15-2.79zm-5.74 0 1.17 2.78a5 5 0 0 0-2.98 2.97L4.54 9.13a7.98 7.98 0 0 1 4.59-4.59zm0 14.92a8.01 8.01 0 0 1-4.59-4.59l2.78-1.15a4.97 4.97 0 0 0 2.97 2.96l-1.16 2.78zM9 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3zm5.88 7.46-1.15-2.78a4.98 4.98 0 0 0 2.95-2.97l2.78 1.17a8.01 8.01 0 0 1-4.58 4.58z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSupport;
