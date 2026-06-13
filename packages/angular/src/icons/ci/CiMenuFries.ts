import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-menu-fries",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiMenuFries {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.44,19.94c0.28,0 0.5,0.22 0.5,0.5c0,0.28 -0.22,0.5 -0.5,0.5l-16.87,0c-0.28,0 -0.5,-0.22 -0.5,-0.5c0,-0.28 0.22,-0.5 0.5,-0.5l16.87,0Z"}],["path",{"d":"M20.44,11.5c0.28,0 0.5,0.22 0.5,0.5c0,0.28 -0.22,0.5 -0.5,0.5l-10,0c-0.28,0 -0.5,-0.22 -0.5,-0.5c0,-0.28 0.22,-0.5 0.5,-0.5l10,0Z"}],["path",{"d":"M20.44,3.06c0.28,0 0.5,0.22 0.5,0.5c0,0.28 -0.22,0.5 -0.5,0.5l-16.87,0c-0.28,0 -0.5,-0.22 -0.5,-0.5c0,-0.28 0.22,-0.5 0.5,-0.5l16.87,0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiMenuFries;
