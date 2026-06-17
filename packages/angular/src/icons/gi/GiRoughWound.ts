import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-rough-wound",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiRoughWound {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M378.74 133.25c-238.25 24.05-68.73 98.57 81.49 161.75-254.59-53.51-69.62 96.14 22.62 194.88-97.05-61.69-215.83-120.38-320.06-142.83 234.83-17.03 26.77-138.35-134.27-172.09 185.74-1.44 164.33-12.1 8.96-152.76 131.68 75.39 215.83 97.65 341.26 111.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiRoughWound;
