import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-inventory",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrInventory {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 5h2v1c0 1.10.9 2 2 2h6c1.1 0 2-0.9 2-2V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.40.84-2.82 2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h6v-2H5V5zm7-2c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1z"}],["path",{"d":"M21.75 12.25c-0.41-0.41-1.09-0.41-1.5 0L15.51 17l-2.26-2.25c-0.41-0.41-1.08-0.41-1.5 0-0.410.41-0.41 1.09 0 1.5l3.05 3.04c0.390.39 1.020.39 1.41 0l5.53-5.54c0.42-0.410.42-1.090.01-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrInventory;
