import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-spacex",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSpacex {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 7.42C8.88 8.29 1.89 14.750.32 16.28L0 16.58h2.8C10.36 9.01 21.22 7.66 24 7.42zm-17.05 6.35c-0.470.32-0.940.68-1.4 1.02l2.46 1.8h2.78zM2.95 10.8H0.19l3.25 2.38c0.47-0.32 1.02-0.66 1.51-0.94Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSpacex;
