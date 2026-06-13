import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-ice-cream",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiIceCream {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Ice Cream"}],["path",{"d":"M16.54,5.94a4.59,4.59,0,0,0-9.08,0,3.07,3.07,0,0,0-0.76,5.85l3.92,9.25a1.5,1.5,0,0,0,2.76,0l3.92-9.26a3.06,3.06,0,0,0-0.76-5.84ZM12.46,20.65a0.50.5,0,0,1-0.92,0L7.89,12.03h8.22Zm3.64-9.62H7.9a2.06,2.06,0,1,1,0.01-4.120.50.5,0,0,0,0.5-0.48,3.6,3.6,0,0,1,7.18,0,0.510.51,0,0,0,0.510.48,2.06,2.06,0,0,1,0,4.12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiIceCream;
