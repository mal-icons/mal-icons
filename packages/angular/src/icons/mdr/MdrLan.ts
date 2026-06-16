import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-lan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 22h4c1.1 0 2-0.9 2-2v-3c0-1.1-0.9-2-2-2h-1v-2c0-1.1-0.9-2-2-2h-3V9h1c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v3c0 1.10.9 2 2 2h1v2H8c-1.1 0-2 0.9-2 2v2H5c-1.1 0-2 0.9-2 2v3c0 1.10.9 2 2 2h4c1.1 0 2-0.9 2-2v-3c0-1.1-0.9-2-2-2H8v-2h8v2h-1c-1.1 0-2 0.9-2 2v3c0 1.10.9 2 2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLan;
