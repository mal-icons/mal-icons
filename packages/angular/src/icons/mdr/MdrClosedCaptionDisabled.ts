import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-closed-caption-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrClosedCaptionDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.83 4H19c1.1 0 2 0.9 2 2v12c0 0.05-0.010.1-0.020.16l-3.38-3.38c0.24-0.190.4-0.460.4-0.78v-0.5c0-0.28-0.22-0.5-0.5-0.5H17c-0.28 0-0.50.22-0.50.5h-0.17l-1.83-1.83V10.5h2c0 0.280.220.50.50.5h0.5c0.28 0 0.5-0.220.5-0.5V10c0-0.55-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1v0.17L6.83 4zm13.66 17.9a11 0 0 1-1.41 0l-1.9-1.9H5a2 2 0 0 1-2-2V6c0-0.050.02-0.10.02-0.15l-0.92-0.92a11 0 1 1 1.41-1.41l16.97 16.97c0.40.390.4 1.020.01 1.41zM11 13.83l-0.83-0.83H10c-0.28 0-0.50.22-0.50.5h-2v-3h0.17L6.4 9.22c-0.240.19-0.40.46-0.40.78v4c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-0.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrClosedCaptionDisabled;
