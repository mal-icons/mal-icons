import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-komoot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKomoot {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.8 14.83l2.2-3.43 2.2 3.43 5.96 5.96A11.95 11.95 0 0 1 12 24c-3.04 0-5.93-1.14-8.16-3.21zM0 12C0 5.39 5.39 0 12 0c6.62 0 12 5.39 12 12 0 2.66-0.85 5.18-2.47 7.28l-6.02-6.02c0.15-0.410.23-0.840.23-1.27A3.74 3.74 0 0 0 12 8.26a3.74 3.74 0 0 0-3.74 3.74c0 0.430.080.860.23 1.27l-6.02 6.02A11.87 11.87 0 0 1 0 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKomoot;
