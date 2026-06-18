import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-anytype",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAnytype {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.33 0h13.33A5.32 5.32 0 0 1 24 5.33v13.33A5.32 5.32 0 0 1 18.67 24H5.33A5.32 5.32 0 0 1 0 18.67V5.33A5.32 5.32 0 0 1 5.33 0Zm10.33 7.67v-3H6.34v3zm0 0v11.67h3V7.67ZM9.5 19.33a4.83 4.83 0 1 0 0-9.67 4.83 4.83 0 0 0 0 9.67z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAnytype;
