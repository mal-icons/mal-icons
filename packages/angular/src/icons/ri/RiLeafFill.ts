import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-leaf-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLeafFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3V5C21 14.63 15.63 19 9 19L7.1 19C7.31 15.99 8.25 14.16 10.69 12C11.9 10.93 11.8 10.32 11.2 10.67C7.12 13.1 5.09 16.39 5 21.63L5 22H3C3 20.64 3.11 19.4 3.34 18.27C3.11 16.97 3 15.22 3 13C3 7.48 7.48 3 13 3C15 3 17 4 21 3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLeafFill;
