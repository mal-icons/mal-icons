import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-down-thick",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowDownThick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.41 10.66c-0.78-0.78-2.05-0.78-2.83 0l-1.59 1.59v-7.24c0-1.1-0.9-2-2-2-1.1 0-2 0.9-2 2v7.24l-1.59-1.59c-0.78-0.78-2.05-0.78-2.83 0s-0.78 2.05 0 2.83l6.41 6.41 6.41-6.41c0.78-0.780.78-2.05 0-2.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowDownThick;
