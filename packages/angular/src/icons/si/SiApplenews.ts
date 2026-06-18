import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-applenews",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiApplenews {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 12.94c2.73 4.67 6.39 8.39 11.04 11.06H1.42C0.63 24 0 23.36 0 22.58v-9.64ZM0 1.41C0 0.630.630 1.410h4.81L24 17.76v4.77c0 0.39-0.150.76-0.43 1.04a1.47 1.47 0 0 1-1.040.43h-4.77L0 6.24M12.960h9.62A1.42 1.42 0 0 1 24 1.42v9.63C21.26 6.49 17.62 2.77 12.960Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiApplenews;
