import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-layout-panel-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscLayoutPanelOff {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.5 1H3.5C2.12 1 1 2.12 1 3.5V12.5C1 13.88 2.12 15 3.5 15H12.5C13.88 15 15 13.88 15 12.5V3.5C15 2.12 13.88 1 12.5 1ZM14 12.5C14 13.33 13.33 14 12.5 14H3.5C2.67 14 2 13.33 2 12.5V11H14V12.5ZM14 10H2V3.5C2 2.67 2.67 2 3.5 2H12.5C13.33 2 14 2.67 14 3.5V10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscLayoutPanelOff;
