import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-laptop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLaptop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 18c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2H1c-0.55 0-1 0.45-1 1s0.45 1 1 1h22c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3zM5 6h14c0.55 0 1 0.45 1 1v8c0 0.55-0.45 1-1 1H5c-0.55 0-1-0.45-1-1V7c0-0.550.45-1 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLaptop;
