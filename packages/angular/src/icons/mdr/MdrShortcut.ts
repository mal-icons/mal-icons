import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-shortcut",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrShortcut {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.29 10.29 16.7 6.7c-0.62-0.62-1.7-0.18-1.70.71V10H8c-2.76 0-5 2.24-5 5v3c0 0.550.45 1 1 1s1-0.45 1-1v-3c0-1.65 1.35-3 3-3h7v2.59c0 0.89 1.08 1.34 1.710.71l3.59-3.59c0.38-0.390.38-1.03-0.01-1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrShortcut;
