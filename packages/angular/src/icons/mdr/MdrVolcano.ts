import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-volcano",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrVolcano {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.49 8h-4.14c-0.82 0-1.550.5-1.86 1.26L9 13H7.3c-0.79 0-1.510.47-1.83 1.19l-2.22 5C2.66 20.51 3.63 22 5.08 22h14.27c1.33 0 2.29-1.27 1.92-2.55l-2.86-10A1.99 1.99 0 0 0 16.49 8zM14 1c-0.55 0-1 0.45-1 1v2c0 0.550.45 1 1 1s1-0.45 1-1V2c0-0.55-0.45-1-1-1zm5.66 2.34a11 0 0 0-1.41 0l-1.41 1.41a11 0 1 0 1.41 1.41l1.41-1.41a11 0 0 0 0-1.41zm-8.49 1.42L9.76 3.34a11 0 1 0-1.41 1.41l1.41 1.41c0.390.39 1.020.39 1.41 0a0.980.98 0 0 0 0-1.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrVolcano;
