import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-startdotgg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiStartdotgg {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 0A6 6 0 0 6v5.25a0.750.75 0 0.750.75H5.25a0.750.75 0 0.75-0.75V6.75C6 6.33 6.34 6 6.75 6h16.5a0.750.75 0 0.75-0.75V0.75A0.740.74 0 23.25 0zm12.75 12a0.750.75 0 0-0.750.75v4.5a0.750.75 0 1-0.750.75H0.75a0.750.75 0 0-0.750.75v4.5a0.750.75 0 0.750.75H18a6 6 0 6-6v-5.25a0.750.75 0 0-0.75-0.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiStartdotgg;
