import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-openbugbounty",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOpenbugbounty {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.09 2.44a1.39 1.39 0 0 0-1.43 1.61c0.42 2.57 2.11 4.12 3.58 5a14.12 14.12 0 0 0 0.4 2.93H6.52a1.39 1.39 0 0 0 0 2.78h5.16c0.390.770.85 1.48 1.37 2.11-1.82 1.36-3.52 3.73-4.34 4.98a1.39 1.39 0 1 0 2.32 1.53c1.38-2.08 3.15-4.05 4.09-4.6a8.21 8.21 0 0 0 3.76 1.42V6.49h-7.48c-0.87-0.59-1.75-1.51-1.98-2.89a1.39 1.39 0 0 0-1.31-1.16zM18.86 0c-2.97 0-5.5 1.97-6.58 4.76h6.58Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOpenbugbounty;
