import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-home-fill-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcHomeFill16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.910.38a1.75 1.75 0 0 1 2.19 0l5.25 4.2c0.420.330.660.840.66 1.37v7.02a1.75 1.75 0 0 1-1.75 1.75h-2.5a0.750.75 0 0 1-0.75-0.75V8.72H6v5.25a0.750.75 0 0 1-0.750.75h-2.5A1.75 1.75 0 0 1 1 12.97V5.95c0-0.530.24-1.030.66-1.37l5.25-4.2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcHomeFill16;
