import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-gamebanana",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGamebanana {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.25 0v3h1.5V1.5h1.51V3h-1.5V7.5h1.5V4.5h3v-1.5h-1.5V0Zm6 4.5v1.5h1.5V4.5Zm1.5 1.5v10.5h1.5V6Zm0 10.5h-1.5V19.5h1.5zm-1.5 3h-1.5v1.5h1.5zm-1.5 1.5h-3v1.5h3zm-3 1.5H6.75V24h9zm-9 0V21h-3v1.5zm-3-1.5v-1.5H2.25v1.5zm-1.5-1.5v-3H9.75v-1.5H0.75v4.5zm7.5-4.5h3v-1.5H9.75Zm3-1.5h1.5v-1.5h-1.5zm1.5-1.5h1.5V7.51h-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGamebanana;
