import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-go-lang",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlGoLang {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.79 10.17a0.180.18 0 0 0-0.11 0l-0.20.27H7a0.150.15 0 0 0 0.1-0.06l0.17-0.26v-0.05zm-1.470.89a0.140.14 0 0 0-0.11 0l-0.20.26v0.05h4.6a0.090.09 0 0 0 0.09-0.06l0.08-0.23v-0.06zM4.6 12a0.130.13 0 0 0-0.10.06l-0.130.24v0.06h2.15a0.080.08 0 0 0 0.07-0.07v-0.23s0-0.07-0.06-0.07zm15.99-3.07a3.62 3.62 0 0 0-2.78-0.5 4.09 4.09 0 0 0-2.72 1.63 4 4 0 0 0-0.67 1.26h-3.14a0.250.25 0 0 0-0.240.16c-0.140.25-0.370.76-0.5 1.06s0 0.290.180.29h1.88a2.8 2.8 0 0 1-0.260.36 1.81 1.81 0 0 1-1.650.65 1.53 1.53 0 0 1-1.32-1.53 2.07 2.07 0 0 1 1-1.85 1.71 1.71 0 0 1 1.77-0.15 1.36 1.36 0 0 1 0.450.37c0.130.150.140.140.290.1l1.63-0.43c0.12 0 0.16-0.080.1-0.16a3 3 0 0 0-1.13-1.38 3.35 3.35 0 0 0-2.58-0.47A4.31 4.31 0 0 0 8.16 10a3.81 3.81 0 0 0-0.82 2.85A3 3 0 0 0 8.57 15a3.46 3.46 0 0 0 2.620.65A4.06 4.06 0 0 0 14 14a4.33 4.33 0 0 0 0.41-0.69 3 3 0 0 0 1 1.55 3.68 3.68 0 0 0 2.380.86c0.25 0 0.51 0 0.78-0.09a4.51 4.51 0 0 0 2.33-1.25A3.72 3.72 0 0 0 22 11.1a3 3 0 0 0-1.41-2.17zm-1.78 4.73a1.81 1.81 0 0 1-1.590.06 1.61 1.61 0 0 1-0.9-1.84A2.12 2.12 0 0 1 18 10.19a1.59 1.59 0 0 1 2 1.29 2.91 2.91 0 0 1 0 0.32 2.11 2.11 0 0 1-1.19 1.86z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlGoLang;
