import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-simpleicons",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSimpleicons {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 6a6 6 0 10-6 6 6 6 0 15.35 9h1.5A7.5 7.5 0 12 10.5 4.5 4.5 0 1116.5 6Zm-6-3a3 3 0 0 6 1 1 0 0-6m0 1.5a1.5 1.5 0 10 3 1 1 0 10-3M7.5 15v1.5H9v6H4.5V24h15v-1.5H15v-6h1.5V15Zm3 1.5h3v6h-3zm-6 1.5a7.5 7.5 0 0.7 3h1.5a6 6 0 1-0.7-3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSimpleicons;
