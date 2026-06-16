import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-looks-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLooks3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 3H5.01c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2H19c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-3.99 7.5c0 0.83-0.67 1.5-1.5 1.50.83 0 1.50.67 1.5 1.5V15a2 2 0 0 1-2 2H10c-0.55 0-1-0.45-1-1s0.45-1 1-1h3.01L13 13h-1c-0.55 0-1-0.45-1-1s0.45-1 1-1h1l0.01-2H10c-0.55 0-0.99-0.45-0.99-1s0.44-1 0.99-1h3.01c1.1 0 2 0.9 2 2v1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLooks3;
