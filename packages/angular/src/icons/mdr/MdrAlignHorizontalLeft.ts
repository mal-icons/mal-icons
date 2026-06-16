import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-align-horizontal-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAlignHorizontalLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 22c-0.55 0-1-0.45-1-1V3c0-0.550.45-1 1-1s1 0.45 1 1v18c0 0.55-0.45 1-1 1zM20.5 7h-13C6.67 7 6 7.67 6 8.5S6.67 10 7.5 10h13c0.83 0 1.5-0.67 1.5-1.5S21.33 7 20.5 7zm-6 7h-7c-0.83 0-1.50.67-1.5 1.5S6.67 17 7.5 17h7c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAlignHorizontalLeft;
