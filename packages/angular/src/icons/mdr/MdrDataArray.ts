import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-data-array",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDataArray {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 5c0 0.550.45 1 1 1h2v12h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1h2c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2h-2c-0.55 0-1 0.45-1 1zM6 20h2c0.55 0 1-0.45 1-1s-0.45-1-1-1H6V6h2c0.55 0 1-0.45 1-1s-0.45-1-1-1H6c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDataArray;
