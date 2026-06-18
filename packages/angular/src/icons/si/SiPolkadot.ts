import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-polkadot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPolkadot {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12,0c2.39,0,4.33,1.13,4.33,2.52S14.39,5.03,12,5.03,7.67,3.91,7.67,2.52,9.61,0,12,0Zm0,18.97c2.39,0,4.33,1.13,4.33,2.52S14.39,24,12,24s-4.33-1.13-4.33-2.52S9.61,18.97,12,18.97ZM1.61,6C2.8,3.93,4.75,2.82,5.95,3.51s1.21,2.940.02,5.01S2.83,11.7,1.62,11.010.41,8.07,1.61,6Zm16.43,9.48c1.2-2.07,3.14-3.18,4.34-2.49s1.21,2.940.02,5.01-3.14,3.19-4.34,2.49S16.84,17.55,18.03,15.48ZM1.62,12.99c1.21-0.7,3.150.42,4.35,2.49s1.19,4.31-0.02,5.01S2.8,20.07,1.61,18,0.42,13.69,1.62,12.99ZM18.05,3.51c1.2-0.69,3.150.42,4.34,2.49s1.19,4.31-0.02,5.01-3.15-0.42-4.34-2.49S16.85,4.21,18.05,3.51Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPolkadot;
