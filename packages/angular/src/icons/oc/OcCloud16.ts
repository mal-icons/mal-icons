import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-cloud-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCloud16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 7.25A5.23 5.23 0 0 1 7.25 2a5.22 5.22 0 0 1 4.77 3.03A4.47 4.47 0 0 1 16 9.5c0 2.51-1.99 4.5-4.5 4.5h-8A3.47 3.47 0 0 1 0 10.5c0-1.410.81-2.61 2-3.17Zm1.540.48a0.750.75 0 0 1-0.560.83c-0.860.22-1.480.99-1.48 1.94 0 1.120.88 2 2 2h8c1.68 0 3-1.32 3-3s-1.32-3-3-3a0.750.75 0 0 1-0.71-0.5A3.72 3.72 0 0 0 7.25 3.5C5.16 3.5 3.5 5.16 3.5 7.25c00.150.010.290.040.44l00.0400.01Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCloud16;
