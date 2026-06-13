import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-menu-burger",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiMenuBurger {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.56,4.06c-0.28,0 -0.5,-0.22 -0.5,-0.5c0,-0.28 0.22,-0.5 0.5,-0.5l16.87,0c0.28,0 0.5,0.22 0.5,0.5c0,0.28 -0.22,0.5 -0.5,0.5l-16.87,0Z"}],["path",{"d":"M3.56,12.5c-0.28,0 -0.5,-0.22 -0.5,-0.5c0,-0.28 0.22,-0.5 0.5,-0.5l16.87,0c0.28,0 0.5,0.22 0.5,0.5c0,0.28 -0.22,0.5 -0.5,0.5l-16.87,0Z"}],["path",{"d":"M3.56,20.94c-0.28,0 -0.5,-0.22 -0.5,-0.5c0,-0.28 0.22,-0.5 0.5,-0.5l16.87,0c0.28,0 0.5,0.22 0.5,0.5c0,0.28 -0.22,0.5 -0.5,0.5l-16.87,0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiMenuBurger;
