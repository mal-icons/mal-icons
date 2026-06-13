import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-ice-cream-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoIceCreamSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M359.72,112.37a104,104,0,0,0-207.44,0A80.12,80.12,0,0,0,80,192c0,39.36,26.37,71.23,62.38,78.46a2,2,0,0,1,1.62,2v38.83c0,21.84,17.2,40.22,39,40.74a40,40,0,0,0,41-40V264.19a2,2,0,0,1,2.72-1.86A83.47,83.47,0,0,0,256,268a63.18,63.18,0,0,0,42.24-16.59,2,2,0,0,1,2.74,0A74.63,74.63,0,0,0,352,272a80,80,0,0,0,7.72-159.63Z"}],["path",{"d":"M256,300v12a72.1,72.1,0,0,1-58.21,70.64L256,496l92.06-192.08a105.29,105.29,0,0,1-49.18-14.36A93.75,93.75,0,0,1,256,300Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoIceCreamSharp;
