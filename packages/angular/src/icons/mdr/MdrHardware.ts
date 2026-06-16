import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-hardware",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHardware {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.59 3.41 15 6V5c0-1.1-0.9-2-2-2H9C6.24 3 4 5.24 4 8h5v3h6V8l2.59 2.59c0.260.260.620.41 1 0.41h0.01c0.77 0 1.4-0.63 1.4-1.41V4.41C20 3.63 19.37 3 18.59 3h-0.01c-0.37 0-0.730.15-0.990.41zM9 13v7c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1v-7H9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHardware;
