import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-twitter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTwitter {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.03 15c6.04 0 9.34-5 9.34-9.33q0-0.21-0.01-0.42A6.7 6.7 0 0 0 16 3.54a6.7 6.7 0 0 1-1.890.52 3.3 3.3 0 0 0 1.45-1.82 6.5 6.5 0 0 1-2.090.79A3.29 3.29 0 0 0 7.88 6.03a9.32 9.32 0 0 1-6.77-3.43 3.29 3.29 0 0 0 1.02 4.38A3.3 3.3 0 0 1 0.64 6.58v0.05a3.29 3.29 0 0 0 2.63 3.22 3.2 3.2 0 0 1-0.860.12 3 3 0 0 1-0.61-0.06 3.28 3.28 0 0 0 3.07 2.28A6.6 6.6 0 0 1 0.78 13.58a6 6 0 0 1-0.78-0.04A9.34 9.34 0 0 0 5.03 15"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTwitter;
