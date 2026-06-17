import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-filter-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFilterCircle {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}],["path",{"d":"M7 11.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0 1h-1a0.50.5 0 0 1-0.5-0.5m-2-3a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0 1h-5a0.50.5 0 0 1-0.5-0.5m-2-3a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFilterCircle;
