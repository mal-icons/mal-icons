import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-spectrum",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrSpectrum {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M22.13,23.4 L13.13,23.4 C12.33,23.4 11.62,22.78 11.62,21.98 C11.64,17.02 10.74,15.4 8.87,13.76 C6.9,12.04 3.46,11.7 1.49,11.66 C0.67,11.65 0.02,10.98 0.02,10.16 L0,1.53 C0,0.73 0.63,0.06 1.43,0.02 C4.38,-0.11 11.06,0.21 16.52,4.98 C20.95,8.85 23.35,14.52 23.64,21.84 C23.67,22.69 22.98,23.4 22.13,23.4"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrSpectrum;
