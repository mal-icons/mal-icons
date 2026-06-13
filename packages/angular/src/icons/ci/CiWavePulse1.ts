import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-wave-pulse-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiWavePulse1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Wave Pulse 1"}],["path",{"d":"M8.97,18h0a1.45,1.45,0,0,1-1.26-0.97L5.87,12.88c-0.11-0.26-0.26-0.38-0.35-0.38H2.56a0.50.5,0,1,1,0-1H5.52a1.44,1.44,0,0,1,1.260.97l1.84,4.14c0.120.260.260.380.350.38h0c0.09,0,0.23-0.110.34-0.37L13.7,6.96A1.42,1.42,0,0,1,14.96,6h0a1.45,1.45,0,0,1,1.260.98l1.84,4.15c0.110.250.260.380.350.38h3.03a0.50.5,0,0,1,0,1H18.41a1.44,1.44,0,0,1-1.26-0.97L15.31,7.38c-0.12-0.26-0.26-0.38-0.35-0.38h0c-0.09,0-0.230.11-0.340.37l-4.38,9.68A1.44,1.44,0,0,1,8.97,18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiWavePulse1;
