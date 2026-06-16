import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-carpenter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCarpenter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.73 14.23 7.71 2.21a11 0 0 0-1.41 0L3.7 4.8a1 1 0 0 0-0.11 1.28l7.65 10.98c-0.780.78-0.78 2.05 0 2.83l1.41 1.41c0.780.78 2.050.78 2.83 0l4.24-4.24c0.79-0.780.79-2.050.01-2.83zm-5.66 5.65-1.41-1.41 4.24-4.24 1.41 1.41-4.24 4.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCarpenter;
