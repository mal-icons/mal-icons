import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-print",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPrint {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 8H5c-1.66 0-3 1.34-3 3v4c0 1.10.9 2 2 2h2v2c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2v-2h2c1.1 0 2-0.9 2-2v-4c0-1.66-1.34-3-3-3zm-4 11H9c-0.55 0-1-0.45-1-1v-4h8v4c0 0.55-0.45 1-1 1zm4-7c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm-2-9H7c-0.55 0-1 0.45-1 1v2c0 0.550.45 1 1 1h10c0.55 0 1-0.45 1-1V4c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPrint;
