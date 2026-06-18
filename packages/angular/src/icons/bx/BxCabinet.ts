import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-cabinet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxCabinet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 4c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V4zM5 4h14v7H5V4zm0 16v-7h14v7H5z"}],["path",{"d":"M14 7h-4V6H8v3h8V6h-2zm0 8v1h-4v-1H8v3h8v-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxCabinet;
