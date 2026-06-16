import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-align-horizontal-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAlignHorizontalRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 2c0.55 0 1 0.45 1 1v18c0 0.55-0.45 1-1 1s-1-0.45-1-1V3c0-0.550.45-1 1-1zM3.5 10h13c0.83 0 1.5-0.67 1.5-1.5S17.33 7 16.5 7h-13C2.67 7 2 7.67 2 8.5S2.67 10 3.5 10zm6 7h7c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5h-7c-0.83 0-1.50.67-1.5 1.5S8.67 17 9.5 17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAlignHorizontalRight;
