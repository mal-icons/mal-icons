import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-print-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdPrintDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.41 1.6 0 3.01 5 8c-1.66 0-3 1.34-3 3v6h4v4h12l2.95 2.96 1.41-1.41L1.41 1.6zM6 15H4v-4c0-0.550.45-1 1-1h2l3 3H6v2zm2 4v-4h4l4 4H8zM8 5h8v3h-5.34l2 2H19c0.55 0 1 0.45 1 1v4l-2 0.01V13h-2.34l4 4H22v-6c0-1.66-1.34-3-3-3h-1V3H6v0.36l2 2V5z"}],["circle",{"cx":"18","cy":"11.51","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdPrintDisabled;
