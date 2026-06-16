import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-wrong-location",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWrongLocation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m20.42 4.5 1.38-1.38a11 0 1 0-1.41-1.41L19 3.08 17.62 1.7a11 0 1 0-1.41 1.41l1.38 1.38-1.38 1.38a11 0 1 0 1.41 1.41L19 5.92l1.38 1.38a11 0 1 0 1.41-1.41L20.42 4.5z"}],["path",{"d":"M19.67 8 19 7.33l-0.590.59c-0.70.7-1.840.88-2.650.3a2.01 2.01 0 0 1-0.26-3.05l0.67-0.67-0.67-0.67c-0.36-0.36-0.54-0.81-0.57-1.28C14.01 2.19 13.02 2 12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.230.380.330.950.33 1.33 0C17.55 17.12 20 13.38 20 10.2c0-0.76-0.1-1.47-0.26-2.14-0.02-0.02-0.05-0.04-0.07-0.06zM12 12c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWrongLocation;
