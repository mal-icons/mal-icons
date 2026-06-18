import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-meizu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMeizu {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.05 18.82h3.55A0.410.41 0 0 0 24 18.41v-3.54a0.410.41 0 0 0-0.41-0.41h-3.54a0.410.41 0 0 0-0.410.41v3.55c0 0.230.180.410.410.41zM13.8 12.11a0.10.1 0 0 1-0.16-0.07V5.59a0.410.41 0 0 0-0.41-0.41H10.59a0.550.55 0 0 0-0.380.16L0.16 15.39a0.550.55 0 0 0-0.160.39v2.64c0 0.230.180.410.410.41h2.64a0.550.55 0 0 0 0.39-0.16l6.77-6.77a0.10.1 0 0 1 0.160.07v6.45c0 0.230.180.410.410.41h2.64a0.550.55 0 0 0 0.39-0.16L23.84 8.61A0.550.55 0 0 0 24 8.23V5.59a0.410.41 0 0 0-0.41-0.41h-2.64a0.550.55 0 0 0-0.390.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMeizu;
