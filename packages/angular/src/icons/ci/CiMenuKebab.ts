import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-menu-kebab",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiMenuKebab {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.5,12c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,0 2.5,1.12 2.5,2.5Zm-1,0c0,-0.83 -0.67,-1.5 -1.5,-1.5c-0.83,0 -1.5,0.67 -1.5,1.5c0,0.83 0.67,1.5 1.5,1.5c0.83,0 1.5,-0.67 1.5,-1.5Z"}],["path",{"d":"M14.5,4.56c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,0 2.5,1.12 2.5,2.5Zm-1,0c0,-0.83 -0.67,-1.5 -1.5,-1.5c-0.83,0 -1.5,0.67 -1.5,1.5c0,0.83 0.67,1.5 1.5,1.5c0.83,0 1.5,-0.67 1.5,-1.5Z"}],["path",{"d":"M14.5,19.44c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,0 2.5,1.12 2.5,2.5Zm-1,0c0,-0.83 -0.67,-1.5 -1.5,-1.5c-0.83,0 -1.5,0.67 -1.5,1.5c0,0.83 0.67,1.5 1.5,1.5c0.83,0 1.5,-0.67 1.5,-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiMenuKebab;
