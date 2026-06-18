import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-passbolt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPassbolt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.39 9.74a2.69 2.69 0 0 1 1.15-0.27h0c1.39 0 2.54 1.15 2.48 2.53a2.51 2.51 0 0 1-2.51 2.52c-0.44 0-0.85-0.11-1.2-0.3A2.52 2.52 0 0 1 0 11.99c0-0.990.57-1.84 1.39-2.25zm12.14-8.56 9.77 9.19h0c0.930.910.93 2.39 0 3.27l-9.74 9.19c-0.870.8-2.210.8-3.06 0l-6.17-5.79c1.64-0.58 2.89-1.95 3.36-3.65h3.68v1.78c0 0.410.330.770.760.77h2.1c0.41 0 0.76-0.330.76-0.77v-1.78h0.96c0.41 0 0.76-0.330.76-0.77v-1.26a0.760.76 0 0 0-0.76-0.77H7.67a5.44 5.44 0 0 0-3.33-3.62l6.14-5.79c0.87-0.79 2.21-0.79 3.06 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPassbolt;
