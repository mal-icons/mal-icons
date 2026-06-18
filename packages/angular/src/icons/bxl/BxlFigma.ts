import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-figma",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlFigma {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.33 8.67a3.33 3.33 0 0 0 0-6.66H8.67a3.33 3.33 0 0 0 0 6.66 3.33 3.33 0 0 0 0 6.67 3.33 3.33 0 0 0 0 6.66A3.33 3.33 0 0 0 12 18.66V8.67h3.33z"}],["circle",{"cx":"15.33","cy":"12","r":"3.33"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlFigma;
