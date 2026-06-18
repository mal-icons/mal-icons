import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-libretranslate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLibretranslate {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.78 0q-1.72 4.67-8.89 7.99l1.36 1.52q5.4-2.64 7.82-6 2.48 3.19 8.19 6.12L23.54 8.07q-6.1-2.93-8.42-6.240.12-0.180.48-1.25ZM9.55 7.99q-0.32 3.51-1.45 5.8-1.12 2.3-3.67 4.57l1.43 1.28q2.84-2.61 4.19-5.56 1.18 1.03 2.41 2.65l1.46-1.31q-1.15-1.46-3.23-3.250.55-2.030.76-3.98zm7.1 0q-0.17 4.15-1.42 6.39-1.24 2.24-3.73 3.89l1.41 1.3q3.57-2.61 4.71-5.82 1.73 3.46 4.87 5.87l1.41-1.34q-1.78-1.32-3.01-2.79-1.22-1.48-1.87-3.05-0.63-1.58-0.63-2.15l0.08-0.75q0.09-0.840.09-1.39zM0.11 8.8V24h9.44v-1.71H2.05V8.8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLibretranslate;
