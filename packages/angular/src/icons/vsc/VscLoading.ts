import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-loading",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscLoading {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.5 8.5C13.22 8.5 13 8.28 13 8C13 5.24 10.76 3 8 3C5.24 3 3 5.24 3 8C3 8.28 2.78 8.5 2.5 8.5C2.22 8.5 2 8.28 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 8.28 13.78 8.5 13.5 8.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscLoading;
