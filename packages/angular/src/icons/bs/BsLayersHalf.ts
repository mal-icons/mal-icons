import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-layers-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsLayersHalf {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.24 1.56a0.50.5 0 0 0-0.47 0l-7.5 4a0.50.5 0 0 0 0 0.88L3.19 8 0.26 9.56a0.50.5 0 0 0 0 0.88l7.5 4a0.50.5 0 0 0 0.47 0l7.5-4a0.50.5 0 0 0 0-0.88L12.81 8l2.92-1.56a0.50.5 0 0 0 0-0.88zM8 9.43 1.56 6 8 2.57 14.44 6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsLayersHalf;
