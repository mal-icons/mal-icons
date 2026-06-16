import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-graphic-eq",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrGraphicEq {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 18c0.55 0 1-0.45 1-1V7c0-0.55-0.45-1-1-1s-1 0.45-1 1v10c0 0.550.45 1 1 1zm4 4c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1s-1 0.45-1 1v18c0 0.550.45 1 1 1zm-8-8c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1v2c0 0.550.45 1 1 1zm12 4c0.55 0 1-0.45 1-1V7c0-0.55-0.45-1-1-1s-1 0.45-1 1v10c0 0.550.45 1 1 1zm3-7v2c0 0.550.45 1 1 1s1-0.45 1-1v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrGraphicEq;
