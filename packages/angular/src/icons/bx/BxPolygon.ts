import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-polygon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxPolygon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.71 2.29A11 0 0 0 16 2H8a11 0 0 0-0.710.29l-5 5A11 0 0 0 2 8v8c0 0.270.110.520.290.71l5 5A11 0 0 0 8 22h8c0.27 0 0.52-0.10.71-0.29l5-5A11 0 0 0 22 16V8a11 0 0 0-0.29-0.71l-5-5zM20 15.59 15.59 20H8.41L4 15.59V8.41L8.41 4h7.17L20 8.41v7.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxPolygon;
