import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-star-fill-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcStarFill16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 0.25a0.750.75 0 0 1 0.670.42l1.88 3.82 4.210.61a0.750.75 0 0 1 0.42 1.28l-3.05 2.970.72 4.19a0.750.75 0 0 1-1.090.79L8 12.35l-3.77 1.98a0.750.75 0 0 1-1.09-0.79l0.72-4.19L0.82 6.37a0.750.75 0 0 1 0.42-1.28l4.21-0.61L7.330.67A0.750.75 0 0 1 8 0.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcStarFill16;
