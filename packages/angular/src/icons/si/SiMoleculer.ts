import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-moleculer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMoleculer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.440.72a2.58 2.58 0 0 0-2.58 2.58 2.58 2.58 0 0 0 1.37 2.28L12.81 8.27a3.51 3.51 0 0 0-1.08-0.17 3.51 3.51 0 0 0-3.5 3.51 3.51 3.51 0 0 0 0.090.75l-2.83 1.04a2.97 2.97 0 0 0-2.51-1.39A2.97 2.97 0 0 0 0 14.96a2.97 2.97 0 0 0 2.97 2.97 2.97 2.97 0 0 0 2.97-2.97 2.97 2.97 0 0 0-0.07-0.63l2.72-1.19a3.51 3.51 0 0 0 3.15 1.97 3.51 3.51 0 0 0 2.13-0.72l2.28 2.17a4.31 4.31 0 0 0-0.75 2.43 4.31 4.31 0 0 0 4.31 4.31A4.31 4.31 0 0 0 24 18.98a4.31 4.31 0 0 0-4.3-4.3 4.31 4.31 0 0 0-2.720.97l-2.42-1.96a3.51 3.51 0 0 0 0.68-2.07 3.51 3.51 0 0 0-1.52-2.89l1.2-2.89a2.58 2.58 0 0 0 0.520.05 2.58 2.58 0 0 0 2.58-2.58 2.58 2.58 0 0 0-2.58-2.58Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMoleculer;
