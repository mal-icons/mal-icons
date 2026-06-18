import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-julia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJulia {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.14 17.57a5.57 5.57 0 1 1-11.14 0 5.57 5.57 0 1 1 11.14 0zm6.43-11.14a5.57 5.57 0 1 1-11.14 0 5.57 5.57 0 1 1 11.14 0zM24 17.57a5.57 5.57 0 1 1-11.14 0 5.57 5.57 0 1 1 11.14 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJulia;
