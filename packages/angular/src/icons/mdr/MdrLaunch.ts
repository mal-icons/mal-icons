import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-launch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLaunch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 19H6c-0.55 0-1-0.45-1-1V6c0-0.550.45-1 1-1h5c0.55 0 1-0.45 1-1s-0.45-1-1-1H5a2 2 0 0 0-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-6c0-0.55-0.45-1-1-1s-1 0.45-1 1v5c0 0.55-0.45 1-1 1zM14 4c0 0.550.45 1 1 1h2.59l-9.13 9.13a11 0 1 0 1.41 1.41L19 6.41V9c0 0.550.45 1 1 1s1-0.45 1-1V3h-6c-0.55 0-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLaunch;
