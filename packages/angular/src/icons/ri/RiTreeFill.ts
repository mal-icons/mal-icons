import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-tree-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTreeFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 7C18 7.26 17.98 7.52 17.95 7.77C19.77 8.8 21 10.76 21 13C21 16.31 18.31 19 15 19C14.3 19 13.63 18.88 13 18.66V22H11V18.4C10.25 18.78 9.4 19 8.5 19C5.46 19 3 16.54 3 13.5C3 12.05 3.56 10.73 4.48 9.74C4.88 10.82 5.5 11.79 6.29 12.6L7.71 11.2C6.99 10.46 6.46 9.54 6.19 8.51C6.07 8.03 6 7.52 6 7C6 3.69 8.69 1 12 1C15.31 1 18 3.69 18 7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTreeFill;
