import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-list-check",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsListCheck {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M5 11.5a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5m0-4a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5m0-4a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5M3.85 2.15a0.50.5 0 0 1 0 0.71l-1.5 1.5a0.50.5 0 0 1-0.71 0l-0.5-0.5a0.50.5 0 1 1 0.71-0.71L2 3.29l1.15-1.15a0.50.5 0 0 1 0.71 0m0 4a0.50.5 0 0 1 0 0.71l-1.5 1.5a0.50.5 0 0 1-0.71 0l-0.5-0.5a0.50.5 0 1 1 0.71-0.71L2 7.29l1.15-1.15a0.50.5 0 0 1 0.71 0m0 4a0.50.5 0 0 1 0 0.71l-1.5 1.5a0.50.5 0 0 1-0.71 0l-0.5-0.5a0.50.5 0 0 1 0.71-0.71l0.150.15 1.15-1.15a0.50.5 0 0 1 0.71 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsListCheck;
