import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-deepnote",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDeepnote {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.22 11.51l0.110.02c-0.04-0.01-0.07-0.01-0.11-0.02zm4.47 8.07c0.64-2.82-2.17-4.8-6.95-4.81L0.71 24h9.59c0.13-0.020.26-0.060.38-0.08 2.26-1.06 3.6-2.5 4.01-4.34zM10.3 24h0.2l0.02-0.01c-0.070-0.150.01-0.220.01zM24 11.32C24 3.15 18.71-0.6 8.130.08L0 11.32h7.57c3.32 0 8.460.72 8.46 6.15 0 3.62-1.91 5.8-5.73 6.530.100.19-0.010.29-0.01l-0.010-0.080.01h0.91l0.25-0.08C19.89 23.27 24 19.07 24 11.32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDeepnote;
