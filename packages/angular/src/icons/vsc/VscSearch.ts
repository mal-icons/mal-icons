import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-search",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscSearch {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.02 10.73C9.07 11.52 7.84 12 6.5 12C3.46 12 1 9.54 1 6.5C1 3.46 3.46 1 6.5 1C9.54 1 12 3.46 12 6.5C12 7.84 11.52 9.07 10.73 10.02L13.85 13.15C14.05 13.34 14.05 13.66 13.85 13.85C13.66 14.05 13.34 14.05 13.15 13.85L10.02 10.73ZM11 6.5C11 4.01 8.99 2 6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscSearch;
