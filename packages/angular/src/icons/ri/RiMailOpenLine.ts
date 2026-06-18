import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-mail-open-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMailOpenLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.24 6.85L11.49 1.31C11.81 1.12 12.2 1.12 12.52 1.31L21.76 6.85C21.91 6.94 22 7.11 22 7.28V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V7.28C2 7.11 2.09 6.94 2.24 6.85ZM4 8.13V19H20V8.13L12 3.33L4 8.13ZM12.06 13.7L17.36 9.24L18.64 10.76L12.07 16.3L5.36 10.77L6.64 9.23L12.06 13.7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMailOpenLine;
