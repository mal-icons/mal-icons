import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-locust",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLocust {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.43 6.350.730.73-1.9 1.920.50.5 2.52-2.520.730.73-2.52 2.52v2.89l-1.65 1.65-1.87-1.9v1.06l3.67 3.72h-2.72l-6.51-6.51 5.68-2.61h1.19Zm-2.74 11.68h-3.92l-7.8-7.8-2.04 7.8H2.01L4.95 6.78l0.16-0.08 1.52-0.74ZM2.14 15.85l-0.47 1.8H0v-0.82Zm4.3-1.98 2.45-1.13 3.61 3.61-3.01 1.3H5.45Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLocust;
