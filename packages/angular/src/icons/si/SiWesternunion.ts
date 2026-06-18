import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-westernunion",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWesternunion {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.8 5.19h5.92L24 9.15l-4.64 8.04c-1.25 2.15-3.28 2.15-4.53 0L7.89 5.19h5.92l4.27 7.39a1.13 1.13 0 0 0 1.980l-4.27-7.39ZM0 5.19h5.92l6.24 10.8-0.7 1.2c-1.25 2.15-3.28 2.15-4.53 0L0 5.19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWesternunion;
