import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-star-altar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiStarAltar {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 25.61l-97.8 36.67L256 86.72l97.8-24.44L256 25.61zM136.1 75.3L105.9 407h300.2L375.9 75.3l-119.9 30-119.9-30zM256 128l30 72.7 78.3 6-59.8 51L323 334l-67-41.2-66.9 41.3 18.4-76.5-59.8-50.9 78.4-6L256 128zM70.09 425l-24.8 62H237.3l-49.6-62H70.09zm140.61 0l45.3 56.6 45.3-56.6h-90.6zm113.6 0l-49.6 62h192l-24.8-62H324.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiStarAltar;
