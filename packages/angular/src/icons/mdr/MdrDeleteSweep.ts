import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-delete-sweep",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDeleteSweep {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 16h2c0.55 0 1 0.45 1 1s-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0-8h5c0.55 0 1 0.45 1 1s-0.45 1-1 1h-5c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0 4h4c0.55 0 1 0.45 1 1s-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1s0.45-1 1-1zM3 18c0 1.10.9 2 2 2h6c1.1 0 2-0.9 2-2V8H3v10zM13 5h-2l-0.71-0.71c-0.18-0.18-0.44-0.29-0.7-0.29H6.41c-0.26 0-0.520.11-0.70.29L5 5H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h10c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDeleteSweep;
