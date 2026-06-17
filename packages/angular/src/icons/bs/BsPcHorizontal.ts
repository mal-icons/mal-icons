import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-pc-horizontal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPcHorizontal {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm11.5 1a0.50.5 0 1 1 0 1 0.50.5 0 0 1 0-1m2 0a0.50.5 0 1 1 0 1 0.50.5 0 0 1 0-1M1 7.5a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0 1h-5a0.50.5 0 0 1-0.5-0.5M1.25 9h5.5a0.250.25 0 0 1 0 0.5h-5.5a0.250.25 0 0 1 0-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPcHorizontal;
