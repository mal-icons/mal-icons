import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-export",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscExport {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.5 3C1.78 3 2 3.22 2 3.5V11.5C2 11.78 1.78 12 1.5 12C1.22 12 1 11.78 1 11.5V3.5C1 3.22 1.22 3 1.5 3ZM10.15 3.15C10.34 2.95 10.66 2.95 10.85 3.15L14.85 7.15C15.05 7.34 15.05 7.66 14.85 7.85L10.85 11.85C10.66 12.05 10.34 12.05 10.15 11.85C9.95 11.66 9.95 11.34 10.15 11.15L13.29 8H4.5C4.22 8 4 7.78 4 7.5C4 7.22 4.22 7 4.5 7H13.29L10.15 3.85C9.95 3.66 9.95 3.34 10.15 3.15L10.15 3.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscExport;
