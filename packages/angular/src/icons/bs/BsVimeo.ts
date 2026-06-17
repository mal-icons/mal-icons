import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-vimeo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsVimeo {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.99 4.2q-0.11 2.33-3.26 6.39-3.26 4.24-5.52 4.24-1.4 0-2.37-2.58L3.55 7.52Q2.83 4.94 2.01 4.94q-0.180-1.250.75L0 4.72a210 210 0 0 0 2.33-2.08q1.58-1.36 2.37-1.44 1.87-0.18 2.3 2.550.47 2.950.65 3.670.54 2.45 1.19 2.440.5 0 1.51-1.59 1.01-1.59 1.08-2.410.14-1.37-1.08-1.37a3 3 0 0 0-1.180.26q1.18-3.86 4.51-3.76 2.470.08 2.32 3.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsVimeo;
