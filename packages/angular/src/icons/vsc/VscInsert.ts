import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-insert",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscInsert {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11 6H14C14.55 6 15 5.55 15 5V2C15 1.45 14.55 1 14 1H11C10.45 1 10 1.45 10 2V5C10 5.55 10.45 6 11 6ZM11 5V2H14V5H11Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11 14H14C14.55 14 15 13.55 15 13V10C15 9.45 14.55 9 14 9H11C10.45 9 10 9.45 10 10V13C10 13.55 10.45 14 11 14ZM11 13V10H14V13H11Z"}],["path",{"d":"M7.85 5.15L9.85 7.15L9.86 7.15C10.05 7.34 10.05 7.66 9.86 7.85L7.86 9.85C7.76 9.95 7.63 10 7.5 10C7.37 10 7.25 9.95 7.15 9.85C6.95 9.66 6.95 9.34 7.15 9.15L8.29 8H4V9C4 9.55 3.55 10 3 10H1C0.72 10 0.5 9.78 0.5 9.5C0.5 9.22 0.72 9 1 9H3V6H1C0.72 6 0.5 5.78 0.5 5.5C0.5 5.22 0.72 5 1 5H3C3.55 5 4 5.45 4 6V7H8.29L7.15 5.85C6.95 5.66 6.95 5.34 7.15 5.15C7.34 4.95 7.66 4.95 7.85 5.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscInsert;
