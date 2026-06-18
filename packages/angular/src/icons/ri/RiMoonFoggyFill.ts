import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-moon-foggy-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMoonFoggyFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 20.33V18H14V14H3.33C3.12 13.2 3 12.37 3 11.5C3 6.94 6.21 3.13 10.5 2.21C10.18 3.08 10 4.02 10 5C10 9.42 13.58 13 18 13C19.45 13 20.82 12.61 21.99 11.94C21.82 15.76 19.39 18.99 16 20.33ZM7 20H14V22H7V20ZM2 16H12V18H2V16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMoonFoggyFill;
