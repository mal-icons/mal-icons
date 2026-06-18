import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-octagon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhOctagon {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M227.31,80.24,175.76,28.69A15.86,15.86,0,0,0,164.45,24H91.55a15.86,15.86,0,0,0-11.31,4.69L28.69,80.24A15.86,15.86,0,0,0,24,91.55v72.9a15.86,15.86,0,0,0,4.69,11.31l51.55,51.55A15.86,15.86,0,0,0,91.55,232h72.9a15.86,15.86,0,0,0,11.31-4.69l51.55-51.55A15.86,15.86,0,0,0,232,164.45V91.55A15.86,15.86,0,0,0,227.31,80.24ZM216,164.45,164.45,216H91.55L40,164.45V91.55L91.55,40h72.9L216,91.55Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhOctagon;
