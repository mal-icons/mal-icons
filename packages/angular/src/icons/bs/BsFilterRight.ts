import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-filter-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFilterRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 10.5a0.50.5 0 0 0-0.5-0.5h-3a0.50.5 0 0 0 0 1h3a0.50.5 0 0 0 0.5-0.5m0-3a0.50.5 0 0 0-0.5-0.5h-7a0.50.5 0 0 0 0 1h7a0.50.5 0 0 0 0.5-0.5m0-3a0.50.5 0 0 0-0.5-0.5h-11a0.50.5 0 0 0 0 1h11a0.50.5 0 0 0 0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFilterRight;
