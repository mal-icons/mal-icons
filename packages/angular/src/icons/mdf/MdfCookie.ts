import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-cookie",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfCookie {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.95 10.99c-1.79-0.03-3.7-1.95-2.68-4.22-2.98 1-5.77-1.59-5.19-4.56C6.950.71 2 6.58 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01zM8.5 15c-0.83 0-1.5-0.67-1.5-1.5S7.67 12 8.5 12s1.50.67 1.5 1.5S9.33 15 8.5 15zm2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.50.67 1.5 1.5-0.67 1.5-1.5 1.5zm4.5 6c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfCookie;
