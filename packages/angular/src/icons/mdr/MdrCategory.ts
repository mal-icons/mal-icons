import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-category",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCategory {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.15 3.4 7.43 9.48c-0.410.660.07 1.520.85 1.52h7.43c0.78 0 1.26-0.860.85-1.52L12.85 3.4a0.990.99 0 0 0-1.7 0z"}],["circle",{"cx":"17.5","cy":"17.5","r":"4.5"}],["path",{"d":"M4 21.5h6c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCategory;
