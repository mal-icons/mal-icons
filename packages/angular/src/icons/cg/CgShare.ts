import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgShare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 9C19.66 9 21 7.66 21 6C21 4.34 19.66 3 18 3C16.34 3 15 4.34 15 6C15 6.13 15.01 6.25 15.02 6.37L8.08 9.84C7.54 9.32 6.81 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.81 15 7.54 14.68 8.08 14.16L15.02 17.63C15.01 17.75 15 17.87 15 18C15 19.66 16.34 21 18 21C19.66 21 21 19.66 21 18C21 16.34 19.66 15 18 15C17.19 15 16.46 15.32 15.92 15.84L8.98 12.37C8.99 12.25 9 12.13 9 12C9 11.87 8.99 11.75 8.98 11.63L15.92 8.16C16.46 8.68 17.19 9 18 9Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgShare;
