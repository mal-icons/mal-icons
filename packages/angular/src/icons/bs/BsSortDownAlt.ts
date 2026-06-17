import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-sort-down-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSortDownAlt {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.5 3.5a0.50.5 0 0 0-1 0v8.79l-1.15-1.15a0.50.5 0 0 0-0.710.71l2 20.010.01a0.50.5 0 0 0 0.7-0.01l2-2a0.50.5 0 0 0-0.71-0.71L3.5 12.29zm4 0.5a0.50.5 0 0 1 0-1h1a0.50.5 0 0 1 0 1zm0 3a0.50.5 0 0 1 0-1h3a0.50.5 0 0 1 0 1zm0 3a0.50.5 0 0 1 0-1h5a0.50.5 0 0 1 0 1zM7 12.5a0.50.5 0 0 0 0.50.5h7a0.50.5 0 0 0 0-1h-7a0.50.5 0 0 0-0.50.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSortDownAlt;
