import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-justgiving",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJustgiving {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.72 9.93H15.33l-4.9 4.92h6.73c-0.88 1.98-2.86 3.06-5.16 3.06-3.1 0-5.64-2.67-5.64-5.77C6.36 9.02 8.9 6.42 12 6.42c1.13 0 2.190.3 3.060.87l4.54-4.56C17.54 1.03 14.89 0 12 0 5.37 0 0 5.37 0 12c0 6.62 5.37 12 12 12s12-5.11 12-11.74c0-0.9-0.1-1.35-0.28-2.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJustgiving;
