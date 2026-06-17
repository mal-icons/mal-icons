import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-thunderbolt-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsThunderboltFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 3a1 1 0 0 0-1 1v7.29A1 1 0 0 0 0.29 12L2 13.71a1 1 0 0 0 0.710.29h10.59a1 1 0 0 0 0.71-0.29L15.71 12a1 1 0 0 0 0.29-0.71V4a1 1 0 0 0-1-1zm2.5 3h9a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-9a0.50.5 0 0 1-0.5-0.5v-1a0.50.5 0 0 1 0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsThunderboltFill;
