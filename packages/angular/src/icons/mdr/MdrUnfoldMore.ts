import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-unfold-more",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrUnfoldMore {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12 5.83 2.46 2.46a11 0 1 0 1.41-1.41L12.7 3.7a11 0 0 0-1.41 0L8.12 6.88a11 0 1 0 1.41 1.41L12 5.83zm0 12.34-2.46-2.46a11 0 1 0-1.41 1.41l3.17 3.18c0.390.39 1.020.39 1.41 0l3.17-3.17a11 0 1 0-1.41-1.41L12 18.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrUnfoldMore;
