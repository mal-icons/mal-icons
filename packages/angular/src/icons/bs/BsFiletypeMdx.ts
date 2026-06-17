import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-filetype-mdx",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFiletypeMdx {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0.71 15.85v-2.66h0.04l0.95 2.16h0.52l0.95-2.16h0.04v2.66h0.72V11.85h-0.8l-1.14 2.6h-0.03L0.81 11.85H0v4zm3.56-4v4h1.46q0.6 0 1-0.24a1.45 1.45 0 0 0 0.6-0.69q0.2-0.450.2-1.08 0-0.63-0.2-1.07a1.43 1.43 0 0 0-0.59-0.68q-0.39-0.23-1-0.23zm0.790.65h0.56q0.37 0 0.610.15a0.90.9 0 0 1 0.350.45q0.120.30.120.75 0 0.34-0.070.59a1.1 1.1 0 0 1-0.20.420.80.8 0 0 1-0.330.25 1.3 1.3 0 0 1-0.480.08h-0.56v-2.71Zm4.79-0.64h0.89L9.46 13.86l1.25 1.99h-0.91l-0.85-1.41h-0.04l-0.85 1.42h-0.86l1.24-2.02L7.22 11.85h0.93l0.83 1.44h0.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFiletypeMdx;
