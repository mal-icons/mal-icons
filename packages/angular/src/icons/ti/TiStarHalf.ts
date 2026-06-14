import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-star-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiStarHalf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 4.3c-0.9 1.9-2.2 4.8-2.2 4.8s-3.10.4-5.20.6c-0.2 0-0.40.2-0.40.3-0.10.2 0 0.40.10.5 1.6 1.4 3.9 3.6 3.9 3.6s-0.6 3.1-1.1 5.2c0 0.2 0 0.40.20.50.20.20.40.20.60.1 1.8-1 4.6-2.6 4.6-2.6v-13.3c-0.2 0-0.40.2-0.50.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiStarHalf;
