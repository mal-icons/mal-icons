import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-triangle-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTriangleFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.87 3L22.39 19.5C22.67 19.98 22.5 20.59 22.03 20.87C21.87 20.95 21.7 21 21.53 21H2.47C1.92 21 1.47 20.55 1.47 20C1.47 19.82 1.52 19.65 1.61 19.5L11.13 3C11.41 2.52 12.02 2.36 12.5 2.63C12.65 2.72 12.78 2.85 12.87 3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTriangleFill;
