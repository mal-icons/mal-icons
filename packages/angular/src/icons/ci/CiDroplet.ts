import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-droplet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiDroplet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12,21.94A7.27,7.27,0,0,1,7.66,20.5c-2.33-1.72-3.19-5.6-1.87-8.46l4.88-9.17A1.52,1.52,0,0,1,12,2.06h0a1.51,1.51,0,0,1,1.340.81L18.2,12.02c1.33,2.890.48,6.76-1.86,8.49A7.27,7.27,0,0,1,12,21.94ZM12,3.06a0.510.51,0,0,0-0.460.27L6.68,12.49c-1.1,2.4-0.38,5.78,1.57,7.21a6.4,6.4,0,0,0,7.5,0c1.94-1.43,2.67-4.82,1.55-7.24l-4.85-9.12A0.510.51,0,0,0,12,3.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiDroplet;
