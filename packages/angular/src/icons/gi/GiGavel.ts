import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-gavel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiGavel {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M129.75 24.47L21.63 211.66l55.78 32.19L185.53 56.66 129.75 24.47zm55.97 69.25l-75.63 130.87L326.47 349.47l75.59-130.88L185.72 93.72zm83.470.69l-11.22 19.44 84.97 49.03 11.25-19.47-85-49zM434.25 200.22L326.16 387.41l55.78 32.19 108.1-187.19-55.78-32.19zm-270.53 76.91l-11.28 19.53 84.97 49 11.25-19.5-84.94-49.03zm-3.09 45.84L61.31 494.81h67.16l82.28-142.97-50.12-28.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiGavel;
