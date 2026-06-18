import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-datadotai",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDatadotai {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.12 1.740.02 10.01 0 10.02l11.99 12.220.010.02 11.99-12.220.01-0.01-8.11-8.27-0.01-0.01Zm1.21 1.02h5.33L11.99 5.41zm3.42 3.43 3.03-3.05L22.08 9.5h-6.05ZM8.21 3.14l3.04 3.07L8 9.5h-6.08Zm0.62 6.98L12 6.88l3.17 3.24L12 19.84zm7.330.4h5.86l-8.79 9.01Zm-14.24 0h5.92l2.96 9.01Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDatadotai;
