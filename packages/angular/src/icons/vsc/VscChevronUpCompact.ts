import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-chevron-up-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscChevronUpCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.5 8C9.37 8 9.24 7.95 9.15 7.85L6 4.7L2.85 7.85C2.65 8.05 2.34 8.05 2.14 7.85C1.94 7.65 1.94 7.34 2.14 7.14L5.64 3.64C5.84 3.44 6.15 3.44 6.35 3.64L9.85 7.14C10.05 7.34 10.05 7.65 9.85 7.85C9.75 7.95 9.62 8 9.5 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscChevronUpCompact;
