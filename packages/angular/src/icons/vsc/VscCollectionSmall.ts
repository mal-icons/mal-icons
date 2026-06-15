import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-collection-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscCollectionSmall {
  readonly viewBox = "0 0 10 10";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 0H5C4.45 0 4 0.45 4 1H1C0.45 1 0 1.45 0 2V6C0 6.55 0.45 7 1 7H2V8C2 8.55 2.45 9 3 9H6C6.55 9 7 8.55 7 8V6H8C8.55 6 9 5.55 9 5V1C9 0.45 8.55 0 8 0ZM1 6V2H4V3H3C2.45 3 2 3.45 2 4V6H1ZM6 8H3V4H6V8ZM8 5H7V4C7 3.45 6.55 3 6 3H5V1H8V5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscCollectionSmall;
