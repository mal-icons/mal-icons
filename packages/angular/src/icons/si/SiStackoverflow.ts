import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-stackoverflow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiStackoverflow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.73 0l-1.72 1.28 6.39 8.59 1.72-1.28L15.73 0zm-3.94 3.42l-1.37 1.64 8.23 6.85 1.37-1.64-8.22-6.85zm-3.15 4.47l-0.9 1.94 9.7 4.520.9-1.94-9.7-4.52zm-1.85 4.86l-0.44 2.09 10.47 2.20.44-2.09-10.47-2.2zM1.89 15.47V24h19.19v-8.53h-2.13v6.4H4.02v-6.4H1.89zm4.26 2.13v2.13h10.66v-2.13H6.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiStackoverflow;
