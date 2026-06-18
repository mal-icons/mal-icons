import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-phpstorm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPhpstorm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.83 6.61v-0.05c0-1-0.67-1.5-1.78-1.5H4.39v3.06h1.72c1.110 1.72-0.67 1.72-1.5zM0 0v24h24V0H0zm2.17 3.11h4.06c2.39 0 3.83 1.39 3.83 3.45v0.06c0 2.33-1.78 3.5-4.06 3.5H4.33v3H2.17v-10zM11.28 21h-9v-1.5h9V21zM18.5 10.22c0 2-1.5 3.11-3.67 3.11-1.5-0.06-3-0.61-4.22-1.67l1.28-1.56c0.890.72 1.83 1.22 3 1.220.89 0 1.44-0.33 1.44-0.94v-0.06c0-0.56-0.33-0.83-2-1.28C12.33 8.56 11 8 11 6v-0.06c0-1.83 1.44-3 3.5-3 1.44 0 2.720.44 3.72 1.28l-1.17 1.67c-0.89-0.61-1.78-1-2.61-1-0.83 0-1.280.39-1.280.89v0.06c0 0.670.450.89 2.17 1.33 2 0.56 3.17 1.28 3.17 3v0.06z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPhpstorm;
