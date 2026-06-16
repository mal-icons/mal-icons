import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-unarchive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfUnarchive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m20.55 5.22-1.39-1.68A1.51 1.51 0 0 0 18 3H6c-0.47 0-0.880.21-1.150.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2V6.5c0-0.49-0.17-0.93-0.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l0.82-1h12l0.93 1H5.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfUnarchive;
