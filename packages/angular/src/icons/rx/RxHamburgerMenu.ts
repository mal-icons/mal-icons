import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-hamburger-menu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxHamburgerMenu {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.5 3C1.22 3 1 3.22 1 3.5C1 3.78 1.22 4 1.5 4H13.5C13.78 4 14 3.78 14 3.5C14 3.22 13.78 3 13.5 3H1.5ZM1 7.5C1 7.22 1.22 7 1.5 7H13.5C13.78 7 14 7.22 14 7.5C14 7.78 13.78 8 13.5 8H1.5C1.22 8 1 7.78 1 7.5ZM1 11.5C1 11.22 1.22 11 1.5 11H13.5C13.78 11 14 11.22 14 11.5C14 11.78 13.78 12 13.5 12H1.5C1.22 12 1 11.78 1 11.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxHamburgerMenu;
