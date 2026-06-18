import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-ghost",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGhost {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0.26 2.31c2.470.01 5.12 2.01 5.9 2.96l0.240.3c1.64 1.99 3.57 4.34 3.57 6.97 0 3.72-2.98 5.81-6.16 7.51-1.430.77-2.98 1.51-4.75 1.51-4.54 0-8.37-3.57-8.37-8.11 0-0.710.17-1.420.34-2.150.12-0.510.24-1.030.31-1.550.55-4.54 2.97-6.79 8.42-7.41a4.29 4.29 0 1.49-0.03Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGhost;
