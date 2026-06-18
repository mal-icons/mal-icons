import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-nextdotjs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNextdotjs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.67 21.98C16.76 23.26 14.47 24 12 24 5.38 24 0 18.62 0 12S5.38 0 12 0s12 5.38 12 12c0 3.58-1.57 6.8-4.07 9L9.22 7.2H7.2v9.6h1.62V9.25l9.85 12.73Zm-3.33-8.53 1.6 2.06V7.2h-1.6v6.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNextdotjs;
