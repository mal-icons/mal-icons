import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-video-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiVideoOn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Video On"}],["path",{"d":"M21.05,5.05a1.43,1.43,0,0,0-1.480.08L16.25,7.37V6.56a2.5,2.5,0,0,0-2.5-2.5H4.69a2.5,2.5,0,0,0-2.5,2.5V17.44a2.5,2.5,0,0,0,2.5,2.5h9.06a2.5,2.5,0,0,0,2.5-2.5v-0.81l3.32,2.24a1.5,1.5,0,0,0,0.810.24,1.41,1.41,0,0,0,1.43-1.43V6.32A1.44,1.44,0,0,0,21.05,5.05Zm-5.8,12.39a1.5,1.5,0,0,1-1.5,1.5H4.69a1.5,1.5,0,0,1-1.5-1.5V6.56a1.5,1.5,0,0,1,1.5-1.5h9.06a1.5,1.5,0,0,1,1.5,1.5Zm5.560.24a0.420.42,0,0,1-0.230.380.430.43,0,0,1-0.45-0.02l-3.88-2.62V8.58l3.88-2.62a0.430.43,0,0,1,0.45-0.020.420.42,0,0,1,0.230.38Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiVideoOn;
