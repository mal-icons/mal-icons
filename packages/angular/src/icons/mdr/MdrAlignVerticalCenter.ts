import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-align-vertical-center",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAlignVerticalCenter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 11h-4V7.5c0-0.83-0.67-1.5-1.5-1.5S14 6.67 14 7.5V11h-4V4.5C10 3.67 9.33 3 8.5 3S7 3.67 7 4.5V11H2.84c-0.55 0-1 0.45-1 1s0.45 1 1 1H7v6.5c0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5V13h4v3.5c0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5V13h4c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAlignVerticalCenter;
