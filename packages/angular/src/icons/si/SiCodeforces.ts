import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-codeforces",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCodeforces {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.5 7.5C5.33 7.5 6 8.17 6 9v10.5c0 0.83-0.67 1.5-1.5 1.5h-3C0.67 21 0 20.33 0 19.5V9c0-0.830.67-1.5 1.5-1.5h3zm9-4.5c0.83 0 1.50.67 1.5 1.5v15c0 0.83-0.67 1.5-1.5 1.5h-3c-0.83 0-1.5-0.67-1.5-1.5v-15c0-0.830.67-1.5 1.5-1.5h3zm9 7.5c0.83 0 1.50.67 1.5 1.5v7.5c0 0.83-0.67 1.5-1.5 1.5h-3c-0.83 0-1.5-0.67-1.5-1.5V12c0-0.830.67-1.5 1.5-1.5h3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCodeforces;
