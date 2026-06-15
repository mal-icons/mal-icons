import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-chevron-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscChevronUp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.15 9.85C3.34 10.05 3.66 10.05 3.85 9.85L8 5.71L12.15 9.85C12.34 10.05 12.66 10.05 12.85 9.85C13.05 9.66 13.05 9.34 12.85 9.15L8.35 4.65C8.16 4.45 7.84 4.45 7.65 4.65L3.15 9.15C2.95 9.34 2.95 9.66 3.15 9.85Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscChevronUp;
