import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-onlyoffice",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOnlyoffice {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.5 11.720.63 7.16c-0.84-0.4-0.84-1.01 0-1.38l9.87-4.56c0.84-0.4 2.19-0.4 3 0l9.87 4.56c0.840.40.84 1.01 0 1.38l-9.87 4.56c-0.840.36-2.190.36-3 0zm0 5.47-9.87-4.56c-0.84-0.4-0.84-1.01 0-1.38l3.36-1.56 6.51 3.01c0.840.4 2.190.4 3 0l6.51-3.01 3.36 1.56c0.840.40.84 1.01 0 1.38l-9.87 4.56c-0.840.4-2.190.4-3 0zm0 0-9.87-4.56c-0.84-0.4-0.84-1.01 0-1.38l3.36-1.56 6.51 3.01c0.840.4 2.190.4 3 0l6.51-3.01 3.36 1.56c0.840.40.84 1.01 0 1.38l-9.87 4.56c-0.840.4-2.190.4-3 0zm0 5.61-9.87-4.56c-0.84-0.4-0.84-1.01 0-1.38l3.44-1.59 6.4 2.97c0.840.4 2.190.4 3 0l6.4-2.97 3.44 1.59c0.840.40.84 1.01 0 1.38l-9.87 4.56c-0.770.36-2.120.36-2.92 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOnlyoffice;
