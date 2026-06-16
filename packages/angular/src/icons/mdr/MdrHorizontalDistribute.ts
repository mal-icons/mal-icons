import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-horizontal-distribute",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHorizontalDistribute {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 22c-0.55 0-1-0.45-1-1V3c0-0.550.45-1 1-1s1 0.45 1 1v18c0 0.55-0.45 1-1 1zM21 2c-0.55 0-1 0.45-1 1v18c0 0.550.45 1 1 1s1-0.45 1-1V3c0-0.55-0.45-1-1-1zm-9 5c-0.83 0-1.50.67-1.5 1.5v7c0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-7c0-0.83-0.67-1.5-1.5-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHorizontalDistribute;
