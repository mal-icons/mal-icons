import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-check2-square",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCheck2Square {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a0.50.5 0 0 1 0 1H3a0.50.5 0 0 0-0.50.5v10a0.50.5 0 0 0 0.50.5h10a0.50.5 0 0 0 0.5-0.5V8a0.50.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"}],["path",{"d":"m8.35 10.35 7-7a0.50.5 0 0 0-0.71-0.71L8 9.29 5.35 6.65a0.50.5 0 1 0-0.710.71l3 3a0.50.5 0 0 0 0.71 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCheck2Square;
