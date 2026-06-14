import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-star-fill-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcStarFill24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12.670.67 3.06 6.2 6.840.99a0.750.75 0 0 1 0.42 1.28l-4.95 4.82 1.17 6.81a0.750.75 0 0 1-1.090.79L12 18.35l-6.12 3.22a0.750.75 0 0 1-1.09-0.79l1.17-6.81-4.95-4.82a0.750.75 0 0 1 0.42-1.28l6.84-0.99L11.330.67a0.750.75 0 0 1 1.35 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcStarFill24;
