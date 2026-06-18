import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-snowpack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSnowpack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.81 19.75l-10.8-16.8a1.2 1.2 0 0-2.02 0L0.19 19.75a1.2 1.2 0 0-0.04 1.22 1.2 1.2 0 1.050.62H22.8c0.44 0 0.84-0.24 1.05-0.63a1.2 1.2 0 0-0.04-1.22zM12 5.82L15.2 10.8H12l-2.4 2.4-1.43-1.43z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSnowpack;
