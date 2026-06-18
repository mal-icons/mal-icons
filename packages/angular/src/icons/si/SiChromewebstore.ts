import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-chromewebstore",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiChromewebstore {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 1.64v19.09c0 0.90.74 1.64 1.64 1.64h0.13a10.4 10.4 0 0 1-0.13-1.64 10.3 10.3 0 0 1 1.67-5.64l4.2 7.28h1.13A3.77 3.77 0 0 1 12 16.96a3.77 3.77 0 0 1 3.37 5.41h1.05a4.7 4.7 0 0 0-1.59-5.41h6.83a10.34 10.34 0 0 1 0.58 5.41h0.13c0.9 0 1.64-0.74 1.64-1.64V1.64Zm9.27 2.18h5.45a1.09 1.09 0 1 1 0 2.18H9.27a1.09 1.09 0 1 1 0-2.18M12 10.36a10.36 10.36 0 0 1 9.23 5.65H12a4.71 4.71 0 0 0-4.68 4.15L3.91 14.25A10.34 10.34 0 0 1 12 10.36"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiChromewebstore;
