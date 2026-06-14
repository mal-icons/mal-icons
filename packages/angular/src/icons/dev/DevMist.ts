import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-mist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMist {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-mist-4-a)"}],["path",{"fill":"currentColor","d":"M300 600a300 300 0 1 0 0-600 300 300 0 0 0 0 600"}],["path",{"fill":"currentColor","d":"M389.2 487.3c-173.6-14-88.2-23.8-338.3-75.3 68.9 53.2 180.8 184.8 338.3 75.3"}],["path",{"fill":"currentColor","d":"M568 276.7C403.3 244.1 241.8 131.7 72.3 168c-2.40.8-5.3 1.2-4 2.4 108.3 19 335.4 181.2 499.7 106.3"}],["path",{"fill":"currentColor","d":"M522.9 430.5c-86.6-18.5-276.3-163-489.3-105C220.1 368 388 472 523 430.4"}],["path",{"fill":"currentColor","d":"M551.5 191.7C455.2 121 334.5-7.2 224 110.8c134.5 16.5 152.2 38.7 327.4 81"}],["path",{"fill":"currentColor","d":"M49 411.2c199.30.4 313.2-151.8 519-134.5-164.3 84.2-365.2 243.2-519 134.5"}],["path",{"fill":"currentColor","d":"M551 191.7C350.2 175.7 245.5 338 32 326.2c81-36.6 319.7-252 519-134.5"}],["path",{"fill":"currentColor","d":"M403.7 85.8c-115.2-4-232.4 98.3-336.3 85 75-45.5 213.9-160.3 336.3-85"}],["path",{"fill":"currentColor","d":"M197.1 515.5c119.6-0.4 219.9-105.5 328.2-85-88.6 50.8-196.5 155.5-328.2 85"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMist;
