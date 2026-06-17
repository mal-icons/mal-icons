import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-list-columns",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsListColumns {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M0 0.5A0.50.5 0 0 1 0.5 0h9a0.50.5 0 0 1 0 1h-9A0.50.5 0 0 1 0 0.5m13 0a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5m-13 2A0.50.5 0 0 1 0.5 2h8a0.50.5 0 0 1 0 1h-8a0.50.5 0 0 1-0.5-0.5m13 0a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5m-13 2A0.50.5 0 0 1 0.5 4h10a0.50.5 0 0 1 0 1H0.5a0.50.5 0 0 1-0.5-0.5m13 0a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5m-13 2A0.50.5 0 0 1 0.5 6h7a0.50.5 0 0 1 0 1h-7a0.50.5 0 0 1-0.5-0.5m13 0a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5m-13 2A0.50.5 0 0 1 0.5 8h7a0.50.5 0 0 1 0 1h-7a0.50.5 0 0 1-0.5-0.5m13 0a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5m-13 2a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5m13 0a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5m-13 2a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0 1h-5a0.50.5 0 0 1-0.5-0.5m13 0a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5m-13 2a0.50.5 0 0 1 0.5-0.5h10a0.50.5 0 0 1 0 1H0.5a0.50.5 0 0 1-0.5-0.5m13 0a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsListColumns;
