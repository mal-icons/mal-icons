import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-align-vertical-bottom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAlignVerticalBottom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 22H3c-0.55 0-1-0.45-1-1s0.45-1 1-1h18c0.55 0 1 0.45 1 1s-0.45 1-1 1zM8.5 2C7.67 2 7 2.67 7 3.5v13c0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-13C10 2.67 9.33 2 8.5 2zm7 6c-0.83 0-1.50.67-1.5 1.5v7c0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-7c0-0.83-0.67-1.5-1.5-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAlignVerticalBottom;
