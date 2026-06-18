import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-setapp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSetapp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.09 8.13a0.620.62 0 0 1 0-0.87l2.77-2.77a0.620.62 0 0 1 0.88 0l2.77 2.77a0.620.62 0 0 1 0 0.88l-2.77 2.77a0.620.62 0 0 1-0.88 0zm-1.53-1.53L8.79 3.83a0.620.62 0 0 1 0-0.88L11.560.18a0.620.62 0 0 1 0.88 0l2.77 2.77a0.620.62 0 0 1 0 0.88L12.44 6.6a0.620.62 0 0 1-0.88 0zm0 2.19a0.620.62 0 0 1 0.88 0l2.77 2.77a0.620.62 0 0 1 0 0.88l-2.77 2.77a0.620.62 0 0 1-0.88 0l-2.77-2.77a0.620.62 0 0 1 0-0.88zm-4.3 2.12L4.49 8.13a0.620.62 0 0 1 0-0.88l2.77-2.77a0.620.62 0 0 1 0.88 0l2.77 2.77a0.620.62 0 0 1 0 0.88l-2.77 2.77a0.620.62 0 0 1-0.88 0zm9.48 2.19 2.77 2.77a0.620.62 0 0 1 0 0.88l-2.77 2.77a0.620.62 0 0 1-0.88 0l-2.77-2.77a0.620.62 0 0 1 0-0.88l2.77-2.77a0.620.62 0 0 1 0.88 0zm-4.3 4.3 2.77 2.77a0.620.62 0 0 1 0 0.88l-2.77 2.77a0.620.62 0 0 1-0.88 0l-2.77-2.77a0.620.62 0 0 1 0-0.88l2.77-2.77a0.620.62 0 0 1 0.88 0zm-1.53-1.53a0.620.62 0 0 1 0 0.88l-2.77 2.77a0.620.62 0 0 1-0.88 0l-2.77-2.77a0.620.62 0 0 1 0-0.88l2.77-2.77a0.620.62 0 0 1 0.88 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSetapp;
