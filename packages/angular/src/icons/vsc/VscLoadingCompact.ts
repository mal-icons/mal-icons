import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-loading-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscLoadingCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 6.5C11.22 6.5 11 6.28 11 6C11 3.24 8.76 1 6 1C3.24 1 1 3.24 1 6C1 6.28 0.78 6.5 0.5 6.5C0.22 6.5 0 6.28 0 6C0 2.69 2.69 0 6 0C9.31 0 12 2.69 12 6C12 6.28 11.78 6.5 11.5 6.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscLoadingCompact;
