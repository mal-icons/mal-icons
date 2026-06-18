import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-coolify",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCoolify {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.36 4.36V0h17.45v4.36zm0 13.09H0V4.37h4.36zm0 0h17.45v4.36H4.36ZM6.55 6.55v-1.7H22.3V2.18H24v4.36zm0 0v10.4h-1.7v-10.4ZM3.88 17.94v1.7h-1.7v-1.7ZM24 24H6.55v-1.7H22.3v-2.66H24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCoolify;
