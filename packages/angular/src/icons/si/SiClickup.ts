import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-clickup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiClickup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 18.44l3.69-2.83c1.96 2.56 4.04 3.74 6.36 3.74 2.31 0 4.33-1.17 6.2-3.7L22 18.41C19.3 22.07 15.94 24 12.05 24 8.18 24 4.79 22.08 2 18.44zM12.04 6.15l-6.57 5.66-3.04-3.52L12.06 0l9.54 8.3-3.05 3.51z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiClickup;
